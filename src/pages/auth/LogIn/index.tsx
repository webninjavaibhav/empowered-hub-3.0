import { useOktaAuth } from "@okta/okta-react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import Loader from "../../../components/Loading/Loader";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const { authState, oktaAuth } = useOktaAuth();

  const login = async () => {
    oktaAuth.signInWithRedirect({ originalUri: "/" });
  };

  useEffect(() => {
    if (!authState || !authState.isAuthenticated) {
      login();
    } else {
      oktaAuth
        .getUser()
        .then(() => {
          navigate("/");
        })
        .catch(() => {
          toast.error("Something went wrong !");
        });
    }
  }, [authState, oktaAuth]); // Update if authState changes

  return <Loader />;
}

export default Login;
