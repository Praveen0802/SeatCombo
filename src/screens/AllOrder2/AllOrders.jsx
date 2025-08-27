import React, { useState } from "react";
import { OrderDetailsSection } from "./sections/OrderDetailsSection/OrderDetailsSection";
import { SecondaryMenuSection } from "../SecondaryMenuSection";

export const AllOrdersTwo = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleCollapse = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };
  return (
    <div
      className="flex min-h-screen items-start relative bg-colors-neutral-white"
      data-model-id="280:12587"
    >
		<div className={`${sidebarCollapsed ? 'w-[80px]' : 'w-[272px]'} flex-shrink-0 transition-all duration-300`}>
			<SecondaryMenuSection isCollapsed={sidebarCollapsed} toggleCollapse={toggleCollapse} />
		</div>
		
			<OrderDetailsSection />
		
	</div>
  );
};
