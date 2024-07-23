import { Outlet, useNavigate } from "react-router";

const Auth = () => {
  const navigation = useNavigate();
  const isAuthorized = localStorage.getItem("user_id");

  if (isAuthorized) {
    return <Outlet />;
  } else {
    navigation("/login");
  }
};

export default Auth;
