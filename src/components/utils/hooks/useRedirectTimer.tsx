import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Reusable hook for redirecting to next page after a delay. Used for several operations, such as logging in

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
