import { useEffect, useState } from "react";
import {
  initialSignUpState,
  quotes,
  signUpValidation,
  UserSignUpProps,
} from "../constants";
import { useFormik } from "formik";
import Images from "../../../../assets";
import { useRegisterUserMutation } from "../../../../services/oktaApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useOktaAuth } from "@okta/okta-react";

const useSignUp = () => {
  const navigate = useNavigate();
  const { authState, oktaAuth } = useOktaAuth();

  const [registerUser] = useRegisterUserMutation();

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const login = async () => {
    oktaAuth.signInWithRedirect({ originalUri: "/" });
  };

  const images = [Images.user, Images.user2, Images.user3, Images.user4];

  const formik = useFormik({
    initialValues: initialSignUpState,
    onSubmit: async (values) => {
      await handleSignUp(values);
    },
    validationSchema: signUpValidation,
  });

  const handleSignUp = async (values: UserSignUpProps) => {
    values["User_Role"] = "user";
    values["User_County"] = "state";
    values["User_Country"] = "united state";
    values["login"] = values.email;

    let f1 = { profile: { ...values } };

    setIsLoading(true);
    setError(null);

    try {
      const data = await registerUser(f1).unwrap();
      if (data?.errorCauses) {
        toast.error(data.errorCauses[0].errorSummary);
      }
      toast.success("Please check your email for activation link");
    } catch (err) {
      toast.error("Something went wrong !");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  useEffect(() => {
    if (authState && authState?.isAuthenticated) {
      oktaAuth
        .getUser()
        .then(() => {
          navigate("/");
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [authState, oktaAuth]);

  return {
    formik,
    isLoading,
    error,
    currentQuoteIndex,
    setCurrentQuoteIndex,
    quotes,
    images,
    authState,
    login,
  };
};

export default useSignUp;
