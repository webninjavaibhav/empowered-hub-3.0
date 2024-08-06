import { useState } from "react";
import useAuth from "../../../../helpers/useAuth";

//comment for now
const useHome = () => {
  const { userRole, isNewUser, handleSetUser } = useAuth();

  // comment for now
  // const [formModal, setFormModal] = useState<boolean>(isNewUser != "false" ? true : false
  const [formModal, setFormModal] = useState<boolean>(isNewUser ? true : false);

  const handleClose = () => {
    setFormModal(false);
    localStorage.setItem("isNewUser", "false");
  };

  return {
    userRole,
    formModal,
    handleClose,
    handleSetUser,
  };
};

export default useHome;
