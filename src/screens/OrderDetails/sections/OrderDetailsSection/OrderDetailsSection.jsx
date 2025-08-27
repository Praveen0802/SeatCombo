import {
  CalendarIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CopyIcon,
  ExternalLinkIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";

export const OrderDetailsSection = () => {
  const ticketDetails = [
    { label: "Ticket ID", value: "123456789097" },
    { label: "Seller", value: "Tickstock" },
    { label: "Source", value: "Tickstock" },
    { label: "Ticket created", value: "Feb 26, 2025 20:00" },
    { label: "Last ticket updated", value: "Feb 26, 2025 20:00" },
    { label: "Ticket deleted", value: "Feb 26, 2025 20:00" },
  ];

  const activityItems = [
    {
      icon: "https://c.animaapp.com/ojTQSo1k/img/icon-7.svg",
      title: "Email sent to customer",
      bgColor: "bg-colors-neutral-gray-10",
      borderColor: "border-colors-neutral-gray-50",
      textColor: "text-colors-neutral-gray-50",
    },
    {
      icon: "https://c.animaapp.com/ojTQSo1k/img/icon-8.svg",
      title: "Ticket generated",
      bgColor: "bg-colors-neutral-gray-10",
      borderColor: "border-colors-neutral-gray-50",
      textColor: "text-colors-neutral-gray-50",
    },
    {
      icon: "https://c.animaapp.com/ojTQSo1k/img/icon-9.svg",
      title: "Confirmation sent to seller",
      date: "June 10, 2025",
      status: "Pending",
      statusText: "Confirmation pending with XYZ",
      bgColor: "bg-colors-tints-red-5",
      borderColor: "border-colors-brand-primary-red",
      textColor: "text-colors-neutral-black",
    },
    {
      icon: "https://c.animaapp.com/ojTQSo1k/img/icon-10.svg",
      title: "Order confirmed",
      date: "June 10, 2025",
      status: "Confirmed",
      statusText: "Ticket ID: (ETK-BZP-2390)",
      bgColor: "bg-colors-brand-primary-red",
      borderColor: "",
      textColor: "text-colors-neutral-black",
      hasCheckmark: true,
    },
    {
      icon: "https://c.animaapp.com/ojTQSo1k/img/icon-12.svg",
      title: "Payment confirmed",
      date: "June 10, 2025",
      status: "Successful",
      statusText: "Transaction ID: (123XYZ)",
      bgColor: "bg-colors-brand-primary-red",
      borderColor: "",
      textColor: "text-colors-neutral-black",
      hasCheckmark: true,
    },
    {
      icon: "https://c.animaapp.com/ojTQSo1k/img/icon-14.svg",
      title: "Order created",
      date: "June 10, 2025",
      statusText: "Order placed by user John Doe (#SC14364)",
      bgColor: "bg-colors-brand-primary-red",
      borderColor: "",
      textColor: "text-colors-neutral-black",
      hasCheckmark: true,
    },
  ];

  const orderSummary = [
    { label: "Order ID", value: "#SC14364" },
    { label: "Seller", value: "1BoxOffice" },
    { label: "Payment", value: "Completed" },
    { label: "Booking Status", value: "Pending" },
  ];

  const customerInfo = [
    { label: "Name", value: "John Doe" },
    { label: "Email", value: "johndoe@gmail.com", hasIcons: true },
    { label: "Contact", value: "+44 7911 123456", hasPhone: true },
    {
      label: "Address",
      value:
        "Flat 12, Maple Court, 221B Baker Street, London, NW1 6XE, \nUnited Kingdom",
    },
  ];

  const paymentInfo = [
    { label: "Transaction ID", value: "123456789097" },
    { label: "Amount", value: "€10,200" },
    {
      label: "Status",
      value: "Completed",
      isBadge: true,
      badgeColor: "bg-[#ddffe1] text-colors-success",
    },
    { label: "Transaction IP", value: "98.141.16.195" },
    { label: "Date", value: "Feb 26, 2025 20:00" },
    { label: "Store", value: "ABCDEFG" },
  ];

  const moreInfo = [
    { label: "Ticket ID", value: "123456789097" },
    { label: "Seller", value: "Tickstock" },
    { label: "Source", value: "Tickstock" },
    { label: "Ticket created", value: "Feb 26, 2025 20:00" },
    { label: "Last ticket updated", value: "Feb 26, 2025 20:00" },
    { label: "Ticket deleted", value: "Feb 26, 2025 20:00" },
  ];

  const deliveryInfo = [
    { label: "Type", value: "E-Ticket" },
    { label: "Delivery fee", value: "€0" },
    { label: "Contact", value: "+44 7911 123456", hasPhone: true },
    {
      label: "Status",
      value: "Not uploaded",
      isBadge: true,
      badgeColor: "bg-[#ffe57f] text-[#705a00]",
    },
    {
      label: "Order Status",
      value: "Pending",
      isBadge: true,
      badgeColor: "bg-[#ffe57f] text-[#705a00]",
    },
    {
      label: "Email sent",
      value: "Pending",
      isBadge: true,
      badgeColor: "bg-[#ffe57f] text-[#705a00]",
    },
  ];

  return (
    <div className="flex flex-col w-full h-full items-start relative overflow-hidden">
      <div className="flex flex-col items-start relative self-stretch w-full flex-shrink-0">
        <div className="relative w-full">
          <header className="flex w-full items-center gap-3 px-8 py-5 bg-transparent border-b border-design-tokens-color-primarystroke bg-[linear-gradient(180deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_100%)]">
            <div className="relative flex-1 font-header-h4 font-[number:var(--header-h4-font-weight)] text-colors-neutral-black text-[length:var(--header-h4-font-size)] tracking-[var(--header-h4-letter-spacing)] leading-[var(--header-h4-line-height)] [font-style:var(--header-h4-font-style)]">
              Order details
            </div>

            <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
              <div className="inline-flex items-center relative flex-[0_0_auto]">
                <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                  <img
                    className="relative w-[26.67px] h-5"
                    alt="United kingdom GB"
                    src="https://c.animaapp.com/ojTQSo1k/img/united-kingdom--gb-.svg"
                  />

                  <div className="relative w-fit font-action-item-medium font-[number:var(--action-item-medium-font-weight)] text-colors-neutral-black-duplicate text-[length:var(--action-item-medium-font-size)] tracking-[var(--action-item-medium-letter-spacing)] leading-[var(--action-item-medium-line-height)] whitespace-nowrap [font-style:var(--action-item-medium-font-style)]">
                    English
                  </div>
                </div>

                <ChevronDownIcon className="relative w-4 h-4" />
              </div>

              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-colors-neutral-black text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                  Rey&apos;s Store
                </div>

                <ChevronDownIcon className="relative w-3.5 h-3.5" />
              </div>

              <div className="inline-flex items-center justify-end gap-6 relative flex-[0_0_auto]">
                <div className="relative w-6 h-6 bg-[url(https://c.animaapp.com/ojTQSo1k/img/icon-3.svg)] bg-[100%_100%]">
                  <div className="relative w-2 h-2 left-[15px] bg-colors-brand-primary-red rounded" />
                </div>
              </div>
            </div>
          </header>

          <div className="flex flex-col w-full items-start gap-2.5 px-8 py-5 flex-shrink-0">
            <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <div className="relative w-fit font-body-medium font-[number:var(--body-medium-font-weight)] text-colors-neutral-gray-50 text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)]">
                  Orders
                </div>

                <ChevronRightIcon className="relative w-4 h-4" />
              </div>

              <div className="gap-1 inline-flex items-center relative flex-[0_0_auto]">
                <div className="relative w-fit font-body-medium font-[number:var(--body-medium-font-weight)] text-colors-neutral-gray-50 text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)]">
                  All Orders
                </div>

                <ChevronRightIcon className="relative w-4 h-4" />
              </div>

              <div className="justify-center gap-2.5 inline-flex items-center relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-colors-neutral-black text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)]">
                  #SC14364 Details
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2.5 px-8 py-2 relative self-stretch w-full bg-colors-neutral-gray-10 border-t border-b border-design-tokens-color-primarystroke flex-shrink-0">
          <div className="flex items-center justify-between relative self-stretch w-full">
            <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
              <div className="inline-flex items-center justify-center gap-3 relative flex-[0_0_auto]">
                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                  <img
                    className="relative w-6 h-6 object-cover"
                    alt="Arsenal fc logo svg"
                    src="https://c.animaapp.com/ojTQSo1k/img/arsenal-fc-logo-svg@2x.png"
                  />

                  <div className="relative w-fit font-header-h5 font-[number:var(--header-h5-font-weight)] text-colors-neutral-gray-80 text-[length:var(--header-h5-font-size)] text-center tracking-[var(--header-h5-letter-spacing)] leading-[var(--header-h5-line-height)] whitespace-nowrap [font-style:var(--header-h5-font-style)]">
                    Newcastle
                  </div>
                </div>

                <img
                  className="relative w-4 h-4"
                  alt="Icons"
                  src="https://c.animaapp.com/ojTQSo1k/img/icons.svg"
                />

                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                  <img
                    className="relative w-6 h-6 object-cover"
                    alt="Arsenal fc logo svg"
                    src="https://c.animaapp.com/ojTQSo1k/img/arsenal-fc-logo-svg-1@2x.png"
                  />

                  <div className="relative w-[131px] font-header-h5 font-[number:var(--header-h5-font-weight)] text-colors-neutral-gray-80 text-[length:var(--header-h5-font-size)] text-center tracking-[var(--header-h5-letter-spacing)] leading-[var(--header-h5-line-height)] [font-style:var(--header-h5-font-style)]">
                    Manchester United
                  </div>
                </div>
              </div>

              <Separator orientation="vertical" className="h-3" />

              <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
                <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                  <CalendarIcon className="relative w-4 h-4" />

                  <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-colors-neutral-black-duplicate text-sm text-center tracking-[0] leading-[16.8px] whitespace-nowrap">
                    Wed, April 23, 7:30 AM
                  </div>
                </div>

                <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                  <MapPinIcon className="relative w-4 h-4" />

                  <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-colors-neutral-black-duplicate text-sm text-center tracking-[0] leading-[16.8px] whitespace-nowrap">
                    St James&apos; Park, London
                  </div>
                </div>

                <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-colors-neutral-black-duplicate text-sm text-center tracking-[0] leading-[16.8px] whitespace-nowrap">
                  English Premier League
                </div>
              </div>

              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-colors-brand-primary-red text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                  View Stadium Map
                </div>

                <ExternalLinkIcon className="relative w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start relative flex-1 self-stretch w-full grow overflow-hidden">
        <div className="flex flex-col w-[40%] items-start gap-6 px-8 py-6 relative bg-colors-neutral-white overflow-y-auto h-full">
          <Card className="relative self-stretch w-full rounded-[var(--design-tokens-radius-medium)] overflow-hidden border border-solid border-design-tokens-color-primarystroke mb-2">
            <div className="flex items-center gap-2.5 p-3 relative self-stretch w-full bg-colors-neutral-gray-10">
              <div className="relative w-fit mt-[-1.00px] font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-colors-neutral-black text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] whitespace-nowrap [font-style:var(--body-small-semibold-font-style)]">
                Ticket information
              </div>
            </div>
            <CardContent className="flex flex-col items-start gap-4 p-4 bg-colors-neutral-white">
              <div className="flex flex-wrap items-start gap-[32px_32px] relative self-stretch w-full">
                {ticketDetails.map((detail, index) => (
                  <div
                    key={index}
                    className="flex flex-col w-[231px] items-start gap-3 relative"
                  >
                    <div className="w-fit font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate whitespace-nowrap relative mt-[-1.00px] font-body-small text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                      {detail.label}
                    </div>

                    <div className="flex items-center gap-1 relative self-stretch w-full">
                      <div className="relative w-fit mt-[-1.00px] font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-colors-neutral-black text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] whitespace-nowrap [font-style:var(--body-small-semibold-font-style)]">
                        {detail.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col items-start gap-6 relative self-stretch w-full mt-6">
            <div className="relative w-fit mt-[-1.00px] font-body-medium-bold font-[number:var(--body-medium-bold-font-weight)] text-colors-neutral-black text-[length:var(--body-medium-bold-font-size)] tracking-[var(--body-medium-bold-letter-spacing)] leading-[var(--body-medium-bold-line-height)] whitespace-nowrap [font-style:var(--body-medium-bold-font-style)]">
              Activity
            </div>

            <div className="flex flex-col items-start gap-11 relative self-stretch w-full">
              <div className="absolute w-px h-[453px] top-[33px] left-[18px]">
                <img
                  className="absolute w-px h-[296px] top-[157px] -left-px object-cover"
                  alt="Line"
                  src="https://c.animaapp.com/ojTQSo1k/img/line-3.svg"
                />

                <img
                  className="absolute w-px h-[123px] top-0 -left-px object-cover"
                  alt="Line"
                  src="https://c.animaapp.com/ojTQSo1k/img/line-4.svg"
                />
              </div>

              {activityItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start gap-2 relative self-stretch w-full"
                >
                  <div className="flex items-center gap-2 relative self-stretch w-full">
                    <div
                      className={`relative w-[34px] h-[34px] ${item.bgColor} rounded-[17px] ${item.borderColor ? `border border-solid ${item.borderColor}` : ""}`}
                    >
                      <img
                        className="absolute w-5 h-5 top-1.5 left-1.5"
                        alt="Icon"
                        src={item.icon}
                      />
                    </div>

                    <div className="flex flex-col items-start justify-center gap-2 relative flex-1 grow">
                      <div
                        className={`flex items-center gap-1 relative self-stretch w-full ${item.hasCheckmark ? "" : ""}`}
                      >
                        <div
                          className={`relative w-fit ${item.hasCheckmark ? "" : "mt-[-1.00px]"} font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] ${item.textColor} text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] whitespace-nowrap [font-style:var(--body-small-semibold-font-style)]`}
                        >
                          {item.title}
                        </div>

                        {item.hasCheckmark && (
                          <div className="flex w-4 h-4 items-center justify-center gap-2.5 p-2 relative bg-colors-success rounded-[100px]">
                            <img
                              className="relative w-3 h-3 mt-[-6.00px] mb-[-6.00px] ml-[-6.00px] mr-[-6.00px]"
                              alt="Icon"
                              src="https://c.animaapp.com/ojTQSo1k/img/icon-15.svg"
                            />
                          </div>
                        )}
                      </div>

                      {item.date && (
                        <div className="relative w-fit font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                          {item.date}
                        </div>
                      )}
                    </div>
                  </div>

                  {(item.status || item.statusText) && (
                    <div className="flex items-center gap-2 pl-[42px] pr-0 py-0 relative self-stretch w-full">
                      {item.status && (
                        <Badge
                          className={`inline-flex h-6 items-center gap-1 p-2 relative rounded ${
                            item.status === "Pending"
                              ? "bg-[#ffe57f] text-[#705a00]"
                              : item.status === "Confirmed" ||
                                  item.status === "Successful"
                                ? "bg-[#ddffe1] text-colors-success"
                                : "bg-[#ffe57f] text-[#705a00]"
                          }`}
                        >
                          <div className="relative w-fit mt-[-1.50px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                            {item.status}
                          </div>
                        </Badge>
                      )}

                      {item.statusText && (
                        <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-colors-neutral-black text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                          {item.statusText}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[60%] items-center pt-0 pb-8 px-0 relative self-stretch bg-colors-neutral-white border-l border-design-tokens-color-primarystroke overflow-y-auto h-full">
          <Tabs defaultValue="order-details" className="w-full">
            <div className="flex flex-col w-full items-start gap-2.5 px-8 py-0 relative border-b border-design-tokens-color-primarystroke flex-shrink-0">
              <TabsList className="flex items-center relative self-stretch w-full bg-transparent p-0 h-auto">
                <TabsTrigger
                  value="order-details"
                  className="inline-flex items-center justify-center gap-1 px-5 py-4 relative border-b-2 border-colors-brand-primary-red data-[state=active]:border-colors-brand-primary-red data-[state=inactive]:border-design-tokens-color-primarystroke bg-transparent"
                >
                  <div className="relative w-fit mt-[-1.00px] font-action-item-large font-[number:var(--action-item-large-font-weight)] text-colors-brand-primary-red text-[length:var(--action-item-large-font-size)] tracking-[var(--action-item-large-letter-spacing)] leading-[var(--action-item-large-line-height)] whitespace-nowrap [font-style:var(--action-item-large-font-style)]">
                    Order Details
                  </div>
                </TabsTrigger>

                <TabsTrigger
                  value="actions"
                  className="inline-flex items-center justify-center gap-1 px-5 py-4 relative border-b-2 border-design-tokens-color-primarystroke data-[state=active]:border-colors-brand-primary-red bg-transparent"
                >
                  <div className="relative w-fit mt-[-1.00px] font-action-item-large font-[number:var(--action-item-large-font-weight)] text-colors-neutral-gray-70 text-[length:var(--action-item-large-font-size)] tracking-[var(--action-item-large-letter-spacing)] leading-[var(--action-item-large-line-height)] whitespace-nowrap [font-style:var(--action-item-large-font-style)]">
                    Actions
                  </div>
                </TabsTrigger>

                <TabsTrigger
                  value="instructions"
                  className="inline-flex items-center justify-center gap-1 px-5 py-4 relative border-b-2 border-design-tokens-color-primarystroke data-[state=active]:border-colors-brand-primary-red bg-transparent"
                >
                  <div className="relative w-fit mt-[-1.00px] font-action-item-large font-[number:var(--action-item-large-font-weight)] text-colors-neutral-gray-70 text-[length:var(--action-item-large-font-size)] tracking-[var(--action-item-large-letter-spacing)] leading-[var(--action-item-large-line-height)] whitespace-nowrap [font-style:var(--action-item-large-font-style)]">
                    Instructions
                  </div>
                </TabsTrigger>

                <TabsTrigger
                  value="attendees"
                  className="inline-flex items-center justify-center gap-1 px-5 py-4 relative border-b-2 border-design-tokens-color-primarystroke data-[state=active]:border-colors-brand-primary-red bg-transparent"
                >
                  <div className="relative w-fit mt-[-1.00px] font-action-item-large font-[number:var(--action-item-large-font-weight)] text-colors-neutral-gray-70 text-[length:var(--action-item-large-font-size)] tracking-[var(--action-item-large-letter-spacing)] leading-[var(--action-item-large-line-height)] whitespace-nowrap [font-style:var(--action-item-large-font-style)]">
                    Attendees
                  </div>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent
              value="order-details"
              className="flex flex-col items-start gap-6 relative self-stretch w-full mt-0 overflow-y-auto"
            >
              <div className="flex flex-col items-start gap-6 px-8 py-6 relative self-stretch w-full">
                <div className="flex flex-wrap items-center gap-[24px_32px] relative self-stretch w-full">
                  {orderSummary.map((item, index) => (
                    <div
                      key={index}
                      className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-colors-neutral-gray-80-duplicate text-sm tracking-[0] leading-[16.8px] whitespace-nowrap"
                    >
                      <span className="font-body-small font-[number:var(--body-small-font-weight)] text-[#555555] text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                        {item.label}:{" "}
                      </span>

                      <span className="font-[number:var(--body-small-semibold-font-weight)] font-body-small-semibold [font-style:var(--body-small-semibold-font-style)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] text-[length:var(--body-small-semibold-font-size)]">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
                  <div className="flex w-full border-t border-b border-design-tokens-color-primarystroke bg-colors-neutral-gray-10">
                    <div className="flex w-[50%] h-[34px] items-center gap-1 p-3 bg-colors-neutral-gray-10">
                      <div className="relative w-fit mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                        Item
                      </div>
                    </div>

                    <div className="w-[16%] flex h-[34px] items-center justify-center gap-1 p-3 bg-colors-neutral-gray-10">
                      <div className="relative w-fit mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                        Price
                      </div>
                    </div>

                    <div className="w-[16%] flex h-[34px] items-center justify-center gap-1 p-3 bg-colors-neutral-gray-10">
                      <div className="relative w-fit mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                        Quantity
                      </div>
                    </div>

                    <div className="w-[18%] flex h-[34px] items-center justify-center gap-1 p-3 bg-colors-neutral-gray-10">
                      <div className="relative w-fit mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                        Total
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-4 relative self-stretch w-full">
                    <div className="flex flex-col items-center gap-4 pt-0 pb-4 px-3 relative self-stretch w-full border-b border-design-tokens-color-primarystroke">
                      <div className="flex w-full">
                        <div className="flex flex-col w-[50%] items-start gap-4">
                          <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-colors-neutral-black-duplicate text-sm tracking-[0] leading-[normal]">
                            Newcaste vs Manchester United
                          </div>

                          <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
                            <div className="relative self-stretch mt-[-1.00px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-neutral-gray-70 text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]">
                              Wed, April 23, 7:30 AM, English Premier League
                            </div>

                            <div className="relative self-stretch font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-neutral-gray-70 text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]">
                              St James&apos; Park, London
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex w-[16%] items-center justify-center">
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-colors-neutral-black-duplicate text-sm text-center tracking-[0] leading-[normal] whitespace-nowrap">
                            €1000
                          </div>
                        </div>
                        
                        <div className="flex w-[16%] items-center justify-center">
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-colors-neutral-black-duplicate text-sm text-center tracking-[0] leading-[normal] whitespace-nowrap">
                            10
                          </div>
                        </div>
                        
                        <div className="flex w-[18%] items-center justify-center">
                          <div className="font-medium text-sm text-center leading-[normal] relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] text-colors-neutral-black-duplicate tracking-[0] whitespace-nowrap">
                            €10,000
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col w-[300px] items-start gap-4 relative ml-auto mr-3">
                      <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
                        <div className="flex h-3 items-center gap-8 relative self-stretch w-full">
                          <div className="relative flex-1 [font-family:'Inter',Helvetica] font-medium text-colors-neutral-gray-70 text-sm tracking-[0] leading-[normal]">
                            Sub Total
                          </div>

                          <div className="flex items-center justify-end gap-1 relative flex-1 grow">
                            <div className="font-medium text-sm text-center leading-[normal] relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] text-colors-neutral-black-duplicate tracking-[0] whitespace-nowrap">
                              €10,000
                            </div>
                          </div>
                        </div>

                        <div className="flex h-3 items-center gap-8 relative self-stretch w-full">
                          <div className="relative flex-1 [font-family:'Inter',Helvetica] font-medium text-colors-neutral-gray-70 text-sm tracking-[0] leading-[normal]">
                            Seller Fee
                          </div>

                          <div className="flex items-center justify-end gap-1 relative flex-1 grow">
                            <div className="font-medium text-sm text-center leading-[normal] relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] text-colors-neutral-black-duplicate tracking-[0] whitespace-nowrap">
                              €0
                            </div>
                          </div>
                        </div>

                        <div className="flex h-3 items-center gap-8 relative self-stretch w-full">
                          <div className="relative flex-1 [font-family:'Inter',Helvetica] font-medium text-colors-neutral-gray-70 text-sm tracking-[0] leading-[normal]">
                            Tax
                          </div>

                          <div className="flex items-center justify-end gap-1 relative flex-1 grow">
                            <div className="font-medium text-sm text-center leading-[normal] relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] text-colors-neutral-black-duplicate tracking-[0] whitespace-nowrap">
                              €200
                            </div>
                          </div>
                        </div>
                      </div>

                      <Separator className="relative self-stretch w-full h-px" />

                      <div className="flex h-[15px] items-center gap-8 relative self-stretch w-full">
                        <div className="relative flex-1 [font-family:'Inter',Helvetica] font-medium text-colors-neutral-black-duplicate text-sm tracking-[0] leading-[normal]">
                          Total
                        </div>

                        <div className="flex items-center justify-end gap-1 relative flex-1 grow">
                          <div className="font-[number:var(--header-h4-font-weight)] text-[length:var(--header-h4-font-size)] text-right leading-[var(--header-h4-line-height)] relative w-fit mt-[-1.00px] font-header-h4 text-colors-neutral-black-duplicate tracking-[var(--header-h4-letter-spacing)] whitespace-nowrap [font-style:var(--header-h4-font-style)]">
                            €10,200
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-4 px-8 py-0 relative self-stretch w-full">
                <Card className="flex flex-col items-start relative self-stretch w-full rounded-[var(--design-tokens-radius-medium)] overflow-hidden border border-solid border-design-tokens-color-primarystroke mb-2">
                  <div className="flex items-center gap-2.5 p-3 relative self-stretch w-full bg-colors-neutral-gray-10">
                    <div className="relative w-fit mt-[-1.00px] font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-colors-neutral-black text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] whitespace-nowrap [font-style:var(--body-small-semibold-font-style)]">
                      Customer information
                    </div>
                  </div>

                  <CardContent className="flex flex-col items-start gap-8 p-4 bg-colors-neutral-white">
                    <div className="flex flex-wrap items-start gap-[32px_32px] relative self-stretch w-full">
                      {customerInfo.map((info, index) => (
                        <div
                          key={index}
                          className={`flex flex-col ${info.label === "Address" ? "w-[230px]" : "w-[231px]"} items-start gap-3 relative`}
                        >
                          <div className="relative w-fit mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                            {info.label}
                          </div>

                          <div className="flex items-center gap-1 relative self-stretch w-full">
                            <div
                              className={`${info.label === "Address" ? "flex-1" : "w-fit"} ${info.label === "Address" ? "" : "mt-[-1.00px]"} ${info.label === "Address" ? "" : "whitespace-nowrap"} relative font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-colors-neutral-black text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] [font-style:var(--body-small-semibold-font-style)]`}
                            >
                              {info.value}
                            </div>

                            {info.hasIcons && (
                              <>
                                <MailIcon className="relative w-4 h-4" />
                                <CopyIcon className="relative w-4 h-4" />
                              </>
                            )}

                            {info.hasPhone && (
                              <PhoneIcon className="relative w-4 h-4" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="flex flex-col items-start relative self-stretch w-full rounded-[var(--design-tokens-radius-medium)] overflow-hidden border border-solid border-design-tokens-color-primarystroke mb-2">
                  <div className="flex items-center gap-2.5 p-3 relative self-stretch w-full bg-colors-neutral-gray-10">
                    <div className="mt-[-1.00px] font-[number:var(--body-small-semibold-font-weight)] text-colors-neutral-black relative w-fit font-body-small-semibold text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] whitespace-nowrap [font-style:var(--body-small-semibold-font-style)]">
                      Payment information
                    </div>
                  </div>

                  <CardContent className="flex flex-col items-start gap-8 p-4 bg-colors-neutral-white">
                    <div className="flex flex-wrap items-start gap-[32px_32px] relative self-stretch w-full">
                      {paymentInfo.map((info, index) => (
                        <div
                          key={index}
                          className={`flex flex-col w-[231px] items-start ${info.isBadge ? "gap-2" : "gap-3"} relative`}
                        >
                          <div className="relative w-fit mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                            {info.label}
                          </div>

                          {info.isBadge ? (
                            <Badge
                              className={`${info.badgeColor} inline-flex h-6 items-center gap-1 p-2 relative rounded`}
                            >
                              <div className="relative w-fit mt-[-1.50px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                                {info.value}
                              </div>
                            </Badge>
                          ) : (
                            <div className="flex items-center gap-1 relative self-stretch w-full">
                              <div className="w-fit mt-[-1.00px] whitespace-nowrap relative font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-colors-neutral-black text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] [font-style:var(--body-small-semibold-font-style)]">
                                {info.value}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="flex flex-col items-start relative self-stretch w-full rounded-[var(--design-tokens-radius-medium)] overflow-hidden border border-solid border-design-tokens-color-primarystroke mb-2">
                  <div className="flex items-center gap-2.5 p-3 relative self-stretch w-full bg-colors-neutral-gray-10">
                    <div className="relative w-fit mt-[-1.00px] font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-colors-neutral-black text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] whitespace-nowrap [font-style:var(--body-small-semibold-font-style)]">
                      More Information
                    </div>
                  </div>

                  <CardContent className="flex flex-col items-start gap-8 p-4 bg-colors-neutral-white">
                    <div className="flex flex-wrap items-start gap-[32px_32px] relative self-stretch w-full">
                      {moreInfo.map((info, index) => (
                        <div
                          key={index}
                          className="flex flex-col w-[231px] items-start gap-3 relative"
                        >
                          <div className="relative w-fit mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                            {info.label}
                          </div>

                          <div className="flex items-center gap-1 relative self-stretch w-full">
                            <div className="w-fit mt-[-1.00px] whitespace-nowrap relative font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-colors-neutral-black text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] [font-style:var(--body-small-semibold-font-style)]">
                              {info.value}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="flex flex-col items-start relative self-stretch w-full rounded-[var(--design-tokens-radius-medium)] overflow-hidden border border-solid border-design-tokens-color-primarystroke mb-2">
                  <div className="flex items-center gap-2.5 p-3 relative self-stretch w-full bg-colors-neutral-gray-10">
                    <div className="relative w-fit mt-[-1.00px] font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-colors-neutral-black text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] whitespace-nowrap [font-style:var(--body-small-semibold-font-style)]">
                      Delivery information
                    </div>
                  </div>

                  <CardContent className="flex flex-col items-start gap-8 p-4 bg-colors-neutral-white">
                    <div className="flex flex-wrap items-start gap-[32px_32px] relative self-stretch w-full">
                      {deliveryInfo.map((info, index) => (
                        <div
                          key={index}
                          className={`${info.label === "Contact" ? "w-[231px]" : "w-[231px]"} ${info.isBadge ? "gap-2" : "gap-3"} flex flex-col items-start relative`}
                        >
                          <div className="relative w-fit mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80-duplicate text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                            {info.label}
                          </div>

                          {info.isBadge ? (
                            <Badge
                              className={`${info.badgeColor} inline-flex h-6 items-center gap-1 p-2 relative rounded`}
                            >
                              <div className="relative w-fit mt-[-1.50px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                                {info.value}
                              </div>
                            </Badge>
                          ) : (
                            <div className="flex items-center gap-1 relative self-stretch w-full">
                              <div className="w-fit mt-[-1.00px] whitespace-nowrap relative font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-colors-neutral-black text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] [font-style:var(--body-small-semibold-font-style)]">
                                {info.value}
                              </div>

                              {info.hasPhone && (
                                <PhoneIcon className="relative w-4 h-4" />
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent
              value="actions"
              className="flex flex-col items-start gap-6 relative self-stretch w-full mt-0 overflow-y-auto"
            >
              <div className="flex items-center justify-center p-8 text-colors-neutral-gray-70">
                Actions content would go here
              </div>
            </TabsContent>

            <TabsContent
              value="instructions"
              className="flex flex-col items-start gap-6 relative self-stretch w-full mt-0 overflow-y-auto"
            >
              <div className="flex items-center justify-center p-8 text-colors-neutral-gray-70">
                Instructions content would go here
              </div>
            </TabsContent>

            <TabsContent
              value="attendees"
              className="flex flex-col items-start gap-6 relative self-stretch w-full mt-0 overflow-y-auto"
            >
              <div className="flex items-center justify-center p-8 text-colors-neutral-gray-70">
                Attendees content would go here
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
