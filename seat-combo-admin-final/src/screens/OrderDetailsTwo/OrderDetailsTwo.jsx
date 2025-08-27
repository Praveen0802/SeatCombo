import React, { useState } from "react";
import { ActionFooterSection } from "./sections/ActionFooterSection/ActionFooterSection";
import { OrderDetailsSection } from "./sections/OrderDetailsSection/OrderDetailsSection";
import { SecondaryMenuSection } from "../SecondaryMenuSection";

export const OrderDetailsTwo = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div
      className="flex w-full h-screen bg-colors-neutral-white"
      data-model-id="303:22753"
    >
      <SecondaryMenuSection isCollapsed={sidebarCollapsed} toggleCollapse={toggleSidebar} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <OrderDetailsSection />
        <ActionFooterSection />
      </div>
    </div>
  );
};
