import React, { useState } from "react";
import { OrderActionsSection } from "./sections/OrderActionsSection/OrderActionsSection";
import { OrderDetailsSection } from "./sections/OrderDetailsSection/OrderDetailsSection";
import { SecondaryMenuSection } from "../SecondaryMenuSection";

export const OrderDetails = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div
      className="flex w-full h-screen bg-colors-neutral-white overflow-hidden"
      data-model-id="310:26476"
    >
      <SecondaryMenuSection isCollapsed={sidebarCollapsed} toggleCollapse={toggleSidebar} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <OrderDetailsSection />
        <OrderActionsSection />
      </div>
    </div>
  );
};
