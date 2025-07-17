import React, { CSSProperties } from "react";
import * as Icons from "react-icons/fa";
export type IconName = keyof typeof IconMaps;
export type IconSize = keyof typeof sizeMap;

interface IconProps extends React.HTMLAttributes<HTMLElement> {
  name: IconName;
  size?: IconSize;
  color?: string;
  style?: CSSProperties;
}
const IconMaps = {
  database: <Icons.FaDatabase />,
  monitoring: <Icons.FaHeartbeat />,
  settings: <Icons.FaCog />,
  plus: <Icons.FaPlus />,
  trash: <Icons.FaTrash />,
  edit: <Icons.FaPen />,
  caretDown: <Icons.FaCaretDown />,
  chevronLeft: <Icons.FaChevronLeft />,
  chevronRight: <Icons.FaChevronRight />,
};

const sizeMap = {
  xs: 12,
  s: 18,
  m: 25,
};
const Icon = ({
  name,
  size = "xs",
  color = "#A1A1A1",
  ...props
}: IconProps) => {
  const iconSize = `${sizeMap[size]}`;
  const IconComponent = IconMaps[name];

  if (!IconComponent) return null;

  return React.cloneElement(IconComponent, {
    style: { height: iconSize },
    color,
    ...props,
  });
};

export default Icon;
