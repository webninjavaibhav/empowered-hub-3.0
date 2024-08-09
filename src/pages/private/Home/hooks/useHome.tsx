import { useState } from "react";
import useAuth from "../../../../helpers/useAuth";
import { useAppDispatch } from "../../../../redux/hooks";
import { updateProfile } from "../../../../redux/feature/user/profileSlice";
import toast from "react-hot-toast";

const useHome = () => {
  const {
    userRole,
    profileBuilderStep,
    handleSetUser,
    navigation,
    userProfile,
  } = useAuth();
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("salesforceToken");
  const [formModal, setFormModal] = useState<number | string>(
    profileBuilderStep
  );

  const handleClose = async () => {
    const formate = {
      FirstName: userProfile.FirstName,
      LastName: userProfile?.LastName.split("_")?.[0],
      Email: userProfile.Email,
    };
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_BASEURL}contact/update/${
          userProfile?.Contact_ID__c
        }`,
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
        LastName: formate.LastName,
      };
      dispatch(updateProfile(f1));
    } catch (error) {
      toast.error("Internal server error: ");
    } finally {
      setFormModal("completed");
      navigation("/");
    }
  };

  return {
    userRole,
    formModal,
    handleClose,
    handleSetUser,
  };
};

export default useHome;
