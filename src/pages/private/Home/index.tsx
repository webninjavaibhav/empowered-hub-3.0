import React from "react";
import Modal from "../../../components/Modal";

import useHome from "./hooks/useHome";

import Role from "../builderForm/Role";
import BuilderForm from "../builderForm";

const Home: React.FC = () => {
  const { formModal, handleClose, userRole, handleSetUser } = useHome();

  return (
    <div className="">
      <div className="text-center font-h1 text-h3 p-10">Welcome to HUB 3.0</div>

      <Modal
        autoClose={false}
        onClose={handleClose}
        isOpen={formModal}
        className="w-full md:w-4/5 xl:w-2/3"
      >
        <div>
          {userRole ? (
            <BuilderForm handleClose={handleClose} />
          ) : (
            <Role handleRole={handleSetUser} />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Home;
