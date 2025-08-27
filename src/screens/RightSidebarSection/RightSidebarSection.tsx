import {
  BellIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreVerticalIcon,
  ShoppingBagIcon,
  TicketIcon,
  TruckIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

export const RightSidebarSection: React.FC = () => {
  // Data for time period filters
  const timePeriods = [
    { id: "last-month", label: "Last Month", selected: true },
    { id: "last-week", label: "Last Week", selected: false },
    { id: "24-hours", label: "24 Hours", selected: false },
  ];

  // Data for statistics cards
  const statsCards = [
    {
      icon: <ShoppingBagIcon className="w-4 h-4 text-[#555555]" />,
      title: "Total sales",
      value: "€6,474,090.99",
      subtext: "10,463,987 orders",
      trend: { value: "+5.35%", positive: true },
    },
    {
      icon: <ShoppingBagIcon className="w-4 h-4 text-[#555555]" />,
      title: "Pending sales",
      value: "€27,4524",
      subtext: "10,463,987 orders",
      trend: { value: "-2%", positive: false },
    },
    {
      icon: <TruckIcon className="w-4 h-4 text-[#555555]" />,
      title: "Pending deliveries",
      value: "1,946",
      subtext: "10,463,987 orders",
    },
    {
      icon: <TicketIcon className="w-4 h-4 text-[#555555]" />,
      title: "Pending ticket approval",
      value: "100",
      subtext: "10,463,987 orders",
    },
  ];

  // Data for transaction history table
  const transactions = [
    {
      id: "#SC14364",
      status: { label: "Delivered", color: "success" },
      date: "February 03, 2025 20:00",
      match: "Ipswich Town vs Arsenal, United Kingdom ,London",
      price: "€153.99",
      paymentMethod: { label: "Credit Card", color: "default" },
      quantity: "1",
      ticketType: "Longside Upper Tier",
      seller: "ABC Corp",
      customer: "John Smith",
      deliveryMethod: "E-Ticket",
      location: "London, UK",
      highlighted: true,
    },
    {
      id: "#SC14364",
      status: { label: "Cancelled", color: "destructive" },
      date: "February 03, 2025 20:00",
      match: "Ipswich Town vs Arsenal, United Kingdom ,London",
      price: "€153.99",
      paymentMethod: { label: "Credit Card", color: "default" },
      quantity: "3",
      ticketType: "Longside Upper Tier",
      seller: "ABC Corp",
      customer: "Emma Johnson",
      deliveryMethod: "Mobile Ticket",
      location: "Manchester, UK",
    },
    {
      id: "#SC14364",
      status: { label: "Pending", color: "warning" },
      date: "February 03, 2025 20:00",
      match: "Ipswich Town vs Arsenal, United Kingdom ,London",
      price: "€153.99",
      paymentMethod: { label: "Debit Card", color: "warning" },
      quantity: "2",
      ticketType: "Longside Upper Tier",
      seller: "ABC Corp",
      customer: "Michael Brown",
      deliveryMethod: "Courier",
      location: "Liverpool, UK",
    },
    {
      id: "#SC14364",
      status: { label: "Refunded", color: "secondary" },
      date: "February 03, 2025 20:00",
      match: "Ipswich Town vs Arsenal, United Kingdom ,London",
      price: "€153.99",
      paymentMethod: { label: "Credit Card", color: "default" },
      quantity: "5",
      ticketType: "Longside Upper Tier",
      seller: "ABC Corp",
      customer: "Sarah Wilson",
      deliveryMethod: "E-Ticket",
      location: "Birmingham, UK",
    },
    {
      id: "#SC14364",
      status: { label: "Delivered", color: "success" },
      date: "February 03, 2025 20:00",
      match: "Ipswich Town vs Arsenal, United Kingdom ,London",
      price: "€153.99",
      paymentMethod: { label: "Credit Card", color: "default" },
      quantity: "1",
      ticketType: "Longside Upper Tier",
      seller: "ABC Corp",
      customer: "David Taylor",
      deliveryMethod: "Mobile Ticket",
      location: "Glasgow, UK",
    },
    {
      id: "#SC14364",
      status: { label: "Delivered", color: "success" },
      date: "February 03, 2025 20:00",
      match: "Ipswich Town vs Arsenal, United Kingdom ,London",
      price: "€153.99",
      paymentMethod: { label: "Credit Card", color: "default" },
      quantity: "2",
      ticketType: "Longside Upper Tier",
      seller: "ABC Corp",
      customer: "James Anderson",
      deliveryMethod: "E-Ticket",
      location: "Leeds, UK",
    },
    {
      id: "#SC14364",
      status: { label: "Delivered", color: "success" },
      date: "February 03, 2025 20:00",
      match: "Ipswich Town vs Arsenal, United Kingdom ,London",
      price: "€153.99",
      paymentMethod: { label: "Credit Card", color: "default" },
      quantity: "6",
      ticketType: "Longside Upper Tier",
      seller: "ABC Corp",
      customer: "Emily Davis",
      deliveryMethod: "Courier",
      location: "Newcastle, UK",
    },
    {
      id: "#SC14364",
      status: { label: "Delivered", color: "success" },
      date: "February 03, 2025 20:00",
      match: "Ipswich Town vs Arsenal, United Kingdom ,London",
      price: "€153.99",
      paymentMethod: { label: "Credit Card", color: "default" },
      quantity: "2",
      ticketType: "Longside Upper Tier",
      seller: "ABC Corp",
      customer: "Robert Martin",
      deliveryMethod: "Mobile Ticket",
      location: "Cardiff, UK",
    },
    {
      id: "#SC14364",
      status: { label: "Delivered", color: "success" },
      date: "February 03, 2025 20:00",
      match: "Ipswich Town vs Arsenal, United Kingdom ,London",
      price: "€153.99",
      paymentMethod: { label: "Credit Card", color: "default" },
      quantity: "2",
      ticketType: "Longside Upper Tier",
      seller: "ABC Corp",
      customer: "Thomas Clark",
      deliveryMethod: "Mobile Ticket",
      location: "Bristol, UK",
    },
  ];

  // Table column headers
  const tableHeaders = [
    { id: "order", label: "Order No. & Status" },
    { id: "date", label: "Transaction Date" },
    { id: "match", label: "Match" },
    { id: "price", label: "Price" },
    { id: "quantity", label: "Quantity" },
    { id: "ticketType", label: "Ticket Type" },
    { id: "seller", label: "Seller & Purchase" },
    { id: "customer", label: "Customer" },
    { id: "paymentMethod", label: "Payment Method" },
    { id: "deliveryMethod", label: "Delivery Method" },
    { id: "location", label: "Location" },
    { id: "actions", label: "" },
  ];

  // Helper function to get badge color classes
  const getBadgeColorClasses = (color: string) => {
    switch (color) {
      case "success":
        return "bg-[#ddffe1] text-[#00ad79]";
      case "destructive":
        return "bg-[#ffdddd] text-[#db3616]";
      case "warning":
        return "bg-[#ffe57f] text-[#705a00]";
      case "secondary":
      case "default":
      default:
        return "bg-[#ededed] text-[#161616]";
    }
  };

  return (
    <div className="flex flex-col w-full items-start relative self-stretch">
      {/* Header */}
      <header className="flex items-center gap-3 px-8 py-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent border-b border-[#dadada] bg-[linear-gradient(180deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_100%)]">
        <div className="relative flex-1 font-header-h4 font-[number:var(--header-h4-font-weight)] text-[#161616] text-[length:var(--header-h4-font-size)] tracking-[var(--header-h4-letter-spacing)] leading-[var(--header-h4-line-height)] [font-style:var(--header-h4-font-style)]">
          Welcome back, Adam
        </div>

        <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
          {/* Language selector */}
          <div className="inline-flex items-center relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
              <img
                className="relative w-[26.67px] h-5"
                alt="United kingdom GB"
                src="https://c.animaapp.com/mczy48mf9GWM3C/img/united-kingdom-gb.png"
              />
              <div className="relative w-fit font-action-item-medium font-[number:var(--action-item-medium-font-weight)] text-[#161616] text-[length:var(--action-item-medium-font-size)] tracking-[var(--action-item-medium-letter-spacing)] leading-[var(--action-item-medium-line-height)] whitespace-nowrap [font-style:var(--action-item-medium-font-style)]">
                English
              </div>
            </div>
            <ChevronDownIcon className="relative w-4 h-4" />
          </div>

          {/* Store selector */}
          <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#161616] text-sm tracking-[0] leading-[normal] whitespace-nowrap">
              Rey&apos;s Store
            </div>
            <ChevronDownIcon className="relative w-3.5 h-3.5" />
          </div>

          {/* Notification */}
          <div className="inline-flex items-center justify-end gap-6 relative flex-[0_0_auto]">
            <div className="relative w-6 h-6 bg-[100%_100%]">
              <BellIcon className="w-6 h-6" />
              <div className="absolute w-2 h-2 left-[15px] bg-[#db3616] rounded" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-col items-start relative flex-1 self-stretch w-full grow">
        {/* Time period filters and stats cards */}
        <div className="flex flex-col items-start gap-2 px-8 py-5 relative self-stretch w-full flex-[0_0_auto]">
          {/* Time period filters */}
          <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
            {timePeriods.map((period) => (
              <Button
                key={period.id}
                variant={period.selected ? "outline" : "outline"}
                className={`h-[34px] px-3 py-0 rounded-[100px] ${
                  period.selected
                    ? "bg-[#fff7f7] text-[#db3616] border-[#db3616]"
                    : "bg-white text-[#161616] border-[#dadada]"
                }`}
              >
                <span className="[font-family:'Inter',Helvetica] font-medium text-sm">
                  {period.label}
                </span>
              </Button>
            ))}
          </div>

          {/* Stats cards */}
          <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
            {statsCards.map((card, index) => (
              <Card key={index} className="flex-1 border-[#dadada] rounded-lg">
                <CardContent className="flex flex-col items-start gap-2 p-4">
                  <div className="flex items-start justify-between relative self-stretch w-full">
                    <div className="flex items-center gap-1">
                      {card.icon}
                      <span className="[font-family:'Inter',Helvetica] font-normal text-[#555555] text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
                        {card.title}
                      </span>
                    </div>
                    {card.trend && (
                      <div className="inline-flex items-center justify-end gap-1">
                        <Badge
                          className={`h-6 px-1 py-2 ${
                            card.trend.positive
                              ? "bg-[#ddffe1] text-[#00ad79]"
                              : "bg-[#fff0f0] text-[#db3616]"
                          }`}
                        >
                          {`${card.trend.positive ? "↑" : "↓"} ${card.trend.value}`}
                        </Badge>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col items-start gap-3 w-full">
                    <div className="font-header-h4 font-[number:var(--header-h4-font-weight)] text-[#161616] text-[length:var(--header-h4-font-size)] tracking-[var(--header-h4-letter-spacing)] leading-[var(--header-h4-line-height)] [font-style:var(--header-h4-font-style)]">
                      {card.value}
                    </div>
                    {card.subtext && (
                      <div className="[font-family:'Inter',Helvetica] font-normal text-[#555555] text-sm tracking-[0] leading-[16.8px]">
                        {card.subtext}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Transaction history section */}
        <div className="flex flex-col items-start gap-5 px-8 py-5 relative flex-1 self-stretch w-full grow">
          {/* Section header */}
          <div className="flex items-center justify-between relative self-stretch w-full">
            <div className="font-body-medium-bold font-[number:var(--body-medium-bold-font-weight)] text-[#161616] text-[length:var(--body-medium-bold-font-size)] tracking-[var(--body-medium-bold-letter-spacing)] leading-[var(--body-medium-bold-line-height)] whitespace-nowrap [font-style:var(--body-medium-bold-font-style)]">
              Transaction History
            </div>
            <Button
              variant="link"
              className="p-0 h-auto text-[#db3616] [font-family:'Inter',Helvetica] font-medium text-sm"
            >
              See All
            </Button>
          </div>

          {/* Transaction table */}
          <div className="flex flex-col items-start gap-2 relative flex-1 self-stretch w-full grow">
            <div
              id="table-container"
              className="flex-1 w-full rounded-lg overflow-x-auto border border-solid border-[#dadada] scrollbar-hide"
              style={{ scrollBehavior: 'smooth' }}
            >
              <Table className="min-w-[1100px]"> {/* Adjusted min-width for 6 visible columns + actions */}
                <TableHeader>
                  <TableRow className="bg-[#f9f9f9]">
                    {tableHeaders.slice(0, 6).map((header) => (
                      <TableHead
                        key={header.id}
                        className={`h-[34px] p-3 text-[#555555] text-sm [font-family:'Inter',Helvetica] font-normal whitespace-nowrap border-y border-[#dadada] ${header.id === "match" ? "w-[250px]" : "w-[180px]"}`}
                      >
                        <div className="flex items-center gap-1">
                          {header.label}
                          <ChevronDownIcon className="w-3 h-3" />
                        </div>
                      </TableHead>
                    ))}
                    {/* Actions column header with scroll buttons */}
                    <TableHead
                      key="actions-header"
                      className="h-[34px] p-3 text-[#555555] text-sm [font-family:'Inter',Helvetica] font-normal whitespace-nowrap border-y border-[#dadada] w-[50px]"
                    >
                      <div className="flex items-center gap-2 ml-auto">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full border border-[#dadada]"
                          onClick={() => {
                            const tableContainer = document.getElementById('table-container');
                            if (tableContainer) {
                              tableContainer.scrollLeft -= 180; // Scroll by one column width
                            }
                          }}
                        >
                          <ChevronLeftIcon className="h-5 w-5" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full border border-[#dadada]"
                          onClick={() => {
                            const tableContainer = document.getElementById('table-container');
                            if (tableContainer) {
                              tableContainer.scrollLeft += 180; // Scroll by one column width
                            }
                          }}
                        >
                          <ChevronRightIcon className="h-5 w-5" />
                        </Button>
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction, index) => (
                    <TableRow
                      key={index}
                      className={`h-[73px] border-y border-[#dadada] ${transaction.highlighted ? "bg-[#fff7f7]" : ""}`}
                    >
                      {/* Render cells for the first 6 data columns */}
                      <TableCell className="p-3 border-y border-[#dadada] w-[180px]">
                        <div className="flex flex-col items-start justify-center gap-2">
                          <div className="[font-family:'Inter',Helvetica] font-normal text-[#161616] text-sm tracking-[0] leading-[16.8px]">
                            {transaction.id}
                          </div>
                          <Badge
                            className={`h-6 px-2 py-0 ${getBadgeColorClasses(transaction.status.color)}`}
                          >
                            {transaction.status.label}
                          </Badge>
                        </div>
                      </TableCell>

                      <TableCell className="p-3 border-y border-[#dadada] w-[180px]">
                        <div className="[font-family:'Inter',Helvetica] font-normal text-[#161616] text-sm tracking-[0] leading-[16.8px]">
                          {transaction.date}
                        </div>
                      </TableCell>

                      <TableCell className="p-3 border-y border-[#dadada] w-[250px]">
                        <div className="flex flex-col items-start justify-center gap-3">
                          <div className="[font-family:'Inter',Helvetica] font-normal text-[#161616] text-sm tracking-[0] leading-[16.8px]">
                            {transaction.match}
                          </div>
                          <div className="text-[#555555] text-[length:var(--body-tiny-font-size)] leading-[var(--body-tiny-line-height)] font-body-tiny font-[number:var(--body-tiny-font-weight)] tracking-[var(--body-tiny-letter-spacing)] [font-style:var(--body-tiny-font-style)]">
                            {transaction.date}
                          </div>
                        </div>
                      </TableCell>

                      <TableCell className="p-3 border-y border-[#dadada] w-[180px]">
                        <div className="flex flex-col items-start justify-center gap-2">
                          <div className="[font-family:'Inter',Helvetica] font-normal text-[#161616] text-sm tracking-[0] leading-[16.8px]">
                            {transaction.price}
                          </div>
                          <Badge
                            className={`h-6 px-2 py-0 ${getBadgeColorClasses(transaction.paymentMethod.color)}`}
                          >
                            {transaction.paymentMethod.label}
                          </Badge>
                        </div>
                      </TableCell>

                      <TableCell className="p-3 border-y border-[#dadada] w-[180px]">
                        <div className="[font-family:'Inter',Helvetica] font-normal text-[#161616] text-sm tracking-[0] leading-[16.8px]">
                          {transaction.quantity}
                        </div>
                      </TableCell>

                      <TableCell className="p-3 border-y border-[#dadada] w-[180px]">
                        <div className="[font-family:'Inter',Helvetica] font-normal text-[#161616] text-sm tracking-[0] leading-[16.8px]">
                          {transaction.ticketType}
                        </div>
                      </TableCell>

                      {/* Actions */}
                      <TableCell className="p-3 border-y border-[#dadada] bg-white border-l border-[#dadada] shadow-panel-shadow">
                        <div className="flex justify-center">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                          >
                            <MoreVerticalIcon className="h-6 w-6" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
