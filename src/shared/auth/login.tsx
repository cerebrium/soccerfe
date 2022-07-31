import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./style/style.css";

const LoginButton: React.FC = (): JSX.Element => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="loginButton"
      onClick={(): Promise<void> => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;
