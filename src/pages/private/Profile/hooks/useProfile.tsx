import { useEffect } from "react";
import { initialUserProfile, profileValidation } from "../constants";
import { useFormik } from "formik";
import {
  useGetUserInfoQuery,
  useUpdateUserProfileMutation,
} from "../../../../services/oktaApi";
import toast from "react-hot-toast";

interface userProfile {
  [key: string]: any; // Adjust this as per the actual profile structure
}

const useProfile = () => {
  const info = localStorage.getItem("okta-token-storage");
  const user = info && JSON.parse(info);
  const userId = user.accessToken?.claims?.uid;

  const { data: userData, isLoading } = useGetUserInfoQuery(userId, {
    skip: !userId,
  });

  const [updateUser] = useUpdateUserProfileMutation();

  const formik = useFormik({
    initialValues: initialUserProfile,
    onSubmit: async (values) => {
      const formate = {
        userId: userId,
        data: {
          profile: {
            ...values,
          },
        },
      };
      try {
        await updateUser(formate).unwrap();
        toast.success("Update user successfully");
      } catch (error) {
        toast.error("Something went wrong !");
      }
    },
    validationSchema: profileValidation,
  });

  const getUserProfile = async () => {
    try {
      const user: userProfile = userData;
      if (user) {
        Object.keys(user?.profile).map((key) => {
          formik.setFieldValue(key, user?.profile ? user.profile[key] : "");
        });
      }
    } catch (error) {
      console.log("Caught in error ", error);
    }
  };

  useEffect(() => {
    userData && getUserProfile();
  }, [userData]);

  return {
    formik,
    isLoading,
  };
};

export default useProfile;
