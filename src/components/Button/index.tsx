import "./styles.css";
import clsx from "clsx";
import React from "react";
import Loader from "../Loading/Loader";

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  onClick,
  disabled = false,
  isLoading = false,
  iconLeft,
  iconRight,
  className,
  type = "button",
  ...rest
}) => {
  return (
    <>
      <button
        {...rest}
        type={type}
        onClick={onClick}
        className={clsx("btn rounded-sm px-4", className)}
        disabled={disabled || isLoading}
      >
        {iconLeft && <span>{iconLeft}</span>}
        {children}
        {isLoading && <Loader />}
        {iconRight && <span>{iconRight}</span>}
      </button>
    </>
  );
};

export default CustomButton;
