import React from "react";
import Icon from "../icon";
import type { IconName, IconSize } from "../icon";

type ButtonProps = {
  variant: "icon" | "primary";
  iconName?: IconName;
  iconPosition?: "left" | "right";
  iconSize?: IconSize;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  variant,
  iconName,
  iconSize,
  iconPosition = "left",
  children,
  onClick,
  className = "",
  disabled = false,
}) => {
  const variantClasses =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-500"
      : "bg-gray-200 rounded w-6 h-6 flex items-center justify-center transition-all duration-150 hover:bg-gray-300";
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  const icon = iconName ? <Icon name={iconName} size={iconSize} /> : null;

  return (
    <button
      type="button"
      className={`${variantClasses} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && iconPosition === "left" && <span className="">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="">{icon}</span>}
    </button>
  );
};

export default Button;
