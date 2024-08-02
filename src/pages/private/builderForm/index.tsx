import clsx from "clsx";
import { useState } from "react";
import Stepper from "../../../components/Stepper";
import CustomButton from "../../../components/Button";
import Images from "../../../assets";
import useBuilder from "./hooks/useBuilder";
import { steps } from "./constants";

interface BuilderProp {
  handleClose: () => void;
}

interface Option {
  label: string;
  subLabel?: string;
  icon?: string;
  type: string;
}

const BuilderForm: React.FC<BuilderProp> = ({ handleClose }) => {
  const { step, data, handleNext, handlePrev } = useBuilder();

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const handleOptionChange = (option: Option) => {
    setSelectedOption(option.label);
  };

  return (
    <div>
      <div className="text-center p-8">
        <div className="text-h5 font-h5">{data?.question}</div>
        <div className="text-carbon">{data?.description}</div>
      </div>

      <div className="grid md:grid-cols-[0.9fr_2.5fr] pt-0 p-8 gap-20">
        <div className="hidden md:block">
          <Stepper
            steps={steps}
            currentStep={Number(step)}
          />
        </div>
        <div className="flex flex-col gap-4">
          {data &&
            data?.options.map((option: any, index: number) => (
              <div
                key={index}
                className="flex items-center gap-4"
              >
                <input
                  aria-label="some"
                  type="checkbox"
                  checked={option.label === selectedOption}
                  onChange={() => handleOptionChange(option)}
                />
                <div className="flex justify-between w-full">
                  <div>
                    <p className="text-base font-medium">{option.label}</p>
                    {option.subLabel && (
                      <p className="text-sm text-carbon">{option.subLabel}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          <div
            className={clsx(
              !step ? "flex justify-end" : "flex justify-between"
            )}
          >
            {step ? (
              <CustomButton
                className="btn-secondary-outline me-2 max-w-[140px]"
                onClick={handlePrev}
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

            {step < 2 ? (
              <CustomButton
                iconRight={
                  <img
                    className="ms-4"
                    src={Images.nextIcon}
                    alt=">"
                  />
                }
                className="btn-secondary w-[120px] ms-2"
                onClick={handleNext}
                disabled={!selectedOption}
              >
                Next
              </CustomButton>
            ) : (
              <CustomButton
                iconRight={
                  <img
                    className="ms-4"
                    src={Images.nextIcon}
                    alt=">"
                  />
                }
                className="btn-secondary w-[120px] ms-2"
                onClick={handleClose}
                disabled={!selectedOption}
              >
                Submit
              </CustomButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderForm;
