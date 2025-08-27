import { ChevronDownIcon, ChevronRightIcon, MenuIcon } from "lucide-react";
import React, { useState } from "react";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../components/ui/collapsible";

const menuSections = [
  {
    title: "Events",
    items: [
      {
        name: "Tickets",
        icon: "https://c.animaapp.com/Bzppr30r/img/leading-icon-1.svg",
        hasSubmenu: true,
        subItems: ["Sub Menu", "Sub Menu"],
      },
      {
        name: "Events",
        icon: "https://c.animaapp.com/Bzppr30r/img/leading-icon-2.svg",
        hasSubmenu: true,
        subItems: ["Sub Menu", "Sub Menu"],
      },
      {
        name: "Teams",
        icon: "https://c.animaapp.com/Bzppr30r/img/leading-icon-3.svg",
        hasSubmenu: true,
        subItems: ["All Teams", "Sub Menu"],
        activeSubItem: "All Teams",
      },
      {
        name: "Orders",
        icon: "https://c.animaapp.com/Bzppr30r/img/leading-icon-4.svg",
        hasSubmenu: true,
        subItems: ["Sub Menu", "Sub Menu"],
      },
    ],
  },
  {
    title: "Revenue",
    items: [
      {
        name: "Sales",
        icon: "https://c.animaapp.com/Bzppr30r/img/leading-icon-5.svg",
        hasSubmenu: false,
      },
      {
        name: "Leads",
        icon: "https://c.animaapp.com/Bzppr30r/img/leading-icon-6.svg",
        hasSubmenu: false,
      },
    ],
  },
  {
    title: "Settings",
    items: [
      {
        name: "Settings",
        icon: "https://c.animaapp.com/Bzppr30r/img/leading-icon-7.svg",
        hasSubmenu: false,
      },
      {
        name: "API",
        icon: "https://c.animaapp.com/Bzppr30r/img/leading-icon-8.svg",
        hasSubmenu: false,
      },
    ],
  },
];

