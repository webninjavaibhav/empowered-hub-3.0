import React, { useState } from "react";
import BuilderForm from "./BuilderForm";
import { questions } from "./constants";

const Home: React.FC = () => {
  const [step, setStep] = useState(0);

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

  const present = questions[step];

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-fluorite to-topaz overflow-hidden">
      <h1 className="text-4xl text-white mb-8">Welcome to the Home Page</h1>

      {/* Modal container */}
      <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg flex p-[25px] w-[60%] overflow-auto">
          <BuilderForm
            step={step}
            question={present.question}
            description={present.description}
            options={present.options}
            rightItems={present.rightItems}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
