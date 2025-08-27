import React from "react";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";

export const SideMenuSection = () => {
  // Navigation menu data
  const menuSections = [
    {
      title: "Dashboard",
      icon: "https://c.animaapp.com/a2lg1biI/img/leading-icon.svg",
      type: "item",
    },
    {
      title: "Events",
      type: "section",
      items: [
        {
          title: "Tickets",
          icon: "https://c.animaapp.com/a2lg1biI/img/leading-icon-7.svg",
          type: "dropdown",
        },
        {
          title: "Events",
          icon: "https://c.animaapp.com/a2lg1biI/img/leading-icon-5.svg",
          type: "dropdown",
          expanded: true,
          subItems: [
            { title: "Events", active: false },
            { title: "Stadium", active: true },
          ],
        },
        {
          title: "Teams",
          icon: "https://c.animaapp.com/a2lg1biI/img/leading-icon-3.svg",
          type: "dropdown",
        },
        {
          title: "Orders",
          icon: "https://c.animaapp.com/a2lg1biI/img/leading-icon-2.svg",
          type: "dropdown",
        },
      ],
    },
    {
      title: "Revenue",
      type: "section",
      items: [
        {
          title: "Sales",
          icon: "https://c.animaapp.com/a2lg1biI/img/leading-icon.svg",
          type: "dropdown",
        },
        {
          title: "Leads",
          icon: "https://c.animaapp.com/a2lg1biI/img/leading-icon-6.svg",
          type: "dropdown",
        },
      ],
    },
    {
      title: "Settings",
      type: "section",
      items: [
        {
          title: "Settings",
          icon: "https://c.animaapp.com/a2lg1biI/img/leading-icon-1.svg",
          type: "dropdown",
        },
        {
          title: "API",
          icon: "https://c.animaapp.com/a2lg1biI/img/leading-icon-8.svg",
          type: "dropdown",
        },
      ],
    },
  ];

  return (
    <aside className="flex flex-col w-[272px] h-full min-h-screen items-start gap-8 p-6 bg-colors-neutral-white border-r border-design-tokens-color-primarystroke">
      <div className="flex flex-col items-start gap-20 relative flex-1 self-stretch w-full">
        {/* Header with logo and collapse button */}
        <header className="flex items-start justify-between relative self-stretch w-full">
          <Link to="/">
            <div className="relative h-8">
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
          </Link>

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
        </header>

        {/* Navigation menu */}
        <nav className="flex flex-col items-start gap-8 w-full">
          {menuSections.map((section, sectionIndex) => (
            <div
              key={`section-${sectionIndex}`}
              className="flex flex-col items-start gap-5 w-full"
            >
              {section.type === "item" ? (
                <div className="flex items-center gap-2 w-full">
                  <img
                    className="w-6 h-6"
                    alt={`${section.title} icon`}
                    src={section.icon}
                  />
                  <span className="flex-1 font-medium text-[color:var(--colors-neutral-black)] text-sm">
                    {section.title}
                  </span>
                </div>
              ) : (
                <>
                  {/* Section title */}
                  <h3 className="text-[color:var(--colors-neutral-gray-70)] text-xs font-semibold font-body-tiny-semibold">
                    {section.title}
                  </h3>

                  {/* Section items */}
                  <div className="flex flex-col items-start gap-5 w-full">
                    {section.items.map((item, itemIndex) => (
                      <React.Fragment key={`item-${sectionIndex}-${itemIndex}`}>
                        {item.type === "dropdown" && !item.expanded ? (
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-2 flex-1">
                              <img
                                className="w-6 h-6"
                                alt={`${item.title} icon`}
                                src={item.icon}
                              />
                              <span className="flex-1 font-medium text-[color:var(--colors-neutral-black)] text-sm">
                                {item.title}
                              </span>
                            </div>
                            <ChevronRightIcon className="w-5 h-5" />
                          </div>
                        ) : item.expanded ? (
                          <div className="flex flex-col items-start w-full">
                            <div className="flex items-center justify-between w-full">
                              <div className="flex items-center gap-2 flex-1">
                                <img
                                  className="w-6 h-6"
                                  alt={`${item.title} icon`}
                                  src={item.icon}
                                />
                                <span className="flex-1 font-medium text-[color:var(--colors-neutral-black)] text-sm">
                                  {item.title}
                                </span>
                              </div>
                              <ChevronDownIcon className="w-5 h-5" />
                            </div>

                            {/* Sub-items */}
                            <div className="flex flex-col items-start w-full">
                              {item.subItems.map((subItem, subIndex) => (
                                <div
                                  key={`subitem-${sectionIndex}-${itemIndex}-${subIndex}`}
                                  className="flex w-52 items-center gap-2"
                                >
                                  <div className="flex w-6 items-center justify-center self-stretch">
                                    <img
                                      className="flex-1 h-8 object-cover"
                                      alt="Line"
                                      src="https://c.animaapp.com/a2lg1biI/img/line-1-1.svg"
                                    />
                                  </div>
                                  <div className="flex items-center gap-2 flex-1">
                                    <span
                                      className={`font-medium text-sm ${
                                        subItem.active
                                          ? "text-colors-brand-primary-red"
                                          : "text-[color:var(--colors-neutral-black)]"
                                      }`}
                                    >
                                      {subItem.title}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 w-full">
                            <img
                              className="w-6 h-6"
                              alt={`${item.title} icon`}
                              src={item.icon}
                            />
                            <span className="flex-1 font-medium text-[color:var(--colors-neutral-black)] text-sm">
                              {item.title}
                            </span>
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </>
              )}
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
