import React, { useState } from "react";
import { ActionFooterSection } from "./sections/ActionFooterSection/ActionFooterSection";
import { SideMenuSection } from "./sections/SideMenuSection/SideMenuSection";
import { TeamDetailsSection } from "./sections/TeamDetailsSection/TeamDetailsSection";
import { SecondaryMenuSection } from "../SecondaryMenuSection";

export const TeamAddTeam = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };
  return (
    <div
      className="flex min-h-screen items-start relative bg-colors-neutral-white w-full"
      data-model-id="32:1661"
    >
      <div className="bg-colors-neutral-white w-full max-w-[1440px] flex flex-col min-h-screen overflow-hidden">
        <div className="flex flex-1">
          <SecondaryMenuSection isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
          <div className="flex flex-col flex-1">
            <TeamDetailsSection />
            <ActionFooterSection />
          </div>
        </div>
      </div>
    </div>
  );
};
