import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Reusable hook for redirecting to homepage after a delay. Used for login and registration.

const useRedirectTimer = (path: string, delay: number) => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate(path);
    }, delay);

    return () => clearTimeout(redirectTimer);
  }, [navigate, path, delay]);
};

export default useRedirectTimer;
