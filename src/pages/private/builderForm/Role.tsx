import { useState } from "react";
import CustomButton from "../../../components/Button";
import { selectRole } from "./constants";

interface RoleProps {
  handleRole: (role: string) => void;
}

const Role: React.FC<RoleProps> = ({ handleRole }) => {
  const [role, setRole] = useState<string>("");

  const handleSubmit = () => handleRole(role);

  return (
    <div>
      <div className="text-center p-8">
        <div className="text-h5 font-h5">{selectRole.question}</div>
        <div className="text-carbon">{selectRole.description}</div>
      </div>

      <div className="flex flex-col gap-6 p-1 md:p-8 pt-0">
        {selectRole.options.map((option, index) => (
          <div
            key={index}
            onClick={() => setRole(option.value)}
            className="flex items-center cursor-pointer"
          >
            <img
              className="w-8 h-8 mr-4"
              src={option.icon}
              alt="Icon"
            />
            <div className="flex justify-between w-full">
              <div>
                <p className="text-base font-medium">{option.label}</p>
                <p className="text-sm text-carbon">{option.subLabel}</p>
              </div>
              <div className="me-4">
                <input
                  value={option.label}
                  readOnly
                  checked={role === option.value}
                  aria-label="some"
                  type="radio"
                />
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-end">
          <CustomButton
            onClick={handleSubmit}
            className="btn-secondary w-[120px] ms-2"
          >
            Continue
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Role;
