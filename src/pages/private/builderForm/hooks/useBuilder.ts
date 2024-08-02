import { useEffect, useState } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { useNavigate } from "react-router-dom";

import { questions } from "../constants";

const useBuilder = () => {
    const navigation = useNavigate();
    const { authState } = useOktaAuth();
    const [step, setStep] = useState<number>(0);

    useEffect(() => {
        if (authState?.isAuthenticated === false) {
            navigation("/login");
        }
    }, [authState]);

    const handleNext = () => {
        if (step < questions.length - 1) {
            setStep(step + 1);
        }
    };

    const handlePrev = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    };

    return {
        step,
        data: questions[step],
        handleNext,
        handlePrev,
    };
};

export default useBuilder;
