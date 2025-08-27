import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../../components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from "../../../../components/ui/pagination";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";
import { ChevronDownIcon, SearchIcon, FilterIcon, XIcon, ArrowUpDownIcon, MoreHorizontalIcon } from "lucide-react";

const statsData = [
  {
    icon: "https://c.animaapp.com/PeDX8ZwH/img/icon-5.svg",
    title: "Pending sales",
    value: "€27,4524",
    subtitle: "135 orders",
    trend: "-2%",
    trendType: "negative"
  },
  {
    icon: "https://c.animaapp.com/PeDX8ZwH/img/icon-7.svg",
    title: "On delivery",
    value: "1,946",
    subtitle: null,
    trend: null,
    trendType: null
  },
  {
    icon: "https://c.animaapp.com/PeDX8ZwH/img/icon-8.svg",
    title: "Delivered",
    value: "€6,474,090.99",
    subtitle: "10,463,987 orders",
    trend: "+5.35%",
    trendType: "positive"
  },
  {
    icon: "https://c.animaapp.com/PeDX8ZwH/img/icon-10.svg",
    title: "Cancelled",
    value: "100",
    subtitle: null,
    trend: null,
    trendType: null
  }
];

const ordersData = [
  {
    orderNumber: "#SC14364",
    Link: "/order-details",
    status: "Pending",
    statusColor: "bg-[#ffe57f] text-[#705a00]",
    transactionDate: "February 03, 2025\n20:00",
    match: "Ipswich Town vs Arsenal, United Kingdom ,London",
    matchDate: "February 03, 2025 20:00",
    price: "€153.99",
    paymentMethod: "Credit Card",
    paymentMethodColor: "bg-colors-neutral-gray-20 text-colors-neutral-black",
    quantity: "1",
    buyerInitials: "JB",
    buyerName: "Jerome Bell",
    buyerColor: "bg-[#4b14ff]",
    sellerInitials: "T",
    sellerName: "Ticketstock",
    sellerColor: "bg-[#4b14ff]",
    listingId: "16352484624"
  },
  {
    orderNumber: "#SC14364",
    Link: "/order-details-2",
    status: "Pending",
    statusColor: "bg-[#ffe57f] text-[#705a00]",
    transactionDate: "February 03, 2025 20:00",
    match: "Ipswich Town vs Arsenal, United Kingdom ,London",
    matchDate: "February 03, 2025 20:00",
    price: "€153.99",
    paymentMethod: "Credit Card",
    paymentMethodColor: "bg-colors-neutral-gray-20 text-colors-neutral-black",
    quantity: "3",
    buyerInitials: "DR",
    buyerName: "Dianne Russell",
    buyerColor: "bg-[#8469b5]",
    sellerInitials: "T",
    sellerName: "Ticketstock",
    sellerColor: "bg-[#4b14ff]",
    listingId: "16352484624"
  },
  {
    orderNumber: "#SC14364",
    Link: "/order-details",
    status: "Pending",
    statusColor: "bg-[#ffe57f] text-[#705a00]",
    transactionDate: "February 03, 2025 20:00",
    match: "Ipswich Town vs Arsenal, United Kingdom ,London",
    matchDate: "February 03, 2025 20:00",
    price: "€153.99",
    paymentMethod: "Debit Card",
    paymentMethodColor: "bg-[#ffe57f] text-[#705a00]",
    quantity: "2",
    buyerInitials: "RF",
    buyerName: "Robert Fox",
    buyerColor: "bg-[#91ae00]",
    sellerInitials: "T",
    sellerName: "Ticketstock",
    sellerColor: "bg-[#4b14ff]",
    listingId: "16352484624"
  },
  {
    orderNumber: "#SC14364",
    Link: "/order-details",
    status: "Refunded",
    statusColor: "bg-colors-neutral-gray-20 text-colors-neutral-black",
    transactionDate: "February 03, 2025 20:00",
    match: "Ipswich Town vs Arsenal, United Kingdom ,London",
    matchDate: "February 03, 2025 20:00",
    price: "€153.99",
    paymentMethod: "Credit Card",
    paymentMethodColor: "bg-colors-neutral-gray-20 text-colors-neutral-black",
    quantity: "5",
    buyerInitials: "AM",
    buyerName: "Arlene McCoy",
    buyerColor: "bg-[#ff148d]",
    sellerInitials: "T",
    sellerName: "Ticketstock",
    sellerColor: "bg-[#4b14ff]",
    listingId: "16352484624"
  },
  {
    orderNumber: "#SC14364",
    Link: "/order-details",
    status: "Cancelled",
    statusColor: "bg-colors-tints-red-30 text-colors-brand-primary-red",
    transactionDate: "February 03, 2025 20:00",
    match: "Ipswich Town vs Arsenal, United Kingdom ,London",
    matchDate: "February 03, 2025 20:00",
    price: "€153.99",
    paymentMethod: "Credit Card",
    paymentMethodColor: "bg-colors-neutral-gray-20 text-colors-neutral-black",
    quantity: "1",
    buyerInitials: "KW",
    buyerName: "Kristin Watson",
    buyerColor: "bg-[#15a200]",
    sellerInitials: "T",
    sellerName: "Ticketstock",
    sellerColor: "bg-[#4b14ff]",
    listingId: "16352484624"
  },
  {
    orderNumber: "#SC14364",
    Link: "/order-details",
    status: "Delivered",
    statusColor: "bg-[#ddffe1] text-colors-success",
    transactionDate: "February 03, 2025 20:00",
    match: "Ipswich Town vs Arsenal, United Kingdom ,London",
    matchDate: "February 03, 2025 20:00",
    price: "€153.99",
    paymentMethod: "Credit Card",
    paymentMethodColor: "bg-colors-neutral-gray-20 text-colors-neutral-black",
    quantity: "2",
    buyerInitials: "RE",
    buyerName: "Ralph Edwards",
    buyerColor: "bg-[#1499ff]",
    sellerInitials: "T",
    sellerName: "Ticketstock",
    sellerColor: "bg-[#4b14ff]",
    listingId: "16352484624"
  },
  {
    orderNumber: "#SC14364",
    Link: "/order-details",
    status: "Delivered",
    statusColor: "bg-[#ddffe1] text-colors-success",
    transactionDate: "February 03, 2025 20:00",
    match: "Ipswich Town vs Arsenal, United Kingdom ,London",
    matchDate: "February 03, 2025 20:00",
    price: "€153.99",
    paymentMethod: "Credit Card",
    paymentMethodColor: "bg-colors-neutral-gray-20 text-colors-neutral-black",
    quantity: "6",
    buyerInitials: "AF",
    buyerName: "Albert Flores",
    buyerColor: "bg-[#ff1418]",
    sellerInitials: "T",
    sellerName: "Ticketstock",
    sellerColor: "bg-[#4b14ff]",
    listingId: "16352484624"
  },
  {
    orderNumber: "#SC14364",
    Link: "/order-details",
    status: "Delivered",
    statusColor: "bg-[#ddffe1] text-colors-success",
    transactionDate: "February 03, 2025 20:00",
    match: "Ipswich Town vs Arsenal, United Kingdom ,London",
    matchDate: "February 03, 2025 20:00",
    price: "€153.99",
    paymentMethod: "Credit Card",
    paymentMethodColor: "bg-colors-neutral-gray-20 text-colors-neutral-black",
    quantity: "2",
    buyerInitials: "WW",
    buyerName: "Wade Warren",
    buyerColor: "bg-[#ff14db]",
    sellerInitials: "T",
    sellerName: "Ticketstock",
    sellerColor: "bg-[#4b14ff]",
    listingId: "16352484624"
  },
  {
    orderNumber: "#SC14364",
    Link: "/order-details",
    status: "Delivered",
    statusColor: "bg-[#ddffe1] text-colors-success",
    transactionDate: "February 03, 2025 20:00",
    match: "Ipswich Town vs Arsenal, United Kingdom ,London",
    matchDate: "February 03, 2025 20:00",
    price: "€153.99",
    paymentMethod: "Credit Card",
    paymentMethodColor: "bg-colors-neutral-gray-20 text-colors-neutral-black",
    quantity: "2",
    buyerInitials: "T",
    buyerName: "Savannah Nguyen",
    buyerColor: "bg-[#4b14ff]",
    sellerInitials: "T",
    sellerName: "Ticketstock",
    sellerColor: "bg-[#4b14ff]",
    listingId: "16352484624"
  }
];

