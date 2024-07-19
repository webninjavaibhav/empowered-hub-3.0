import React from "react";

interface CommonTypographyProps {
  children: React.ReactNode;
  className?: string;
}

const Text: React.FC<CommonTypographyProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default Text;
