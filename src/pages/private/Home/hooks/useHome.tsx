import { useState } from "react";
import useAuth from "../../../../helpers/useAuth";

//comment for now
const useHome = () => {
  const { userRole, isNewUser, handleSetUser, navigation } = useAuth();

  // comment for now
  const [formModal, setFormModal] = useState<boolean>(
    isNewUser === "true" ? true : false
  );

  console.log(formModal, " isNewUser");

  const handleClose = () => {
    localStorage.setItem("isNewUser", "false");
    setFormModal(false);
    navigation("/");
  };

  return {
    userRole,
    formModal,
    handleClose,
    handleSetUser,
  };
};

export default useHome;
