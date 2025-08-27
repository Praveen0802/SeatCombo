import { ChevronDownIcon } from "lucide-react";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Switch } from "../../../../components/ui/switch";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";

const formFields = [
  {
    id: "teamName",
    label: "Team Name",
    type: "input",
    placeholder: "Eg: Arsenal",
    required: true,
    icon: "https://c.animaapp.com/Bzppr30r/img/icon-5.svg",
  },
  {
    id: "eventCategory",
    label: "Event Category",
    type: "select",
    value: "Football",
    required: true,
    icon: "https://c.animaapp.com/Bzppr30r/img/icon-10.svg",
  },
  {
    id: "stadium",
    label: "Stadium",
    type: "select",
    placeholder: "Select a stadium",
    optional: true,
    icon: "https://c.animaapp.com/Bzppr30r/img/icon-10.svg",
  },
  {
    id: "country",
    label: "Country",
    type: "select",
    placeholder: "Select a country",
    optional: true,
    icon: "https://c.animaapp.com/Bzppr30r/img/icon-10.svg",
  },
  {
    id: "city",
    label: "City",
    type: "select",
    placeholder: "Select a city",
    optional: true,
    icon: "https://c.animaapp.com/Bzppr30r/img/icon-10.svg",
  },
  {
    id: "teamColor",
    label: "Team Color",
    type: "select",
    placeholder: "Select a color",
    required: true,
    icon: "https://c.animaapp.com/Bzppr30r/img/icon-10.svg",
  },
];

const uploadFields = [
  {
    id: "teamSymbol",
    label: "Team Symbol",
    required: true,
    icon: "https://c.animaapp.com/Bzppr30r/img/icon-11.svg",
  },
  {
    id: "backgroundImage",
    label: "Background Image",
    optional: true,
    icon: "https://c.animaapp.com/Bzppr30r/img/icon-12.svg",
  },
];

const tabItems = [
  { value: "team-details", label: "Team details", active: true },
  { value: "seo-content", label: "SEO content", active: false },
  { value: "page-content", label: "Page content", active: false },
  { value: "events", label: "Events", active: false },
  { value: "settings", label: "Settings", active: false },
];

// Add more team colors
const teamColors = [
  { value: "red", label: "Red" },
  { value: "blue", label: "Blue" },
  { value: "green", label: "Green" },
  { value: "yellow", label: "Yellow" },
  { value: "purple", label: "Purple" },
  { value: "black", label: "Black" },
];

// Add countries
const countries = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "ca", label: "Canada" },
  { value: "au", label: "Australia" },
  { value: "fr", label: "France" },
];

// Add cities
const cities = [
  { value: "new-york", label: "New York" },
  { value: "london", label: "London" },
  { value: "paris", label: "Paris" },
  { value: "tokyo", label: "Tokyo" },
  { value: "sydney", label: "Sydney" },
];

// Add stadiums
const stadiums = [
  { value: "wembley", label: "Wembley Stadium" },
  { value: "camp-nou", label: "Camp Nou" },
  { value: "old-trafford", label: "Old Trafford" },
  { value: "santiago-bernabeu", label: "Santiago Bernabéu" },
  { value: "anfield", label: "Anfield" },
];

