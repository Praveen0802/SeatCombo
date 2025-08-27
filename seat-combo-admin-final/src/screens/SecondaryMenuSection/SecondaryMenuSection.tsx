import {
  BarChart3Icon,
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CodeIcon,
  LayoutDashboardIcon,
  SettingsIcon,
  ShoppingCartIcon,
  TicketIcon,
  UserSquareIcon,
  UsersIcon,
} from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";

interface SecondaryMenuSectionProps {
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

export const SecondaryMenuSection = ({
  isCollapsed,
  toggleCollapse,
}: SecondaryMenuSectionProps): JSX.Element => {
  // Menu data for mapping
  const categoryMenus = [
    {
      title: "Events",
      items: [
        {
          name: "Tickets",
          icon: <TicketIcon className="w-6 h-6" />,
          subMenus: [{name:"Sub Menu"}, {name:"Sub Menu"}],
          hasNotification: false,
        },
        {
          name: "Events",
          icon: <CalendarIcon className="w-6 h-6" />,
          subMenus: [{name:"Sub Menu"}, {name:"Stadiums", link:"/stadiums"}],
          hasNotification: true,
          badge: { text: "8", position: 0 },
        },
        {
          name: "Teams",
          icon: <UsersIcon className="w-6 h-6" />,
          subMenus: [{name:"All Teams", link:"/all-teams"}, {name:"Sub Menu"}],
          hasNotification: false,
        },
        {
          name: "Orders",
          icon: <ShoppingCartIcon className="w-6 h-6" />,
          subMenus: [{name:"All Orders", link:"/all-orders"}, {name:"All Orders 2", link:"/all-orders-2"}],
          hasNotification: false,
        },
      ],
    },
    {
      title: "Revenue",
      items: [
        {
          name: "Sales",
          icon: <BarChart3Icon className="w-6 h-6" />,
          hasNotification: false,
        },
        {
          name: "Leads",
          icon: <UserSquareIcon className="w-6 h-6" />,
          hasNotification: false,
        },
      ],
    },
    {
      title: "Settings",
      items: [
        {
          name: "Settings",
          icon: <SettingsIcon className="w-6 h-6" />,
          hasNotification: false,
        },
        {
          name: "API",
          icon: <CodeIcon className="w-6 h-6" />,
          subMenus: [{name:"Pull API Data", link: '/pull-api'}, {name:"Merge API Data", link:"/merge-api"}],
          hasNotification: false,
        },
      ],
    },
  ];

  return (
    <aside className="flex flex-col h-full items-start gap-8 p-6 bg-white border-r border-[#dadada]">
      <div className="flex flex-col items-start gap-20 w-full flex-1">
        {/* Logo and collapse button */}
        <div className="flex items-start justify-between w-full">
          {!isCollapsed && (
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
            </header>
          )}
          {isCollapsed && (
            <div className="relative h-8 w-8">
              <img
                className="w-[30px] h-7"
                alt="Logo"
                src="https://c.animaapp.com/mczy48mf9GWM3C/img/logo-2.png"
              />
            </div>
          )}
		  
          <Button
            variant="outline"
            size="icon"
            className="w-9 h-8 rounded-full border-design-tokens-color-primarystroke"
            onClick={toggleCollapse}
          >
            {isCollapsed ? (
              <ChevronRightIcon className="w-[17.45px] h-[17.45px]" />
            ) : (
              <ChevronLeftIcon className="w-[17.45px] h-[17.45px]" />
            )}
          </Button>
        </div>

        {/* Navigation menu */}
        <div className="flex flex-col items-start gap-8 w-full">
          {/* Dashboard item */}
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-2 flex-1">
              <LayoutDashboardIcon className="w-6 h-6 text-[#db3616]" />
              {!isCollapsed && (
                <span className="font-medium text-[#db3616] text-sm">
                  <a href="/dashboard">Dashboard</a>
                </span>
              )}
            </div>
          </div>

          {/* Categories and their menu items */}
          {categoryMenus.map((category, categoryIndex) => (
            <div
              key={`category-${categoryIndex}`}
              className="flex flex-col items-start gap-5 w-full"
            >
              {!isCollapsed && (
                <h3 className="font-body-tiny-semibold text-[#9a9a9a] text-xs">
                  {category.title}
                </h3>
              )}

              <div className="flex flex-col items-start gap-5 w-full">
                {category.items.map((item, itemIndex) =>
                  isCollapsed ? (
                    <div
                      key={`${category.title}-${item.name}-${itemIndex}`}
                      className="relative w-full flex justify-center"
                    >
                      {item.icon}
                      {item.hasNotification && (
                        <div className="absolute w-2 h-2 top-0 right-0 bg-[#db3616] rounded" />
                      )}
                    </div>
                  ) : (
                    <Accordion
                      key={`${category.title}-${item.name}-${itemIndex}`}
                      type="single"
                      collapsible
                      className="w-full"
                    >
                      <AccordionItem
                        value={`${category.title}-${item.name}`}
                        className="border-0"
                      >
                        <AccordionTrigger className="py-0 hover:no-underline">
                          <div className="flex items-center gap-2 flex-1">
                            {item.icon}
                            <span className="font-medium text-[#161616] text-sm">
                              {item.name}
                            </span>
                            
                          </div>
                        </AccordionTrigger>

                        {item.subMenus && (
                          <AccordionContent className="pt-2 pb-0">
                            {item.subMenus.map((subMenu, subIndex) => (
                              <div
                                key={`submenu-${subIndex}`}
                                className="flex items-center gap-2 py-1"
                              >
                                <div className="w-6 flex items-center justify-center">
                                  <Separator
                                    orientation="vertical"
                                    className="h-8"
                                  />
                                </div>
                                <div className="flex items-center gap-2 flex-1">
                                  <span className="font-medium text-[#161616] text-sm">
                                      <a href={subMenu.link}>{subMenu.name}</a>
                                  </span>
                                  {item.badge &&
                                    item.badge.position === subIndex && (
                                      <Badge className="bg-[#ffdddd] text-[#db3616] h-4 px-1 rounded-full">
                                        <span className="text-xs">
                                          {item.badge.text}
                                        </span>
                                      </Badge>
                                    )}
                                </div>
                              </div>
                            ))}
                          </AccordionContent>
                        )}
                      </AccordionItem>
                    </Accordion>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* User profile */}
      {!isCollapsed && (
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2 flex-1">
            <Avatar className="w-8 h-8 bg-[#00ad79]">
              <AvatarFallback className="text-white text-xs font-body-tiny-semibold">
                JD
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-2 flex-1">
              <span className="font-medium text-[#161616] text-sm">
                John Doe
              </span>
              <span className="text-[#9a9a9a] text-xs font-body-tiny">
                Admin
              </span>
            </div>
          </div>
        </div>
      )}
      {isCollapsed && (
        <Avatar className="w-8 h-8 bg-[#00ad79] mx-auto mt-auto">
          <AvatarFallback className="text-white text-xs font-body-tiny-semibold">
            JD
          </AvatarFallback>
        </Avatar>
      )}
    </aside>
  );
};
