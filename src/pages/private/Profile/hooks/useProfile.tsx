import { useEffect, useState } from "react";
import { END_POINTS } from "../../../../services/endpoints";
import { initialUserProfile, profileValidation } from "../constants";
import { useFormik } from "formik";

const useProfile = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const userId = localStorage.getItem("user_id");

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
          `${END_POINTS.OKTA_BASE_URL}api/v1/users/${userId}`,
          {
            method: "POST",
            body: JSON.stringify(formate),
            headers: {
              Authorization: `SSWS ${END_POINTS.OKTA_AUTH_TOKEN}`,
            },
          }
        );
        const data = await response.json();
        console.log("The data is", data);
      } catch (error) {
        console.log("Caught in error ", error);
      }
    },
    validationSchema: profileValidation,
  });

  const getUserProfile = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${END_POINTS.OKTA_BASE_URL}api/v1/users/${userId}`,
        {
          method: "GET",
          headers: {
            Authorization: `SSWS ${END_POINTS.OKTA_AUTH_TOKEN}`,
          },
        }
      );
      const parsedVal = await response.json();
      formik.setValues(parsedVal.profile);
    } catch (error) {
      console.log("Caught in error ", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return {
    formik,
    isLoading,
  };
};

export default useProfile;
