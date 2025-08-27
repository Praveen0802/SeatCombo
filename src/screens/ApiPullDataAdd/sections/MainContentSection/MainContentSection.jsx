import { ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
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

export const MainContentSection = () => {
  // Generate 20 sample records for the table
  const tableData = Array(20).fill().map((_, index) => ({
    id: index + 1,
    event: "Manchester City vs Arsenal",
    tournament: "English Premier League",
    stadium: "Etihad",
    dateTime: "Feb 03, 2025, 20:00",
    ticket: "234",
    status: index % 3 === 0 ? "Sync" : "Not sync",
    eventFound: index % 4 === 0 ? "Yes" : "No",
  }));

  // State for selected rows
  const [selectedRows, setSelectedRows] = useState([4]); // Pre-select the 4th row

  const toggleRowSelection = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id],
    );
  };

  const isRowSelected = (id) => selectedRows.includes(id);

  return (
    <div className="flex flex-col w-full">
      {/* Main Content */}
      <div className="flex flex-col gap-5 px-8 py-6 bg-colors-neutral-white">
        {/* Search Form */}
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-end gap-3 w-full">
            <div className="flex items-center gap-3 flex-1">
              {/* Select API */}
              <div className="flex flex-col w-[213px] gap-2">
                <div className="flex items-start gap-1 w-full">
                  <div className="mt-[-1.00px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[color:var(--colors-neutral-black)] text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                    Select API
                  </div>
                </div>
                <Select defaultValue="tixstock">
                  <SelectTrigger className="h-[34px] bg-colors-neutral-white rounded-[var(--design-tokens-radius-small)] border border-solid border-design-tokens-color-primarystroke">
                    <SelectValue
                      placeholder="Select API"
                      className="font-body-tiny font-[number:var(--body-tiny-font-weight)] text-design-tokens-color-inputvalueentered text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tixstock">Tixstock</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Event Category */}
              <div className="flex flex-col w-[200px] gap-2">
                <div className="flex items-start gap-1 w-full">
                  <div className="mt-[-1.00px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[color:var(--colors-neutral-black)] text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                    Event Category
                  </div>
                </div>
                <Select defaultValue="football">
                  <SelectTrigger className="h-[34px] bg-colors-neutral-white rounded-[var(--design-tokens-radius-small)] border border-solid border-design-tokens-color-primarystroke">
                    <SelectValue
                      placeholder="Select category"
                      className="font-body-tiny font-[number:var(--body-tiny-font-weight)] text-design-tokens-color-inputvalueentered text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="football">Football</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Content Type */}
              <div className="flex flex-col w-[200px] gap-2">
                <div className="flex items-start gap-1 w-full">
                  <div className="mt-[-1.00px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[color:var(--colors-neutral-black)] text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                    Content Type
                  </div>
                </div>
                <Select defaultValue="events">
                  <SelectTrigger className="h-[34px] bg-colors-neutral-white rounded-[var(--design-tokens-radius-small)] border border-solid border-design-tokens-color-primarystroke">
                    <SelectValue
                      placeholder="Select content type"
                      className="font-body-tiny font-[number:var(--body-tiny-font-weight)] text-design-tokens-color-inputvalueentered text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="events">Events &amp; Tickets</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Page Number */}
              <div className="flex flex-col w-[150px] gap-2">
                <div className="flex items-start gap-1 w-full">
                  <div className="mt-[-1.00px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[color:var(--colors-neutral-black)] text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                    Page Number
                  </div>
                </div>
                <Input
                  className="h-[34px] p-3 bg-colors-neutral-white rounded-[var(--design-tokens-radius-small)] border border-solid border-design-tokens-color-primarystroke font-body-tiny font-[number:var(--body-tiny-font-weight)] text-design-tokens-color-inputvalueentered text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]"
                  defaultValue="2"
                />
              </div>

              {/* Performer */}
              <div className="flex flex-col w-[200px] gap-2">
                <div className="flex items-start gap-1 w-full">
                  <div className="mt-[-1.00px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[color:var(--colors-neutral-black)] text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                    Performer
                  </div>
                  <div className="mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-colors-neutral-gray-50 text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                    (Optional)
                  </div>
                </div>
                <Input
                  className="h-[34px] p-3 bg-colors-neutral-white rounded-[var(--design-tokens-radius-small)] border border-solid border-design-tokens-color-primarystroke font-body-tiny font-[number:var(--body-tiny-font-weight)] text-design-tokens-color-inputnovalue text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]"
                  placeholder="Type performer"
                />
              </div>
            </div>

            {/* Search Button */}
            <Button className="h-[34px] bg-colors-brand-primary-red rounded-[var(--design-tokens-radius-small)] text-colors-neutral-white">
              Search
            </Button>
          </div>

          {/* Table with scrollable container */}
          <div className="flex flex-col rounded-[var(--design-tokens-radius-medium)] overflow-hidden border border-solid border-design-tokens-color-primarystroke">
            <div className="max-h-[500px] overflow-y-auto">
            <Table>
              <TableHeader className="bg-colors-neutral-gray-10">
                <TableRow className="border-b border-design-tokens-color-primarystroke">
                  <TableHead className="w-[34px] h-[34px] p-0">
                    <div className="flex items-center justify-center h-full">
                      <Checkbox />
                    </div>
                  </TableHead>
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
                      <ChevronDownIcon className="w-3 h-3" />
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
                    className={`border-b border-design-tokens-color-primarystroke ${isRowSelected(row.id) ? "bg-colors-tints-red-10" : ""}`}
                  >
                    <TableCell className="w-[34px] h-[34px] p-0">
                      <div className="flex items-center justify-center h-full">
                        <Checkbox
                          checked={isRowSelected(row.id)}
                          onCheckedChange={() => toggleRowSelection(row.id)}
                          className={
                            isRowSelected(row.id)
                              ? "bg-colors-brand-primary-red border-colors-brand-primary-red"
                              : ""
                          }
                        />
                      </div>
                    </TableCell>
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
        </div>
      </div>
    </div>
  );
};
