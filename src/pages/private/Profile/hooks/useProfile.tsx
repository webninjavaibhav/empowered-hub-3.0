import { useEffect, useState } from "react";
import { useFormik } from "formik";
import toast from "react-hot-toast";

import { initialUserProfile, profileValidation } from "../constants";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { updateProfile } from "../../../../redux/feature/user/profileSlice";

const useProfile = () => {
  const dispatch = useAppDispatch();
  const { user: userProfile, isLoading } = useAppSelector(
    (state) => state.profile
  );

  const [isUpating, setIsUpdating] = useState<boolean>(false);
  const contactId = userProfile?.Contact_ID__c;
  const token = localStorage.getItem("salesforceToken");

  const formik = useFormik({
    initialValues: initialUserProfile,
    onSubmit: async (values) => {
      setIsUpdating(true);

      const formate = {
        FirstName: values.FirstName,
        LastName: values.LastName,
        Email: values.Email,
      };
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_BASEURL}contact/update/${contactId}`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(formate),
          }
        );
        await response.json();
        const f1 = {
          FirstName: values.FirstName,
          LastName: values.LastName,
          Email: values.Email,
        };
        dispatch(updateProfile(f1));
        toast.success("Update user successfully");
      } catch (error) {
        toast.error("Something went wrong !");
      } finally {
        setIsUpdating(false);
      }
    },
    validationSchema: profileValidation,
  });

  useEffect(() => {
    if (userProfile?.Contact_ID__c) {
      formik.setValues({
        FirstName: userProfile?.FirstName,
        LastName: userProfile?.LastName.replaceAll("_0", ""),
        Email: userProfile?.Email,
      });
    }
  }, [userProfile]);

  return {
    user: userProfile,
    formik,
    isLoading,
    isUpating,
  };
};

export default useProfile;
