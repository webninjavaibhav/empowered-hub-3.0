import { useEffect, useState } from "react";
import {
  initialSignUpState,
  quotes,
  signUpValidation,
  UserSignUpProps,
} from "../constants";
import { useFormik } from "formik";
import Images from "../../../../assets";
import { useOktaAuth } from "@okta/okta-react";
import toast from "react-hot-toast";

const useSignUp = () => {
  const { authState, oktaAuth } = useOktaAuth();

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const images = [Images.user, Images.user2, Images.user3, Images.user4];

  const login = async () => {
    oktaAuth.signInWithRedirect({ originalUri: "/" });
  };

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
      const response = await fetch(
        `${import.meta.env.VITE_OKTA_BASE_URL}api/v1/users`,
        {
          method: "POST",
          body: JSON.stringify(f1),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `SSWS ${import.meta.env.VITE_OKTA_AUTH_TOKEN}`,
          },
        }
      );
      const data = await response.json();
      if (data?.errorCauses) {
        toast.error(data.errorCauses[0].errorSummary);
      }
      toast.success("Please check your email for activation link");
    } catch (error) {
      setError(`Error : ${JSON.stringify(error)}`);
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

  return {
    formik,
    isLoading,
    error,
    currentQuoteIndex,
    setCurrentQuoteIndex,
    quotes,
    images,
    login,
    authState,
  };
};

export default useSignUp;
