import { useState } from "react";
import useAuth from "../../../../helpers/useAuth";

//comment for now
const useHome = () => {
  const {
    userRole,
    // isNewUser,
    handleSetUser,
  } = useAuth();

  const [formModal, setFormModal] = useState<boolean>(
    false
    // isNewUser != "false" ? true : false
  );

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
