import { useEffect, useState } from "react";
import { initialUserProfile, profileValidation } from "../constants";
import { useFormik } from "formik";
import toast from "react-hot-toast";

const useProfile = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const info = localStorage.getItem("okta-token-storage");
  const user = info && JSON.parse(info);
  const userId = user?.accessToken?.claims?.uid;

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
          `${import.meta.env.VITE_BACKEND_BASEURL}user/${userId}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formate),
          }
        );
        const data = await response.json();

        if (data) {
          localStorage.setItem("user", JSON.stringify(data.profile));
        }

        toast.success("Update user successfully");
      } catch (error) {
        toast.error("Something went wrong !");
      }
    },
    validationSchema: profileValidation,
  });

  const getUserProfile = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_BASEURL}user/${userId}`
      );
      const parsedVal = await response.json();

      Object.keys(parsedVal.profile).map((key) => {
        parsedVal.profile[key] =
          parsedVal.profile[key] === null ? "" : parsedVal.profile[key];
      });
      formik.setValues(parsedVal.profile);
    } catch (error) {
      toast.error("Something went wrong !");
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