// Events data
const eventsData = [
  { match: "Manchester City vs Arsenal", venue: "Etihad, Manchester, United Kingdom", date: "Feb 03, 2023, 20:00", price: "€153.99", available: "4673", sold: "165" },
  { match: "Everton vs Manchester City", venue: "Etihad, Manchester, United Kingdom", date: "Feb 03, 2023, 20:00", price: "€153.99", available: "4673", sold: "165" },
  { match: "Manchester City vs Manchester United", venue: "Etihad, Manchester, United Kingdom", date: "Feb 03, 2023, 20:00", price: "€153.99", available: "4673", sold: "165" },
  { match: "Manchester City vs Tottenham", venue: "Etihad, Manchester, United Kingdom", date: "Feb 03, 2023, 20:00", price: "€153.99", available: "4673", sold: "165" },
  { match: "Manchester City vs Arsenal", venue: "Etihad, Manchester, United Kingdom", date: "Feb 03, 2023, 20:00", price: "€153.99", available: "4673", sold: "165" },
  { match: "Manchester City vs Arsenal", venue: "Etihad, Manchester, United Kingdom", date: "Feb 03, 2023, 20:00", price: "€153.99", available: "4673", sold: "165" },
  { match: "Manchester City vs Arsenal", venue: "Etihad, Manchester, United Kingdom", date: "Feb 03, 2023, 20:00", price: "€153.99", available: "4673", sold: "165" },
  { match: "Manchester City vs Arsenal", venue: "Etihad, Manchester, United Kingdom", date: "Feb 03, 2023, 20:00", price: "€153.99", available: "4673", sold: "165" },
  { match: "Manchester City vs Arsenal", venue: "Etihad, Manchester, United Kingdom", date: "Feb 03, 2023, 20:00", price: "€153.99", available: "4673", sold: "165" },
  { match: "Manchester City vs Arsenal", venue: "Etihad, Manchester, United Kingdom", date: "Feb 03, 2023, 20:00", price: "€153.99", available: "4673", sold: "165" },
];

