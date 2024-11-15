import { useState, useEffect } from "react";

// Reusable api hook for all different methods and endpoints as well as authorized and non-authorized endpoints

// autoFetch is used for api calls where there is content in the body to avoid immediate calls upon render

// TRequest and TResponse makes sure that user can have separate interfaces for payload and response

const useApi = <TRequest, TResponse>(endpoint: string, method: string = "GET", body: TRequest | null = null, requiresAuth: boolean = false, autoFetch: boolean = true) => {
  const [data, setData] = useState<TResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  //import base url and api key from .env file
  const apiUrl = import.meta.env.VITE_NOROFF_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  // Import token from redux
  const bearerToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!autoFetch && !body) return;

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
        const result: TResponse = await response.json();
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
  }, [endpoint, method, body, apiUrl, apiKey, requiresAuth, bearerToken, autoFetch]);

  return { data, error, loading };
};

export default useApi;
