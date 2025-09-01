import {
  Bell,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  ShoppingBag,
  Ticket,
  Truck,
} from "lucide-react";
import React from "react";

const RightSidebarSection = () => {
  const [language, setLanguage] = React.useState("English");
  const [store, setStore] = React.useState("Rey's Store");
  const [showLanguageDropdown, setShowLanguageDropdown] = React.useState(false);
  const [showStoreDropdown, setShowStoreDropdown] = React.useState(false);

  const languageOptions = ["English", "Spanish", "French", "German"];
  const storeOptions = ["Rey's Store", "Main Store", "Secondary Store"];

  // Data for time period filters
  const timePeriods = [
    { id: "last-month", label: "Last Month", selected: true },
    { id: "last-week", label: "Last Week", selected: false },
    { id: "24-hours", label: "24 Hours", selected: false },
  ];

  // Data for statistics cards
  const statsCards = [
    {
      icon: <ShoppingBag className="w-4 h-4 text-gray-600" />,
      title: "Total sales",
      value: "€6,474,090.99",
      subtext: "10,463,987 orders",
      trend: { value: "+5.35%", positive: true },
    },
    {
      icon: <ShoppingBag className="w-4 h-4 text-gray-600" />,
      title: "Pending sales",
      value: "€27,4524",
      subtext: "10,463,987 orders",
      trend: { value: "-2%", positive: false },
    },
    {
      icon: <Truck className="w-4 h-4 text-gray-600" />,
      title: "Pending deliveries",
      value: "1,946",
      subtext: "10,463,987 orders",
    },
    {
      icon: <Ticket className="w-4 h-4 text-gray-600" />,
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
      seller: "ABC",
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
      seller: "ABC",
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
      seller: "ABC",
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
      seller: "ABC",
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
      seller: "ABC",
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
      seller: "ABC",
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
      seller: "ABC",
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
      seller: "ABC",
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
      seller: "ABC",
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
    { id: "seller", label: "Sell" },
    { id: "actions", label: "" },
  ];

  // Helper function to get badge color classes
  const getBadgeColorClasses = (color) => {
    switch (color) {
      case "success":
        return "bg-green-50 text-green-700 border border-green-100";
      case "destructive":
        return "bg-red-50 text-red-700 border border-red-100";
      case "warning":
        return "bg-yellow-50 text-yellow-700 border border-yellow-100";
      case "secondary":
        return "bg-gray-50 text-gray-700 border border-gray-100";
      case "default":
      default:
        return "bg-gray-50 text-gray-700 border border-gray-100";
    }
  };

  return (
    <div className="flex flex-col w-full h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-gradient-to-b from-white/80 to-white border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-900">
          Welcome back, Adam
        </h1>

        <div className="flex items-center gap-6">
          {/* Language Selector */}
          <div className="relative">
            <button
              className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:opacity-80 transition-opacity"
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            >
              <div className="w-6 h-4 bg-blue-600 rounded-sm flex items-center justify-center">
                <span className="text-xs text-white font-bold">GB</span>
              </div>
              <span>{language}</span>
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </button>
            {showStoreDropdown && (
              <div className="absolute top-full right-0 mt-1 bg-white shadow-lg rounded-md z-20 border border-gray-200 min-w-36">
                {storeOptions.map((storeOption) => (
                  <button
                    key={storeOption}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors"
                    onClick={() => {
                      setStore(storeOption);
                      setShowStoreDropdown(false);
                    }}
                  >
                    {storeOption}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Notification Bell */}
          <div className="relative">
            <Bell className="w-5 h-5 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Filters and Stats Section */}
        <div className="px-6 py-5 space-y-4">
          {/* Time Period Filters */}
          <div className="flex items-center gap-3">
            {timePeriods.map((period) => (
              <button
                key={period.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  period.selected
                    ? "bg-red-50 text-red-600 border border-red-600"
                    : "bg-white text-gray-900 border border-gray-300 hover:border-red-600 hover:text-red-600"
                }`}
              >
                {period.label}
              </button>
            ))}
          </div>

          {/* Stats Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {statsCards.map((card, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-lg p-4 hover:shadow-sm transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {card.icon}
                    <span className="text-sm text-gray-600 font-normal">
                      {card.title}
                    </span>
                  </div>
                  {card.trend && (
                    <div
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        card.trend.positive
                          ? "bg-green-50 text-green-700"
                          : "bg-red-50 text-red-700"
                      }`}
                    >
                      {card.trend.positive ? "↑" : "↓"} {card.trend.value}
                    </div>
                  )}
                </div>
                <div className="space-y-1">
                  <div className="text-xl font-semibold text-gray-900">
                    {card.value}
                  </div>
                  {card.subtext && (
                    <div className="text-sm text-gray-600">{card.subtext}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transaction History Section */}
        <div className="px-6 py-5 flex-1">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-semibold text-gray-900">
              Transaction History
            </h2>
            <button className="text-red-600 text-sm font-medium underline hover:no-underline transition-all">
              See All
            </button>
          </div>

          {/* Transaction Table */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-white border-b border-gray-200">
                    {tableHeaders.map((header) => (
                      <th
                        key={header.id}
                        className="px-4 py-3 text-left text-gray-600 text-sm font-normal whitespace-nowrap"
                      >
                        <div className="flex items-center gap-1">
                          {header.label}
                          {header.id !== "actions" ? (
                            <ChevronDown className="w-3 h-3 text-gray-400 opacity-60" />
                          ) : (
                            <div className="flex items-center gap-1 ml-auto">
                              <button className="w-6 h-6 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors">
                                <ChevronLeft className="w-3 h-3 text-gray-600" />
                              </button>
                              <button className="w-6 h-6 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors">
                                <ChevronRight className="w-3 h-3 text-gray-600" />
                              </button>
                            </div>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
                    >
                      {/* Order No. & Status */}
                      <td className="px-4 py-3">
                        <div className="space-y-2">
                          <div className="text-sm text-gray-900 font-normal">
                            {transaction.id}
                          </div>
                          <span
                            className={`inline-block text-xs px-2 py-1 rounded font-normal ${getBadgeColorClasses(
                              transaction.status.color
                            )}`}
                          >
                            {transaction.status.label}
                          </span>
                        </div>
                      </td>

                      {/* Transaction Date */}
                      <td className="px-4 py-3">
                        <div className="text-sm text-gray-900 font-normal">
                          {transaction.date}
                        </div>
                      </td>

                      {/* Match */}
                      <td className="px-4 py-3">
                        <div className="space-y-1 max-w-48">
                          <div className="text-sm text-gray-900 font-normal leading-tight">
                            {transaction.match}
                          </div>
                          <div className="text-xs text-gray-500 font-normal">
                            {transaction.date}
                          </div>
                        </div>
                      </td>

                      {/* Price */}
                      <td className="px-4 py-3">
                        <div className="space-y-2">
                          <div className="text-sm text-gray-900 font-normal">
                            {transaction.price}
                          </div>
                          <span
                            className={`inline-block text-xs px-2 py-1 rounded font-normal ${getBadgeColorClasses(
                              transaction.paymentMethod.color
                            )}`}
                          >
                            {transaction.paymentMethod.label}
                          </span>
                        </div>
                      </td>

                      {/* Quantity */}
                      <td className="px-4 py-3">
                        <div className="text-sm text-gray-900 font-normal">
                          {transaction.quantity}
                        </div>
                      </td>

                      {/* Ticket Type */}
                      <td className="px-4 py-3">
                        <div className="text-sm text-gray-900 font-normal">
                          {transaction.ticketType}
                        </div>
                      </td>

                      {/* Sell */}
                      <td className="px-4 py-3">
                        <div className="text-sm text-gray-900 font-normal">
                          {transaction.seller}
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="px-4 py-3">
                        <div className="flex justify-center">
                          <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded transition-colors">
                            <MoreVertical className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebarSection;