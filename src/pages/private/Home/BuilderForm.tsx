import React, { useState } from "react";
import CustomButton from "../../../components/Button";
import Images from "../../../assets";
import { steps } from "./constants";
import Stepper from "../../../components/Stepper";
import clsx from "clsx";

interface Option {
  description: string;
  subDescription?: string;
  icon?: string;
  type: string;
}

interface RightItems {
  title: string;
  img: string;
  description?: string;
  header?: string;
}

interface QuestionProps {
  step: number | string;
  question: string;
  description: string;
  options: Option[];
  rightItems: RightItems;
  onNext: () => void;
  onPrev: () => void;
}

const BuilderForm: React.FC<QuestionProps> = ({
  step,
  question,
  description,
  options,
  onNext,
  onPrev,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (option: Option) => {
    setSelectedOption(option.description);
  };

  return (
    <>
      <div className="w-1/3 bg-gray-200 pt-4 flex justify-center ounded-b-lg">
        <Stepper
          steps={steps}
          currentStep={Number(step)}
        />
      </div>
      <div className="w-2/3 m-4 flex flex-col justify-between">
        <div>
          <div className="mb-4 text-center">
            <div className="text-h5 font-h5">{question}</div>
            <div className="text-carbon">{description}</div>
          </div>
          {options.map((option, index) => (
            <div
              key={index}
              className="flex items-center mb-[16px]"
            >
              {option.icon ? (
                <img
                  className="w-8 h-8 mr-4"
                  src={option.icon}
                  alt="Icon"
                />
              ) : (
                <input
                  aria-label="some"
                  type="checkbox"
                  checked={option.description === selectedOption}
                  onChange={() => handleOptionChange(option)}
                />
              )}
              <div className="flex justify-between w-full">
                <div>
                  <p className="text-base font-medium">{option.description}</p>
                  {option.subDescription && (
                    <p className="text-sm text-carbon">
                      {option.subDescription}
                    </p>
                  )}
                </div>
                <div className="me-4">
                  {option?.icon && (
                    <input
                      aria-label="some"
                      type="radio"
                      checked={option.description === selectedOption}
                      onChange={() => handleOptionChange(option)}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className={clsx(
            "flex me-4",
            step ? "justify-between" : "justify-end"
          )}
        >
          {step ? (
            <CustomButton
              className="btn-secondary-outline me-2 w-[140px]"
              onClick={onPrev}
              iconLeft={
                <img
                  className="me-4"
                  src={Images.prevIcon}
                  alt="<"
                />
              }
              disabled={false}
            >
              Previous
            </CustomButton>
          ) : null}

          <CustomButton
            iconRight={
              <img
                className="ms-4"
                src={Images.nextIcon}
                alt=">"
              />
            }
            className="btn-secondary w-[120px] ms-2"
            onClick={onNext}
            disabled={!selectedOption}
          >
            Next
          </CustomButton>
        </div>
      </div>
    </>
  );
};

export default BuilderForm;