export const SideMenuSection = ({ activePage = "teams" }) => {
  const [openItems, setOpenItems] = useState({
    "Teams": true // Set Teams to be open by default
  });
  const [collapsed, setCollapsed] = useState(false);

  const toggleItem = (itemName) => {
    setOpenItems(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };

  const toggleSidebar = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <nav className={`flex flex-col ${collapsed ? 'w-[80px]' : 'w-[240px]'} h-full items-start bg-colors-neutral-white border-r border-design-tokens-color-primarystroke transition-all duration-300`}>
      <div className="flex flex-col items-start gap-8 p-6 w-full flex-1">
        <header className="flex items-start justify-between w-full">
          {!collapsed && (
            <div className="w-[150px] h-8 mix-blend-multiply">
              <div className="relative h-7 top-0.5">
                <img
                  className="absolute w-[30px] h-7 top-0 left-0"
                  alt="Logo"
                  src="https://c.animaapp.com/Bzppr30r/img/logo@2x.png"
                />
                <img
                  className="absolute w-[116px] h-[15px] top-1.5 left-[34px]"
                  alt="Logo"
                  src="https://c.animaapp.com/Bzppr30r/img/logo-1@2x.png"
                />
              </div>
            </div>
          )}
          
          {collapsed && (
            <div className="w-8 h-8">
              <img
                className="w-[30px] h-7"
                alt="Logo"
                src="https://c.animaapp.com/Bzppr30r/img/logo@2x.png"
              />
            </div>
          )}

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8 rounded-full border-design-tokens-color-primarystroke"
              onClick={toggleSidebar}
            >
              <MenuIcon className="w-[17.45px] h-[17.45px]" />
            </Button>
            
            {!collapsed && (
              <Button
                variant="outline"
                size="icon"
                className="w-8 h-8 rounded-full border-design-tokens-color-primarystroke"
              >
                <img
                  className="w-[17.45px] h-[17.45px]"
                  alt="Settings"
                  src="https://c.animaapp.com/Bzppr30r/img/icon.svg"
                />
              </Button>
            )}
          </div>
        </header>

        <div className="flex flex-col items-start gap-8 w-full mt-4">
          <div className="flex items-center gap-2 w-full">
            <img
              className="w-6 h-6"
              alt="Dashboard icon"
              src="https://c.animaapp.com/Bzppr30r/img/leading-icon.svg"
            />
            {!collapsed && (
              <span className="flex-1 [font-family:'Inter',Helvetica] font-medium text-[color:var(--colors-neutral-black)] text-sm tracking-[0] leading-[normal]">
                Dashboard
              </span>
            )}
          </div>

          {menuSections.map((section, sectionIndex) => (
            <div
              key={section.title}
              className="flex flex-col items-start gap-3 w-full"
            >
              {!collapsed && (
                <h3 className="font-body-tiny-semibold font-[number:var(--body-tiny-semibold-font-weight)] text-[color:var(--colors-neutral-gray-70)] text-[length:var(--body-tiny-semibold-font-size)] tracking-[var(--body-tiny-semibold-letter-spacing)] leading-[var(--body-tiny-semibold-line-height)] [font-style:var(--body-tiny-semibold-font-style)] mb-1">
                  {section.title}
                </h3>
              )}

              <div className="flex flex-col items-start gap-3 w-full">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={`${section.title}-${item.name}`}
                    className="flex flex-col items-start w-full"
                  >
                    {item.hasSubmenu ? (
                      <Collapsible 
                        open={openItems[item.name]} 
                        onOpenChange={() => toggleItem(item.name)}
                        className="w-full"
                      >
                        <CollapsibleTrigger className="flex items-center justify-between w-full p-0 h-auto py-1">
                          <div className="flex items-center gap-2 flex-1">
                            <img
                              className="w-6 h-6"
                              alt={`${item.name} icon`}
                              src={item.icon}
                            />
                            {!collapsed && (
                              <span className={`flex-1 [font-family:'Inter',Helvetica] font-medium text-sm tracking-[0] leading-[normal] text-left ${
                                item.name === "Teams" ? "text-colors-brand-primary-red" : "text-[color:var(--colors-neutral-black)]"
                              }`}>
                                {item.name}
                              </span>
                            )}
                          </div>
                          {!collapsed && (
                            openItems[item.name] ? (
                              <ChevronDownIcon className="w-5 h-5" />
                            ) : (
                              <ChevronRightIcon className="w-5 h-5" />
                            )
                          )}
                        </CollapsibleTrigger>

                        <CollapsibleContent className={`flex flex-col items-start w-full pt-1 ${collapsed ? 'pl-0' : 'pl-8'}`}>
                          {item.subItems?.map((subItem, subIndex) => (
                            <div
                              key={`${item.name}-${subItem}-${subIndex}`}
                              className="flex items-center py-1.5"
                            >
                              {!collapsed && (
                                <span
                                  className={`w-fit [font-family:'Inter',Helvetica] font-medium text-sm tracking-[0] leading-[normal] whitespace-nowrap ${
                                    item.activeSubItem === subItem
                                      ? "text-colors-brand-primary-red"
                                      : "text-[color:var(--colors-neutral-black)]"
                                  }`}
                                >
                                  {subItem}
                                </span>
                              )}
                            </div>
                          ))}
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <div className="flex items-center justify-between w-full py-1">
                        <div className="flex items-center gap-2 flex-1">
                          <img
                            className="w-6 h-6"
                            alt={`${item.name} icon`}
                            src={item.icon}
                          />
                          {!collapsed && (
                            <span className="flex-1 [font-family:'Inter',Helvetica] font-medium text-[color:var(--colors-neutral-black)] text-sm tracking-[0] leading-[normal]">
                              {item.name}
                            </span>
                          )}
                        </div>
                        {!collapsed && <ChevronRightIcon className="w-5 h-5" />}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`flex items-center gap-2 p-6 ${collapsed ? 'justify-center' : 'w-full'}`}>
        <Avatar className="w-8 h-8">
          <AvatarFallback className="bg-colors-success text-colors-neutral-white font-body-tiny-semibold font-[number:var(--body-tiny-semibold-font-weight)] text-[length:var(--body-tiny-semibold-font-size)] tracking-[var(--body-tiny-semibold-letter-spacing)] leading-[var(--body-tiny-semibold-line-height)] [font-style:var(--body-tiny-semibold-font-style)]">
            JD
          </AvatarFallback>
        </Avatar>

        {!collapsed && (
          <div className="flex flex-col items-start justify-center gap-0.5 flex-1">
            <div className="self-stretch [font-family:'Inter',Helvetica] font-medium text-[color:var(--colors-neutral-black)] text-sm tracking-[0] leading-[normal]">
              John Doe
            </div>
            <div className="self-stretch font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[color:var(--colors-neutral-gray-70)] text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]">
              Admin
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
