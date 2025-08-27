import React, { useState } from "react";
import { ActionFooterSection } from "./sections/ActionFooterSection";
import { StadiumSettingsSection } from "./sections/StadiumSettingsSection";
import { SecondaryMenuSection } from "../SecondaryMenuSection";

export const StadiumZone = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
      
    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };
  return (
    <main className="bg-white flex flex-row justify-center w-full">
      <div className="bg-colors-neutral-white w-full max-w-[1440px] relative flex">
        <aside className="w-[272px] flex-shrink-0">
          <SecondaryMenuSection isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
        </aside>
        <div className="flex-1 flex flex-col">
          <section className="flex-grow">
            <StadiumSettingsSection />
          </section>
          <footer>
            <ActionFooterSection />
          </footer>
        </div>
      </div>
    </main>
  );
};
