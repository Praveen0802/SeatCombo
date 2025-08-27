import {
  BarChart3Icon,
  CalendarIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  DatabaseIcon,
  LayoutDashboardIcon,
  SettingsIcon,
  ShoppingCartIcon,
  TicketIcon,
  UserRoundIcon,
  UsersIcon,
} from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../components/ui/collapsible";

export const SideMenuSection = () => {
  // Navigation menu data structure
  const menuSections = [
    {
      title: null,
      items: [
        {
          name: "Dashboard",
          icon: <LayoutDashboardIcon className="w-6 h-6" />,
          hasSubmenu: false,
        },
      ],
    },
    {
      title: "Events",
      items: [
        {
          name: "Tickets",
          icon: <TicketIcon className="w-6 h-6" />,
          hasSubmenu: true,
        },
        {
          name: "Events",
          icon: <CalendarIcon className="w-6 h-6" />,
          hasSubmenu: true,
        },
        {
          name: "Teams",
          icon: <UsersIcon className="w-6 h-6" />,
          hasSubmenu: true,
        },
        {
          name: "Orders",
          icon: <ShoppingCartIcon className="w-6 h-6" />,
          hasSubmenu: true,
        },
      ],
    },
    {
      title: "Revenue",
      items: [
        {
          name: "Sales",
          icon: <BarChart3Icon className="w-6 h-6" />,
          hasSubmenu: true,
        },
        {
          name: "Leads",
          icon: <UserRoundIcon className="w-6 h-6" />,
          hasSubmenu: true,
        },
      ],
    },
    {
      title: "Settings",
      items: [
        {
          name: "Settings",
          icon: <SettingsIcon className="w-6 h-6" />,
          hasSubmenu: true,
        },
        {
          name: "API",
          icon: <DatabaseIcon className="w-6 h-6" />,
          hasSubmenu: true,
          expanded: true,
          subItems: [
            { name: "Pull API Data", active: true },
            { name: "Merge API Data", active: false },
          ],
        },
      ],
    },
  ];

  return (
    <nav className="flex flex-col h-full w-[272px] border-r border-design-tokens-color-primarystroke bg-colors-neutral-white">
      <div className="flex flex-col h-full p-6 gap-8">
        <div className="flex flex-col gap-20">
          {/* Header with logo and collapse button */}
          <div className="flex items-start justify-between w-full">
            <div className="relative w-[150px] h-8 mix-blend-multiply">
              <div className="relative h-7 top-0.5">
                <img
                  className="absolute w-[30px] h-7 top-0 left-0"
                  alt="Logo"
                  src="https://c.animaapp.com/6udJkpwQ/img/logo@2x.png"
                />
                <img
                  className="absolute w-[116px] h-[15px] top-1.5 left-[34px]"
                  alt="Logo text"
                  src="https://c.animaapp.com/6udJkpwQ/img/logo-1@2x.png"
                />
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8 rounded-full border border-design-tokens-color-primarystroke p-0"
            >
              <img
                className="w-[17.45px] h-[17.45px]"
                alt="Collapse menu"
                src="https://c.animaapp.com/6udJkpwQ/img/icon.svg"
              />
            </Button>
          </div>

          {/* Navigation menu sections */}
          <div className="flex flex-col gap-8 w-full">
            {menuSections.map((section, sectionIndex) => (
              <div
                key={`section-${sectionIndex}`}
                className="flex flex-col gap-5 w-full"
              >
                {section.title && (
                  <h3 className="font-body-tiny-semibold text-colors-neutral-gray-70 text-[length:var(--body-tiny-semibold-font-size)] tracking-[var(--body-tiny-semibold-letter-spacing)] leading-[var(--body-tiny-semibold-line-height)]">
                    {section.title}
                  </h3>
                )}

                <div className="flex flex-col gap-5 w-full">
                  {section.items.map((item, itemIndex) => (
                    <div key={`item-${sectionIndex}-${itemIndex}`}>
                      {item.hasSubmenu ? (
                        <Collapsible
                          defaultOpen={item.expanded}
                          className="w-full"
                        >
                          <CollapsibleTrigger className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-2 flex-1">
                              {item.icon}
                              <span className="font-medium text-sm text-[color:var(--colors-neutral-black)]">
                                {item.name}
                              </span>
                            </div>
                            {item.expanded ? (
                              <ChevronDownIcon className="w-5 h-5" />
                            ) : (
                              <ChevronRightIcon className="w-5 h-5" />
                            )}
                          </CollapsibleTrigger>

                          {item.subItems && (
                            <CollapsibleContent>
                              <div className="flex flex-col">
                                {item.subItems.map((subItem, subIndex) => (
                                  <div
                                    key={`subitem-${sectionIndex}-${itemIndex}-${subIndex}`}
                                    className="flex items-center gap-2 pl-8 py-2"
                                  >
                                    <div className="flex w-6 items-center justify-center">
                                      <img
                                        className="h-8 w-full object-cover"
                                        alt="Line"
                                        src="https://c.animaapp.com/6udJkpwQ/img/line-1-1.svg"
                                      />
                                    </div>
                                    <span
                                      className={`font-medium text-sm ${
                                        subItem.active
                                          ? "text-colors-brand-primary-red"
                                          : "text-[color:var(--colors-neutral-black)]"
                                      }`}
                                    >
                                      {subItem.name}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </CollapsibleContent>
                          )}
                        </Collapsible>
                      ) : (
                        <Button
                          variant="ghost"
                          className="flex items-center justify-start gap-2 w-full h-auto p-0"
                        >
                          {item.icon}
                          <span className="font-medium text-sm text-[color:var(--colors-neutral-black)]">
                            {item.name}
                          </span>
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User profile section */}
        <div className="mt-auto flex items-center gap-2">
          <Avatar className="w-8 h-8 bg-colors-success">
            <AvatarFallback className="text-colors-neutral-white font-body-tiny-semibold text-[length:var(--body-tiny-semibold-font-size)]">
              JD
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <span className="font-medium text-sm text-[color:var(--colors-neutral-black)]">
              John Doe
            </span>
            <span className="font-body-tiny text-colors-neutral-gray-70 text-[length:var(--body-tiny-font-size)]">
              Admin
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
