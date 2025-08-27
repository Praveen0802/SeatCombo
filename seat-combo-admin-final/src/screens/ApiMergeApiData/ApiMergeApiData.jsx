import React, { useState } from "react";
import { MergeActionSection } from "./sections/MergeActionSection";
import { MergeApiDataSection } from "./sections/MergeApiDataSection";
import { SecondaryMenuSection } from "../SecondaryMenuSection";

export const ApiMergeApiData = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
    const toggleCollapse = () => {
      setSidebarCollapsed(!sidebarCollapsed);
    };
  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="459:8694"
    >
      <div className="bg-colors-neutral-white w-full relative flex h-screen">
        <aside className="flex-shrink-0 h-full">
          <SecondaryMenuSection isCollapsed={sidebarCollapsed} toggleCollapse={toggleCollapse} />
        </aside>
        <main className="flex-1 flex flex-col h-full">
          <div className="flex-1">
            <MergeApiDataSection />
          </div>
          <div className="h-[7%] flex-shrink-0">
            <MergeActionSection />
          </div>
        </main>
      </div>
    </div>
  );
};
