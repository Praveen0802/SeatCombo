import {
  BarChart3Icon,
  CalendarDaysIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CodeIcon,
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
      title: "Events",
      items: [
        {
          label: "Tickets",
          icon: <TicketIcon className="w-6 h-6" />,
          hasSubmenu: true,
        },
        {
          label: "Events",
          icon: <CalendarDaysIcon className="w-6 h-6" />,
          hasSubmenu: true,
          expanded: true,
          subItems: [
            { label: "Events", active: false },
            { label: "Stadium", active: true },
          ],
        },
        {
          label: "Teams",
          icon: <UsersIcon className="w-6 h-6" />,
          hasSubmenu: true,
        },
        {
          label: "Orders",
          icon: <ShoppingCartIcon className="w-6 h-6" />,
          hasSubmenu: true,
        },
      ],
    },
    {
      title: "Revenue",
      items: [
        {
          label: "Sales",
          icon: <BarChart3Icon className="w-6 h-6" />,
          hasSubmenu: true,
        },
        {
          label: "Leads",
          icon: <UserRoundIcon className="w-6 h-6" />,
          hasSubmenu: true,
        },
      ],
    },
    {
      title: "Settings",
      items: [
        {
          label: "Settings",
          icon: <SettingsIcon className="w-6 h-6" />,
          hasSubmenu: true,
        },
        {
          label: "API",
          icon: <CodeIcon className="w-6 h-6" />,
          hasSubmenu: true,
        },
      ],
    },
  ];

  return (
    <aside className="flex flex-col w-[272px] h-full min-h-screen items-start gap-8 p-6 bg-colors-neutral-white border-r border-design-tokens-color-primarystroke">
      <div className="flex flex-col items-start gap-20 relative flex-1 self-stretch w-full">
        {/* Header with logo and collapse button */}
        <div className="flex items-start justify-between relative self-stretch w-full">
          <div className="relative w-[150px] h-8 mix-blend-multiply">
            <div className="relative h-7 top-0.5">
              <img
                className="absolute w-[30px] h-7 top-0 left-0"
                alt="Logo"
                src="https://c.animaapp.com/a2lg1biI/img/logo@2x.png"
              />
              <img
                className="absolute w-[116px] h-[15px] top-1.5 left-[34px]"
                alt="Logo text"
                src="https://c.animaapp.com/a2lg1biI/img/logo-1@2x.png"
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
              src="https://c.animaapp.com/a2lg1biI/img/icon.svg"
            />
          </Button>
        </div>

        {/* Navigation menu */}
        <nav className="flex flex-col items-start gap-8 w-full">
          {/* Dashboard item */}
          <Button
            variant="ghost"
            className="flex justify-start w-full px-0 h-auto font-medium text-sm text-[color:var(--colors-neutral-black)]"
          >
            <img
              className="w-6 h-6 mr-2"
              alt="Dashboard icon"
              src="https://c.animaapp.com/a2lg1biI/img/leading-icon.svg"
            />
            <span className="flex-1 text-left">Dashboard</span>
          </Button>

          {/* Menu sections */}
          {menuSections.map((section, sectionIndex) => (
            <div
              key={`section-${sectionIndex}`}
              className="flex flex-col items-start gap-5 w-full"
            >
              {/* Section title */}
              <h3 className="text-[color:var(--colors-neutral-gray-70)] text-xs font-semibold font-body-tiny-semibold">
                {section.title}
              </h3>

              {/* Section items */}
              <div className="flex flex-col items-start gap-5 w-full">
                {section.items.map((item, itemIndex) => (
                  <React.Fragment key={`item-${sectionIndex}-${itemIndex}`}>
                    {item.expanded ? (
                      <Collapsible defaultOpen className="w-full">
                        <CollapsibleTrigger asChild>
                          <Button
                            variant="ghost"
                            className="flex justify-between w-full px-0 h-auto font-medium text-sm text-[color:var(--colors-neutral-black)]"
                          >
                            <div className="flex items-center gap-2 flex-1">
                              {item.icon}
                              <span className="flex-1">{item.label}</span>
                            </div>
                            <ChevronDownIcon className="w-5 h-5" />
                          </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="flex flex-col w-full">
                          {item.subItems?.map((subItem, subIndex) => (
                            <div
                              key={`subitem-${subIndex}`}
                              className="flex w-52 items-center gap-2"
                            >
                              <div className="flex w-6 items-center justify-center self-stretch">
                                <img
                                  className="flex-1 h-8 object-cover"
                                  alt="Line"
                                  src="https://c.animaapp.com/a2lg1biI/img/line-1-1.svg"
                                />
                              </div>
                              <Button
                                variant="ghost"
                                className={`flex items-center gap-2 flex-1 px-0 h-auto font-medium text-sm ${
                                  subItem.active
                                    ? "text-colors-brand-primary-red"
                                    : "text-[color:var(--colors-neutral-black)]"
                                }`}
                              >
                                <span>{subItem.label}</span>
                              </Button>
                            </div>
                          ))}
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <Button
                        variant="ghost"
                        className="flex justify-between w-full px-0 h-auto font-medium text-sm text-[color:var(--colors-neutral-black)]"
                      >
                        <div className="flex items-center gap-2 flex-1">
                          {item.icon}
                          <span className="flex-1">{item.label}</span>
                        </div>
                        {item.hasSubmenu && (
                          <ChevronRightIcon className="w-5 h-5" />
                        )}
                      </Button>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* User profile */}
      <div className="w-52 flex items-center gap-[33px]">
        <div className="flex items-center gap-2 flex-1">
          <Avatar className="w-8 h-8 bg-colors-success">
            <AvatarFallback className="text-colors-neutral-white text-xs font-semibold">
              JD
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start justify-center gap-2 flex-1">
            <div className="self-stretch font-medium text-sm text-[color:var(--colors-neutral-black)]">
              John Doe
            </div>
            <div className="self-stretch text-xs text-[color:var(--colors-neutral-gray-70)]">
              Admin
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
