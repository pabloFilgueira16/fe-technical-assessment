import React from "react";

type FontVariant = "xs" | "sm" | "md" | "lg";
type FontStyle = "semi-bold" | "medium" | "regular";
type Color = "light" | "medium" | "black";

interface FontProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: FontVariant;
  styleType?: FontStyle;
  color?: Color;
  children: React.ReactNode;
}

const variantClasses: Record<FontVariant, string> = {
  xs: "text-[12px]",
  sm: "text-[13px]",
  md: "text-[14px]",
  lg: "text-[18px]",
};

const colorClasses: Record<Color, string> = {
  light: "text-[#868686]",
  medium: "text-[#565656]",
  black: "text-[#09090B]",
};

const styleClasses: Record<FontStyle, string> = {
  "semi-bold": "font-semibold",
  medium: "font-medium",
  regular: "font-normal",
};

const Body: React.FC<FontProps> = ({
  variant = "md",
  styleType = "regular",
  color = "black",
  children,
  className,
  ...rest
}) => (
  <p
    className={[
      variantClasses[variant],
      styleClasses[styleType],
      colorClasses[color],
      className,
    ].join(" ")}
    {...rest}
  >
    {children}
  </p>
);

export default Body;
