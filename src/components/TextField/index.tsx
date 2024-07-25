import "./style.css";
import clsx from "clsx";
import { useField } from "formik";
import React, { useState } from "react";

type TextInputProps = {
  id?: string;
  name: string;
  label: string;
  className?: string;
  rightIcon?: React.ReactNode;
  type?: "text" | "password" | "email" | "number" | undefined;
  handleIcon?: () => void;
};

const TextInput: React.FC<TextInputProps> = ({
  id,
  name,
  label,
  type,
  rightIcon = true,
  className,
  handleIcon,
  ...rest
}) => {
  const [field, meta] = useField(name);
  const [didFocus, setDidFocus] = useState<boolean>(false);

  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field?.value?.trim().length > 2) || meta.touched;

  return (
    <div className={`field ${clsx(className && className)}`}>
      <input
        {...rest}
        {...field}
        name={name}
        type={type}
        placeholder={`Enter ${label}`}
        onFocus={handleFocus}
        className={clsx(
          "w-full input",
          showFeedback ? (meta.error ? "invalid" : "valid") : ""
        )}
      />
      {rightIcon && (
        <div
          onClick={handleIcon}
          className="right-icon"
        >
          {rightIcon}
        </div>
      )}
      <span>{label}</span>
    </div>
  );
};

export default TextInput;
