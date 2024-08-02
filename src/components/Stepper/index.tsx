import clsx from "clsx";
import { StepperProp } from "../../pages/private/builderForm/constants";

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
                currentStep < index + 1 ? "border-sapphire" : ""
              )}
            >
              {currentStep < index + 1 ? (
                index + 1
              ) : (
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="17.5"
                    cy="17.5"
                    r="17"
                    fill="#2FC800"
                    stroke="#2FC800"
                  />
                  <path
                    d="M14.7718 23.7713L14.7718 23.7714C14.7142 23.829 14.6459 23.8747 14.5706 23.9059C14.4954 23.9371 14.4148 23.9531 14.3333 23.9531C14.2519 23.9531 14.1712 23.9371 14.096 23.9059C14.0207 23.8747 13.9524 23.829 13.8948 23.7714L13.8948 23.7713L9.2285 19.105C9.11221 18.9887 9.04688 18.831 9.04688 18.6665C9.04688 18.5021 9.11221 18.3443 9.2285 18.2281C9.3448 18.1118 9.50252 18.0464 9.66699 18.0464C9.83145 18.0464 9.98918 18.1118 10.1055 18.2281C10.1055 18.2281 10.1055 18.2281 10.1055 18.2281L14.3002 22.4236L14.3333 22.4567L14.3665 22.4236L24.5607 12.2285C24.677 12.1122 24.8347 12.0469 24.9992 12.0469C25.1636 12.0469 25.3214 12.1122 25.4377 12.2285C25.554 12.3448 25.6193 12.5025 25.6193 12.667C25.6193 12.8315 25.554 12.9892 25.4377 13.1055L14.7718 23.7713Z"
                    fill="white"
                    stroke="#2FC800"
                    stroke-width="0.09375"
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
