import React, { useState } from "react";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { SecondaryMenuSection } from "../SecondaryMenuSection";


export const AllTeams = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

	const toggleCollapse = () => {
		setSidebarCollapsed(!sidebarCollapsed);
	};
  return (
    <div className="flex w-full min-h-screen bg-white overflow-hidden" data-model-id="13:1935">
			<div className={`${sidebarCollapsed ? 'w-[80px]' : 'w-[272px]'} flex-shrink-0 transition-all duration-300`}>
				<SecondaryMenuSection isCollapsed={sidebarCollapsed} toggleCollapse={toggleCollapse} />
			</div>
			<div className="flex-1 overflow-hidden">
        <MainContentSection />
      </div>
    </div>
  );
};
