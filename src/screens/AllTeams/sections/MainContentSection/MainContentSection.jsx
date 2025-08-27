import {
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  EyeIcon,
  MoreHorizontalIcon,
  SearchIcon,
  XIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";
import { Input } from "../../../../components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "../../../../components/ui/pagination";
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

const teamsData = [
  {
    name: "Arsenal",
    logo: "https://c.animaapp.com/kNhapZEV/img/image-4@2x.png",
    ticketListed: true,
    status: "Active",
    seoStatus: false,
  },
  {
    name: "Bournemouth",
    logo: "https://c.animaapp.com/kNhapZEV/img/image-4-1@2x.png",
    ticketListed: true,
    status: "Inactive",
    seoStatus: false,
  },
  {
    name: "Brentford",
    logo: "https://c.animaapp.com/kNhapZEV/img/image-4-2@2x.png",
    ticketListed: false,
    status: "Active",
    seoStatus: false,
  },
  {
    name: "Brighton",
    logo: "https://c.animaapp.com/kNhapZEV/img/image-4-3@2x.png",
    ticketListed: true,
    status: "Active",
    seoStatus: false,
  },
  {
    name: "Chelsea",
    logo: "https://c.animaapp.com/kNhapZEV/img/image-4-4@2x.png",
    ticketListed: false,
    status: "Active",
    seoStatus: false,
  },
  {
    name: "Crystal Palace",
    logo: "https://c.animaapp.com/kNhapZEV/img/image-4-5@2x.png",
    ticketListed: false,
    status: "Active",
    seoStatus: false,
  },
  {
    name: "Everton",
    logo: "https://c.animaapp.com/kNhapZEV/img/image-4-6@2x.png",
    ticketListed: true,
    status: "Active",
    seoStatus: true,
  },
  {
    name: "Fulham",
    logo: "https://c.animaapp.com/kNhapZEV/img/image-4-7@2x.png",
    ticketListed: true,
    status: "Active",
    seoStatus: false,
  },
  {
    name: "Leicester City",
    logo: "https://c.animaapp.com/kNhapZEV/img/image-4-8@2x.png",
    ticketListed: true,
    status: "Active",
    seoStatus: false,
  },
  {
    name: "Liverpool",
    logo: "https://c.animaapp.com/kNhapZEV/img/image-4-9@2x.png",
    ticketListed: true,
    status: "Active",
    seoStatus: true,
  },
  {
    name: "Manchester City",
    logo: "https://c.animaapp.com/kNhapZEV/img/image-4-10@2x.png",
    ticketListed: true,
    status: "Active",
    seoStatus: true,
  },
  {
    name: "Manchester United",
    logo: "https://c.animaapp.com/kNhapZEV/img/image-4-11@2x.png",
    ticketListed: true,
    status: "Active",
    seoStatus: false,
  },
  {
    name: "Newcastle United",
    logo: "https://c.animaapp.com/kNhapZEV/img/image-4-12@2x.png",
    ticketListed: true,
    status: "Active",
    seoStatus: false,
  },
  {
    name: "Southampton",
    logo: "https://c.animaapp.com/kNhapZEV/img/image-4-13@2x.png",
    ticketListed: true,
    status: "Active",
    seoStatus: false,
  },
  {
    name: "Tottenham",
    logo: "https://c.animaapp.com/kNhapZEV/img/image-4-14@2x.png",
    ticketListed: true,
    status: "Active",
    seoStatus: false,
  },
  {
    name: "West Ham",
    logo: "https://c.animaapp.com/kNhapZEV/img/image-4-15@2x.png",
    ticketListed: true,
    status: "Active",
    seoStatus: false,
  },
  {
    name: "Wolves",
    logo: "https://c.animaapp.com/kNhapZEV/img/image-4-16@2x.png",
    ticketListed: true,
    status: "Active",
    seoStatus: false,
  },
];

export const MainContentSection = () => {
  return (
    <div className="flex flex-col w-full items-start relative">
      <header className="flex items-center gap-3 px-8 py-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent [border-top-style:none] [border-right-style:none] border-b [border-bottom-style:solid] [border-left-style:none] border-design-tokens-color-primarystroke bg-[linear-gradient(180deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_100%)]">
        <div className="relative flex-1 font-header-h4 font-[number:var(--header-h4-font-weight)] text-colors-neutral-black text-[length:var(--header-h4-font-size)] tracking-[var(--header-h4-letter-spacing)] leading-[var(--header-h4-line-height)] [font-style:var(--header-h4-font-style)]">
          Teams
        </div>

        <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
          <div className="inline-flex items-center relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
              <img
                className="relative w-[26.67px] h-5"
                alt="United kingdom GB"
                src="https://c.animaapp.com/kNhapZEV/img/united-kingdom--gb-.svg"
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
            <div className="relative w-6 h-6 bg-[url(https://c.animaapp.com/kNhapZEV/img/icon-3.svg)] bg-[100%_100%]">
              <div className="relative w-2 h-2 left-[15px] bg-colors-brand-primary-red rounded" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-col h-[960px] items-start gap-5 px-8 py-5 relative self-stretch w-full">
        <div className="flex flex-col items-start gap-2 relative flex-1 self-stretch w-full grow">
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
              <div className="flex flex-col w-[267px] items-start gap-2 relative">
                <div className="relative w-full">
                  <Input
                    placeholder="SearchIcon by team"
                    className="h-[34px] pr-10 font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)] placeholder:text-design-tokens-color-inputnovalue"
                  />
                  <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-design-tokens-color-inputnovalue" />
                </div>
              </div>

              <div className="flex-col w-[120px] items-start flex gap-2 relative">
                <Select>
                  <SelectTrigger className="h-[34px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]">
                    <SelectValue
                      placeholder="Status"
                      className="text-design-tokens-color-inputnovalue"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button className="h-[34px] bg-colors-brand-primary-red hover:bg-colors-brand-primary-red/90 text-colors-neutral-white font-medium text-sm h-auto">
              <a href="/add-teams">Add Team</a>
            </Button>
          </div>

          <div className="flex items-center relative self-stretch w-full flex-[0_0_auto] rounded-[var(--design-tokens-radius-medium)] overflow-hidden border border-solid border-design-tokens-color-primarystroke">
            <Table>
              <TableHeader>
                <TableRow className="bg-colors-neutral-gray-10 border-design-tokens-color-primarystroke">
                  <TableHead className="h-[34px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)] w-[458px]">
                    <div className="flex items-center gap-1">
                      Team
                      <img
                        className="w-3 h-3"
                        alt="Sort icon"
                        src="https://c.animaapp.com/kNhapZEV/img/icon-6.svg"
                      />
                    </div>
                  </TableHead>
                  <TableHead className="h-[34px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)] w-[130px] text-center">
                    Ticket listed
                  </TableHead>
                  <TableHead className="h-[34px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)] w-[130px] text-center">
                    Status
                  </TableHead>
                  <TableHead className="h-[34px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)] w-[130px] text-center">
                    SEO status
                  </TableHead>
                  <TableHead className="h-[34px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)] w-[131px] text-center">
                    Preview
                  </TableHead>
                  <TableHead className="h-[34px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)] w-[130px] text-center"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {teamsData.map((team, index) => (
                  <TableRow
                    key={index}
                    className="h-12 border-design-tokens-color-primarystroke"
                  >
                    <TableCell className="p-3">
                      <div className="flex items-center gap-3">
                        <img
                          className="w-6 h-6 object-cover"
                          alt={`${team.name} logo`}
                          src={team.logo}
                        />
                        <div className="font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                          {team.name}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="p-3 text-center">
                      {team.ticketListed ? (
                        <CheckIcon className="w-6 h-6 text-colors-success mx-auto" />
                      ) : (
                        <XIcon className="w-6 h-6 text-colors-brand-primary-red mx-auto" />
                      )}
                    </TableCell>
                    <TableCell className="p-3 text-center">
                      <Badge
                        className={`h-6 px-2 font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)] ${
                          team.status === "Active"
                            ? "bg-[#ddffe1] text-colors-success hover:bg-[#ddffe1]"
                            : "bg-colors-tints-red-30 text-colors-brand-primary-red hover:bg-colors-tints-red-30"
                        }`}
                      >
                        {team.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="p-3 text-center">
                      {team.seoStatus ? (
                        <CheckIcon className="w-6 h-6 text-colors-success mx-auto" />
                      ) : (
                        <XIcon className="w-6 h-6 text-colors-brand-primary-red mx-auto" />
                      )}
                    </TableCell>
                    <TableCell className="p-3 text-center">
                      <EyeIcon className="w-6 h-6 mx-auto" />
                    </TableCell>
                    <TableCell className="p-3 text-center">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontalIcon className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center justify-center gap-10 relative flex-1 grow">
            <Select>
              <SelectTrigger className="w-[60px] h-6 border border-solid border-design-tokens-color-primarystroke rounded-[var(--design-tokens-radius-small)] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]">
                <SelectValue defaultValue="50" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
                <SelectItem value="100">100</SelectItem>
              </SelectContent>
            </Select>

            <Pagination>
              <PaginationContent className="flex items-center gap-2">
                <PaginationItem>
                  <Button variant="outline" size="sm" className="w-6 h-6 p-1">
                    <ChevronsLeftIcon className="w-4 h-4" />
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <Button variant="outline" size="sm" className="w-6 h-6 p-1">
                    <ChevronLeftIcon className="w-4 h-4" />
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-6 h-6 p-1 font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]"
                  >
                    1
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-6 h-6 p-1 font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]"
                  >
                    2
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <Button
                    size="sm"
                    className="w-6 h-6 p-1 bg-colors-brand-primary-red hover:bg-colors-brand-primary-red/90 text-colors-neutral-white font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]"
                  >
                    3
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-6 h-6 p-1 font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]"
                  >
                    4
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-6 h-6 p-1 font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]"
                  >
                    5
                  </Button>
                </PaginationItem>
                <PaginationEllipsis className="font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]" />
                <PaginationItem>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-6 h-6 p-1 font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]"
                  >
                    99
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <Button variant="outline" size="sm" className="w-6 h-6 p-1">
                    <ChevronRightIcon className="w-4 h-4" />
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <Button variant="outline" size="sm" className="w-6 h-6 p-1">
                    <ChevronsRightIcon className="w-4 h-4" />
                  </Button>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>

          <div className="relative w-fit font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-neutral-black text-[length:var(--body-tiny-font-size)] text-center tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
            Showing 50 of 1000 results
          </div>
        </div>
      </div>
    </div>
  );
};
