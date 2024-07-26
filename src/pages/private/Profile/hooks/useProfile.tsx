import { useEffect, useState } from "react";
import { initialUserProfile, profileValidation } from "../constants";
import { useFormik } from "formik";

const useProfile = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const info = localStorage.getItem("okta-token-storage");
  const user = info && JSON.parse(info);
  const userId = user.accessToken?.claims?.uid;

  const formik = useFormik({
    initialValues: initialUserProfile,
    onSubmit: async (values) => {
      const formate = {
        profile: {
          ...values,
        },
      };
      try {
        const response = await fetch(
          `${import.meta.env.VITE_OKTA_BASE_URL}/api/v1/users/${userId}`,
          {
            method: "POST",
            body: JSON.stringify(formate),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `SSWS ${import.meta.env.VITE_OKTA_AUTH_TOKEN}`,
            },
          }
        );
        await response.json();
        alert("Update user successfully");
      } catch (error) {
        alert("Something went wrong !");
      }
    },
    validationSchema: profileValidation,
  });

  const getUserProfile = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_OKTA_BASE_URL}/api/v1/users/${userId}`,
        {
          method: "GET",
          headers: {
            credentials: "include",
            Authorization: `SSWS ${import.meta.env.VITE_OKTA_AUTH_TOKEN}`,
          },
        }
      );
      const parsedVal = await response.json();

      Object.keys(parsedVal.profile).map((key) => {
        parsedVal.profile[key] =
          parsedVal.profile[key] === null ? "" : parsedVal.profile[key];
      });
      formik.setValues(parsedVal.profile);
    } catch (error) {
      console.log("Caught in error ", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    userId && getUserProfile();
  }, [userId]);

  return {
    formik,
    isLoading,
  };
};

export default useProfile;