export const RightSidebarSection = () => {
  const [filters, setFilters] = React.useState({
    orderStatus: "",
    timePeriod: "",
    paymentMethod: ""
  });
  const [searchTerm, setSearchTerm] = React.useState("");
  const [language, setLanguage] = React.useState("English");
  const [store, setStore] = React.useState("Rey's Store");
  const [showLanguageDropdown, setShowLanguageDropdown] = React.useState(false);
  const [showStoreDropdown, setShowStoreDropdown] = React.useState(false);
  const [itemsPerPage, setItemsPerPage] = React.useState("10");
  
  const languageOptions = ["English", "Spanish", "French", "German"];
  const storeOptions = ["Rey's Store", "Main Store", "Secondary Store"];
  const orderStatusOptions = ["All", "Pending", "Delivered", "Cancelled", "Refunded"];
  const timePeriodOptions = ["All Time", "Today", "This Week", "This Month", "Last 3 Months"];
  const paymentMethodOptions = ["All", "Credit Card", "Debit Card", "PayPal", "Bank Transfer"];
  
  const filteredOrders = React.useMemo(() => {
    return ordersData.filter(order => {
      // Search filter
      if (searchTerm && !order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !order.match.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      // Order status filter
      if (filters.orderStatus && filters.orderStatus !== "all" && order.status !== filters.orderStatus) {
        return false;
      }
      
      // Payment method filter
      if (filters.paymentMethod && filters.paymentMethod !== "all_methods" && order.paymentMethod !== filters.paymentMethod) {
        return false;
      }
      
      return true;
    });
  }, [searchTerm, filters]);
  
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };
  
  const clearAllFilters = () => {
    setFilters({
      orderStatus: "",
      timePeriod: "",
      paymentMethod: ""
    });
    setSearchTerm("");
  };
  return (
    <div className="flex flex-col items-start relative w-full">
      <header className="flex items-center gap-3 px-8 py-5 relative w-full bg-transparent border-b border-design-tokens-color-primarystroke bg-[linear-gradient(180deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_100%)]">
        <div className="relative flex-1 font-header-h4 font-[number:var(--header-h4-font-weight)] text-colors-neutral-black text-[length:var(--header-h4-font-size)] tracking-[var(--header-h4-letter-spacing)] leading-[var(--header-h4-line-height)] [font-style:var(--header-h4-font-style)]">
          All orders
        </div>
        <div className="inline-flex items-center gap-6 relative">
          <div className="inline-flex items-center relative">
            <div 
              className="inline-flex items-center gap-1 relative cursor-pointer"
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            >
              <img
                className="relative w-[26.67px] h-5"
                alt="United kingdom GB"
                src="https://c.animaapp.com/PeDX8ZwH/img/united-kingdom--gb-.svg"
              />
              <div className="relative w-fit font-action-item-medium font-[number:var(--action-item-medium-font-weight)] text-colors-neutral-black-duplicate text-[length:var(--action-item-medium-font-size)] tracking-[var(--action-item-medium-letter-spacing)] leading-[var(--action-item-medium-line-height)] whitespace-nowrap [font-style:var(--action-item-medium-font-style)]">
                {language}
              </div>
              <ChevronDownIcon className="w-4 h-4" />
            </div>
            {showLanguageDropdown && (
              <div className="absolute top-full right-0 mt-1 bg-white shadow-md rounded-md z-10 border border-design-tokens-color-primarystroke">
                {languageOptions.map((lang) => (
                  <div 
                    key={lang} 
                    className="px-4 py-2 hover:bg-colors-neutral-gray-10 cursor-pointer"
                    onClick={() => {
                      setLanguage(lang);
                      setShowLanguageDropdown(false);
                    }}
                  >
                    {lang}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="inline-flex items-center gap-1 relative">
            <div 
              className="inline-flex items-center gap-1 relative cursor-pointer"
              onClick={() => setShowStoreDropdown(!showStoreDropdown)}
            >
              <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-colors-neutral-black text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                {store}
              </div>
              <ChevronDownIcon className="w-3.5 h-3.5" />
            </div>
            {showStoreDropdown && (
              <div className="absolute top-full right-0 mt-1 bg-white shadow-md rounded-md z-10 border border-design-tokens-color-primarystroke">
                {storeOptions.map((storeOption) => (
                  <div 
                    key={storeOption} 
                    className="px-4 py-2 hover:bg-colors-neutral-gray-10 cursor-pointer"
                    onClick={() => {
                      setStore(storeOption);
                      setShowStoreDropdown(false);
                    }}
                  >
                    {storeOption}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="inline-flex items-center justify-end gap-6 relative">
            <div className="relative w-6 h-6 bg-[url(https://c.animaapp.com/PeDX8ZwH/img/icon-3.svg)] bg-[100%_100%]">
              <div className="relative w-2 h-2 left-[15px] bg-colors-brand-primary-red rounded" />
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-col items-start gap-2.5 px-8 py-5 relative w-full">
        <div className="flex items-center gap-1 relative w-full">
          <div className="inline-flex items-center gap-1 relative">
            <div className="relative w-fit font-body-medium font-[number:var(--body-medium-font-weight)] text-colors-neutral-gray-50 text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)]">
              Orders
            </div>
            <img
              className="relative w-4 h-4"
              alt="Icon"
              src="https://c.animaapp.com/PeDX8ZwH/img/icon-4.svg"
            />
          </div>
          <div className="inline-flex items-center justify-center gap-2.5 relative">
            <div className="relative w-fit mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-colors-neutral-black text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)]">
              All Orders
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start relative flex-1 w-full grow">
        <div className="flex flex-col items-start gap-2 px-8 py-5 relative w-full">
          <div className="flex items-center gap-3 relative w-full">
            {statsData.map((stat, index) => (
              <Card key={index} className="flex flex-col w-[267px] h-[120px] items-start gap-2 p-4 relative bg-colors-neutral-white rounded-[var(--design-tokens-radius-medium)] border border-solid border-design-tokens-color-primarystroke">
                <CardContent className="p-0 w-full">
                  <div className="flex items-start justify-between relative w-full">
                    <div className="flex w-[156px] items-center gap-1 relative">
                      <img
                        className="relative w-4 h-4"
                        alt="Icon"
                        src={stat.icon}
                      />
                      <div className="relative w-fit font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                        {stat.title}
                      </div>
                    </div>
                    {stat.trend && (
                      <div className="inline-flex items-center justify-end gap-1 relative">
                        <Badge className={`inline-flex h-6 items-center gap-1 px-1 py-2 relative ${stat.trendType === 'negative' ? 'bg-colors-tints-red-10' : 'bg-[#ddffe1]'} rounded`}>
                          <img
                            className="relative w-4 h-4 mt-[-4.00px] mb-[-4.00px]"
                            alt="Icon"
                            src={stat.trendType === 'negative' ? "https://c.animaapp.com/PeDX8ZwH/img/icon-6.svg" : "https://c.animaapp.com/PeDX8ZwH/img/icon-9.svg"}
                          />
                          <div className={`relative w-fit mt-[-1.50px] font-body-tiny font-[number:var(--body-tiny-font-weight)] ${stat.trendType === 'negative' ? 'text-colors-brand-primary-red' : 'text-colors-success'} text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]`}>
                            {stat.trend}
                          </div>
                        </Badge>
                      </div>
                    )}
                  </div>
                  <div className="gap-4 w-full flex flex-col items-start relative mt-2">
                    <div className="flex flex-col w-[235px] items-start gap-3 relative">
                      <div className="relative w-full mt-[-1.00px] font-header-h4 font-[number:var(--header-h4-font-weight)] text-colors-neutral-black text-[length:var(--header-h4-font-size)] tracking-[var(--header-h4-letter-spacing)] leading-[var(--header-h4-line-height)] [font-style:var(--header-h4-font-style)]">
                        {stat.value}
                      </div>
                      <div className="relative w-full font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)] min-h-[17px]">
                        {stat.subtitle || "\u00A0"}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start gap-5 px-8 py-5 relative flex-1 w-full grow">
          <div className="flex flex-col items-start gap-2 relative flex-1 w-full grow">
            <div className="flex items-center justify-between gap-5 relative w-full">
              <div className="flex items-center gap-4 flex-1">
                <div className="flex w-[266px] items-start relative">
                  <div className="flex h-[34px] items-center gap-2 p-3 relative w-full bg-colors-neutral-white rounded-[var(--design-tokens-radius-small)] border border-solid border-design-tokens-color-primarystroke">
                    <Input
                      className="flex-1 border-0 p-0 h-auto bg-transparent font-body-tiny font-[number:var(--body-tiny-font-weight)] text-design-tokens-color-inputnovalue text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]"
                      placeholder="Search by order number or match"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <SearchIcon className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <Select 
                      value={filters.orderStatus} 
                      onValueChange={(value) => handleFilterChange("orderStatus", value)}
                    >
                      <SelectTrigger className="inline-flex h-[34px] items-center gap-1 p-3 relative bg-colors-neutral-white rounded-[100px] border border-solid border-design-tokens-color-primarystroke">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-colors-neutral-black text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                          {filters.orderStatus || "Order status"}
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        {orderStatusOptions.map((status) => (
                          <SelectItem key={status} value={status === "All" ? "all" : status}>
                            {status}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    <Select 
                      value={filters.timePeriod} 
                      onValueChange={(value) => handleFilterChange("timePeriod", value)}
                    >
                      <SelectTrigger className="inline-flex h-[34px] items-center gap-1 p-3 relative bg-colors-neutral-white rounded-[100px] border border-solid border-design-tokens-color-primarystroke">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-colors-neutral-black text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                          {filters.timePeriod || "Time period"}
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        {timePeriodOptions.map((period) => (
                          <SelectItem key={period} value={period === "All Time" ? "all_time" : period}>
                            {period}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    <Select 
                      value={filters.paymentMethod} 
                      onValueChange={(value) => handleFilterChange("paymentMethod", value)}
                    >
                      <SelectTrigger className="inline-flex h-[34px] items-center gap-1 p-3 relative bg-colors-neutral-white rounded-[100px] border border-solid border-design-tokens-color-primarystroke">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-colors-neutral-black text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                          {filters.paymentMethod || "Payment method"}
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        {paymentMethodOptions.map((method) => (
                          <SelectItem key={method} value={method === "All" ? "all_methods" : method}>
                            {method}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <FilterIcon className="w-4 h-4" />
                      <div className="relative w-fit font-action-item-medium font-[number:var(--action-item-medium-font-weight)] text-colors-neutral-black text-[length:var(--action-item-medium-font-size)] tracking-[var(--action-item-medium-letter-spacing)] leading-[var(--action-item-medium-line-height)] whitespace-nowrap [font-style:var(--action-item-medium-font-style)]">
                        Filters
                      </div>
                    </div>
                    <img
                      className="relative w-px h-3 object-cover"
                      alt="Line"
                      src="https://c.animaapp.com/PeDX8ZwH/img/line-1-2.svg"
                    />
                    <div 
                      className="flex items-center gap-1 cursor-pointer"
                      onClick={clearAllFilters}
                    >
                      <XIcon className="w-4 h-4" />
                      <div className="relative w-fit font-action-item-medium font-[number:var(--action-item-medium-font-weight)] text-colors-neutral-gray-50-duplicate text-[length:var(--action-item-medium-font-size)] tracking-[var(--action-item-medium-letter-spacing)] leading-[var(--action-item-medium-line-height)] whitespace-nowrap [font-style:var(--action-item-medium-font-style)]">
                        Clear All
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="inline-flex items-center justify-center gap-1 p-3 relative bg-colors-neutral-white rounded-[var(--design-tokens-radius-small)] border border-solid border-design-tokens-color-primarystroke h-[34px]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-colors-neutral-black text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                  Export
                </div>
              </Button>
            </div>
            <div className="flex items-start relative flex-1 w-full grow rounded-[var(--design-tokens-radius-medium)] overflow-auto border border-solid border-design-tokens-color-primarystroke">
              <Table className="w-full table-fixed">
                <TableHeader>
                  <TableRow className="bg-colors-neutral-gray-10 border-design-tokens-color-primarystroke">
                    <TableHead className="w-[170px] p-3 font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                      <div className="flex h-[34px] items-center gap-1">
                        Order No. & Status
                        <ArrowUpDownIcon className="w-3 h-3" />
                      </div>
                    </TableHead>
                    <TableHead className="w-[140px] p-3 font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                      <div className="flex h-[34px] items-center gap-1">
                        Transaction Date
                        <ArrowUpDownIcon className="w-3 h-3" />
                      </div>
                    </TableHead>
                    <TableHead className="w-[270px] p-3 font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                      <div className="flex h-[34px] items-center gap-1">
                        Match
                        <ArrowUpDownIcon className="w-3 h-3" />
                      </div>
                    </TableHead>
                    <TableHead className="w-[120px] p-3 font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                      <div className="flex h-[34px] items-center gap-1">
                        Price
                        <ArrowUpDownIcon className="w-3 h-3" />
                      </div>
                    </TableHead>
                    <TableHead className="w-[110px] p-3 font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                      <div className="flex h-[34px] items-center gap-1">
                        Quantity
                        <ArrowUpDownIcon className="w-3 h-3" />
                      </div>
                    </TableHead>
                    <TableHead className="w-[140px] p-3 font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                      <div className="flex h-[34px] items-center gap-1">
                        Buyer
                        <ArrowUpDownIcon className="w-3 h-3" />
                      </div>
                    </TableHead>
                    <TableHead className="w-[187px] p-3 font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                      <div className="flex h-[34px] items-center gap-1">
                        Seller & Listing ID
                      </div>
                    </TableHead>
                    <TableHead className="w-[68px] p-3">
                      <div className="flex items-center gap-2 p-2">
                        <img
                          className="relative w-5 h-5"
                          alt="Icon"
                          src="https://c.animaapp.com/PeDX8ZwH/img/icon-23.svg"
                        />
                        <img
                          className="relative w-5 h-5"
                          alt="Icon"
                          src="https://c.animaapp.com/PeDX8ZwH/img/icon-24.svg"
                        />
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredOrders.map((order, index) => (
                    <TableRow key={index} className="h-[73px] border-design-tokens-color-primarystroke">
                      <TableCell className="p-3">
                        <div className="flex flex-col items-start justify-center gap-2 relative w-full">
                          <div className="font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                            <a href={order.Link}>{order.orderNumber}</a>
                          </div>
                          <Badge className={`h-6 px-2 py-1 ${order.statusColor} rounded`}>
                            <div className="font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]">
                              {order.status}
                            </div>
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell className="p-3">
                        <div className="font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)] whitespace-pre-line">
                          {order.transactionDate}
                        </div>
                      </TableCell>
                      <TableCell className="p-3">
                        <div className="flex flex-col items-start gap-2 relative w-full">
                          <div className="font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                            {order.match}
                          </div>
                          <div className="font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]">
                            {order.matchDate}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="p-3">
                        <div className="font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                          {order.price}
                        </div>
                        <Badge className={`h-6 px-2 py-1 mt-2 ${order.paymentMethodColor} rounded`}>
                          <div className="font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]">
                            {order.paymentMethod}
                          </div>
                        </Badge>
                      </TableCell>
                      <TableCell className="p-3">
                        <div className="font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                          {order.quantity}
                        </div>
                      </TableCell>
                      <TableCell className="p-3">
                        <div className="flex items-center gap-2 relative">
                          <Avatar className={`w-8 h-8 ${order.buyerColor}`}>
                            <AvatarFallback className="text-colors-neutral-white font-body-tiny-semibold font-[number:var(--body-tiny-semibold-font-weight)] text-[length:var(--body-tiny-semibold-font-size)] tracking-[var(--body-tiny-semibold-letter-spacing)] leading-[var(--body-tiny-semibold-line-height)] [font-style:var(--body-tiny-semibold-font-style)]">
                              {order.buyerInitials}
                            </AvatarFallback>
                          </Avatar>
                          <div className="font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                            {order.buyerName}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="p-3">
                        <div className="flex flex-col items-start gap-2 relative w-full">
                          <div className="flex items-center gap-2 relative">
                            <Avatar className={`w-8 h-8 ${order.sellerColor}`}>
                              <AvatarFallback className="text-colors-neutral-white font-body-tiny-semibold font-[number:var(--body-tiny-semibold-font-weight)] text-[length:var(--body-tiny-semibold-font-size)] tracking-[var(--body-tiny-semibold-letter-spacing)] leading-[var(--body-tiny-semibold-line-height)] [font-style:var(--body-tiny-semibold-font-style)]">
                                {order.sellerInitials}
                              </AvatarFallback>
                            </Avatar>
                            <div className="font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                              {order.sellerName}
                            </div>
                          </div>
                          <div className="font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]">
                            ID: {order.listingId}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="p-3">
                        <div className="flex items-center justify-center gap-2">
                          <Button variant="ghost" size="icon" className="w-8 h-8 p-0">
                            <MoreHorizontalIcon className="w-5 h-5" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
          <div className="flex items-center justify-between py-4 px-8 w-full">
            <div className="flex items-center gap-1">
              <div className="font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                Showing 1-{Math.min(filteredOrders.length, parseInt(itemsPerPage))} of {filteredOrders.length}
              </div>
            </div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
            <div className="flex items-center gap-2">
              <div className="font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                Items per page:
              </div>
              <Select 
                value={itemsPerPage}
                onValueChange={setItemsPerPage}
              >
                <SelectTrigger className="w-16 h-8">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
