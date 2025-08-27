import {
  BellIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb";
import { Button } from "../../../../components/ui/button";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const StadiumSettingsSection = () => {
  // Table data for blocks
  const blockRows = [
    { id: 1, block: "Floor A", zone: "Lower Tier", color: "#197CF5" },
    { id: 2, block: "Floor A", zone: "Lower Tier", color: "#197CF5" },
    { id: 3, block: "Floor A", zone: "Lower Tier", color: "#197CF5" },
    { id: 4, block: "Floor A", zone: "Lower Tier", color: "#197CF5" },
    { id: 5, block: "Floor A", zone: "Lower Tier", color: "#197CF5" },
    { id: 6, block: "Floor A", zone: "Upper Tier", color: "#197CF5" },
    { id: 7, block: "Floor A", zone: "Upper Tier", color: "#197CF5" },
    { id: 8, block: "Floor A", zone: "Upper Tier", color: "#197CF5" },
    { id: 9, block: "Floor A", zone: "Upper Tier", color: "#197CF5" },
    { id: 10, block: "Floor A", zone: "Floor", color: "#197CF5" },
    { id: 11, block: "Floor A", zone: "Floor", color: "#197CF5" },
    { id: 12, block: "Floor A", zone: "Floor", color: "#197CF5" },
    { id: 13, block: "Floor A", zone: "Lower - 115", color: "#197CF5" },
    { id: 14, block: "Floor A", zone: "Lower - 115", color: "#197CF5" },
  ];

  return (
    <div className="flex flex-col w-full">
      <header className="flex items-center gap-3 px-8 py-5 border-b border-design-tokens-color-primarystroke bg-[linear-gradient(180deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_100%)]">
        <h1 className="flex-1 font-header-h4 font-[number:var(--header-h4-font-weight)] text-[color:var(--colors-neutral-black)] text-[length:var(--header-h4-font-size)] tracking-[var(--header-h4-letter-spacing)] leading-[var(--header-h4-line-height)] [font-style:var(--header-h4-font-style)]">
          Manage stadium
        </h1>

        <div className="flex items-center gap-6">
          <div className="flex items-center">
            <div className="flex items-center gap-1">
              <div className="relative w-[26.67px] h-5 rounded-[3.33px] overflow-hidden bg-[url(https://c.animaapp.com/a2lg1biI/img/vector.svg)] bg-[100%_100%]">
                <div className="relative w-[27px] h-5 bg-[url(https://c.animaapp.com/a2lg1biI/img/vector-1.svg)] bg-[100%_100%]">
                  <img
                    className="absolute w-[27px] h-5 top-0 left-0"
                    alt="Vector"
                    src="https://c.animaapp.com/a2lg1biI/img/vector-2.svg"
                  />
                  <img
                    className="absolute w-[27px] h-5 top-0 left-0"
                    alt="Vector"
                    src="https://c.animaapp.com/a2lg1biI/img/vector-3.svg"
                  />
                  <img
                    className="absolute w-[27px] h-5 top-0 left-0"
                    alt="Vector"
                    src="https://c.animaapp.com/a2lg1biI/img/vector-4.svg"
                  />
                </div>
              </div>

              <span className="font-action-item-medium font-[number:var(--action-item-medium-font-weight)] text-colors-neutral-black-duplicate text-[length:var(--action-item-medium-font-size)] tracking-[var(--action-item-medium-letter-spacing)] leading-[var(--action-item-medium-line-height)] whitespace-nowrap [font-style:var(--action-item-medium-font-style)]">
                English
              </span>
            </div>
            <ChevronDownIcon className="w-4 h-4" />
          </div>

          <div className="flex items-center gap-1">
            <span className="[font-family:'Inter',Helvetica] font-medium text-[color:var(--colors-neutral-black)] text-sm tracking-[0] leading-[normal] whitespace-nowrap">
              Rey&apos;s Store
            </span>
            <ChevronDownIcon className="w-3.5 h-3.5" />
          </div>

          <div className="flex items-center justify-end">
            <div className="relative">
              <BellIcon className="w-6 h-6" />
              <div className="absolute w-2 h-2 left-[15px] top-0 bg-colors-brand-primary-red rounded" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-col w-full px-8 py-5 gap-2.5">
        <Breadcrumb>
          <BreadcrumbList className="flex items-center gap-1">
            <BreadcrumbItem>
              <BreadcrumbLink className="font-body-medium font-[number:var(--body-medium-font-weight)] text-colors-neutral-gray-50 text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)]">
                Events
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRightIcon className="w-4 h-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink className="font-body-medium font-[number:var(--body-medium-font-weight)] text-[color:var(--colors-neutral-black)] text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)]">
                Etihad Stadium
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="border-b border-design-tokens-color-primarystroke">
        <Tabs defaultValue="stadium-settings" className="w-full">
          <TabsList className="flex h-auto bg-transparent p-0 w-full justify-start">
            <TabsTrigger
              value="stadium-details"
              className="px-5 py-4 border-b border-design-tokens-color-primarystroke data-[state=active]:border-colors-brand-primary-red data-[state=active]:text-colors-brand-primary-red rounded-none font-action-item-large font-[number:var(--action-item-large-font-weight)] text-[color:var(--colors-neutral-gray-70)] text-[length:var(--action-item-large-font-size)] tracking-[var(--action-item-large-letter-spacing)] leading-[var(--action-item-large-line-height)] whitespace-nowrap [font-style:var(--action-item-large-font-style)]"
            >
              Stadium details
            </TabsTrigger>
            <Link to="/stadiums">
            <TabsTrigger
              value="stadium-settings"
              className="px-5 py-4 border-b border-design-tokens-color-primarystroke data-[state=active]:border-colors-brand-primary-red data-[state=active]:text-colors-brand-primary-red rounded-none font-action-item-large font-[number:var(--action-item-large-font-weight)] text-[color:var(--colors-neutral-gray-70)] text-[length:var(--action-item-large-font-size)] tracking-[var(--action-item-large-letter-spacing)] leading-[var(--action-item-large-line-height)] whitespace-nowrap [font-style:var(--action-item-large-font-style)]"
            >
              Stadium settings
            </TabsTrigger>
            </Link>
            <Link to="/stadium-zone">
              <TabsTrigger
                value="zone-settings"
                className="px-5 py-4 border-b border-design-tokens-color-primarystroke data-[state=active]:border-colors-brand-primary-red data-[state=active]:text-colors-brand-primary-red rounded-none font-action-item-large font-[number:var(--action-item-large-font-weight)] text-[color:var(--colors-neutral-gray-70)] text-[length:var(--action-item-large-font-size)] tracking-[var(--action-item-large-letter-spacing)] leading-[var(--action-item-large-line-height)] whitespace-nowrap [font-style:var(--action-item-large-font-style)]"
              >
                Zone settings
              </TabsTrigger>
            </Link>
          </TabsList>
        </Tabs>
      </div>

      <div className="flex w-full bg-colors-neutral-white">
        <div className="flex flex-col w-1/2 items-start px-8 py-6">
          <img
            className="w-full h-auto object-cover"
            alt="Stadium map"
            src="https://c.animaapp.com/a2lg1biI/img/adobe-express---file--1--1@2x.png"
          />
        </div>

        <div className="flex flex-col flex-1 gap-5 px-8 py-6 border-l border-design-tokens-color-primarystroke">
          <div className="flex flex-col gap-3 w-full">
            <div className="flex items-end gap-3 w-full">
              <div className="flex items-center gap-3 flex-1">
                <div className="flex flex-col gap-2 flex-1">
                  <div className="flex h-[34px] items-center p-3 bg-colors-neutral-white rounded-[var(--design-tokens-radius-small)] border border-solid border-design-tokens-color-primarystroke gap-2 w-full">
                    <div className="flex items-center gap-3 flex-1">
                      <Input
                        className="border-0 p-0 h-auto shadow-none font-body-tiny font-[number:var(--body-tiny-font-weight)] text-design-tokens-color-inputnovalue text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]"
                        placeholder="SearchIcon block"
                      />
                    </div>
                    <SearchIcon className="w-4 h-4" />
                  </div>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <Select>
                    <SelectTrigger className="h-[34px] p-3 bg-colors-neutral-white rounded-[var(--design-tokens-radius-small)] border border-solid border-design-tokens-color-primarystroke">
                      <SelectValue
                        placeholder="Select zone"
                        className="font-body-tiny font-[number:var(--body-tiny-font-weight)] text-design-tokens-color-inputnovalue text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lower-tier">Lower Tier</SelectItem>
                      <SelectItem value="upper-tier">Upper Tier</SelectItem>
                      <SelectItem value="floor">Floor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button className="h-[34px] p-3 bg-colors-brand-primary-red rounded-[var(--design-tokens-radius-small)]">
                <span className="[font-family:'Inter',Helvetica] font-medium text-colors-neutral-white text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                  Add to List
                </span>
              </Button>
            </div>

            <div className="font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[color:var(--colors-neutral-gray-70)] text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
              200 blocks assigned out of 300
            </div>

            <div className="w-full rounded-[var(--design-tokens-radius-medium)] overflow-hidden border border-solid border-design-tokens-color-primarystroke">
              <Table>
                <TableHeader className="bg-colors-neutral-gray-10">
                  <TableRow>
                    <TableHead className="p-3 border-t border-b border-design-tokens-color-primarystroke w-10">
                      <Checkbox />
                    </TableHead>
                    <TableHead className="p-3 border-t border-b border-design-tokens-color-primarystroke w-[186px]">
                      <span className="font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                        Block
                      </span>
                    </TableHead>
                    <TableHead className="p-3 border-t border-b border-design-tokens-color-primarystroke w-[200px]">
                      <span className="font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                        Zone
                      </span>
                    </TableHead>
                    <TableHead className="p-3 border-t border-b border-design-tokens-color-primarystroke w-[127px]">
                      <span className="font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                        Color
                      </span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {blockRows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell className="p-3 border-t border-b border-design-tokens-color-primarystroke">
                        <Checkbox />
                      </TableCell>
                      <TableCell className="p-3 border-t border-b border-design-tokens-color-primarystroke">
                        <div className="flex items-center gap-3 w-full">
                          <span className="font-body-small font-[number:var(--body-small-font-weight)] text-[color:var(--colors-neutral-black)] text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                            {row.block}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="px-3 py-2 border-t border-b border-design-tokens-color-primarystroke">
                        <div className="w-full">
                          <Select
                            defaultValue={row.zone
                              .toLowerCase()
                              .replace(" ", "-")}
                          >
                            <SelectTrigger className="h-[34px] p-3 bg-colors-neutral-white rounded-[var(--design-tokens-radius-small)] border border-solid border-design-tokens-color-primarystroke">
                              <SelectValue className="font-body-tiny font-[number:var(--body-tiny-font-weight)] text-design-tokens-color-inputvalueentered text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="lower-tier">
                                Lower Tier
                              </SelectItem>
                              <SelectItem value="upper-tier">
                                Upper Tier
                              </SelectItem>
                              <SelectItem value="floor">Floor</SelectItem>
                              <SelectItem value="lower-115">
                                Lower - 115
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </TableCell>
                      <TableCell className="px-3 py-2 border-t border-b border-design-tokens-color-primarystroke">
                        <div className="flex items-center gap-1 p-1 bg-colors-neutral-gray-10 rounded-[var(--design-tokens-radius-small)] border border-solid border-design-tokens-color-primarystroke">
                          <div className="w-5 h-5 bg-[#19bdf4] rounded border border-solid border-design-tokens-color-primarystroke" />
                          <span className="font-body-small font-[number:var(--body-small-font-weight)] text-[color:var(--colors-neutral-black)] text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                            {row.color}
                          </span>
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
