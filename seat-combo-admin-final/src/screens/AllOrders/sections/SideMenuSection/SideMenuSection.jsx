import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
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
        label: "Tickets",
        icon: "https://c.animaapp.com/PeDX8ZwH/img/leading-icon-1.svg",
        hasSubmenu: true,
      },
      {
        label: "Events",
        icon: "https://c.animaapp.com/PeDX8ZwH/img/leading-icon-2.svg",
        hasSubmenu: true,
      },
      {
        label: "Teams",
        icon: "https://c.animaapp.com/PeDX8ZwH/img/leading-icon-3.svg",
        hasSubmenu: true,
      },
      {
        label: "Orders",
        icon: "https://c.animaapp.com/PeDX8ZwH/img/leading-icon-4.svg",
        hasSubmenu: true,
        hasNotification: true,
        isExpanded: true,
        subItems: [
          {
            label: "All Orders",
            isActive: true,
            badge: "8",
          },
          {
            label: "Sub Menu",
          },
        ],
      },
    ],
  },
  {
    title: "Revenue",
    items: [
      {
        label: "Sales",
        icon: "https://c.animaapp.com/PeDX8ZwH/img/leading-icon-5.svg",
        hasSubmenu: true,
      },
      {
        label: "Leads",
        icon: "https://c.animaapp.com/PeDX8ZwH/img/leading-icon-6.svg",
        hasSubmenu: true,
      },
    ],
  },
  {
    title: "Settings",
    items: [
      {
        label: "Settings",
        icon: "https://c.animaapp.com/PeDX8ZwH/img/leading-icon-7.svg",
        hasSubmenu: true,
      },
      {
        label: "API",
        icon: "https://c.animaapp.com/PeDX8ZwH/img/leading-icon-8.svg",
        hasSubmenu: true,
      },
    ],
  },
];

export const SideMenuSection = () => {
  return (
    <aside className="flex flex-col w-full max-w-[272px] h-full items-start gap-8 p-6 bg-colors-neutral-white border-r border-design-tokens-color-primarystroke">
      <div className="flex flex-col items-start gap-20 flex-1 self-stretch w-full">
        <header className="flex items-start justify-between self-stretch w-full">
          <div className="relative w-[150px] h-8 mix-blend-multiply">
            <div className="relative h-7 top-0.5">
              <img
                className="absolute w-[30px] h-7 top-0 left-0"
                alt="Logo"
                src="https://c.animaapp.com/PeDX8ZwH/img/logo@2x.png"
              />
              <img
                className="absolute w-[116px] h-[15px] top-1.5 left-[34px]"
                alt="Logo"
                src="https://c.animaapp.com/PeDX8ZwH/img/logo-1@2x.png"
              />
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="w-8 h-8 rounded-full border-design-tokens-color-primarystroke"
          >
            <img
              className="w-[17.45px] h-[17.45px]"
              alt="Icon"
              src="https://c.animaapp.com/PeDX8ZwH/img/icon.svg"
            />
          </Button>
        </header>

        <nav className="flex flex-col items-start gap-8 self-stretch w-full">
          <div className="flex items-center gap-2 self-stretch w-full">
            <img
              className="w-6 h-6"
              alt="Dashboard icon"
              src="https://c.animaapp.com/PeDX8ZwH/img/leading-icon.svg"
            />
            <span className="flex-1 [font-family:'Inter',Helvetica] font-medium text-colors-neutral-black text-sm">
              Dashboard
            </span>
          </div>

          {menuSections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="flex flex-col items-start gap-5 self-stretch w-full"
            >
              <h3 className="font-body-tiny-semibold font-[number:var(--body-tiny-semibold-font-weight)] text-[color:var(--colors-neutral-gray-70)] text-[length:var(--body-tiny-semibold-font-size)] tracking-[var(--body-tiny-semibold-letter-spacing)] leading-[var(--body-tiny-semibold-line-height)] [font-style:var(--body-tiny-semibold-font-style)]">
                {section.title}
              </h3>

              <div className="flex flex-col items-start gap-5 self-stretch w-full">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex flex-col items-start self-stretch w-full"
                  >
                    {item.isExpanded ? (
                      <Collapsible defaultOpen className="w-full">
                        <CollapsibleTrigger asChild>
                          <Button
                            variant="ghost"
                            className="flex items-center justify-between self-stretch w-full h-auto p-0 hover:bg-transparent"
                          >
                            <div className="flex items-center gap-2 flex-1">
                              <div className="relative">
                                <img
                                  className="w-6 h-6"
                                  alt={`${item.label} icon`}
                                  src={item.icon}
                                />
                                {item.hasNotification && (
                                  <div className="absolute w-2 h-2 -top-1 left-4 bg-colors-brand-primary-red rounded-full" />
                                )}
                              </div>
                              <span className="flex-1 [font-family:'Inter',Helvetica] font-medium text-colors-neutral-black text-sm text-left">
                                {item.label}
                              </span>
                            </div>
                            <ChevronDownIcon className="w-5 h-5" />
                          </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="flex flex-col items-start self-stretch w-full">
                          {item.subItems?.map((subItem, subIndex) => (
                            <div
                              key={subIndex}
                              className="flex w-52 items-center gap-2"
                            >
                              <div className="flex w-6 items-center justify-center self-stretch">
                                <img
                                  className="flex-1 h-8 object-cover"
                                  alt="Line"
                                  src="https://c.animaapp.com/PeDX8ZwH/img/line-1-1.svg"
                                />
                              </div>
                              <div className="flex items-center gap-2 flex-1">
                                <span
                                  className={`[font-family:'Inter',Helvetica] font-medium text-sm ${
                                    subItem.isActive
                                      ? "text-colors-brand-primary-red"
                                      : "text-colors-neutral-black"
                                  }`}
                                >
                                  {subItem.label}
                                </span>
                                {subItem.badge && (
                                  <Badge className="h-4 px-1 bg-colors-tints-red-30 text-colors-brand-primary-red hover:bg-colors-tints-red-30 font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]">
                                    {subItem.badge}
                                  </Badge>
                                )}
                              </div>
                            </div>
                          ))}
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <Button
                        variant="ghost"
                        className="flex items-center justify-between self-stretch w-full h-auto p-0 hover:bg-transparent"
                      >
                        <div className="flex items-center gap-2 flex-1">
                          <img
                            className="w-6 h-6"
                            alt={`${item.label} icon`}
                            src={item.icon}
                          />
                          <span className="flex-1 [font-family:'Inter',Helvetica] font-medium text-colors-neutral-black text-sm text-left">
                            {item.label}
                          </span>
                        </div>
                        {item.hasSubmenu && (
                          <ChevronRightIcon className="w-5 h-5" />
                        )}
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-2 self-stretch w-full">
        <Avatar className="w-8 h-8 bg-colors-success">
          <AvatarFallback className="bg-colors-success text-colors-neutral-white font-body-tiny-semibold font-[number:var(--body-tiny-semibold-font-weight)] text-[length:var(--body-tiny-semibold-font-size)] tracking-[var(--body-tiny-semibold-letter-spacing)] leading-[var(--body-tiny-semibold-line-height)] [font-style:var(--body-tiny-semibold-font-style)]">
            JD
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start justify-center gap-2 flex-1">
          <div className="self-stretch [font-family:'Inter',Helvetica] font-medium text-colors-neutral-black text-sm">
            John Doe
          </div>
          <div className="self-stretch font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[color:var(--colors-neutral-gray-70)] text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]">
            Admin
          </div>
        </div>
      </div>
    </aside>
  );
};
