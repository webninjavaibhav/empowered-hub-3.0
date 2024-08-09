import { useState } from "react";
import useAuth from "../../../../helpers/useAuth";
const useHome = () => {
  const { userRole, profileBuilderStep, handleSetUser, navigation } = useAuth();
  const [formModal, setFormModal] = useState<number | string>(
    profileBuilderStep
  );

  const handleClose = () => {
    setFormModal("completed");
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
