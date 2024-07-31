import React from "react";
import { questions } from "./constants";
import Modal from "../../../components/Modal";
import useHome from "./hooks/useHome";
import BuilderForm from "./builderForm";
import Navbar from "../../../layout/Navbar";

const Home: React.FC = () => {
  const { step, formModal, setFormModal, handleNext, handlePrev } = useHome();

  const present = questions[step];
  return (
    <div className=" bg-white h-[100vh]">
      <Navbar />

      <div className="w-screen h-screen overflow-hidden">
        <div className="text-center p-10 font-h1 text-h3">
          Hub 3.0 Dashboard
        </div>

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
              onNext={handleNext}
              onPrev={handlePrev}
            />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Home;
