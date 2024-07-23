import clsx from "clsx";
import { StepperProp } from "../../pages/private/Home/constants";

const Stepper = ({
  steps,
  currentStep,
}: {
  steps: StepperProp[];
  currentStep: number;
}) => {
  const stepLength = steps.length - 1;

  return (
    <ol className="relative">
      {steps.map((step, index) => (
        <li
          key={index}
          className={clsx(
            "flex",
            stepLength === index ? "" : "pb-16 border-e border-topaz"
          )}
        >
          <div className="me-6 text-end w-full">
            <div className="font-button">{step.title}</div>
            <div className=" text-filter-text">{step.description}</div>
          </div>
          {currentStep === index ? (
            <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -end-4 bg-topaz text-white">
              {index + 1}
            </span>
          ) : (
            <span
              className={clsx(
                "absolute flex items-center justify-center w-8 h-8 rounded-full -end-4 border bg-white",
                currentStep < index + 1 ? "border-black" : "border-topaz"
              )}
            >
              {currentStep < index + 1 ? (
                index + 1
              ) : (
                <svg
                  className="w-3.5 h-3.5 text-topaz"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
              )}
            </span>
          )}
        </li>
      ))}
    </ol>
  );
};

export default Stepper;
