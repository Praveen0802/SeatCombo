import React, { useState } from "react";
import { BellIcon, ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import { ActionFooterSection } from "./sections/ActionFooterSection";
import { AllTicketSyncSection } from "./sections/AllTicketSyncSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { SecondaryMenuSection } from "../SecondaryMenuSection";

export const ApiPullDataAdd = () => {
  const [activeTab, setActiveTab] = useState("addEventTickets"); // "addEventTickets" or "allTicketSync"
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

	const toggleCollapse = () => {
		setSidebarCollapsed(!sidebarCollapsed);
	};
  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="462:11261"
    >
      <div className="bg-colors-neutral-white w-full max-w-[1440px] relative flex flex-row h-screen">
        {/* Side Menu Section */}
        <div className="flex-shrink-0 h-full">
          <SecondaryMenuSection isCollapsed={sidebarCollapsed} toggleCollapse={toggleCollapse} />
        </div>

        {/* Main Content and Action Footer */}
        <div className="flex-1 flex flex-col h-full relative">
          <div className="flex-grow">
            {/* Header */}
            <header className="flex items-center gap-3 px-8 py-5 border-b border-design-tokens-color-primarystroke bg-[linear-gradient(180deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_100%)]">
              <div className="flex-1 font-header-h4 font-[number:var(--header-h4-font-weight)] text-[color:var(--colors-neutral-black)] text-[length:var(--header-h4-font-size)] tracking-[var(--header-h4-letter-spacing)] leading-[var(--header-h4-line-height)] [font-style:var(--header-h4-font-style)]">
                Pull API Data
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center">
                  <div className="flex items-center gap-1">
                    <div className="relative w-[26.67px] h-5 rounded-[3.33px] overflow-hidden bg-[url(https://c.animaapp.com/6udJkpwQ/img/vector.svg)] bg-[100%_100%]">
                      <div className="relative w-[27px] h-5 bg-[url(https://c.animaapp.com/6udJkpwQ/img/vector-1.svg)] bg-[100%_100%]">
                        <img
                          className="absolute w-[27px] h-5 top-0 left-0"
                          alt="Vector"
                          src="https://c.animaapp.com/6udJkpwQ/img/vector-2.svg"
                        />
                        <img
                          className="absolute w-[27px] h-5 top-0 left-0"
                          alt="Vector"
                          src="https://c.animaapp.com/6udJkpwQ/img/vector-3.svg"
                        />
                        <img
                          className="absolute w-[27px] h-5 top-0 left-0"
                          alt="Vector"
                          src="https://c.animaapp.com/6udJkpwQ/img/vector-4.svg"
                        />
                      </div>
                    </div>

                    <div className="font-action-item-medium font-[number:var(--action-item-medium-font-weight)] text-colors-neutral-black-duplicate text-[length:var(--action-item-medium-font-size)] tracking-[var(--action-item-medium-letter-spacing)] leading-[var(--action-item-medium-line-height)] whitespace-nowrap [font-style:var(--action-item-medium-font-style)]">
                      English
                    </div>
                  </div>

                  <ChevronDownIcon className="w-4 h-4" />
                </div>

                <div className="flex items-center gap-1">
                  <div className="[font-family:'Inter',Helvetica] font-medium text-[color:var(--colors-neutral-black)] text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                    Rey&apos;s Store
                  </div>
                  <ChevronDownIcon className="w-3.5 h-3.5" />
                </div>

                <div className="flex items-center justify-end gap-6">
                  <div className="relative w-6 h-6">
                    <BellIcon className="w-6 h-6" />
                    <div className="absolute w-2 h-2 left-[15px] top-0 bg-colors-brand-primary-red rounded" />
                  </div>
                </div>
              </div>
            </header>

            {/* Breadcrumb */}
            <div className="flex flex-col items-start gap-2.5 px-8 py-5">
              <div className="flex items-center gap-1 w-full">
                <div className="flex items-center gap-1">
                  <div className="font-body-medium font-[number:var(--body-medium-font-weight)] text-colors-neutral-gray-50 text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)]">
                    API
                  </div>
                  <ChevronRightIcon className="w-4 h-4" />
                </div>

                <div className="flex items-center justify-center gap-2.5">
                  <div className="mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-[color:var(--colors-neutral-black)] text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)]">
                    Pull API Data
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center px-8 border-b border-design-tokens-color-primarystroke">
              <div className="flex items-center flex-1">
                <div 
                  className={`flex items-center justify-center gap-1 px-5 py-4 border-b ${activeTab === 'addEventTickets' ? 'border-colors-brand-primary-red' : 'border-design-tokens-color-primarystroke'} cursor-pointer`}
                  onClick={() => setActiveTab('addEventTickets')}
                >
                  <div className={`mt-[-1.00px] font-action-item-large font-[number:var(--action-item-large-font-weight)] ${activeTab === 'addEventTickets' ? 'text-colors-brand-primary-red' : 'text-[color:var(--colors-neutral-gray-70)]'} text-[length:var(--action-item-large-font-size)] tracking-[var(--action-item-large-letter-spacing)] leading-[var(--action-item-large-line-height)] whitespace-nowrap [font-style:var(--action-item-large-font-style)]`}>
                    Add event tickets
                  </div>
                </div>

                <div 
                  className={`flex items-center justify-center gap-1 px-5 py-4 border-b ${activeTab === 'allTicketSync' ? 'border-colors-brand-primary-red' : 'border-design-tokens-color-primarystroke'} cursor-pointer`}
                  onClick={() => setActiveTab('allTicketSync')}
                >
                  <div className={`mt-[-1.00px] font-action-item-large font-[number:var(--action-item-large-font-weight)] ${activeTab === 'allTicketSync' ? 'text-colors-brand-primary-red' : 'text-[color:var(--colors-neutral-gray-70)]'} text-[length:var(--action-item-large-font-size)] tracking-[var(--action-item-large-letter-spacing)] leading-[var(--action-item-large-line-height)] whitespace-nowrap [font-style:var(--action-item-large-font-style)]`}>
                    All ticket sync
                  </div>
                </div>
              </div>
            </div>

            {/* Content based on active tab */}
            {activeTab === 'addEventTickets' ? (
              <MainContentSection />
            ) : (
              <AllTicketSyncSection />
            )}
          </div>
          
          {/* Only show footer on Add event tickets tab */}
          {activeTab === 'addEventTickets' && (
            <div className="absolute bottom-0 left-0 right-0 h-[7%]">
              <ActionFooterSection />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
