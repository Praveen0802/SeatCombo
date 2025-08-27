import React, { useState } from "react";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, X } from "lucide-react";
import { Switch } from "../../components/ui/switch";
import { SideMenuSection } from "../TeamAddTeam/sections/SideMenuSection/SideMenuSection";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "../../components/ui/dialog";
import { SecondaryMenuSection } from "../SecondaryMenuSection";

const ticketData = [
  {
    id: "16352484624",
    type: "Mobile Ticket",
    typeDetail: "Seated together",
    price: "€153.99",
    quantity: "5",
    category: "Shortside upper tier",
    categoryDetail: "Anfield road stand",
    notes: "",
    status: true
  },
  {
    id: "16352484624",
    type: "Mobile Ticket",
    typeDetail: "Seated together",
    price: "€153.99",
    quantity: "5",
    category: "Shortside upper tier",
    categoryDetail: "Anfield road stand",
    notes: "",
    status: true
  },
  {
    id: "16352484624",
    type: "Mobile Ticket",
    typeDetail: "Seated together",
    price: "€153.99",
    quantity: "5",
    category: "Shortside upper tier",
    categoryDetail: "Anfield road stand",
    notes: "",
    status: false
  },
  {
    id: "16352484624",
    type: "Mobile Ticket",
    typeDetail: "Seated together",
    price: "€153.99",
    quantity: "5",
    category: "Shortside upper tier",
    categoryDetail: "Anfield road stand",
    notes: "",
    status: true
  },
  {
    id: "16352484624",
    type: "Mobile Ticket",
    typeDetail: "Seated together",
    price: "€153.99",
    quantity: "5",
    category: "Shortside upper tier",
    categoryDetail: "Anfield road stand",
    notes: "",
    status: true
  },
  {
    id: "16352484624",
    type: "Mobile Ticket",
    typeDetail: "Seated together",
    price: "€153.99",
    quantity: "5",
    category: "Shortside upper tier",
    categoryDetail: "Anfield road stand",
    notes: "",
    status: false
  },
  {
    id: "16352484624",
    type: "Mobile Ticket",
    typeDetail: "Seated together",
    price: "€153.99",
    quantity: "5",
    category: "Shortside upper tier",
    categoryDetail: "Anfield road stand",
    notes: "",
    status: true
  },
  {
    id: "16352484624",
    type: "Mobile Ticket",
    typeDetail: "Seated together",
    price: "€153.99",
    quantity: "5",
    category: "Shortside upper tier",
    categoryDetail: "Anfield road stand",
    notes: "",
    status: true
  },
  {
    id: "16352484624",
    type: "Mobile Ticket",
    typeDetail: "Seated together",
    price: "€153.99",
    quantity: "5",
    category: "Shortside upper tier",
    categoryDetail: "Anfield road stand",
    notes: "",
    status: true
  },
  {
    id: "16352484624",
    type: "Mobile Ticket",
    typeDetail: "Seated together",
    price: "€153.99",
    quantity: "5",
    category: "Shortside upper tier",
    categoryDetail: "Anfield road stand",
    notes: "",
    status: true
  }
];

