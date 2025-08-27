import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
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

export const AllTicketSyncSection = () => {
  // Sample data for the table
  const tableData = Array(20).fill().map((_, index) => ({
    id: index + 1,
    event: "Manchester City vs Arsenal",
    tournament: "English Premier League",
    stadium: "Etihad",
    dateTime: "Feb 03, 2025, 20:00",
    ticket: "234",
    status: index === 1 ? "Sync" : "Not sync",
    eventFound: index === 1 ? "Yes" : "No",
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;
  const itemsPerPage = 50;
  const totalItems = 100;

  return (
    <div className="flex flex-col w-full">
      {/* Search and Filters */}
      <div className="flex flex-col gap-5 px-8 py-6 bg-colors-neutral-white">
        <div className="flex items-center gap-3 w-full">
          {/* Search Input */}
          <div className="relative w-[230px]">
            <Input 
              className="h-[34px] pl-8 pr-3 bg-colors-neutral-white rounded-[var(--design-tokens-radius-small)] border border-solid border-design-tokens-color-primarystroke font-body-tiny text-design-tokens-color-inputnovalue"
              placeholder="Search by event name"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <SearchIcon className="w-4 h-4 text-colors-neutral-gray-70" />
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-3 ml-auto">
            <Select defaultValue="all">
              <SelectTrigger className="h-[34px] w-[120px] bg-colors-neutral-white rounded-[var(--design-tokens-radius-small)] border border-solid border-design-tokens-color-primarystroke">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Status</SelectItem>
                <SelectItem value="sync">Sync</SelectItem>
                <SelectItem value="not-sync">Not sync</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all">
              <SelectTrigger className="h-[34px] w-[150px] bg-colors-neutral-white rounded-[var(--design-tokens-radius-small)] border border-solid border-design-tokens-color-primarystroke">
                <SelectValue placeholder="Event Found" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Event Found</SelectItem>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all">
              <SelectTrigger className="h-[34px] w-[150px] bg-colors-neutral-white rounded-[var(--design-tokens-radius-small)] border border-solid border-design-tokens-color-primarystroke">
                <SelectValue placeholder="Tournament" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tournament</SelectItem>
                <SelectItem value="epl">English Premier League</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all">
              <SelectTrigger className="h-[34px] w-[120px] bg-colors-neutral-white rounded-[var(--design-tokens-radius-small)] border border-solid border-design-tokens-color-primarystroke">
                <SelectValue placeholder="Stadium" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Stadium</SelectItem>
                <SelectItem value="etihad">Etihad</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Table with scrollable container */}
        <div className="flex flex-col rounded-[var(--design-tokens-radius-medium)] overflow-hidden border border-solid border-design-tokens-color-primarystroke">
          <div className="max-h-[500px] overflow-y-auto">
          <Table>
            <TableHeader className="bg-colors-neutral-gray-10">
              <TableRow className="border-b border-design-tokens-color-primarystroke">
                <TableHead className="h-[34px] p-3 font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                  <div className="flex items-center gap-1">
                    Event
                    <ChevronDownIcon className="w-3 h-3" />
                  </div>
                </TableHead>
                <TableHead className="h-[34px] p-3 font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                  <div className="flex items-center gap-1">
                    Tournament
                    <ChevronDownIcon className="w-3 h-3" />
                  </div>
                </TableHead>
                <TableHead className="h-[34px] p-3 font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                  <div className="flex items-center gap-1">
                    Stadium
                    <ChevronDownIcon className="w-3 h-3" />
                  </div>
                </TableHead>
                <TableHead className="h-[34px] p-3 font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                  <div className="flex items-center gap-1">
                    Date &amp; Time
                    <ChevronDownIcon className="w-3 h-3" />
                  </div>
                </TableHead>
                <TableHead className="h-[34px] p-3 font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                  <div className="flex items-center gap-1">
                    Ticket
                  </div>
                </TableHead>
                <TableHead className="h-[34px] p-3 font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                  Status
                </TableHead>
                <TableHead className="h-[34px] p-3 font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                  Event Found
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((row) => (
                <TableRow
                  key={row.id}
                  className="border-b border-design-tokens-color-primarystroke"
                >
                  <TableCell className="h-[34px] p-3 font-body-small font-[number:var(--body-small-font-weight)] text-[color:var(--colors-neutral-black)] text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                    {row.event}
                  </TableCell>
                  <TableCell className="h-[34px] p-3 font-body-small font-[number:var(--body-small-font-weight)] text-[color:var(--colors-neutral-black)] text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                    {row.tournament}
                  </TableCell>
                  <TableCell className="h-[34px] p-3 font-body-small font-[number:var(--body-small-font-weight)] text-[color:var(--colors-neutral-black)] text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                    {row.stadium}
                  </TableCell>
                  <TableCell className="h-[34px] p-3 font-body-small font-[number:var(--body-small-font-weight)] text-[color:var(--colors-neutral-black)] text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                    {row.dateTime}
                  </TableCell>
                  <TableCell className="h-[34px] p-3 font-body-small font-[number:var(--body-small-font-weight)] text-[color:var(--colors-neutral-black)] text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                    {row.ticket}
                  </TableCell>
                  <TableCell className="h-[34px] p-3">
                    <Badge
                      className={`h-6 px-2 py-1 rounded font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)] ${
                        row.status === "Sync"
                          ? "bg-[#ddffe1] text-colors-success"
                          : "bg-colors-tints-red-30 text-colors-brand-primary-red"
                      }`}
                    >
                      {row.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="h-[34px] p-3">
                    <Badge
                      className={`h-6 px-2 py-1 rounded font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)] ${
                        row.eventFound === "Yes"
                          ? "bg-[#ddffe1] text-colors-success"
                          : "bg-colors-tints-red-30 text-colors-brand-primary-red"
                      }`}
                    >
                      {row.eventFound}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            </Table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between w-full mt-2">
          <Select defaultValue="50">
            <SelectTrigger className="h-[34px] w-[70px] bg-colors-neutral-white rounded-[var(--design-tokens-radius-small)] border border-solid border-design-tokens-color-primarystroke">
              <SelectValue placeholder="50" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              className="w-8 h-8 p-0 rounded-[var(--design-tokens-radius-small)] border border-design-tokens-color-primarystroke"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </Button>
            
            <Button 
              variant={currentPage === 1 ? "default" : "outline"} 
              className={`w-8 h-8 p-0 rounded-[var(--design-tokens-radius-small)] ${currentPage === 1 ? 'bg-colors-brand-primary-red text-colors-neutral-white' : 'border border-design-tokens-color-primarystroke'}`}
              onClick={() => setCurrentPage(1)}
            >
              1
            </Button>
            
            <Button 
              variant={currentPage === 2 ? "default" : "outline"} 
              className={`w-8 h-8 p-0 rounded-[var(--design-tokens-radius-small)] ${currentPage === 2 ? 'bg-colors-brand-primary-red text-colors-neutral-white' : 'border border-design-tokens-color-primarystroke'}`}
              onClick={() => setCurrentPage(2)}
            >
              2
            </Button>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="w-8 h-8 p-0 rounded-[var(--design-tokens-radius-small)] border border-design-tokens-color-primarystroke"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            >
              <ChevronRightIcon className="w-4 h-4" />
            </Button>
          </div>

          <div className="font-body-small text-colors-neutral-gray-80">
            Showing {itemsPerPage} of {totalItems} results
          </div>
        </div>
      </div>
    </div>
  );
};
