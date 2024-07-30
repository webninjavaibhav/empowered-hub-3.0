import { useEffect, useState } from "react";
import { questions } from "../constants";
import { useOktaAuth } from "@okta/okta-react";
import { useNavigate, useSearchParams } from "react-router-dom";

const useHome = () => {
  const navigation = useNavigate();
  const { authState } = useOktaAuth();
  const [searchParams] = useSearchParams();

  const profileBuilder = searchParams.get("profilebuilder");

  const [step, setStep] = useState<number>(0);
  const [formModal, setFormModal] = useState<boolean>(
    profileBuilder ? true : false
  );

  useEffect(() => {
    if (authState?.isAuthenticated === false) {
      navigation("/login");
    }
  }, [authState]);

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
    profileBuilder,
  };
};

export default useHome;
