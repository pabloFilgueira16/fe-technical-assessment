import React from "react";
import Icon from "../icon";
import type { IconName, IconSize } from "../icon";
import Body from "../body";

type ButtonProps = {
  variant: "icon" | "primary";
  iconName?: IconName;
  iconPosition?: "left" | "right";
  iconSize?: IconSize;
  iconColor?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  variant,
  iconName,
  iconSize,
  iconColor,
  iconPosition = "left",
  children,
  onClick,
  className = "",
  disabled = false,
}) => {
  const primaryVariantClasses =
    "rounded flex items-center justify-center transition-all duration-150 border border-primary px-4 py-2 gap-2 w-full";
  const variantClasses =
    variant === "primary"
      ? primaryVariantClasses
      : "bg-gray-200 rounded w-6 h-6 flex items-center justify-center transition-all duration-150 hover:bg-gray-300";
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  const icon = iconName ? (
    <Icon name={iconName} size={iconSize} color={iconColor} />
  ) : null;

  return (
    <button
      type="button"
      className={`${variantClasses} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && iconPosition === "left" && <span className="">{icon}</span>}
      {typeof children === "string" ? (
        <Body styleType="semi-bold">{children}</Body>
      ) : (
        children
      )}
      {icon && iconPosition === "right" && <span className="">{icon}</span>}
    </button>
  );
};

export default Button;
