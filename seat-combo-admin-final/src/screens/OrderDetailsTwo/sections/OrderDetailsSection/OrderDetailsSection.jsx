import {
  ChevronDownIcon,
  ChevronRightIcon,
  CopyIcon,
  DownloadIcon,
  ExternalLinkIcon,
  FileTextIcon,
  LinkIcon,
  PlusIcon,
  Trash2Icon,
  UploadIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";

const orderData = {
  orderId: "#SC14364",
  seller: "1BoxOffice",
  payment: "Completed",
  bookingStatus: "Pending",
};

const eventData = {
  homeTeam: "Newcastle",
  awayTeam: "Manchester United",
  homeTeamLogo:
    "https://c.animaapp.com/kgt7Mvyv/img/arsenal-fc-logo-svg@2x.png",
  awayTeamLogo:
    "https://c.animaapp.com/kgt7Mvyv/img/arsenal-fc-logo-svg-1@2x.png",
  date: "Wed, April 23, 7:30 AM",
  venue: "St James' Park, London",
  league: "English Premier League",
};

const orderItems = [
  {
    name: "Newcaste vs Manchester United",
    price: "€1000",
    quantity: "10",
    total: "€10,000",
    details: "Wed, April 23, 7:30 AM, English Premier League",
    venue: "St James' Park, London",
  },
];

const attendees = [
  {
    name: "Theresa Webb",
    details: "+44 7911123456, United Kingdom, JO5639474, Female, 21/10/1993",
  },
  {
    name: "Brooklyn Simmons",
    details: "+44 7911123456, United Kingdom, JO5639474, Female, 21/10/1993",
  },
];

const customerInfo = {
  name: "John Doe",
  email: "johndoe@gmail.com",
  contact: "+44 7911 123456",
  address:
    "Flat 12, Maple Court, 221B Baker Street, London, NW1 6XE, United Kingdom",
};

const paymentInfo = {
  transactionId: "123456789097",
  amount: "€10,200",
  status: "Completed",
  transactionIp: "98.141.16.195",
  date: "Feb 26, 2025 20:00",
  store: "ABCDEFG",
};

const moreInfo = {
  ticketId: "123456789097",
  seller: "Tickstock",
  source: "Tickstock",
  ticketCreated: "Feb 26, 2025 20:00",
  lastTicketUpdated: "Feb 26, 2025 20:00",
  ticketDeleted: "Feb 26, 2025 20:00",
};

const deliveryInfo = {
  type: "E-Ticket",
  deliveryFee: "€0",
  contact: "+44 7911 123456",
  status: "Not uploaded",
  orderStatus: "Pending",
  emailSent: "Pending",
};

const attachedTickets = [
  "newcastle-manchesterutd-ticket.pdf",
  "newcastle-manchesterutd-ticket.pdf",
];

const attachedLinks = [
  "https://www.seatcombo.com/abcdticket",
  "https://www.seatcombo.com/abcdticket",
];

export const OrderDetailsSection = () => {
  const [expandedSections, setExpandedSections] = useState({
    eTickets: true,
    links: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="flex flex-col w-full items-start relative overflow-auto">
      <div className="flex flex-col items-start relative self-stretch w-full">
        <header className="flex w-full items-center gap-3 px-8 py-5 bg-transparent border-b border-design-tokens-color-primarystroke bg-[linear-gradient(180deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_100%)]">
          <div className="relative flex-1 font-header-h4 font-[number:var(--header-h4-font-weight)] text-colors-neutral-black text-[length:var(--header-h4-font-size)] tracking-[var(--header-h4-letter-spacing)] leading-[var(--header-h4-line-height)] [font-style:var(--header-h4-font-style)]">
            Order details
          </div>

          <div className="inline-flex items-center gap-6 relative">
            <div className="inline-flex items-center relative">
              <div className="inline-flex items-center gap-1 relative">
                <img
                  className="relative w-[26.67px] h-5"
                  alt="United kingdom GB"
                  src="https://c.animaapp.com/kgt7Mvyv/img/united-kingdom--gb-.svg"
                />
                <div className="relative w-fit font-action-item-medium font-[number:var(--action-item-medium-font-weight)] text-colors-neutral-black-duplicate text-[length:var(--action-item-medium-font-size)] tracking-[var(--action-item-medium-letter-spacing)] leading-[var(--action-item-medium-line-height)] whitespace-nowrap [font-style:var(--action-item-medium-font-style)]">
                  English
                </div>
              </div>
              <ChevronDownIcon className="w-4 h-4" />
            </div>

            <div className="inline-flex items-center gap-1 relative">
              <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-colors-neutral-black text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                Rey&apos;s Store
              </div>
              <ChevronDownIcon className="w-3.5 h-3.5" />
            </div>

            <div className="inline-flex items-center justify-end gap-6 relative">
              <div className="relative w-6 h-6 bg-[url(https://c.animaapp.com/kgt7Mvyv/img/icon-3.svg)] bg-[100%_100%]">
                <div className="relative w-2 h-2 left-[15px] bg-colors-brand-primary-red rounded" />
              </div>
            </div>
          </div>
        </header>

        <div className="flex flex-col w-full items-start gap-2.5 px-8 py-5">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="font-body-medium font-[number:var(--body-medium-font-weight)] text-colors-neutral-gray-50 text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]">
                  Orders
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRightIcon className="w-4 h-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink className="font-body-medium font-[number:var(--body-medium-font-weight)] text-colors-neutral-gray-50 text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]">
                  All Orders
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRightIcon className="w-4 h-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <div className="font-body-medium font-[number:var(--body-medium-font-weight)] text-colors-neutral-black text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]">
                  #SC14364 Details
                </div>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="flex flex-col items-center gap-2.5 px-8 py-2 relative self-stretch w-full bg-colors-neutral-gray-10 border-t border-b border-design-tokens-color-primarystroke">
          <div className="flex items-center justify-between relative self-stretch w-full">
            <div className="inline-flex items-center gap-6 relative">
              <div className="inline-flex items-center justify-center gap-3 relative">
                <div className="inline-flex items-center gap-2 relative">
                  <img
                    className="relative w-6 h-6 object-cover"
                    alt="Arsenal fc logo svg"
                    src={eventData.homeTeamLogo}
                  />
                  <div className="relative w-fit font-header-h5 font-[number:var(--header-h5-font-weight)] text-colors-neutral-gray-80 text-[length:var(--header-h5-font-size)] text-center tracking-[var(--header-h5-letter-spacing)] leading-[var(--header-h5-line-height)] whitespace-nowrap [font-style:var(--header-h5-font-style)]">
                    {eventData.homeTeam}
                  </div>
                </div>

                <img
                  className="relative w-4 h-4"
                  alt="Icons"
                  src="https://c.animaapp.com/kgt7Mvyv/img/icons.svg"
                />

                <div className="inline-flex items-center gap-2 relative">
                  <img
                    className="relative w-6 h-6 object-cover"
                    alt="Arsenal fc logo svg"
                    src={eventData.awayTeamLogo}
                  />
                  <div className="relative w-[131px] font-header-h5 font-[number:var(--header-h5-font-weight)] text-colors-neutral-gray-80 text-[length:var(--header-h5-font-size)] text-center tracking-[var(--header-h5-letter-spacing)] leading-[var(--header-h5-line-height)] [font-style:var(--header-h5-font-style)]">
                    {eventData.awayTeam}
                  </div>
                </div>
              </div>

              <Separator orientation="vertical" className="h-3" />

              <div className="inline-flex gap-4 items-center relative">
                <div className="inline-flex items-center gap-1 relative">
                  <img
                    className="relative w-4 h-4"
                    alt="Icons"
                    src="https://c.animaapp.com/kgt7Mvyv/img/icons-1.svg"
                  />
                  <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-colors-neutral-black-duplicate text-sm text-center tracking-[0] leading-[16.8px] whitespace-nowrap">
                    {eventData.date}
                  </div>
                </div>

                <div className="inline-flex items-center gap-1 relative">
                  <img
                    className="relative w-4 h-4"
                    alt="Icons"
                    src="https://c.animaapp.com/kgt7Mvyv/img/icons-2.svg"
                  />
                  <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-colors-neutral-black-duplicate text-sm text-center tracking-[0] leading-[16.8px] whitespace-nowrap">
                    {eventData.venue}
                  </div>
                </div>

                <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-colors-neutral-black-duplicate text-sm text-center tracking-[0] leading-[16.8px] whitespace-nowrap">
                  {eventData.league}
                </div>
              </div>

              <div className="inline-flex items-center gap-1 relative">
                <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-colors-brand-primary-red text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                  View Stadium Map
                </div>
                <ExternalLinkIcon className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start relative flex-1 self-stretch w-full grow overflow-x-hidden">
        <div className="flex flex-col w-[50%] min-w-[450px] items-start gap-11 p-8 relative bg-colors-neutral-white overflow-y-auto max-h-[calc(100vh-200px)]">
          <div className="flex flex-col items-start gap-2.5 pt-0 pb-6 px-0 relative self-stretch w-full border-b border-design-tokens-color-primarystroke">
            <div className="flex flex-col items-end gap-4 relative self-stretch w-full">
              <div className="flex items-center gap-8 relative self-stretch w-full">
                <div className="h-[42px] gap-3 flex-1 grow flex flex-col items-start relative">
                  <div className="relative w-fit font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                    Order ID
                  </div>
                  <div className="items-center gap-1 flex relative self-stretch w-full">
                    <div className="relative w-fit font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-colors-neutral-black text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] whitespace-nowrap [font-style:var(--body-small-semibold-font-style)]">
                      {orderData.orderId}
                    </div>
                    <CopyIcon className="w-4 h-4" />
                  </div>
                </div>

                <div className="w-[130px] h-[42px] gap-3 flex flex-col items-start relative">
                  <div className="relative w-fit font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                    Seller
                  </div>
                  <div className="items-center gap-1 flex relative self-stretch w-full">
                    <div className="w-fit whitespace-nowrap relative font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-colors-neutral-black text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] [font-style:var(--body-small-semibold-font-style)]">
                      {orderData.seller}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                  <div className="relative w-fit font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                    Payment
                  </div>
                  <Badge className="bg-[#ddffe1] text-colors-success text-xs h-6">
                    {orderData.payment}
                  </Badge>
                </div>

                <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                  <div className="relative w-fit font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                    Booking Status
                  </div>
                  <Badge className="bg-[#ffe57f] text-[#705a00] text-xs h-6">
                    {orderData.bookingStatus}
                  </Badge>
                </div>
              </div>

              <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
                <div className="grid grid-cols-[260px_100px_81px_85px] relative w-[526px] h-[34px]">
                  <div className="flex items-center gap-1 p-3 bg-colors-neutral-gray-10 border-t border-b border-design-tokens-color-primarystroke">
                    <div className="relative w-fit font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                      Item
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-1 p-3 bg-colors-neutral-gray-10 border-t border-b border-design-tokens-color-primarystroke">
                    <div className="relative w-fit font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                      Price
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-1 p-3 bg-colors-neutral-gray-10 border-t border-b border-design-tokens-color-primarystroke">
                    <div className="relative w-fit font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                      Quantity
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-1 p-3 bg-colors-neutral-gray-10 border-t border-b border-design-tokens-color-primarystroke">
                    <div className="relative w-fit font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                      Total
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-4 relative self-stretch w-full">
                  {orderItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-4 pt-0 pb-4 px-3 relative self-stretch w-full border-b border-design-tokens-color-primarystroke"
                    >
                      <div className="grid grid-cols-[236px_1fr_1fr_1fr] gap-4 items-start relative w-[500px] h-[70px]">
                        <div className="flex flex-col items-start gap-4">
                          <div className="relative self-stretch [font-family:'Inter',Helvetica] font-medium text-colors-neutral-black-duplicate text-sm tracking-[0] leading-[normal]">
                            {item.name}
                          </div>
                          <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
                            <div className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-colors-neutral-gray-70 text-xs tracking-[0] leading-[14.4px]">
                              {item.details}
                            </div>
                            <div className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-colors-neutral-gray-70 text-xs tracking-[0] leading-[14.4px]">
                              {item.venue}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-end">
                          <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-colors-neutral-black-duplicate text-sm text-center tracking-[0] leading-[normal] whitespace-nowrap">
                            {item.price}
                          </div>
                        </div>
                        <div className="flex items-center justify-end">
                          <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-colors-neutral-black-duplicate text-sm text-center tracking-[0] leading-[normal] whitespace-nowrap">
                            {item.quantity}
                          </div>
                        </div>
                        <div className="flex items-center justify-end">
                          <div className="font-medium text-sm text-center leading-[normal] relative w-fit [font-family:'Inter',Helvetica] text-colors-neutral-black-duplicate tracking-[0] whitespace-nowrap">
                            {item.total}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="flex flex-col w-[238px] items-start gap-4 relative">
                    <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
                      <div className="h-3 items-center gap-8 flex relative self-stretch w-full">
                        <div className="relative flex-1 [font-family:'Inter',Helvetica] font-medium text-colors-neutral-gray-70 text-sm tracking-[0] leading-[normal]">
                          Sub Total
                        </div>
                        <div className="flex items-center justify-end gap-1 relative flex-1 grow">
                          <div className="font-medium text-sm text-center leading-[normal] relative w-fit [font-family:'Inter',Helvetica] text-colors-neutral-black-duplicate tracking-[0] whitespace-nowrap">
                            €10,000
                          </div>
                        </div>
                      </div>

                      <div className="h-3 items-center gap-8 flex relative self-stretch w-full">
                        <div className="relative flex-1 [font-family:'Inter',Helvetica] font-medium text-colors-neutral-gray-70 text-sm tracking-[0] leading-[normal]">
                          Seller Fee
                        </div>
                        <div className="flex items-center justify-end gap-1 relative flex-1 grow">
                          <div className="font-medium text-sm text-center leading-[normal] relative w-fit [font-family:'Inter',Helvetica] text-colors-neutral-black-duplicate tracking-[0] whitespace-nowrap">
                            €0
                          </div>
                        </div>
                      </div>

                      <div className="h-3 items-center gap-8 flex relative self-stretch w-full">
                        <div className="relative flex-1 [font-family:'Inter',Helvetica] font-medium text-colors-neutral-gray-70 text-sm tracking-[0] leading-[normal]">
                          Tax
                        </div>
                        <div className="flex items-center justify-end gap-1 relative flex-1 grow">
                          <div className="font-medium text-sm text-center leading-[normal] relative w-fit [font-family:'Inter',Helvetica] text-colors-neutral-black-duplicate tracking-[0] whitespace-nowrap">
                            €200
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator className="self-stretch w-full" />

                    <div className="flex h-[15px] items-center gap-8 relative self-stretch w-full">
                      <div className="relative flex-1 [font-family:'Inter',Helvetica] font-medium text-colors-neutral-black-duplicate text-sm tracking-[0] leading-[normal]">
                        Total
                      </div>
                      <div className="flex items-center justify-end gap-1 relative flex-1 grow">
                        <div className="font-[number:var(--header-h4-font-weight)] text-[length:var(--header-h4-font-size)] text-right leading-[var(--header-h4-line-height)] relative w-fit font-header-h4 text-colors-neutral-black-duplicate tracking-[var(--header-h4-letter-spacing)] whitespace-nowrap [font-style:var(--header-h4-font-style)]">
                          €10,200
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-8 relative self-stretch w-full">
            <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
              <div className="flex items-center justify-between relative self-stretch w-full">
                <div className="inline-flex items-center gap-1 relative">
                  <div className="relative w-fit font-body-medium-bold font-[number:var(--body-medium-bold-font-weight)] text-colors-neutral-black text-[length:var(--body-medium-bold-font-size)] tracking-[var(--body-medium-bold-letter-spacing)] leading-[var(--body-medium-bold-line-height)] whitespace-nowrap [font-style:var(--body-medium-bold-font-style)]">
                    Attendees Details
                  </div>
                  <Badge className="bg-colors-neutral-gray-20 text-colors-neutral-black-duplicate text-[length:var(--body-tiny-font-size)] h-4 rounded-full">
                    2
                  </Badge>
                </div>

                <Button
                  variant="ghost"
                  className="inline-flex items-center gap-1 text-colors-brand-primary-red h-auto p-0"
                >
                  <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-colors-brand-primary-red text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                    Add Attendee
                  </div>
                  <PlusIcon className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
                <div className="flex flex-col items-start relative self-stretch w-full">
                  {attendees.map((attendee, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2.5 px-0 py-4 relative self-stretch w-full border-t border-b border-design-tokens-color-primarystroke-duplicate"
                    >
                      <div className="flex flex-col items-start gap-3 relative flex-1 grow">
                        <div className="flex w-[348.41px] items-center gap-2 relative">
                          <div className="inline-flex items-center gap-1 relative">
                            <div className="relative w-fit font-action-item-medium font-[number:var(--action-item-medium-font-weight)] text-colors-neutral-black-duplicate text-[length:var(--action-item-medium-font-size)] tracking-[var(--action-item-medium-letter-spacing)] leading-[var(--action-item-medium-line-height)] whitespace-nowrap [font-style:var(--action-item-medium-font-style)]">
                              {attendee.name}
                            </div>
                          </div>
                        </div>
                        <div className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-colors-neutral-gray-80 text-sm tracking-[0] leading-[16.8px]">
                          {attendee.details}
                        </div>
                      </div>
                      <img
                        className="relative w-6 h-6"
                        alt="Icons"
                        src="https://c.animaapp.com/kgt7Mvyv/img/icons-4.svg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
              <Card className="relative self-stretch w-full rounded-[var(--design-tokens-radius-medium)] overflow-hidden border border-solid border-design-tokens-color-primarystroke">
                <CardHeader className="flex items-center gap-2.5 p-3 bg-colors-neutral-gray-10">
                  <div
                    className="relative w-fit font-body-
small-semibold font-[number:var(--body-small-semibold-font-weight)] text-colors-neutral-black text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] whitespace-nowrap [font-style:var(--body-small-semibold-font-style)]"
                  >
                    Customer information
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col items-start gap-8 p-4 bg-colors-neutral-white">
                  <div className="flex flex-wrap items-start gap-[32px_32px] relative self-stretch w-full">
                    <div className="w-[231px] gap-3 flex flex-col items-start relative">
                      <div className="relative w-fit font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                        Name
                      </div>
                      <div className="items-center gap-1 flex relative self-stretch w-full">
                        <div className="w-fit whitespace-nowrap relative font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-colors-neutral-black text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] [font-style:var(--body-small-semibold-font-style)]">
                          {customerInfo.name}
                        </div>
                      </div>
                    </div>

                    <div className="w-[231px] gap-3 flex flex-col items-start relative">
                      <div className="relative w-fit font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                        Email
                      </div>
                      <div className="items-center gap-1 flex relative self-stretch w-full">
                        <div className="relative w-fit font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-colors-neutral-black text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] whitespace-nowrap [font-style:var(--body-small-semibold-font-style)]">
                          {customerInfo.email}
                        </div>
                        <img
                          className="relative w-4 h-4"
                          alt="Icon"
                          src="https://c.animaapp.com/kgt7Mvyv/img/icon-9.svg"
                        />
                        <img
                          className="relative w-4 h-4"
                          alt="Icon"
                          src="https://c.animaapp.com/kgt7Mvyv/img/icon-2-1.svg"
                        />
                      </div>
                    </div>

                    <div className="w-[232px] gap-3 flex flex-col items-start relative">
                      <div className="relative w-fit font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                        Contact
                      </div>
                      <div className="items-center gap-1 flex relative self-stretch w-full">
                        <div className="relative w-fit font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-colors-neutral-black text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] whitespace-nowrap [font-style:var(--body-small-semibold-font-style)]">
                          {customerInfo.contact}
                        </div>
                        <img
                          className="relative w-4 h-4"
                          alt="Icon"
                          src="https://c.animaapp.com/kgt7Mvyv/img/icon-10.svg"
                        />
                      </div>
                    </div>

                    <div className="w-[230px] gap-3 flex flex-col items-start relative">
                      <div className="relative w-fit font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                        Address
                      </div>
                      <div className="items-center gap-1 flex relative self-stretch w-full">
                        <div className="flex-1 relative font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-colors-neutral-black text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] [font-style:var(--body-small-semibold-font-style)]">
                          {customerInfo.address}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative self-stretch w-full rounded-[var(--design-tokens-radius-medium)] overflow-hidden border border-solid border-design-tokens-color-primarystroke">
                <CardHeader className="flex items-center gap-2.5 p-3 bg-colors-neutral-gray-10">
                  <div className="relative w-fit font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-colors-neutral-black text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] whitespace-nowrap [font-style:var(--body-small-semibold-font-style)]">
                    Payment information
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col items-start gap-8 p-4 bg-colors-neutral-white">
                  <div className="flex flex-wrap items-start gap-[32px_32px] relative self-stretch w-full">
                    <div className="w-[231px] gap-3 flex flex-col items-start relative">
                      <div className="relative w-fit font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                        Transaction ID
                      </div>
                      <div className="items-center gap-1 flex relative self-stretch w-full">
                        <div className="w-fit whitespace-nowrap relative font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-colors-neutral-black text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] [font-style:var(--body-small-semibold-font-style)]">
                          {paymentInfo.transactionId}
                        </div>
                      </div>
                    </div>

                    <div className="w-[231px] gap-3 flex flex-col items-start relative">
                      <div className="relative w-fit font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                        Amount
                      </div>
                      <div className="items-center gap-1 flex relative self-stretch w-full">
                        <div className="w-fit whitespace-nowrap relative font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-colors-neutral-black text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] [font-style:var(--body-small-semibold-font-style)]">
                          {paymentInfo.amount}
                        </div>
                      </div>
                    </div>

                    <div className="w-[231px] gap-2 flex flex-col items-start relative">
                      <div className="relative w-fit font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                        Status
                      </div>
                      <Badge className="bg-[#ddffe1] text-colors-success text-xs h-6">
                        {paymentInfo.status}
                      </Badge>
                    </div>

                    <div className="w-[231px] gap-3 flex flex-col items-start relative">
                      <div className="relative w-fit font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                        Transaction IP
                      </div>
                      <div className="items-center gap-1 flex relative self-stretch w-full">
                        <div className="relative w-fit font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-colors-neutral-black text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] whitespace-nowrap [font-style:var(--body-small-semibold-font-style)]">
                          {paymentInfo.transactionIp}
                        </div>
                      </div>
                    </div>

                    <div className="w-[231px] gap-3 flex flex-col items-start relative">
                      <div className="relative w-fit font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                        Date
                      </div>
                      <div className="items-center gap-1 flex relative self-stretch w-full">
                        <div className="w-fit whitespace-nowrap relative font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-colors-neutral-black text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] [font-style:var(--body-small-semibold-font-style)]">
                          {paymentInfo.date}
                        </div>
                      </div>
                    </div>

                    <div className="w-[231px] gap-3 flex flex-col items-start relative">
                      <div className="relative w-fit font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                        Store
                      </div>
                      <div className="items-center gap-1 flex relative self-stretch w-full">
                        <div className="w-fit whitespace-nowrap relative font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-colors-neutral-black text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] [font-style:var(--body-small-semibold-font-style)]">
                          {paymentInfo.store}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative self-stretch w-full rounded-[var(--design-tokens-radius-medium)] overflow-hidden border border-solid border-design-tokens-color-primarystroke">
                <CardHeader className="flex items-center gap-2.5 p-3 bg-colors-neutral-gray-10">
                  <div className="relative w-fit font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-colors-neutral-black text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] whitespace-nowrap [font-style:var(--body-small-semibold-font-style)]">
                    More Information
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col items-start gap-8 p-4 bg-colors-neutral-white">
                  <div className="flex flex-wrap items-start gap-[32px_32px] relative self-stretch w-full">
                    <div className="w-[231px] gap-3 flex flex-col items-start relative">
                      <div className="relative w-fit font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                        Ticket ID
                      </div>
                      <div className="items-center gap-1 flex relative self-stretch w-full">
                        <div className="w-fit whitespace-nowrap relative font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-colors-neutral-black text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] [font-style:var(--body-small-semibold-font-style)]">
                          {moreInfo.ticketId}
                        </div>
                      </div>
                    </div>

                    <div className="w-[231px] gap-3 flex flex-col items-start relative">
                      <div className="relative w-fit font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                        Seller
                      </div>
                      <div className="items-center gap-1 flex relative self-stretch w-full">
                        <div className="w-fit whitespace-nowrap relative font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-colors-neutral-black text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] [font-style:var(--body-small-semibold-font-style)]">
                          {moreInfo.seller}
                        </div>
                      </div>
                    </div>

                    <div className="w-[231px] gap-3 flex flex-col items-start relative">
                      <div className="relative w-fit font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                        Source
                      </div>
                      <div className="items-center gap-1 flex relative self-stretch w-full">
                        <div className="w-fit whitespace-nowrap relative font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-colors-neutral-black text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] [font-style:var(--body-small-semibold-font-style)]">
                          {moreInfo.source}
                        </div>
                      </div>
                    </div>

                    <div className="w-[231px] gap-3 flex flex-col items-start relative">
                      <div className="relative w-fit font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                        Ticket created
                      </div>
                      <div className="items-center gap-1 flex relative self-stretch w-full">
                        <div className="w-fit whitespace-nowrap relative font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-colors-neutral-black text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] [font-style:var(--body-small-semibold-font-style)]">
                          {moreInfo.ticketCreated}
                        </div>
                      </div>
                    </div>

                    <div className="w-[231px] gap-3 flex flex-col items-start relative">
                      <div className="relative w-fit font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                        Last ticket updated
                      </div>
                      <div className="items-center gap-1 flex relative self-stretch w-full">
                        <div className="w-fit whitespace-nowrap relative font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-colors-neutral-black text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] [font-style:var(--body-small-semibold-font-style)]">
                          {moreInfo.lastTicketUpdated}
                        </div>
                      </div>
                    </div>

                    <div className="w-[231px] gap-3 flex flex-col items-start relative">
                      <div className="relative w-fit font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                        Ticket deleted
                      </div>
                      <div className="items-center gap-1 flex relative self-stretch w-full">
                        <div className="w-fit whitespace-nowrap relative font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-colors-neutral-black text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] [font-style:var(--body-small-semibold-font-style)]">
                          {moreInfo.ticketDeleted}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative self-stretch w-full rounded-[var(--design-tokens-radius-medium)] overflow-hidden border border-solid border-design-tokens-color-primarystroke">
                <CardHeader className="flex items-center gap-2.5 p-3 bg-colors-neutral-gray-10">
                  <div className="relative w-fit font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-colors-neutral-black text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] whitespace-nowrap [font-style:var(--body-small-semibold-font-style)]">
                    Delivery information
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col items-start gap-8 p-4 bg-colors-neutral-white">
                  <div className="flex flex-wrap items-start gap-[32px_32px] relative self-stretch w-full">
                    <div className="w-[231px] gap-3 flex flex-col items-start relative">
                      <div className="relative w-fit font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                        Type
                      </div>
                      <div className="items-center gap-1 flex relative self-stretch w-full">
                        <div className="w-fit whitespace-nowrap relative font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-colors-neutral-black text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] [font-style:var(--body-small-semibold-font-style)]">
                          {deliveryInfo.type}
                        </div>
                      </div>
                    </div>

                    <div className="w-[231px] gap-3 flex flex-col items-start relative">
                      <div className="relative w-fit font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                        Delivery fee
                      </div>
                      <div className="items-center gap-1 flex relative self-stretch w-full">
                        <div className="w-fit whitespace-nowrap relative font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-colors-neutral-black text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] [font-style:var(--body-small-semibold-font-style)]">
                          {deliveryInfo.deliveryFee}
                        </div>
                      </div>
                    </div>

                    <div className="w-[231px] gap-3 flex flex-col items-start relative">
                      <div className="relative w-fit font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                        Contact
                      </div>
                      <div className="items-center gap-1 flex relative self-stretch w-full">
                        <div className="relative w-fit font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-colors-neutral-black text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] whitespace-nowrap [font-style:var(--body-small-semibold-font-style)]">
                          {deliveryInfo.contact}
                        </div>
                      </div>
                    </div>

                    <div className="w-[231px] gap-2 flex flex-col items-start relative">
                      <div className="relative w-fit font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                        Status
                      </div>
                      <Badge className="bg-[#ffe57f] text-[#705a00] text-xs h-6">
                        {deliveryInfo.status}
                      </Badge>
                    </div>

                    <div className="w-[231px] gap-2 flex flex-col items-start relative">
                      <div className="relative w-fit font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                        Order Status
                      </div>
                      <Badge className="bg-[#ffe57f] text-[#705a00] text-xs h-6">
                        {deliveryInfo.orderStatus}
                      </Badge>
                    </div>

                    <div className="w-[231px] gap-2 flex flex-col items-start relative">
                      <div className="relative w-fit font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                        Email sent
                      </div>
                      <Badge className="bg-[#ffe57f] text-[#705a00] text-xs h-6">
                        {deliveryInfo.emailSent}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[50%] min-w-[450px] items-start pt-0 pb-8 px-0 relative self-stretch bg-colors-neutral-white border-l border-design-tokens-color-primarystroke overflow-y-auto max-h-[calc(100vh-200px)]">
          <div className="flex flex-col w-full items-start gap-2.5 px-8 py-0 relative border-b border-design-tokens-color-primarystroke">
            <Tabs defaultValue="tickets" className="w-full">
              <TabsList className="flex self-stretch w-full border-b border-design-tokens-color-primarystroke bg-transparent h-auto p-0 rounded-none">
                <TabsTrigger
                  value="actions"
                  className="inline-flex items-center justify-center gap-1 px-5 py-4 border-b border-design-tokens-color-primarystroke data-[state=active]:border-colors-brand-primary-red data-[state=active]:text-colors-neutral-gray-70 text-colors-neutral-gray-70 bg-transparent rounded-none"
                >
                  <img
                    className="relative w-6 h-6"
                    alt="Icon"
                    src="https://c.animaapp.com/kgt7Mvyv/img/icon-11.svg"
                  />
                  <div className="relative w-fit font-action-item-large font-[number:var(--action-item-large-font-weight)] text-[length:var(--action-item-large-font-size)] tracking-[var(--action-item-large-letter-spacing)] leading-[var(--action-item-large-line-height)] whitespace-nowrap [font-style:var(--action-item-large-font-style)]">
                    Actions
                  </div>
                </TabsTrigger>
                <TabsTrigger
                  value="tickets"
                  className="inline-flex items-center justify-center gap-1 px-5 py-4 border-b border-design-tokens-color-primarystroke data-[state=active]:border-colors-brand-primary-red data-[state=active]:text-colors-brand-primary-red text-colors-neutral-gray-70 bg-transparent rounded-none"
                >
                  <img
                    className="relative w-6 h-6"
                    alt="Icon"
                    src="https://c.animaapp.com/kgt7Mvyv/img/icon-12.svg"
                  />
                  <div className="relative w-fit font-action-item-large font-[number:var(--action-item-large-font-weight)] text-[length:var(--action-item-large-font-size)] tracking-[var(--action-item-large-letter-spacing)] leading-[var(--action-item-large-line-height)] whitespace-nowrap [font-style:var(--action-item-large-font-style)]">
                    Tickets
                  </div>
                </TabsTrigger>
                <TabsTrigger
                  value="instructions"
                  className="inline-flex items-center justify-center gap-1 px-5 py-4 border-b border-design-tokens-color-primarystroke data-[state=active]:border-colors-brand-primary-red data-[state=active]:text-colors-neutral-gray-70 text-colors-neutral-gray-70 bg-transparent rounded-none"
                >
                  <img
                    className="relative w-6 h-6"
                    alt="Icon"
                    src="https://c.animaapp.com/kgt7Mvyv/img/icon-13.svg"
                  />
                  <div className="relative w-fit font-action-item-large font-[number:var(--action-item-large-font-weight)] text-[length:var(--action-item-large-font-size)] tracking-[var(--action-item-large-letter-spacing)] leading-[var(--action-item-large-line-height)] whitespace-nowrap [font-style:var(--action-item-large-font-style)]">
                    Instructions
                  </div>
                </TabsTrigger>
                <TabsTrigger
                  value="activity"
                  className="inline-flex items-center justify-center gap-1 px-5 py-4 border-b border-design-tokens-color-primarystroke data-[state=active]:border-colors-brand-primary-red data-[state=active]:text-colors-neutral-gray-70 text-colors-neutral-gray-70 bg-transparent rounded-none"
                >
                  <div className="relative w-6 h-6">
                    <img
                      className="absolute w-[22px] h-[22px] top-px left-px"
                      alt="Union"
                      src="https://c.animaapp.com/kgt7Mvyv/img/union.svg"
                    />
                  </div>
                  <div className="relative w-fit font-action-item-large font-[number:var(--action-item-large-font-weight)] text-[length:var(--action-item-large-font-size)] tracking-[var(--action-item-large-letter-spacing)] leading-[var(--action-item-large-line-height)] whitespace-nowrap [font-style:var(--action-item-large-font-style)]">
                    Activity
                  </div>
                </TabsTrigger>
              </TabsList>

              <TabsContent
                value="actions"
                className="flex flex-col items-start gap-8 px-8 py-4 relative self-stretch w-full"
              >
                <div className="text-center">Actions content</div>
              </TabsContent>

              <TabsContent
                value="tickets"
                className="flex flex-col items-start gap-8 px-8 py-4 relative self-stretch w-full"
              >
                <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                  <div className="flex flex-col items-start gap-3 px-0 py-4 relative self-stretch w-full border-t border-design-tokens-color-primarystroke-duplicate">
                    <button 
                      onClick={() => toggleSection('eTickets')} 
                      className="flex items-center justify-between relative self-stretch w-full cursor-pointer"
                    >
                      <div className="relative flex-1 font-body-medium-bold font-[number:var(--body-medium-bold-font-weight)] text-colors-neutral-black-duplicate text-[length:var(--body-medium-bold-font-size)] tracking-[var(--body-medium-bold-letter-spacing)] leading-[var(--body-medium-bold-line-height)] [font-style:var(--body-medium-bold-font-style)]">
                        E-Tickets
                      </div>
                      {expandedSections.eTickets ? (
                        <ChevronDownIcon className="w-6 h-6" />
                      ) : (
                        <ChevronRightIcon className="w-6 h-6" />
                      )}
                    </button>
                  </div>

                  {expandedSections.eTickets && (
                    <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
                      <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
                        <div className="items-center gap-1 flex relative self-stretch w-full">
                          <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-colors-neutral-black text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                            Upload Ticket
                          </div>
                        </div>

                        <div className="flex h-[98px] items-center justify-center gap-6 px-6 py-8 relative self-stretch w-full rounded-[var(--design-tokens-radius-medium)] border border-dashed border-design-tokens-color-primarystroke">
                          <UploadIcon className="w-11 h-11" />
                          <div className="inline-flex flex-col items-start gap-3 relative">
                            <div className="relative self-stretch font-body-medium-bold font-[number:var(--body-medium-bold-font-weight)] text-colors-neutral-black text-[length:var(--body-medium-bold-font-size)] tracking-[var(--body-medium-bold-letter-spacing)] leading-[var(--body-medium-bold-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-medium-bold-font-style)]">
                              Drop your file here, or browse
                            </div>
                            <div className="relative self-stretch font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-small-font-style)]">
                              Supports: PDF
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
                        <div className="relative self-stretch [font-family:'Inter',Helvetica] font-medium text-colors-neutral-black text-sm tracking-[0] leading-[normal]">
                          Attached tickets
                        </div>

                        <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                          {attachedTickets.map((ticket, index) => (
                            <div
                              key={index}
                              className="flex flex-col items-start gap-2.5 p-3 relative self-stretch w-full bg-colors-neutral-white rounded-[var(--design-tokens-radius-small)] border border-solid border-design-tokens-color-primarystroke"
                            >
                              <div className="flex gap-3 self-stretch w-full items-center relative">
                                <div className="flex items-center gap-2 relative flex-1 grow">
                                  <FileTextIcon className="w-6 h-6" />
                                  <div className="relative flex-1 [font-family:'Inter',Helvetica] font-medium text-colors-neutral-black text-sm tracking-[0] leading-[normal]">
                                    {ticket}
                                  </div>
                                </div>
                                <div className="inline-flex gap-4 items-center relative">
                                  <DownloadIcon className="w-5 h-5" />
                                  <Trash2Icon className="w-5 h-5" />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                  <div className="flex flex-col items-start gap-3 px-0 py-4 relative self-stretch w-full border-t border-design-tokens-color-primarystroke-duplicate">
                    <button 
                      onClick={() => toggleSection('links')} 
                      className="flex items-center justify-between relative self-stretch w-full cursor-pointer"
                    >
                      <div className="relative flex-1 font-body-medium-bold font-[number:var(--body-medium-bold-font-weight)] text-colors-neutral-black-duplicate text-[length:var(--body-medium-bold-font-size)] tracking-[var(--body-medium-bold-letter-spacing)] leading-[var(--body-medium-bold-line-height)] [font-style:var(--body-medium-bold-font-style)]">
                        Links
                      </div>
                      {expandedSections.links ? (
                        <ChevronDownIcon className="w-6 h-6" />
                      ) : (
                        <ChevronRightIcon className="w-6 h-6" />
                      )}
                    </button>
                  </div>

                  {expandedSections.links && (
                    <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
                      <div className="relative self-stretch [font-family:'Inter',Helvetica] font-medium text-colors-neutral-black text-sm tracking-[0] leading-[normal]">
                        Attached tickets
                      </div>

                      <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                        {attachedLinks.map((link, index) => (
                          <div
                            key={index}
                            className="flex flex-col items-start gap-2.5 p-3 relative self-stretch w-full bg-colors-neutral-white rounded-[var(--design-tokens-radius-small)] border border-solid border-design-tokens-color-primarystroke"
                          >
                            <div className="flex gap-3 self-stretch w-full items-center relative">
                              <div className="flex items-center gap-2 relative flex-1 grow">
                                <LinkIcon className="w-6 h-6" />
                                <div className="relative flex-1 [font-family:'Inter',Helvetica] font-medium text-colors-neutral-black text-sm tracking-[0] leading-[normal]">
                                  {link}
                                </div>
                              </div>
                              <div className="inline-flex gap-4 items-center relative">
                                <CopyIcon className="w-5 h-5" />
                                <ExternalLinkIcon className="w-5 h-5" />
                                <Trash2Icon className="w-5 h-5" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <Button
                        variant="ghost"
                        className="inline-flex items-center gap-1 text-colors-brand-primary-red h-auto p-0"
                      >
                        <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-colors-brand-primary-red text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                          Add New
                        </div>
                        <PlusIcon className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent
                value="instructions"
                className="flex flex-col items-start gap-8 px-8 py-4 relative self-stretch w-full"
              >
                <div className="text-center">Instructions content</div>
              </TabsContent>

              <TabsContent
                value="activity"
                className="flex flex-col items-start gap-8 px-8 py-4 relative self-stretch w-full"
              >
                <div className="text-center">Activity content</div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};
