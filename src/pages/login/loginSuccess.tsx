import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginSuccessMessage from "../../components/login";

function LoginComplete() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(redirectTimer);
  }, [navigate]);

  return <LoginSuccessMessage />;
}

export default LoginComplete;