export const TicketDetails = () => {
  const [statusFilter, setStatusFilter] = useState("all");
  const [sellerFilter, setSellerFilter] = useState("all");
  const [ticketTypeFilter, setTicketTypeFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [publishEnabled, setPublishEnabled] = useState(true);
  
  const handleBackClick = () => {
    window.history.back();
  };
  
  const openTicketModal = (ticket) => {
    setSelectedTicket(ticket);
    setIsModalOpen(true);
  };

    const [isCollapsed, setIsCollapsed] = useState(false);
    
    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };

  return (
    <div className="bg-white flex flex-row justify-center w-full min-h-screen">
       <SecondaryMenuSection />
      <div className="bg-colors-neutral-white w-full max-w-[1440px] flex flex-col min-h-screen">
        <div className="flex flex-1">
          {/* Reuse SideMenuSection from TeamAddTeam */}
         

          {/* Main Content */}
          <div className="flex flex-col flex-1">
            <header className="flex items-center gap-3 px-8 py-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent border-b border-solid border-design-tokens-color-primarystroke bg-[linear-gradient(180deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_100%)]">
              <div className="relative flex-1 font-header-h4 font-[number:var(--header-h4-font-weight)] text-[color:var(--colors-neutral-black)] text-[length:var(--header-h4-font-size)] tracking-[var(--header-h4-letter-spacing)] leading-[var(--header-h4-line-height)] [font-style:var(--header-h4-font-style)]">
                Ticket details
              </div>

              <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
                <div className="inline-flex items-center relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                    <img
                      className="relative w-[26.67px] h-5"
                      alt="United kingdom GB"
                      src="https://c.animaapp.com/Bzppr30r/img/united-kingdom--gb-.svg"
                    />

                    <div className="relative w-fit font-action-item-medium font-[number:var(--action-item-medium-font-weight)] text-colors-neutral-black-duplicate text-[length:var(--action-item-medium-font-size)] tracking-[var(--action-item-medium-letter-spacing)] leading-[var(--action-item-medium-line-height)] whitespace-nowrap [font-style:var(--action-item-medium-font-style)]">
                      English
                    </div>
                  </div>

                  <ChevronDownIcon className="relative w-4 h-4" />
                </div>

                <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                  <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[color:var(--colors-neutral-black)] text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                    Rey&apos;s Store
                  </div>

                  <ChevronDownIcon className="relative w-3.5 h-3.5" />
                </div>

                <div className="inline-flex items-center justify-end gap-6 relative flex-[0_0_auto]">
                  <div className="relative w-6 h-6 bg-[url(https://c.animaapp.com/Bzppr30r/img/icon-3.svg)] bg-[100%_100%]">
                    <div className="relative w-2 h-2 left-[15px] bg-colors-brand-primary-red rounded" />
                  </div>
                </div>
              </div>
            </header>

            <div className="flex flex-col items-start gap-2.5 px-8 py-5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center gap-1">
                <span className="text-gray-500 text-sm">Teams</span>
                <span className="mx-1 text-gray-500">›</span>
                <span className="text-gray-500 text-sm">Manchester City</span>
                <span className="mx-1 text-gray-500">›</span>
                <span className="text-gray-800 text-sm">Manchester City vs Arsenal</span>
              </div>
            </div>

            <div className="border-b border-design-tokens-color-primarystroke">
              <div className="px-8 py-4 bg-gray-50 border border-gray-200 rounded-lg mx-8 mb-4">
                <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <img src="https://c.animaapp.com/Bzppr30r/img/newcastle-badge.png" alt="Newcastle" className="w-6 h-6" />
                  <span className="text-sm text-gray-700">Newcastle</span>
                </div>
                <span className="text-sm text-gray-500">vs</span>
                <div className="flex items-center gap-2">
                  <img src="https://c.animaapp.com/Bzppr30r/img/manchester-city-badge.png" alt="Manchester City" className="w-6 h-6" />
                  <span className="text-sm text-gray-700">Manchester City</span>
                </div>
                  <div className="flex items-center gap-2 ml-4 text-sm text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-500">
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                    <span>Wed, April 23, 7:30 AM</span>
                  </div>
                  <div className="flex items-center gap-2 ml-4 text-sm text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-500">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>St James' Park, London</span>
                  </div>
                  <div className="ml-4 text-sm text-gray-700">
                    <span>English Premier League</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 px-8 py-0 mb-4">
                <div className="flex-1 p-4 border border-gray-200 rounded-lg bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-500">
                      <path d="M20 7h-9"></path>
                      <path d="M14 17H5"></path>
                      <circle cx="17" cy="17" r="3"></circle>
                      <circle cx="7" cy="7" r="3"></circle>
                    </svg>
                    <span className="text-sm text-gray-500">Available tickets</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-800">4673</div>
                </div>
                
                <div className="flex-1 p-4 border border-gray-200 rounded-lg bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-500">
                      <path d="M12 2v20"></path>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                    <span className="text-sm text-gray-500">Total sales</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-800">€6, 50,000</div>
                  <div className="text-sm text-gray-500">20,000 tickets</div>
                </div>
              </div>
              
              <div className="flex justify-center py-2 border-b border-design-tokens-color-primarystroke mb-4">
                <button className="text-gray-400 hover:text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="m18 15-6-6-6 6"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 px-8 py-6 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex justify-between items-center w-full mb-4">
                <div className="flex items-center gap-2">
                  <button className="flex items-center justify-between px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-design-tokens-color-primarystroke rounded-full hover:bg-gray-50">
                    <span>Status: All</span>
                    <ChevronDownIcon className="w-4 h-4 ml-1" />
                  </button>
                  
                  <button className="flex items-center justify-between px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-design-tokens-color-primarystroke rounded-full hover:bg-gray-50">
                    <span>Seller: All</span>
                    <ChevronDownIcon className="w-4 h-4 ml-1" />
                  </button>
                  
                  <button className="flex items-center justify-between px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-design-tokens-color-primarystroke rounded-full hover:bg-gray-50">
                    <span>Ticket type: All</span>
                    <ChevronDownIcon className="w-4 h-4 ml-1" />
                  </button>
                  
                  <button className="flex items-center px-3 py-1.5 text-sm font-medium text-gray-400 hover:text-colors-brand-primary-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-1">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                    <span>Clear All</span>
                  </button>
                </div>
                
                <div className="flex items-center">
                  <button className="flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-design-tokens-color-primarystroke rounded-md hover:bg-gray-50">
                    <span>Export</span>
                  </button>
                </div>
              </div>
              
              <div className="w-full overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                  <thead className="text-xs text-gray-500 bg-gray-50">
                    <tr>
                      <th scope="col" className="px-4 py-2 font-medium text-left border-b border-design-tokens-color-primarystroke">
                        Seller & Listing ID
                      </th>
                      <th scope="col" className="px-4 py-2 font-medium text-left border-b border-design-tokens-color-primarystroke">
                        Type
                      </th>
                      <th scope="col" className="px-4 py-2 font-medium text-left border-b border-design-tokens-color-primarystroke">
                        <div className="flex items-center">
                          Price
                          <ChevronDownIcon className="w-3 h-3 ml-1" />
                        </div>
                      </th>
                      <th scope="col" className="px-4 py-2 font-medium text-left border-b border-design-tokens-color-primarystroke">
                        <div className="flex items-center">
                          Quantity
                          <ChevronDownIcon className="w-3 h-3 ml-1" />
                        </div>
                      </th>
                      <th scope="col" className="px-4 py-2 font-medium text-left border-b border-design-tokens-color-primarystroke">
                        <div className="flex items-center">
                          Category & Block
                          <ChevronDownIcon className="w-3 h-3 ml-1" />
                        </div>
                      </th>
                      <th scope="col" className="px-4 py-2 font-medium text-left border-b border-design-tokens-color-primarystroke">
                        Notes
                      </th>
                      <th scope="col" className="px-4 py-2 font-medium text-left border-b border-design-tokens-color-primarystroke">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ticketData.map((ticket, index) => (
                      <tr key={index} className="border-b border-design-tokens-color-primarystroke">
                        <td className="px-4 py-3 text-gray-800">
                          <button 
                            onClick={() => openTicketModal(ticket)}
                            className="flex items-center gap-2 hover:text-colors-brand-primary-red"
                          >
                            <div className="w-6 h-6 rounded-full bg-colors-brand-primary-red flex items-center justify-center text-white text-xs font-medium">
                              T
                            </div>
                            <div className="flex flex-col text-left">
                              <span className="font-medium">Ticketstock</span>
                              <span className="text-xs text-gray-500">{ticket.id}</span>
                            </div>
                          </button>
                        </td>
                        <td className="px-4 py-3 text-gray-800">
                          <div className="flex flex-col">
                            <span>{ticket.type}</span>
                            <span className="text-xs text-gray-500">{ticket.typeDetail}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-gray-800">{ticket.price}</td>
                        <td className="px-4 py-3 text-gray-800">{ticket.quantity}</td>
                        <td className="px-4 py-3 text-gray-800">
                          <div className="flex flex-col">
                            <span>{ticket.category}</span>
                            <span className="text-xs text-gray-500">{ticket.categoryDetail}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <button className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-500">
                              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                              <polyline points="14 2 14 8 20 8" />
                              <line x1="16" x2="8" y1="13" y2="13" />
                              <line x1="16" x2="8" y1="17" y2="17" />
                              <line x1="10" x2="8" y1="9" y2="9" />
                            </svg>
                          </button>
                        </td>
                        <td className="px-4 py-3">
                          <Switch checked={ticket.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="flex items-center justify-between w-full mt-4">
                <div className="flex items-center">
                  <span className="text-xs text-gray-700 mr-2">
                    50
                  </span>
                  <ChevronDownIcon className="w-3 h-3" />
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="flex items-center justify-center w-6 h-6 text-xs font-medium text-gray-500 bg-white border border-design-tokens-color-primarystroke rounded-md hover:bg-gray-50">
                    <ChevronLeftIcon className="w-3 h-3" />
                  </button>
                  <button className="flex items-center justify-center w-6 h-6 text-xs font-medium text-gray-500 bg-white border border-design-tokens-color-primarystroke rounded-md hover:bg-gray-50">
                    1
                  </button>
                  <button className="flex items-center justify-center w-6 h-6 text-xs font-medium text-white bg-colors-brand-primary-red border border-colors-brand-primary-red rounded-md">
                    2
                  </button>
                  <button className="flex items-center justify-center w-6 h-6 text-xs font-medium text-gray-500 bg-white border border-design-tokens-color-primarystroke rounded-md hover:bg-gray-50">
                    3
                  </button>
                  <button className="flex items-center justify-center w-6 h-6 text-xs font-medium text-gray-500 bg-white border border-design-tokens-color-primarystroke rounded-md hover:bg-gray-50">
                    4
                  </button>
                  <button className="flex items-center justify-center w-6 h-6 text-xs font-medium text-gray-500 bg-white border border-design-tokens-color-primarystroke rounded-md hover:bg-gray-50">
                    5
                  </button>
                  <span className="text-xs text-gray-500">...</span>
                  <button className="flex items-center justify-center w-6 h-6 text-xs font-medium text-gray-500 bg-white border border-design-tokens-color-primarystroke rounded-md hover:bg-gray-50">
                    99
                  </button>
                  <button className="flex items-center justify-center w-6 h-6 text-xs font-medium text-gray-500 bg-white border border-design-tokens-color-primarystroke rounded-md hover:bg-gray-50">
                    <ChevronRightIcon className="w-3 h-3" />
                  </button>
                </div>
                
                <div className="flex items-center">
                  <span className="text-xs text-gray-700">
                    Showing 50 of 1000 results
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticket Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-white">
          <div className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium">N</span>
                </div>
                <span className="text-sm text-gray-700">Newcastle</span>
              </div>
              <span className="text-sm text-gray-500">vs</span>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-white">MC</span>
                </div>
                <span className="text-sm text-gray-700">Manchester City</span>
              </div>
            </div>
            
            <div className="flex justify-between mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-500">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
                <span>Wed, April 23, 7:30 AM</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-500">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>St James' Park, London</span>
              </div>
              
              <div className="text-sm text-gray-700">
                <span>English Premier League</span>
              </div>
              
              <div className="text-sm text-gray-700">
                <span className="font-medium">Listing ID</span>
                <span className="ml-2">4078367</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Available Tickets</label>
                <input 
                  type="number" 
                  className="w-full p-3 border border-gray-300 rounded-md" 
                  defaultValue="4"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Quantity Sold</label>
                <input 
                  type="number" 
                  className="w-full p-3 border border-gray-300 rounded-md" 
                  defaultValue="0"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Section</label>
                <div className="relative">
                  <select className="w-full p-3 border border-gray-300 rounded-md appearance-none pr-10">
                    <option>Category 1 Premium</option>
                  </select>
                  <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ticket Block</label>
                <div className="relative">
                  <select className="w-full p-3 border border-gray-300 rounded-md appearance-none pr-10">
                    <option>Any</option>
                  </select>
                  <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Row</label>
                <div className="relative">
                  <select className="w-full p-3 border border-gray-300 rounded-md appearance-none pr-10">
                    <option>2nd</option>
                  </select>
                  <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Home or Away</label>
                <div className="relative">
                  <select className="w-full p-3 border border-gray-300 rounded-md appearance-none pr-10">
                    <option>Any</option>
                  </select>
                  <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ticket Type</label>
                <div className="relative">
                  <select className="w-full p-3 border border-gray-300 rounded-md appearance-none pr-10">
                    <option>Mobile Ticket</option>
                  </select>
                  <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                <div className="flex">
                  <div className="relative w-16">
                    <select className="w-full h-full p-3 border border-gray-300 rounded-l-md appearance-none pr-8">
                      <option>€</option>
                    </select>
                    <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                  <input 
                    type="text" 
                    className="flex-1 p-3 border border-l-0 border-gray-300 rounded-r-md" 
                    defaultValue="721"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">Publish</span>
                <Switch checked={publishEnabled} onCheckedChange={setPublishEnabled} />
              </div>
            </div>
            
            <div className="flex justify-start gap-3">
              <button className="px-4 py-2 bg-colors-brand-primary-red text-white font-medium rounded-md hover:bg-red-600">
                Save Changes
              </button>
              <DialogClose asChild>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50">
                  Cancel
                </button>
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