export const TeamDetailsSection = () => {
  return (
    <div className="flex flex-col w-full items-start relative">
      <header className="flex items-center gap-3 px-8 py-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent border-b border-solid border-design-tokens-color-primarystroke bg-[linear-gradient(180deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_100%)]">
        <div className="relative flex-1 font-header-h4 font-[number:var(--header-h4-font-weight)] text-[color:var(--colors-neutral-black)] text-[length:var(--header-h4-font-size)] tracking-[var(--header-h4-letter-spacing)] leading-[var(--header-h4-line-height)] [font-style:var(--header-h4-font-style)]">
          Add team
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
        <Breadcrumb>
          <BreadcrumbList className="flex items-center gap-1">
            <BreadcrumbItem>
              <BreadcrumbLink className="font-body-medium font-[number:var(--body-medium-font-weight)] text-colors-neutral-gray-50 text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]">
                Teams
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <img
                className="w-4 h-4"
                alt="Icon"
                src="https://c.animaapp.com/Bzppr30r/img/icon-4.svg"
              />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <span className="font-body-medium font-[number:var(--body-medium-font-weight)] text-[color:var(--colors-neutral-black)] text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]">
                Add team
              </span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <Tabs
        defaultValue="team-details"
        className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]"
      >
        <div className="w-full border-b border-solid border-design-tokens-color-primarystroke">
          <div className="flex items-start px-8 py-0 relative self-stretch w-full flex-[0_0_auto]">
            <TabsList className="flex items-start relative bg-transparent h-auto p-0 rounded-none w-auto border-0">
              {tabItems.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className={`inline-flex items-center justify-start gap-1 px-5 py-4 relative border-b-2 border-solid ${
                    tab.active
                      ? "border-colors-brand-primary-red text-colors-brand-primary-red"
                      : "border-transparent text-[color:var(--colors-neutral-gray-40)]"
                  } font-action-item-large font-[number:var(--action-item-large-font-weight)] text-[length:var(--action-item-large-font-size)] tracking-[var(--action-item-large-letter-spacing)] leading-[var(--action-item-large-line-height)] [font-style:var(--action-item-large-font-style)] bg-transparent hover:bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none h-auto text-left`}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>

        <TabsContent
          value="events"
          className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] mt-0"
        >
          <div className="flex flex-col items-start gap-4 px-8 py-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex justify-between items-center w-full mb-4">
              <div className="relative w-[200px]">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                </div>
                <input type="search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-design-tokens-color-primarystroke rounded-md bg-white focus:outline-none" placeholder="Search team" />
              </div>
              
              <div className="flex items-center">
                <button className="flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-design-tokens-color-primarystroke rounded-md hover:bg-gray-50">
                  <span>Upcoming matches</span>
                  <ChevronDownIcon className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
            
            <div className="w-full overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead className="text-xs text-gray-500 bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-2 font-medium text-left border-b border-design-tokens-color-primarystroke">
                      <div className="flex items-center">
                        Match
                        <ChevronDownIcon className="w-3 h-3 ml-1" />
                      </div>
                    </th>
                    <th scope="col" className="px-4 py-2 font-medium text-left border-b border-design-tokens-color-primarystroke">
                      <div className="flex items-center">
                        Venue
                        <ChevronDownIcon className="w-3 h-3 ml-1" />
                      </div>
                    </th>
                    <th scope="col" className="px-4 py-2 font-medium text-left border-b border-design-tokens-color-primarystroke">
                      <div className="flex items-center">
                        Date & Time
                        <ChevronDownIcon className="w-3 h-3 ml-1" />
                      </div>
                    </th>
                    <th scope="col" className="px-4 py-2 font-medium text-left border-b border-design-tokens-color-primarystroke">
                      <div className="flex items-center">
                        Price
                        <ChevronDownIcon className="w-3 h-3 ml-1" />
                      </div>
                    </th>
                    <th scope="col" className="px-4 py-2 font-medium text-left border-b border-design-tokens-color-primarystroke">
                      <div className="flex items-center">
                        Available
                        <ChevronDownIcon className="w-3 h-3 ml-1" />
                      </div>
                    </th>
                    <th scope="col" className="px-4 py-2 font-medium text-left border-b border-design-tokens-color-primarystroke">
                      <div className="flex items-center">
                        Sold
                      </div>
                    </th>
                    <th scope="col" className="px-4 py-2 font-medium text-right border-b border-design-tokens-color-primarystroke">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {eventsData.map((event, index) => (
                    <tr key={index} className="border-b border-design-tokens-color-primarystroke">
                      <td className="px-4 py-2 text-gray-800">
                        <button 
                          onClick={() => window.location.href = "/ticket-details"}
                          className="text-gray-800 hover:text-colors-brand-primary-red hover:underline cursor-pointer"
                        >
                          {event.match}
                        </button>
                      </td>
                      <td className="px-4 py-2 text-gray-800">{event.venue}</td>
                      <td className="px-4 py-2 text-gray-800">{event.date}</td>
                      <td className="px-4 py-2 text-gray-800">{event.price}</td>
                      <td className="px-4 py-2 text-gray-800">{event.available}</td>
                      <td className="px-4 py-2 text-gray-800">{event.sold}</td>
                      <td className="px-4 py-2 text-right">
                        <button className="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 focus:outline-none">
                          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="flex items-center justify-between w-full mt-4">
              <div className="flex items-center">
                <span className="text-xs text-gray-700">
                  Showing 50 of 100 results
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="flex items-center justify-center w-6 h-6 text-xs font-medium text-gray-500 bg-white border border-design-tokens-color-primarystroke rounded-md hover:bg-gray-50">
                  <ChevronDownIcon className="w-3 h-3 rotate-90" />
                </button>
                <button className="flex items-center justify-center w-6 h-6 text-xs font-medium text-white bg-colors-brand-primary-red border border-colors-brand-primary-red rounded-md">
                  1
                </button>
                <button className="flex items-center justify-center w-6 h-6 text-xs font-medium text-gray-500 bg-white border border-design-tokens-color-primarystroke rounded-md hover:bg-gray-50">
                  2
                </button>
                <button className="flex items-center justify-center w-6 h-6 text-xs font-medium text-gray-500 bg-white border border-design-tokens-color-primarystroke rounded-md hover:bg-gray-50">
                  <ChevronDownIcon className="w-3 h-3 -rotate-90" />
                </button>
              </div>
            </div>
            
            <div className="mt-4">
              <button className="px-4 py-2 text-xs font-medium text-gray-700 bg-white border border-design-tokens-color-primarystroke rounded-md hover:bg-gray-50">
                Cancel
              </button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent
          value="seo-content"
          className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] mt-0"
        >
          <div className="flex flex-col items-start gap-6 px-8 py-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-wrap items-start gap-[28px_12px] relative self-stretch w-full flex-[0_0_auto]">
              {/* H1 Tag and Meta Title */}
              <div className="flex flex-col w-[546px] items-start gap-3 relative">
                <div className="flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                  <Label className="[font-family:'Inter',Helvetica] font-medium text-[color:var(--colors-neutral-black)] text-sm tracking-[0] leading-[normal]">
                    H1 Tag
                  </Label>
                  <span className="[font-family:'Inter',Helvetica] font-medium text-colors-neutral-gray-50 text-sm tracking-[0] leading-[normal]">
                    (Optional)
                  </span>
                </div>
                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="h-[52px] items-center gap-2 px-4 py-5 self-stretch w-full bg-colors-neutral-white rounded-[var(--design-tokens-radius-medium)] border border-solid border-design-tokens-color-primarystroke flex relative">
                    <Input
                      placeholder="Add H1 tag"
                      className="flex-1 h-3 border-0 bg-transparent p-0 font-body-medium font-[number:var(--body-medium-font-weight)] text-design-tokens-color-inputnovalue text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[546px] items-start gap-3 relative">
                <div className="flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                  <Label className="[font-family:'Inter',Helvetica] font-medium text-[color:var(--colors-neutral-black)] text-sm tracking-[0] leading-[normal]">
                    Meta Title
                  </Label>
                </div>
                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="h-[52px] items-center gap-2 px-4 py-5 self-stretch w-full bg-colors-neutral-white rounded-[var(--design-tokens-radius-medium)] border border-solid border-design-tokens-color-primarystroke flex relative">
                    <Input
                      placeholder="Enter a title"
                      className="flex-1 h-3 border-0 bg-transparent p-0 font-body-medium font-[number:var(--body-medium-font-weight)] text-design-tokens-color-inputnovalue text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    <img
                      className="w-5 h-5"
                      alt="Search"
                      src="https://c.animaapp.com/Bzppr30r/img/icon-5.svg"
                    />
                  </div>
                  <div className="text-xs text-colors-neutral-gray-50 self-start">
                    0 characters entered
                  </div>
                </div>
              </div>

              {/* Meta Description */}
              <div className="flex flex-col w-full items-start gap-3 relative">
                <div className="flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                  <Label className="[font-family:'Inter',Helvetica] font-medium text-[color:var(--colors-neutral-black)] text-sm tracking-[0] leading-[normal]">
                    Meta Description
                  </Label>
                  <span className="[font-family:'Inter',Helvetica] font-medium text-colors-neutral-gray-50 text-sm tracking-[0] leading-[normal]">
                    (Optional)
                  </span>
                </div>
                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <textarea
                    placeholder="Enter meta description"
                    className="min-h-[120px] w-full p-4 bg-colors-neutral-white rounded-[var(--design-tokens-radius-medium)] border border-solid border-design-tokens-color-primarystroke font-body-medium font-[number:var(--body-medium-font-weight)] text-design-tokens-color-inputnovalue text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none resize-none"
                  />
                  <div className="text-xs text-colors-neutral-gray-50 self-start">
                    0 characters entered
                  </div>
                </div>
              </div>

              {/* SEO Keywords and Search Keywords */}
              <div className="flex flex-col w-[546px] items-start gap-3 relative">
                <div className="flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                  <Label className="[font-family:'Inter',Helvetica] font-medium text-[color:var(--colors-neutral-black)] text-sm tracking-[0] leading-[normal]">
                    SEO Keywords
                  </Label>
                  <span className="[font-family:'Inter',Helvetica] font-medium text-colors-neutral-gray-50 text-sm tracking-[0] leading-[normal]">
                    (Optional)
                  </span>
                </div>
                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="h-[52px] items-center gap-2 px-4 py-5 self-stretch w-full bg-colors-neutral-white rounded-[var(--design-tokens-radius-medium)] border border-solid border-design-tokens-color-primarystroke flex relative">
                    <Input
                      placeholder="Enter Keywords separated by comma or press Enter"
                      className="flex-1 h-3 border-0 bg-transparent p-0 font-body-medium font-[number:var(--body-medium-font-weight)] text-design-tokens-color-inputnovalue text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    <ChevronDownIcon className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[546px] items-start gap-3 relative">
                <div className="flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                  <Label className="[font-family:'Inter',Helvetica] font-medium text-[color:var(--colors-neutral-black)] text-sm tracking-[0] leading-[normal]">
                    Search Keywords
                  </Label>
                  <span className="[font-family:'Inter',Helvetica] font-medium text-colors-neutral-gray-50 text-sm tracking-[0] leading-[normal]">
                    (Optional)
                  </span>
                </div>
                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="h-[52px] items-center gap-2 px-4 py-5 self-stretch w-full bg-colors-neutral-white rounded-[var(--design-tokens-radius-medium)] border border-solid border-design-tokens-color-primarystroke flex relative">
                    <Input
                      placeholder="Enter Keywords separated by comma or press Enter"
                      className="flex-1 h-3 border-0 bg-transparent p-0 font-body-medium font-[number:var(--body-medium-font-weight)] text-design-tokens-color-inputnovalue text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    <img
                      className="w-5 h-5"
                      alt="Search"
                      src="https://c.animaapp.com/Bzppr30r/img/icon-5.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent
          value="page-content"
          className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] mt-0"
        >
          <div className="flex flex-col items-start gap-2 px-8 py-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center gap-2 p-2 relative self-stretch w-full flex-[0_0_auto] border-b border-solid border-design-tokens-color-primarystroke">
              <button className="flex items-center justify-center w-8 h-8 p-2 rounded hover:bg-gray-100">
                <span className="font-bold">B</span>
              </button>
              <button className="flex items-center justify-center w-8 h-8 p-2 rounded hover:bg-gray-100">
                <span className="italic">I</span>
              </button>
              <button className="flex items-center justify-center w-8 h-8 p-2 rounded hover:bg-gray-100">
                <span className="underline">U</span>
              </button>
              <button className="flex items-center justify-center w-8 h-8 p-2 rounded hover:bg-gray-100">
                <span className="font-serif">A</span>
              </button>
              
              <div className="w-px h-6 bg-design-tokens-color-primarystroke mx-1"></div>
              
              <button className="flex items-center justify-center w-8 h-8 p-2 rounded hover:bg-gray-100">
                <img src="https://c.animaapp.com/Bzppr30r/img/align-left.svg" alt="Align left" className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-center w-8 h-8 p-2 rounded hover:bg-gray-100">
                <img src="https://c.animaapp.com/Bzppr30r/img/align-center.svg" alt="Align center" className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-center w-8 h-8 p-2 rounded hover:bg-gray-100">
                <img src="https://c.animaapp.com/Bzppr30r/img/list.svg" alt="List" className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-center w-8 h-8 p-2 rounded hover:bg-gray-100">
                <img src="https://c.animaapp.com/Bzppr30r/img/numbered-list.svg" alt="Numbered list" className="w-4 h-4" />
              </button>
              
              <div className="w-px h-6 bg-design-tokens-color-primarystroke mx-1"></div>
              
              <button className="flex items-center justify-center w-8 h-8 p-2 rounded hover:bg-gray-100">
                <img src="https://c.animaapp.com/Bzppr30r/img/link.svg" alt="Link" className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-center w-8 h-8 p-2 rounded hover:bg-gray-100">
                <img src="https://c.animaapp.com/Bzppr30r/img/image.svg" alt="Image" className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-center w-8 h-8 p-2 rounded hover:bg-gray-100">
                <img src="https://c.animaapp.com/Bzppr30r/img/emoji.svg" alt="Emoji" className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-center w-8 h-8 p-2 rounded hover:bg-gray-100">
                <img src="https://c.animaapp.com/Bzppr30r/img/code.svg" alt="Code" className="w-4 h-4" />
              </button>
              
              <div className="flex-1"></div>
              
              <button className="flex items-center justify-center w-8 h-8 p-2 rounded hover:bg-gray-100">
                <img src="https://c.animaapp.com/Bzppr30r/img/undo.svg" alt="Undo" className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-center w-8 h-8 p-2 rounded hover:bg-gray-100">
                <img src="https://c.animaapp.com/Bzppr30r/img/redo.svg" alt="Redo" className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-center w-8 h-8 p-2 rounded hover:bg-gray-100">
                <img src="https://c.animaapp.com/Bzppr30r/img/more.svg" alt="More" className="w-4 h-4" />
              </button>
            </div>
            
            <div className="p-4 relative self-stretch w-full flex-1 min-h-[400px] border border-solid border-design-tokens-color-primarystroke rounded-md">
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-2">About Manchester City FC</h3>
                <p className="text-sm text-gray-800 leading-relaxed">
                  Manchester City Football Club, founded in 1880, is one of the most successful and popular football teams in the Premier League. Based in Manchester, England, the club plays its home matches at the iconic Etihad Stadium. Known for their attacking style, world-class talent, and passionate fanbase, Man City has earned multiple Premier League titles and domestic trophies under the leadership of manager Pep Guardiola.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">Fixtures, Results & Squad</h3>
                <p className="text-sm text-gray-800 leading-relaxed">
                  Stay updated with Manchester City's latest fixtures, live match results, and player performances throughout the season. Explore the full squad, featuring global stars like Kevin De Bruyne and Erling Haaland, and dive into detailed stats, team line-ups, and upcoming match previews. Whether you're a long-time supporter or new to the game, get everything you need to follow Man City's journey in the Premier League and beyond.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent
          value="settings"
          className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] mt-0"
        >
          <div className="flex flex-col items-start gap-6 px-8 py-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
              <h3 className="text-base font-medium text-gray-800">General</h3>
              
              <div className="flex flex-col gap-4 w-full">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Active</span>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Show in Header/Footer</span>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Top Teams</span>
                  <Switch />
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-6 left-8">
              <button className="px-4 py-2 text-xs font-medium text-gray-700 bg-white border border-design-tokens-color-primarystroke rounded-md hover:bg-gray-50">
                Cancel
              </button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent
          value="team-details"
          className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] mt-0"
        >
          <div className="flex flex-col items-start gap-6 px-8 py-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-wrap items-start gap-[28px_12px] relative self-stretch w-full flex-[0_0_auto]">
              {formFields.map((field) => (
                <div
                  key={field.id}
                  className="flex flex-col w-[546px] items-start gap-3 relative"
                >
                  <div className="flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                    <Label className="[font-family:'Inter',Helvetica] font-medium text-[color:var(--colors-neutral-black)] text-sm tracking-[0] leading-[normal]">
                      {field.label}
                    </Label>
                    {field.optional && (
                      <span className="[font-family:'Inter',Helvetica] font-medium text-colors-neutral-gray-50 text-sm tracking-[0] leading-[normal]">
                        (Optional)
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    {field.type === "input" ? (
                      <div className="h-[52px] items-center gap-2 px-4 py-5 self-stretch w-full bg-colors-neutral-white rounded-[var(--design-tokens-radius-medium)] border border-solid border-design-tokens-color-primarystroke flex relative">
                        <Input
                          placeholder={field.placeholder}
                          className="flex-1 h-3 border-0 bg-transparent p-0 font-body-medium font-[number:var(--body-medium-font-weight)] text-design-tokens-color-inputnovalue text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                        <img className="w-5 h-5" alt="Icon" src={field.icon} />
                      </div>
                    ) : (
                      <Select>
                        <SelectTrigger className="h-[52px] gap-2 px-4 py-5 self-stretch w-full bg-colors-neutral-white rounded-[var(--design-tokens-radius-medium)] border border-solid border-design-tokens-color-primarystroke">
                          <SelectValue
                            placeholder={field.placeholder}
                            className={`flex-1 font-body-medium font-[number:var(--body-medium-font-weight)] ${
                              field.value
                                ? "text-design-tokens-color-inputvalueentered"
                                : "text-design-tokens-color-inputnovalue"
                            } text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]`}
                          >
                            {field.value || field.placeholder}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          {field.id === "teamColor" && teamColors.map(color => (
                            <SelectItem key={color.value} value={color.value}>
                              {color.label}
                            </SelectItem>
                          ))}
                          {field.id === "country" && countries.map(country => (
                            <SelectItem key={country.value} value={country.value}>
                              {country.label}
                            </SelectItem>
                          ))}
                          {field.id === "city" && cities.map(city => (
                            <SelectItem key={city.value} value={city.value}>
                              {city.label}
                            </SelectItem>
                          ))}
                          {field.id === "stadium" && stadiums.map(stadium => (
                            <SelectItem key={stadium.value} value={stadium.value}>
                              {stadium.label}
                            </SelectItem>
                          ))}
                          {field.id === "eventCategory" && (
                            <>
                              <SelectItem value="football">Football</SelectItem>
                              <SelectItem value="basketball">Basketball</SelectItem>
                              <SelectItem value="tennis">Tennis</SelectItem>
                              <SelectItem value="cricket">Cricket</SelectItem>
                            </>
                          )}
                        </SelectContent>
                      </Select>
                    )}
                  </div>
                </div>
              ))}

              {uploadFields.map((field) => (
                <div
                  key={field.id}
                  className="flex-col w-[546px] items-start gap-3 flex relative"
                >
                  <div className="flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                    <Label className="[font-family:'Inter',Helvetica] font-medium text-[color:var(--colors-neutral-black)] text-sm tracking-[0] leading-[normal]">
                      {field.label}
                    </Label>
                    {field.optional && (
                      <span className="[font-family:'Inter',Helvetica] font-medium text-colors-neutral-gray-50 text-sm tracking-[0] leading-[normal]">
                        (Optional)
                      </span>
                    )}
                  </div>

                  <div className="flex h-[98px] items-center justify-center gap-6 px-6 py-8 relative self-stretch w-full rounded-[var(--design-tokens-radius-medium)] border border-dashed border-design-tokens-color-primarystroke cursor-pointer hover:bg-gray-50">
                    <img className="w-11 h-11" alt="Icon" src={field.icon} />

                    <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
                      <div className="relative self-stretch font-body-medium-bold font-[number:var(--body-medium-bold-font-weight)] text-[color:var(--colors-neutral-black)] text-[length:var(--body-medium-bold-font-size)] tracking-[var(--body-medium-bold-letter-spacing)] leading-[var(--body-medium-bold-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-medium-bold-font-style)]">
                        Drop your image here, or browse
                      </div>

                      <div className="relative self-stretch font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-small-font-style)]">
                        Supports: JPEG, PNG, SVG
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex-col w-[546px] items-start gap-3 flex relative">
                <div className="flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                  <Label className="[font-family:'Inter',Helvetica] font-medium text-[color:var(--colors-neutral-black)] text-sm tracking-[0] leading-[normal]">
                    URL
                  </Label>
                </div>

                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="h-[52px] items-center gap-2 px-4 py-5 self-stretch w-full bg-colors-neutral-white rounded-[var(--design-tokens-radius-medium)] border border-solid border-design-tokens-color-primarystroke flex relative">
                    <Input
                      placeholder="Automatically generates a URL based on your input"
                      className="flex-1 h-3 border-0 bg-transparent p-0 font-body-medium font-[number:var(--body-medium-font-weight)] text-design-tokens-color-inputnovalue text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
                      readOnly
                    />
                    <img
                      className="w-5 h-5"
                      alt="Icon"
                      src="https://c.animaapp.com/Bzppr30r/img/icon-13.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
