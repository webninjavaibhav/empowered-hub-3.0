import { useState } from "react";
import { questions } from "../constants";

const useHome = () => {
  const [step, setStep] = useState(0);
  const [formModal, setFormModal] = useState(false);

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setFormModal(false);
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return {
    step,
    formModal,
    setFormModal,
    handleNext,
    handlePrev,
  };
};

export default useHome;
