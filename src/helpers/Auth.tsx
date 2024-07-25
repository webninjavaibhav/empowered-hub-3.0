import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

const Auth = () => {
  const navigation = useNavigate();
  const isAuthorized = localStorage.getItem("user_id");

  useEffect(() => {
    if (!isAuthorized) {
      navigation("/login");
    }
  });

  return <Outlet />;
};

export default Auth;
