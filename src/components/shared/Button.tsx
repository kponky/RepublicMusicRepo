import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "solid" | "outline";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "outline",
  ...props
}) => {
  return (
    <button {...props} className={`btn-${variant}`}>
      {children}
    </button>
  );
};

export default Button;
