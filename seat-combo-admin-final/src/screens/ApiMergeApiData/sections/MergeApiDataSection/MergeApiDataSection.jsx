import { ArrowRightIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";

export const MergeApiDataSection = () => {
  // Data for API ticket categories and SeatCombo ticket categories
  const categoryMappings = Array(12).fill({
    apiCategory: "ABCD",
    seatComboCategory: "VIP & Hospitality",
  });

  return (
    <div className="flex flex-col w-full h-full">
      <header className="flex items-center gap-3 px-8 py-5 relative w-full border-b border-design-tokens-color-primarystroke bg-[linear-gradient(180deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_100%)]">
        <h1 className="flex-1 font-header-h4 font-[number:var(--header-h4-font-weight)] text-[color:var(--colors-neutral-black)] text-[length:var(--header-h4-font-size)] tracking-[var(--header-h4-letter-spacing)] leading-[var(--header-h4-line-height)] [font-style:var(--header-h4-font-style)]">
          Merge API Data
        </h1>

        <div className="inline-flex items-center gap-6">
          <div className="inline-flex items-center">
            <div className="inline-flex items-center gap-1">
              <div className="relative w-[26.67px] h-5 rounded-[3.33px] overflow-hidden bg-[url(https://c.animaapp.com/A3309RG9/img/vector.svg)] bg-[100%_100%]">
                <div className="relative w-[27px] h-5 bg-[url(https://c.animaapp.com/A3309RG9/img/vector-1.svg)] bg-[100%_100%]">
                  <img
                    className="absolute w-[27px] h-5 top-0 left-0"
                    alt="Vector"
                    src="https://c.animaapp.com/A3309RG9/img/vector-2.svg"
                  />
                  <img
                    className="absolute w-[27px] h-5 top-0 left-0"
                    alt="Vector"
                    src="https://c.animaapp.com/A3309RG9/img/vector-3.svg"
                  />
                  <img
                    className="absolute w-[27px] h-5 top-0 left-0"
                    alt="Vector"
                    src="https://c.animaapp.com/A3309RG9/img/vector-4.svg"
                  />
                </div>
              </div>

              <span className="font-action-item-medium font-[number:var(--action-item-medium-font-weight)] text-colors-neutral-black-duplicate text-[length:var(--action-item-medium-font-size)] tracking-[var(--action-item-medium-letter-spacing)] leading-[var(--action-item-medium-line-height)] whitespace-nowrap [font-style:var(--action-item-medium-font-style)]">
                English
              </span>
            </div>

            <img
              className="w-4 h-4"
              alt="Icon"
              src="https://c.animaapp.com/A3309RG9/img/icon-1.svg"
            />
          </div>

          <div className="inline-flex items-center gap-1">
            <span className="[font-family:'Inter',Helvetica] font-medium text-[color:var(--colors-neutral-black)] text-sm tracking-[0] leading-[normal] whitespace-nowrap">
              Rey's Store
            </span>

            <img
              className="w-3.5 h-3.5"
              alt="Icon"
              src="https://c.animaapp.com/A3309RG9/img/icon-2.svg"
            />
          </div>

          <div className="inline-flex items-center justify-end gap-6">
            <div className="relative w-6 h-6 bg-[url(https://c.animaapp.com/A3309RG9/img/icon-3.svg)] bg-[100%_100%]">
              <div className="absolute w-2 h-2 left-[15px] bg-colors-brand-primary-red rounded" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-col items-start gap-2.5 px-8 py-5 w-full">
        <nav className="flex items-center gap-1 w-full">
          <div className="inline-flex items-center gap-1">
            <span className="font-body-medium font-[number:var(--body-medium-font-weight)] text-colors-neutral-gray-50 text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)]">
              API
            </span>

            <ChevronRightIcon className="w-4 h-4 text-colors-neutral-gray-50" />
          </div>

          <div className="inline-flex items-center justify-center gap-2.5">
            <span className="font-body-medium font-[number:var(--body-medium-font-weight)] text-[color:var(--colors-neutral-black)] text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)]">
              Merge API Data
            </span>
          </div>
        </nav>
      </div>

      <Tabs defaultValue="merge-api" className="w-full">
        <TabsList className="flex w-full px-8 py-0 border-b border-design-tokens-color-primarystroke rounded-none bg-transparent h-auto">
          <TabsTrigger
            value="merge-api"
            className="px-5 py-4 border-b border-transparent data-[state=active]:border-colors-brand-primary-red rounded-none bg-transparent font-action-item-large font-[number:var(--action-item-large-font-weight)] text-colors-neutral-gray-70 data-[state=active]:text-colors-brand-primary-red text-[length:var(--action-item-large-font-size)] tracking-[var(--action-item-large-letter-spacing)] leading-[var(--action-item-large-line-height)] [font-style:var(--action-item-large-font-style)]"
          >
            Merge API
          </TabsTrigger>
          <TabsTrigger
            value="merge-seat-category"
            className="px-5 py-4 border-b border-transparent data-[state=active]:border-colors-brand-primary-red rounded-none bg-transparent font-action-item-large font-[number:var(--action-item-large-font-weight)] text-colors-neutral-gray-70 data-[state=active]:text-colors-brand-primary-red text-[length:var(--action-item-large-font-size)] tracking-[var(--action-item-large-letter-spacing)] leading-[var(--action-item-large-line-height)] [font-style:var(--action-item-large-font-style)]"
          >
            Merge Seat Category
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="merge-api"
          className="flex flex-col w-full mt-0"
        >
          {/* Search Section */}
          <div className="flex items-end justify-center gap-3 px-8 py-6 w-full bg-colors-tints-red-5 border-b border-design-tokens-color-primarystroke">
            <div className="inline-flex items-center gap-3">
              <div className="flex flex-col w-[360px] items-start gap-3">
                <label className="flex items-center gap-1 self-stretch w-full">
                  <span className="font-medium text-[color:var(--colors-neutral-black)] text-sm whitespace-nowrap">
                    API Source
                  </span>
                </label>
                <Select defaultValue="tixstock">
                  <SelectTrigger className="h-[52px] px-4 py-5 bg-colors-neutral-white rounded-[var(--design-tokens-radius-medium)] border border-solid border-design-tokens-color-primarystroke">
                    <SelectValue placeholder="Select API Source" className="font-body-medium font-[number:var(--body-medium-font-weight)] text-design-tokens-color-inputvalueentered text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tixstock">Tixstock</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col w-[360px] items-start gap-3">
                <label className="flex items-center gap-1 self-stretch w-full">
                  <span className="font-medium text-[color:var(--colors-neutral-black)] text-sm whitespace-nowrap">
                    Event Category
                  </span>
                </label>
                <Select defaultValue="football">
                  <SelectTrigger className="h-[52px] px-4 py-5 bg-colors-neutral-white rounded-[var(--design-tokens-radius-medium)] border border-solid border-design-tokens-color-primarystroke">
                    <SelectValue placeholder="Select Event Category" className="font-body-medium font-[number:var(--body-medium-font-weight)] text-design-tokens-color-inputvalueentered text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="football">Football</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button className="h-[52px] px-5 py-4 bg-colors-brand-primary-red text-colors-neutral-white rounded-[var(--design-tokens-radius-medium)]">
              <span className="font-action-item-large font-[number:var(--action-item-large-font-weight)] text-colors-neutral-white text-[length:var(--action-item-large-font-size)] tracking-[var(--action-item-large-letter-spacing)] leading-[var(--action-item-large-line-height)] [font-style:var(--action-item-large-font-style)]">
                Search
              </span>
            </Button>
          </div>

          {/* Main Content */}
          <div className="flex flex-col items-start gap-8 px-8 py-6 flex-1 w-full">
            {/* Section Headers */}
            <div className="flex items-start gap-[68px] w-full">
              <div className="w-[518px] flex flex-col items-start gap-3">
                <h2 className="font-body-medium-bold font-[number:var(--body-medium-bold-font-weight)] text-[color:var(--colors-neutral-black)] text-[length:var(--body-medium-bold-font-size)] tracking-[var(--body-medium-bold-letter-spacing)] leading-[var(--body-medium-bold-line-height)] whitespace-nowrap [font-style:var(--body-medium-bold-font-style)]">
                  Merge Data Source
                </h2>
                <p className="font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[color:var(--colors-neutral-black)] text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]">
                  Fill in all required fields to set up your data and proceed
                  with the merge.
                </p>
              </div>

              <div className="w-[518px] flex flex-col items-start gap-3">
                <h2 className="font-body-medium-bold font-[number:var(--body-medium-bold-font-weight)] text-[color:var(--colors-neutral-black)] text-[length:var(--body-medium-bold-font-size)] tracking-[var(--body-medium-bold-letter-spacing)] leading-[var(--body-medium-bold-line-height)] whitespace-nowrap [font-style:var(--body-medium-bold-font-style)]">
                  Merge with SeatCombo Data
                </h2>
                <p className="font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[color:var(--colors-neutral-black)] text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]">
                  Once your data is set, map and merge it with SeatCombo's
                  data.
                </p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="flex flex-col items-start gap-7 w-full">
              {/* Tournament Name Row */}
              <div className="flex w-full items-end justify-center">
                <div className="flex-1 flex flex-col items-start gap-3">
                  <label className="flex items-center gap-1 self-stretch w-full">
                    <span className="font-medium text-[color:var(--colors-neutral-black)] text-sm whitespace-nowrap">
                      Tournament Name
                    </span>
                  </label>
                  <Select defaultValue="epl">
                    <SelectTrigger className="h-[52px] px-4 py-5 bg-colors-neutral-white rounded-[var(--design-tokens-radius-medium)] border border-solid border-design-tokens-color-primarystroke">
                      <SelectValue placeholder="Select Tournament" className="font-body-medium font-[number:var(--body-medium-font-weight)] text-design-tokens-color-inputvalueentered text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="epl">English Premier League</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="w-[68px] h-[52px] flex flex-col items-center justify-center relative">
                  <img
                    className="absolute w-[68px] h-px top-[25px] left-0 object-cover"
                    alt="Line"
                    src="https://c.animaapp.com/md966vy5Ug7tZx/img/line-1.svg"
                  />
                  <div className="flex w-8 h-8 items-center p-2 bg-colors-tints-red-10 rounded-[100px] border border-solid border-design-tokens-color-cardstroke-onhover">
                    <ArrowRightIcon className="w-4 h-4 text-colors-brand-primary-red" />
                  </div>
                </div>

                <div className="flex-1 flex flex-col items-start gap-3">
                  <label className="flex items-center gap-1 self-stretch w-full">
                    <span className="font-medium text-[color:var(--colors-neutral-black)] text-sm whitespace-nowrap">
                      Tournament Name
                    </span>
                  </label>
                  <Select defaultValue="epl">
                    <SelectTrigger className="h-[52px] px-4 py-5 bg-colors-neutral-white rounded-[var(--design-tokens-radius-medium)] border border-solid border-design-tokens-color-primarystroke">
                      <SelectValue placeholder="Select Tournament" className="font-body-medium font-[number:var(--body-medium-font-weight)] text-design-tokens-color-inputvalueentered text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="epl">English Premier League</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Team Name Row */}
              <div className="flex w-full items-end justify-center">
                <div className="flex-1 flex flex-col items-start gap-3">
                  <label className="flex items-center gap-1 self-stretch w-full">
                    <span className="font-medium text-[color:var(--colors-neutral-black)] text-sm whitespace-nowrap">
                      Team Name
                    </span>
                  </label>
                  <Select defaultValue="mancity">
                    <SelectTrigger className="h-[52px] px-4 py-5 bg-colors-neutral-white rounded-[var(--design-tokens-radius-medium)] border border-solid border-design-tokens-color-primarystroke">
                      <SelectValue placeholder="Select Team" className="font-body-medium font-[number:var(--body-medium-font-weight)] text-design-tokens-color-inputvalueentered text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mancity">Manchester City</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="w-[68px] h-[52px] flex flex-col items-center justify-center relative">
                  <img
                    className="absolute w-[68px] h-px top-[25px] left-0 object-cover"
                    alt="Line"
                    src="https://c.animaapp.com/md966vy5Ug7tZx/img/line-1.svg"
                  />
                  <div className="flex w-8 h-8 items-center p-2 bg-colors-tints-red-10 rounded-[100px] border border-solid border-design-tokens-color-cardstroke-onhover">
                    <ArrowRightIcon className="w-4 h-4 text-colors-brand-primary-red" />
                  </div>
                </div>

                <div className="flex-1 flex flex-col items-start gap-3">
                  <label className="flex items-center gap-1 self-stretch w-full">
                    <span className="font-medium text-[color:var(--colors-neutral-black)] text-sm whitespace-nowrap">
                      Team Name
                    </span>
                  </label>
                  <Select defaultValue="multiple">
                    <SelectTrigger className="h-[52px] px-4 py-5 bg-colors-neutral-white rounded-[var(--design-tokens-radius-medium)] border border-solid border-design-tokens-color-primarystroke">
                      <SelectValue placeholder="Select Team" className="font-body-medium font-[number:var(--body-medium-font-weight)] text-design-tokens-color-inputvalueentered text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="multiple">Select multiple teams</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Stadium Name Row */}
              <div className="flex w-full items-end justify-center">
                <div className="flex-1 flex flex-col items-start gap-3">
                  <label className="flex items-center gap-1 self-stretch w-full">
                    <span className="font-medium text-[color:var(--colors-neutral-black)] text-sm whitespace-nowrap">
                      Stadium Name
                    </span>
                  </label>
                  <Select defaultValue="etihad">
                    <SelectTrigger className="h-[52px] px-4 py-5 bg-colors-neutral-white rounded-[var(--design-tokens-radius-medium)] border border-solid border-design-tokens-color-primarystroke">
                      <SelectValue placeholder="Select Stadium" className="font-body-medium font-[number:var(--body-medium-font-weight)] text-design-tokens-color-inputvalueentered text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="etihad">Etihad Stadium</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="w-[68px] h-[52px] flex flex-col items-center justify-center relative">
                  <img
                    className="absolute w-[68px] h-px top-[25px] left-0 object-cover"
                    alt="Line"
                    src="https://c.animaapp.com/md966vy5Ug7tZx/img/line-1.svg"
                  />
                  <div className="flex w-8 h-8 items-center p-2 bg-colors-tints-red-10 rounded-[100px] border border-solid border-design-tokens-color-cardstroke-onhover">
                    <ArrowRightIcon className="w-4 h-4 text-colors-brand-primary-red" />
                  </div>
                </div>

                <div className="flex-1 flex flex-col items-start gap-3">
                  <label className="flex items-center gap-1 self-stretch w-full">
                    <span className="font-medium text-[color:var(--colors-neutral-black)] text-sm whitespace-nowrap">
                      Stadium Name
                    </span>
                  </label>
                  <Select defaultValue="etihad">
                    <SelectTrigger className="h-[52px] px-4 py-5 bg-colors-neutral-white rounded-[var(--design-tokens-radius-medium)] border border-solid border-design-tokens-color-primarystroke">
                      <SelectValue placeholder="Select Stadium" className="font-body-medium font-[number:var(--body-medium-font-weight)] text-design-tokens-color-inputvalueentered text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="etihad">Etihad Stadium</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent
          value="merge-seat-category"
          className="flex flex-col w-full mt-0"
        >
          <div className="flex items-center gap-3 px-8 py-6 w-full bg-colors-tints-red-5 border-b border-design-tokens-color-primarystroke">
            <div className="flex flex-col items-start gap-5 flex-1">
              <h2 className="font-body-medium-bold font-[number:var(--body-medium-bold-font-weight)] text-[color:var(--colors-neutral-black)] text-[length:var(--body-medium-bold-font-size)] tracking-[var(--body-medium-bold-letter-spacing)] leading-[var(--body-medium-bold-line-height)] [font-style:var(--body-medium-bold-font-style)]">
                Category info
              </h2>

              <div className="flex items-end gap-3 w-full">
                <div className="flex w-[639px] items-center gap-3">
                  <div className="flex-col w-[360px] items-start gap-3 flex">
                    <label className="flex items-center gap-1 w-full">
                      <span className="[font-family:'Inter',Helvetica] font-medium text-[color:var(--colors-neutral-black)] text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                        Category Source
                      </span>
                    </label>

                    <Select defaultValue="tixstock">
                      <SelectTrigger className="h-[52px] px-4 py-5 bg-colors-neutral-white rounded-[var(--design-tokens-radius-medium)] border border-solid border-design-tokens-color-primarystroke">
                        <SelectValue
                          placeholder="Select category source"
                          className="font-body-medium font-[number:var(--body-medium-font-weight)] text-design-tokens-color-inputvalueentered text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tixstock">Tixstock</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex-col items-start gap-3 flex-1 flex">
                    <label className="flex items-center gap-1 w-full">
                      <span className="[font-family:'Inter',Helvetica] font-medium text-[color:var(--colors-neutral-black)] text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                        Stadium Name
                      </span>
                    </label>

                    <Select defaultValue="etihad">
                      <SelectTrigger className="h-[52px] px-4 py-5 bg-colors-neutral-white rounded-[var(--design-tokens-radius-medium)] border border-solid border-design-tokens-color-primarystroke">
                        <SelectValue
                          placeholder="Select stadium"
                          className="font-body-medium font-[number:var(--body-medium-font-weight)] text-design-tokens-color-inputvalueentered text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="etihad">Etihad</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button className="h-[52px] flex-1 bg-colors-brand-primary-red rounded-[var(--design-tokens-radius-medium)]">
                  <span className="font-action-item-large font-[number:var(--action-item-large-font-weight)] text-colors-neutral-white text-[length:var(--action-item-large-font-size)] tracking-[var(--action-item-large-letter-spacing)] leading-[var(--action-item-large-line-height)] [font-style:var(--action-item-large-font-style)]">
                    Search
                  </span>
                </Button>
              </div>

              <span className="font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]">
                76 Ticket categories found
              </span>
            </div>

            <div className="flex flex-col w-[267px] items-center justify-center gap-2.5 relative">
              <img
                className="w-[174px] h-[155.06px] object-cover"
                alt="Stadium map"
                src="https://c.animaapp.com/A3309RG9/img/adobe-express---file--1--1@2x.png"
              />

              <Button
                variant="outline"
                className="absolute top-[113px] left-[89px] bg-colors-neutral-white border border-solid border-design-tokens-color-primarystroke p-3 rounded-[var(--design-tokens-radius-small)]"
              >
                <span className="[font-family:'Inter',Helvetica] font-medium text-[color:var(--colors-neutral-black)] text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                  View Map
                </span>
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-start px-8 py-6 w-full">
            <div className="flex flex-col items-start gap-5 w-full">
              <div className="flex items-start gap-[68px] w-full">
                <div className="flex flex-col items-start gap-3 flex-1">
                  <h3 className="font-body-medium-bold font-[number:var(--body-medium-bold-font-weight)] text-[color:var(--colors-neutral-black)] text-[length:var(--body-medium-bold-font-size)] tracking-[var(--body-medium-bold-letter-spacing)] leading-[var(--body-medium-bold-line-height)] [font-style:var(--body-medium-bold-font-style)]">
                    API Ticket Category
                  </h3>
                </div>

                <div className="flex flex-col items-start gap-3 flex-1">
                  <h3 className="font-body-medium-bold font-[number:var(--body-medium-bold-font-weight)] text-[color:var(--colors-neutral-black)] text-[length:var(--body-medium-bold-font-size)] tracking-[var(--body-medium-bold-letter-spacing)] leading-[var(--body-medium-bold-line-height)] [font-style:var(--body-medium-bold-font-style)]">
                    SeatCombo Ticket Category
                  </h3>
                </div>
              </div>

              <div className="flex flex-col items-start gap-3 w-full">
                {categoryMappings.map((mapping, index) => (
                  <div
                    key={`mapping-${index}`}
                    className="flex items-center justify-center w-full"
                  >
                    <div className="flex-col items-start gap-2 flex-1 flex">
                      <div className="bg-colors-neutral-gray-20 flex h-[34px] items-center gap-2 p-3 w-full rounded-[var(--design-tokens-radius-small)] border border-solid border-design-tokens-color-primarystroke">
                        <div className="flex items-center gap-3 flex-1">
                          <div className="flex-1 mt-[-1.00px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-design-tokens-color-inputvalueentered text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-tiny-font-style)]">
                            {mapping.apiCategory}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative w-[68px] h-8">
                      <div className="relative h-8">
                        <img
                          className="top-[15px] left-0 absolute w-[68px] h-px object-cover"
                          alt="Line"
                          src="https://c.animaapp.com/A3309RG9/img/line-1-13.svg"
                        />

                        <div className="inline-flex items-center p-2 absolute top-0 left-[18px] bg-colors-tints-red-10 rounded-[100px] border border-solid border-design-tokens-color-cardstroke-onhover">
                          <ArrowRightIcon className="w-4 h-4 text-colors-brand-primary-red" />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 flex-1">
                      <Select defaultValue="vip-hospitality">
                        <SelectTrigger className="bg-colors-neutral-white h-[34px] p-3 w-full rounded-[var(--design-tokens-radius-small)] border border-solid border-design-tokens-color-primarystroke">
                          <SelectValue
                            placeholder="Select category"
                            className="font-body-tiny font-[number:var(--body-tiny-font-weight)] text-design-tokens-color-inputvalueentered text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]"
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="vip-hospitality">
                            VIP & Hospitality
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 px-8 py-4 border-t border-design-tokens-color-primarystroke">
            <Button className="bg-colors-brand-primary-red">
              Merge Seat Category
            </Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
