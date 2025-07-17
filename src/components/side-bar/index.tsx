import React, { useState } from "react";
import Button from "../button";
import Body from "../body";
import Icon from "../icon";

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`top-0 left-0 h-full bg-white text-black transition-all duration-300 border-r border-primary ${
          open ? "w-64" : "w-8 overflow-hidden"
        }`}
        style={{ borderRightWidth: "1px", borderRightStyle: "solid" }}
      >
        {open && (
          <div className="flex flex-col p-4 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-[#ADABFF] rounded-lg flex items-center justify-center" />
              <h2 className="font-inter font-semibold">AirOps</h2>
            </div>
            <Button
              variant="primary"
              iconName="plus"
              iconSize="s"
              iconColor="black"
              iconPosition="right"
              className="mb-4"
              onClick={() => alert("Add new item")}
            >
              New
            </Button>
            <ul>
              <li className="mb-2 flex items-center gap-2 hover:bg-gray-100 rounded cursor-pointer">
                <Icon name="database" />
                <Body color="light">Data Name</Body>
              </li>
              <li className="mb-2 flex items-center gap-2 hover:bg-gray-100 rounded cursor-pointer">
                <Icon name="monitoring" />
                <Body color="light">Monitoring</Body>
              </li>
              <li className="mb-2 flex items-center gap-2 hover:bg-gray-100 rounded cursor-pointer">
                <Icon name="settings" />
                <Body color="light">Settings</Body>
              </li>
            </ul>
          </div>
        )}
      </aside>

      <Button
        variant="icon"
        iconName={open ? "chevronLeft" : "chevronRight"}
        iconSize="s"
        onClick={() => setOpen((prev) => !prev)}
        className={`relative top-4 left-[-12px] z-50 bg-blue-600 text-white rounded shadow`}
      />
    </div>
  );
};

export default Sidebar;
