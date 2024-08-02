import clsx from "clsx";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  className?: string;
  autoClose: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  autoClose,
  className,
}) => {
  const overlayClass = isOpen
    ? "fixed inset-0 bg-black opacity-50  "
    : "hidden";

  const modalClass = isOpen
    ? clsx(
        "max-h-[100vh] z-[1000] overflow-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg " +
          className
      )
    : "hidden";

  if (!isOpen) return null;

  return (
    <>
      <div
        className={overlayClass}
        onClick={() => autoClose && onClose()}
      ></div>
      <div className={modalClass}>{children}</div>
    </>
  );
};

export default Modal;
