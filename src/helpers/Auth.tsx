import { useOktaAuth } from "@okta/okta-react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

const Auth = () => {
  const navigation = useNavigate();
  const { authState } = useOktaAuth();

  useEffect(() => {
    if (authState?.isAuthenticated === false) {
      navigation("/signup");
    } else if (authState?.isAuthenticated) {
      navigation("/");
    }
  }, [authState]);

  return <Outlet />;
};

export default Auth;
