import React, { useState } from "react";
import { ActionFooterSection } from "./sections/ActionFooterSection";
import { StadiumSettingsSection } from "./sections/StadiumSettingsSection/StadiumSettingsSection";
import { SecondaryMenuSection } from "../SecondaryMenuSection";

export const Stadiums = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
    
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="462:43222"
    >
      <div className="bg-colors-neutral-white w-full max-w-[1440px] relative flex flex-row">
        <div className="flex-none">
          <SecondaryMenuSection isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex-grow">
            <StadiumSettingsSection />
          </div>
          <div className="flex-none">
            <ActionFooterSection />
          </div>
        </div>
      </div>
    </div>
  );
};
