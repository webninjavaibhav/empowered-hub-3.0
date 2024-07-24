import React from "react";
import BuilderForm from "./BuilderForm";
import { questions } from "./constants";
import Modal from "../../../components/Modal";
import useHome from "./hooks/useHome";

const Home: React.FC = () => {
  const { step, formModal, setFormModal, handleNext, handlePrev } = useHome();

  const present = questions[step];

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Modal
        autoClose={false}
        onClose={() => setFormModal(false)}
        isOpen={formModal}
      >
        <div className="bg-white rounded-lg flex overflow-auto w-[320px] md:w-[720px] lg:[1080px]">
          <BuilderForm
            step={step}
            maxStep={questions.length - 1}
            question={present.question}
            description={present.description}
            options={present.options}
            rightItems={present.rightItems}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        </div>
      </Modal>
    </div>
  );
};

export default Home;
