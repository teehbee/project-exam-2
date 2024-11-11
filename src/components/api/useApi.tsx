import { useState, useEffect } from "react";

// Reusable api hook for all different methods and endpoints as well as authorized and non-authorized endpoints

const useApi = <T,>(endpoint: string, method: string = "GET", body: T | null = null, requiresAuth: boolean = false) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const apiUrl = import.meta.env.VITE_NOROFF_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  const bearerToken = localStorage.getItem("bearerToken");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      const options: RequestInit = {
        method,
        headers: {
          "Content-Type": "application/json",
          "X-Noroff-API-Key": apiKey,
          ...(requiresAuth && bearerToken && { Authorization: `Bearer ${bearerToken}` }),
        },
        ...(body && { body: JSON.stringify(body) }),
      };

      try {
        const response = await fetch(`${apiUrl}${endpoint}`, options);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result: T = await response.json();
        setData(result);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, method, body, apiUrl, apiKey, requiresAuth, bearerToken]);

  return { data, error, loading }; // Return an object
};

export default useApi;
