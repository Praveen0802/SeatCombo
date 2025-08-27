import React from "react";

export const OrderDetailsSection = () => {
  return (
    <div className="flex flex-col w-[1168px] items-start relative self-stretch">
      <header className="flex items-center gap-3 px-8 py-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent [border-top-style:none] [border-right-style:none] border-b [border-bottom-style:solid] [border-left-style:none] border-design-tokens-color-primarystroke bg-[linear-gradient(180deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_100%)]">
        <div className="relative flex-1 font-header-h4 font-[number:var(--header-h4-font-weight)] text-colors-neutral-black text-[length:var(--header-h4-font-size)] tracking-[var(--header-h4-letter-spacing)] leading-[var(--header-h4-line-height)] [font-style:var(--header-h4-font-style)]">
          All orders
        </div>

        <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
          <div className="inline-flex items-center relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
              <div className="relative w-[26.67px] h-5 rounded-[3.33px] overflow-hidden bg-[url(https://c.animaapp.com/gWOBOCcP/img/vector.svg)] bg-[100%_100%]">
                <div className="relative w-[27px] h-5 bg-[url(https://c.animaapp.com/gWOBOCcP/img/vector-1.svg)] bg-[100%_100%]">
                  <img
                    className="absolute w-[27px] h-5 top-0 left-0"
                    alt="Vector"
                    src="https://c.animaapp.com/gWOBOCcP/img/vector-2.svg"
                  />

                  <img
                    className="absolute w-[27px] h-5 top-0 left-0"
                    alt="Vector"
                    src="https://c.animaapp.com/gWOBOCcP/img/vector-3.svg"
                  />

                  <img
                    className="absolute w-[27px] h-5 top-0 left-0"
                    alt="Vector"
                    src="https://c.animaapp.com/gWOBOCcP/img/vector-4.svg"
                  />
                </div>
              </div>

              <div className="relative w-fit font-action-item-medium font-[number:var(--action-item-medium-font-weight)] text-colors-neutral-black-duplicate text-[length:var(--action-item-medium-font-size)] tracking-[var(--action-item-medium-letter-spacing)] leading-[var(--action-item-medium-line-height)] whitespace-nowrap [font-style:var(--action-item-medium-font-style)]">
                English
              </div>
            </div>

            <img
              className="relative w-4 h-4"
              alt="Icon"
              src="https://c.animaapp.com/gWOBOCcP/img/icon-1.svg"
            />
          </div>

          <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-colors-neutral-black text-sm tracking-[0] leading-[normal] whitespace-nowrap">
              Rey’s Store
            </div>

            <img
              className="relative w-3.5 h-3.5"
              alt="Icon"
              src="https://c.animaapp.com/gWOBOCcP/img/icon-2.svg"
            />
          </div>

          <div className="inline-flex items-center justify-end gap-6 relative flex-[0_0_auto]">
            <div className="relative w-6 h-6 bg-[url(https://c.animaapp.com/gWOBOCcP/img/icon-3.svg)] bg-[100%_100%]">
              <div className="relative w-2 h-2 left-[15px] bg-colors-brand-primary-red rounded" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-col items-start gap-2.5 px-8 py-5 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
            <div className="relative w-fit font-body-medium font-[number:var(--body-medium-font-weight)] text-colors-neutral-gray-50 text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)]">
              Orders
            </div>

            <img
              className="relative w-4 h-4"
              alt="Icon"
              src="https://c.animaapp.com/gWOBOCcP/img/icon-4.svg"
            />
          </div>

          <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-colors-neutral-black text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)]">
              All Orders
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start relative flex-1 self-stretch w-full grow">
        <div className="flex items-center px-8 py-0 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center relative flex-1 grow border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
            <div className="inline-flex items-center justify-center gap-1 px-5 py-4 relative flex-[0_0_auto] border-b [border-bottom-style:solid] border-colors-brand-primary-red">
              <div className="relative w-fit font-action-item-large font-[number:var(--action-item-large-font-weight)] text-colors-brand-primary-red text-[length:var(--action-item-large-font-size)] tracking-[var(--action-item-large-letter-spacing)] leading-[var(--action-item-large-line-height)] whitespace-nowrap [font-style:var(--action-item-large-font-style)]">
                Pending
              </div>

              <div className="inline-flex h-4 items-center justify-center gap-1 p-1 relative flex-[0_0_auto] bg-colors-tints-red-30 rounded-[100px]">
                <div className="text-colors-brand-primary-red relative w-fit mt-[-1.50px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[length:var(--body-tiny-font-size)] text-center tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                  10
                </div>
              </div>
            </div>

            <div className="inline-flex items-center justify-center gap-1 px-5 py-4 relative flex-[0_0_auto] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
              <div className="relative w-fit font-action-item-large font-[number:var(--action-item-large-font-weight)] text-[color:var(--colors-neutral-gray-70)] text-[length:var(--action-item-large-font-size)] tracking-[var(--action-item-large-letter-spacing)] leading-[var(--action-item-large-line-height)] whitespace-nowrap [font-style:var(--action-item-large-font-style)]">
                Confirmed
              </div>

              <div className="inline-flex h-4 items-center justify-center gap-1 p-1 relative flex-[0_0_auto] bg-colors-neutral-gray-20 rounded-[100px]">
                <div className="text-colors-neutral-black relative w-fit mt-[-1.50px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[length:var(--body-tiny-font-size)] text-center tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                  100
                </div>
              </div>
            </div>

            <div className="inline-flex items-center justify-center gap-1 px-5 py-4 relative flex-[0_0_auto] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
              <div className="relative w-fit font-action-item-large font-[number:var(--action-item-large-font-weight)] text-[color:var(--colors-neutral-gray-70)] text-[length:var(--action-item-large-font-size)] tracking-[var(--action-item-large-letter-spacing)] leading-[var(--action-item-large-line-height)] whitespace-nowrap [font-style:var(--action-item-large-font-style)]">
                Cancelled
              </div>

              <div className="inline-flex h-4 items-center justify-center gap-1 p-1 relative flex-[0_0_auto] bg-colors-neutral-gray-20 rounded-[100px]">
                <div className="text-colors-neutral-black relative w-fit mt-[-1.50px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[length:var(--body-tiny-font-size)] text-center tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                  14
                </div>
              </div>
            </div>

            <div className="inline-flex items-center justify-center gap-1 px-5 py-4 relative flex-[0_0_auto] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
              <div className="relative w-fit font-action-item-large font-[number:var(--action-item-large-font-weight)] text-[color:var(--colors-neutral-gray-70)] text-[length:var(--action-item-large-font-size)] tracking-[var(--action-item-large-letter-spacing)] leading-[var(--action-item-large-line-height)] whitespace-nowrap [font-style:var(--action-item-large-font-style)]">
                Fullfilled
              </div>

              <div className="inline-flex h-4 items-center justify-center gap-1 p-1 relative flex-[0_0_auto] bg-colors-neutral-gray-20 rounded-[100px]">
                <div className="text-colors-neutral-black relative w-fit mt-[-1.50px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[length:var(--body-tiny-font-size)] text-center tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                  100
                </div>
              </div>
            </div>

            <div className="inline-flex items-center justify-center gap-1 px-5 py-4 relative flex-[0_0_auto] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
              <div className="relative w-fit font-action-item-large font-[number:var(--action-item-large-font-weight)] text-[color:var(--colors-neutral-gray-70)] text-[length:var(--action-item-large-font-size)] tracking-[var(--action-item-large-letter-spacing)] leading-[var(--action-item-large-line-height)] whitespace-nowrap [font-style:var(--action-item-large-font-style)]">
                Delivered
              </div>

              <div className="inline-flex h-4 items-center justify-center gap-1 p-1 relative flex-[0_0_auto] bg-colors-neutral-gray-20 rounded-[100px]">
                <div className="text-colors-neutral-black relative w-fit mt-[-1.50px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[length:var(--body-tiny-font-size)] text-center tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                  100
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-5 px-8 py-5 relative flex-1 self-stretch w-full grow">
          <div className="flex flex-col items-start gap-2 relative flex-1 self-stretch w-full grow">
            <div className="flex items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center justify-between relative flex-1 grow">
                <div className="flex flex-col w-[266px] items-start gap-2 relative">
                  <div className="flex h-[34px] items-center gap-2 p-3 relative self-stretch w-full bg-colors-neutral-white rounded-[var(--design-tokens-radius-small)] border border-solid border-design-tokens-color-primarystroke">
                    <div className="flex items-center gap-3 relative flex-1 grow">
                      <div className="relative flex-1 mt-[-1.00px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-design-tokens-color-inputnovalue text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-tiny-font-style)]">
                        Search by order number or match
                      </div>
                    </div>

                    <img
                      className="relative w-4 h-4 mt-[-3.00px] mb-[-3.00px]"
                      alt="Icon"
                      src="https://c.animaapp.com/gWOBOCcP/img/icon-5.svg"
                    />
                  </div>
                </div>

                <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="inline-flex h-[34px] items-center gap-1 p-3 relative flex-[0_0_auto] bg-colors-neutral-white rounded-[100px] border border-solid border-design-tokens-color-primarystroke">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-colors-neutral-black text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                        Time period
                      </div>

                      <img
                        className="relative w-3.5 h-3.5 mt-[-2.00px] mb-[-2.00px]"
                        alt="Icon"
                        src="https://c.animaapp.com/gWOBOCcP/img/icon-6.svg"
                      />
                    </div>

                    <div className="inline-flex h-[34px] items-center gap-1 p-3 relative flex-[0_0_auto] bg-colors-neutral-white rounded-[100px] border border-solid border-design-tokens-color-primarystroke">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-colors-neutral-black text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                        Payment method
                      </div>

                      <img
                        className="relative w-3.5 h-3.5 mt-[-2.00px] mb-[-2.00px]"
                        alt="Icon"
                        src="https://c.animaapp.com/gWOBOCcP/img/icon-7.svg"
                      />
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                      <img
                        className="relative w-4 h-4"
                        alt="Icon"
                        src="https://c.animaapp.com/gWOBOCcP/img/icon-8.svg"
                      />

                      <div className="relative w-fit font-action-item-medium font-[number:var(--action-item-medium-font-weight)] text-colors-neutral-black text-[length:var(--action-item-medium-font-size)] tracking-[var(--action-item-medium-letter-spacing)] leading-[var(--action-item-medium-line-height)] whitespace-nowrap [font-style:var(--action-item-medium-font-style)]">
                        Filters
                      </div>
                    </div>

                    <img
                      className="relative w-px h-3 object-cover"
                      alt="Line"
                      src="https://c.animaapp.com/gWOBOCcP/img/line-1-2.svg"
                    />

                    <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                      <img
                        className="relative w-4 h-4"
                        alt="Icon"
                        src="https://c.animaapp.com/gWOBOCcP/img/icon-9.svg"
                      />

                      <div className="relative w-fit font-action-item-medium font-[number:var(--action-item-medium-font-weight)] text-colors-neutral-gray-50-duplicate text-[length:var(--action-item-medium-font-size)] tracking-[var(--action-item-medium-letter-spacing)] leading-[var(--action-item-medium-line-height)] whitespace-nowrap [font-style:var(--action-item-medium-font-style)]">
                        Clear All
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center justify-center gap-1 p-3 relative flex-[0_0_auto] bg-colors-neutral-white rounded-[var(--design-tokens-radius-small)] border border-solid border-design-tokens-color-primarystroke">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-colors-neutral-black text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                  Export
                </div>
              </div>
            </div>

            <div className="flex items-start relative flex-1 self-stretch w-full grow rounded-[var(--design-tokens-radius-medium)] overflow-hidden border border-solid border-design-tokens-color-primarystroke">
              <div className="flex flex-col w-[170px] items-start relative mb-[-24.00px]">
                <div className="flex h-[34px] items-center gap-1 p-3 relative self-stretch w-full bg-colors-neutral-gray-10 border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="relative w-fit mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                    Order No. &amp; Status
                  </div>

                  <img
                    className="relative w-3 h-3 mt-[-1.00px] mb-[-1.00px]"
                    alt="Icon"
                    src="https://c.animaapp.com/gWOBOCcP/img/icon-15.svg"
                  />
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="mt-[-1.00px] text-colors-neutral-black text-[length:var(--body-small-font-size)] leading-[var(--body-small-line-height)] relative self-stretch font-body-small font-[number:var(--body-small-font-weight)] tracking-[var(--body-small-letter-spacing)] [font-style:var(--body-small-font-style)]">
                      <a href="/order-details">#SC14364</a>
                    </div>

                    <div className="inline-flex h-6 items-center gap-1 p-2 relative bg-[#ffe57f] rounded">
                      <div className="relative w-fit mt-[-1.50px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[#705a00] text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                        Pending
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="mt-[-1.00px] text-colors-neutral-black text-[length:var(--body-small-font-size)] leading-[var(--body-small-line-height)] relative self-stretch font-body-small font-[number:var(--body-small-font-weight)] tracking-[var(--body-small-letter-spacing)] [font-style:var(--body-small-font-style)]">
                      <a href="/order-details-2">#SC14364</a>
                    </div>

                    <div className="bg-[#ffe57f] inline-flex h-6 items-center gap-1 p-2 relative rounded">
                      <div className="relative w-fit mt-[-1.50px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[#705a00] text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                        Pending
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="mt-[-1.00px] text-colors-neutral-black text-[length:var(--body-small-font-size)] leading-[var(--body-small-line-height)] relative self-stretch font-body-small font-[number:var(--body-small-font-weight)] tracking-[var(--body-small-letter-spacing)] [font-style:var(--body-small-font-style)]">
                      <a href="/order-details-2">#SC14364</a>
                    </div>

                    <div className="bg-[#ffe57f] inline-flex h-6 items-center gap-1 p-2 relative rounded">
                      <div className="relative w-fit mt-[-1.50px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[#705a00] text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                        Pending
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="mt-[-1.00px] text-colors-neutral-black text-[length:var(--body-small-font-size)] leading-[var(--body-small-line-height)] relative self-stretch font-body-small font-[number:var(--body-small-font-weight)] tracking-[var(--body-small-letter-spacing)] [font-style:var(--body-small-font-style)]">
                      #SC14364
                    </div>

                    <div className="bg-colors-neutral-gray-20 inline-flex h-6 items-center gap-1 p-2 relative rounded">
                      <div className="relative w-fit mt-[-1.50px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-neutral-black text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                        Refunded
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="mt-[-1.00px] text-colors-neutral-black text-[length:var(--body-small-font-size)] leading-[var(--body-small-line-height)] relative self-stretch font-body-small font-[number:var(--body-small-font-weight)] tracking-[var(--body-small-letter-spacing)] [font-style:var(--body-small-font-style)]">
                      #SC14364
                    </div>

                    <div className="bg-colors-tints-red-30 inline-flex h-6 items-center gap-1 p-2 relative rounded">
                      <div className="relative w-fit mt-[-1.50px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-brand-primary-red text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                        Cancelled
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="mt-[-1.00px] text-colors-neutral-black text-[length:var(--body-small-font-size)] leading-[var(--body-small-line-height)] relative self-stretch font-body-small font-[number:var(--body-small-font-weight)] tracking-[var(--body-small-letter-spacing)] [font-style:var(--body-small-font-style)]">
                      #SC14364
                    </div>

                    <div className="bg-[#ddffe1] inline-flex h-6 items-center gap-1 p-2 relative rounded">
                      <div className="relative w-fit mt-[-1.50px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-success text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                        Delivered
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="mt-[-1.00px] text-colors-neutral-black text-[length:var(--body-small-font-size)] leading-[var(--body-small-line-height)] relative self-stretch font-body-small font-[number:var(--body-small-font-weight)] tracking-[var(--body-small-letter-spacing)] [font-style:var(--body-small-font-style)]">
                      #SC14364
                    </div>

                    <div className="bg-[#ddffe1] inline-flex h-6 items-center gap-1 p-2 relative rounded">
                      <div className="relative w-fit mt-[-1.50px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-success text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                        Delivered
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="mt-[-1.00px] text-colors-neutral-black text-[length:var(--body-small-font-size)] leading-[var(--body-small-line-height)] relative self-stretch font-body-small font-[number:var(--body-small-font-weight)] tracking-[var(--body-small-letter-spacing)] [font-style:var(--body-small-font-style)]">
                      #SC14364
                    </div>

                    <div className="bg-[#ddffe1] inline-flex h-6 items-center gap-1 p-2 relative rounded">
                      <div className="relative w-fit mt-[-1.50px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-success text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                        Delivered
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="mt-[-1.00px] text-colors-neutral-black text-[length:var(--body-small-font-size)] leading-[var(--body-small-line-height)] relative self-stretch font-body-small font-[number:var(--body-small-font-weight)] tracking-[var(--body-small-letter-spacing)] [font-style:var(--body-small-font-style)]">
                      #SC14364
                    </div>

                    <div className="bg-[#ddffe1] inline-flex h-6 items-center gap-1 p-2 relative rounded">
                      <div className="relative w-fit mt-[-1.50px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-success text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                        Delivered
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="mt-[-1.00px] text-colors-neutral-black text-[length:var(--body-small-font-size)] leading-[var(--body-small-line-height)] relative self-stretch font-body-small font-[number:var(--body-small-font-weight)] tracking-[var(--body-small-letter-spacing)] [font-style:var(--body-small-font-style)]">
                      #SC14364
                    </div>

                    <div className="bg-[#ddffe1] inline-flex h-6 items-center gap-1 p-2 relative rounded">
                      <div className="relative w-fit mt-[-1.50px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-success text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                        Delivered
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-40 items-start relative mb-[-24.00px] -ml-px">
                <div className="flex h-[34px] items-center gap-1 p-3 relative self-stretch w-full bg-colors-neutral-gray-10 border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="relative w-fit mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                    Transaction Date
                  </div>

                  <img
                    className="relative w-3 h-3 mt-[-1.00px] mb-[-1.00px]"
                    alt="Icon"
                    src="https://c.animaapp.com/gWOBOCcP/img/icon-15.svg"
                  />
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="relative flex-1 mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                      February 03, 2025 <br />
                      20:00
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="relative flex-1 mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                      February 03, 2025 20:00
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="relative flex-1 mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                      February 03, 2025 20:00
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="relative flex-1 mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                      February 03, 2025 20:00
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="relative flex-1 mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                      February 03, 2025 20:00
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="relative flex-1 mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                      February 03, 2025 20:00
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="relative flex-1 mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                      February 03, 2025 20:00
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="relative flex-1 mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                      February 03, 2025 20:00
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="relative flex-1 mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                      February 03, 2025 20:00
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="relative flex-1 mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                      February 03, 2025 20:00
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[270px] items-start relative mb-[-24.00px] -ml-px">
                <div className="flex h-[34px] items-center gap-1 p-3 relative self-stretch w-full bg-colors-neutral-gray-10 border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="relative w-fit mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                    Match
                  </div>

                  <img
                    className="relative w-3 h-3 mt-[-1.00px] mb-[-1.00px]"
                    alt="Icon"
                    src="https://c.animaapp.com/gWOBOCcP/img/icon-15.svg"
                  />
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex-col items-start justify-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="mt-[-1.00px] text-colors-neutral-black text-[length:var(--body-small-font-size)] leading-[var(--body-small-line-height)] relative self-stretch font-body-small font-[number:var(--body-small-font-weight)] tracking-[var(--body-small-letter-spacing)] [font-style:var(--body-small-font-style)]">
                      Ipswich Town vs Arsenal, United Kingdom ,London
                    </div>

                    <div className="text-colors-neutral-gray-80 text-[length:var(--body-tiny-font-size)] leading-[var(--body-tiny-line-height)] relative self-stretch font-body-tiny font-[number:var(--body-tiny-font-weight)] tracking-[var(--body-tiny-letter-spacing)] [font-style:var(--body-tiny-font-style)]">
                      February 03, 2025 20:00
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex-col items-start justify-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="mt-[-1.00px] text-colors-neutral-black text-[length:var(--body-small-font-size)] leading-[var(--body-small-line-height)] relative self-stretch font-body-small font-[number:var(--body-small-font-weight)] tracking-[var(--body-small-letter-spacing)] [font-style:var(--body-small-font-style)]">
                      Ipswich Town vs Arsenal, United Kingdom ,London
                    </div>

                    <div className="text-colors-neutral-gray-80 text-[length:var(--body-tiny-font-size)] leading-[var(--body-tiny-line-height)] relative self-stretch font-body-tiny font-[number:var(--body-tiny-font-weight)] tracking-[var(--body-tiny-letter-spacing)] [font-style:var(--body-tiny-font-style)]">
                      February 03, 2025 20:00
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex-col items-start justify-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="mt-[-1.00px] text-colors-neutral-black text-[length:var(--body-small-font-size)] leading-[var(--body-small-line-height)] relative self-stretch font-body-small font-[number:var(--body-small-font-weight)] tracking-[var(--body-small-letter-spacing)] [font-style:var(--body-small-font-style)]">
                      Ipswich Town vs Arsenal, United Kingdom ,London
                    </div>

                    <div className="text-colors-neutral-gray-80 text-[length:var(--body-tiny-font-size)] leading-[var(--body-tiny-line-height)] relative self-stretch font-body-tiny font-[number:var(--body-tiny-font-weight)] tracking-[var(--body-tiny-letter-spacing)] [font-style:var(--body-tiny-font-style)]">
                      February 03, 2025 20:00
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex-col items-start justify-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="mt-[-1.00px] text-colors-neutral-black text-[length:var(--body-small-font-size)] leading-[var(--body-small-line-height)] relative self-stretch font-body-small font-[number:var(--body-small-font-weight)] tracking-[var(--body-small-letter-spacing)] [font-style:var(--body-small-font-style)]">
                      Ipswich Town vs Arsenal, United Kingdom ,London
                    </div>

                    <div className="text-colors-neutral-gray-80 text-[length:var(--body-tiny-font-size)] leading-[var(--body-tiny-line-height)] relative self-stretch font-body-tiny font-[number:var(--body-tiny-font-weight)] tracking-[var(--body-tiny-letter-spacing)] [font-style:var(--body-tiny-font-style)]">
                      February 03, 2025 20:00
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex-col items-start justify-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="mt-[-1.00px] text-colors-neutral-black text-[length:var(--body-small-font-size)] leading-[var(--body-small-line-height)] relative self-stretch font-body-small font-[number:var(--body-small-font-weight)] tracking-[var(--body-small-letter-spacing)] [font-style:var(--body-small-font-style)]">
                      Ipswich Town vs Arsenal, United Kingdom ,London
                    </div>

                    <div className="text-colors-neutral-gray-80 text-[length:var(--body-tiny-font-size)] leading-[var(--body-tiny-line-height)] relative self-stretch font-body-tiny font-[number:var(--body-tiny-font-weight)] tracking-[var(--body-tiny-letter-spacing)] [font-style:var(--body-tiny-font-style)]">
                      February 03, 2025 20:00
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex-col items-start justify-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="mt-[-1.00px] text-colors-neutral-black text-[length:var(--body-small-font-size)] leading-[var(--body-small-line-height)] relative self-stretch font-body-small font-[number:var(--body-small-font-weight)] tracking-[var(--body-small-letter-spacing)] [font-style:var(--body-small-font-style)]">
                      Ipswich Town vs Arsenal, United Kingdom ,London
                    </div>

                    <div className="text-colors-neutral-gray-80 text-[length:var(--body-tiny-font-size)] leading-[var(--body-tiny-line-height)] relative self-stretch font-body-tiny font-[number:var(--body-tiny-font-weight)] tracking-[var(--body-tiny-letter-spacing)] [font-style:var(--body-tiny-font-style)]">
                      February 03, 2025 20:00
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex-col items-start justify-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="mt-[-1.00px] text-colors-neutral-black text-[length:var(--body-small-font-size)] leading-[var(--body-small-line-height)] relative self-stretch font-body-small font-[number:var(--body-small-font-weight)] tracking-[var(--body-small-letter-spacing)] [font-style:var(--body-small-font-style)]">
                      Ipswich Town vs Arsenal, United Kingdom ,London
                    </div>

                    <div className="text-colors-neutral-gray-80 text-[length:var(--body-tiny-font-size)] leading-[var(--body-tiny-line-height)] relative self-stretch font-body-tiny font-[number:var(--body-tiny-font-weight)] tracking-[var(--body-tiny-letter-spacing)] [font-style:var(--body-tiny-font-style)]">
                      February 03, 2025 20:00
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex-col items-start justify-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="mt-[-1.00px] text-colors-neutral-black text-[length:var(--body-small-font-size)] leading-[var(--body-small-line-height)] relative self-stretch font-body-small font-[number:var(--body-small-font-weight)] tracking-[var(--body-small-letter-spacing)] [font-style:var(--body-small-font-style)]">
                      Ipswich Town vs Arsenal, United Kingdom ,London
                    </div>

                    <div className="text-colors-neutral-gray-80 text-[length:var(--body-tiny-font-size)] leading-[var(--body-tiny-line-height)] relative self-stretch font-body-tiny font-[number:var(--body-tiny-font-weight)] tracking-[var(--body-tiny-letter-spacing)] [font-style:var(--body-tiny-font-style)]">
                      February 03, 2025 20:00
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex-col items-start justify-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="mt-[-1.00px] text-colors-neutral-black text-[length:var(--body-small-font-size)] leading-[var(--body-small-line-height)] relative self-stretch font-body-small font-[number:var(--body-small-font-weight)] tracking-[var(--body-small-letter-spacing)] [font-style:var(--body-small-font-style)]">
                      Ipswich Town vs Arsenal, United Kingdom ,London
                    </div>

                    <div className="text-colors-neutral-gray-80 text-[length:var(--body-tiny-font-size)] leading-[var(--body-tiny-line-height)] relative self-stretch font-body-tiny font-[number:var(--body-tiny-font-weight)] tracking-[var(--body-tiny-letter-spacing)] [font-style:var(--body-tiny-font-style)]">
                      February 03, 2025 20:00
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex-col items-start justify-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="mt-[-1.00px] text-colors-neutral-black text-[length:var(--body-small-font-size)] leading-[var(--body-small-line-height)] relative self-stretch font-body-small font-[number:var(--body-small-font-weight)] tracking-[var(--body-small-letter-spacing)] [font-style:var(--body-small-font-style)]">
                      Ipswich Town vs Arsenal, United Kingdom ,London
                    </div>

                    <div className="text-colors-neutral-gray-80 text-[length:var(--body-tiny-font-size)] leading-[var(--body-tiny-line-height)] relative self-stretch font-body-tiny font-[number:var(--body-tiny-font-weight)] tracking-[var(--body-tiny-letter-spacing)] [font-style:var(--body-tiny-font-style)]">
                      February 03, 2025 20:00
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[120px] items-start relative self-stretch -ml-px">
                <div className="flex h-[34px] items-center gap-1 p-3 relative self-stretch w-full bg-colors-neutral-gray-10 border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="relative w-fit mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                    Price
                  </div>

                  <img
                    className="relative w-3 h-3 mt-[-1.00px] mb-[-1.00px]"
                    alt="Icon"
                    src="https://c.animaapp.com/gWOBOCcP/img/icon-15.svg"
                  />
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="mt-[-1.00px] text-colors-neutral-black text-[length:var(--body-small-font-size)] leading-[var(--body-small-line-height)] relative self-stretch font-body-small font-[number:var(--body-small-font-weight)] tracking-[var(--body-small-letter-spacing)] [font-style:var(--body-small-font-style)]">
                      €153.99
                    </div>

                    <div className="bg-colors-neutral-gray-20 inline-flex h-6 items-center gap-1 p-2 relative rounded">
                      <div className="relative w-fit mt-[-1.50px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-neutral-black text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                        Credit Card
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="mt-[-1.00px] text-colors-neutral-black text-[length:var(--body-small-font-size)] leading-[var(--body-small-line-height)] relative self-stretch font-body-small font-[number:var(--body-small-font-weight)] tracking-[var(--body-small-letter-spacing)] [font-style:var(--body-small-font-style)]">
                      €153.99
                    </div>

                    <div className="bg-colors-neutral-gray-20 inline-flex h-6 items-center gap-1 p-2 relative rounded">
                      <div className="relative w-fit mt-[-1.50px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-neutral-black text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                        Credit Card
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="mt-[-1.00px] text-colors-neutral-black text-[length:var(--body-small-font-size)] leading-[var(--body-small-line-height)] relative self-stretch font-body-small font-[number:var(--body-small-font-weight)] tracking-[var(--body-small-letter-spacing)] [font-style:var(--body-small-font-style)]">
                      €153.99
                    </div>

                    <div className="bg-[#ffe57f] inline-flex h-6 items-center gap-1 p-2 relative rounded">
                      <div className="relative w-fit mt-[-1.50px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[#705a00] text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                        Debit Card
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="mt-[-1.00px] text-colors-neutral-black text-[length:var(--body-small-font-size)] leading-[var(--body-small-line-height)] relative self-stretch font-body-small font-[number:var(--body-small-font-weight)] tracking-[var(--body-small-letter-spacing)] [font-style:var(--body-small-font-style)]">
                      €153.99
                    </div>

                    <div className="bg-colors-neutral-gray-20 inline-flex h-6 items-center gap-1 p-2 relative rounded">
                      <div className="relative w-fit mt-[-1.50px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-neutral-black text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                        Credit Card
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="mt-[-1.00px] text-colors-neutral-black text-[length:var(--body-small-font-size)] leading-[var(--body-small-line-height)] relative self-stretch font-body-small font-[number:var(--body-small-font-weight)] tracking-[var(--body-small-letter-spacing)] [font-style:var(--body-small-font-style)]">
                      €153.99
                    </div>

                    <div className="bg-colors-neutral-gray-20 inline-flex h-6 items-center gap-1 p-2 relative rounded">
                      <div className="relative w-fit mt-[-1.50px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-neutral-black text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                        Credit Card
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="mt-[-1.00px] text-colors-neutral-black text-[length:var(--body-small-font-size)] leading-[var(--body-small-line-height)] relative self-stretch font-body-small font-[number:var(--body-small-font-weight)] tracking-[var(--body-small-letter-spacing)] [font-style:var(--body-small-font-style)]">
                      €153.99
                    </div>

                    <div className="bg-colors-neutral-gray-20 inline-flex h-6 items-center gap-1 p-2 relative rounded">
                      <div className="relative w-fit mt-[-1.50px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-neutral-black text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                        Credit Card
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="mt-[-1.00px] text-colors-neutral-black text-[length:var(--body-small-font-size)] leading-[var(--body-small-line-height)] relative self-stretch font-body-small font-[number:var(--body-small-font-weight)] tracking-[var(--body-small-letter-spacing)] [font-style:var(--body-small-font-style)]">
                      €153.99
                    </div>

                    <div className="bg-colors-neutral-gray-20 inline-flex h-6 items-center gap-1 p-2 relative rounded">
                      <div className="relative w-fit mt-[-1.50px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-neutral-black text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                        Credit Card
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="mt-[-1.00px] text-colors-neutral-black text-[length:var(--body-small-font-size)] leading-[var(--body-small-line-height)] relative self-stretch font-body-small font-[number:var(--body-small-font-weight)] tracking-[var(--body-small-letter-spacing)] [font-style:var(--body-small-font-style)]">
                      €153.99
                    </div>

                    <div className="bg-colors-neutral-gray-20 inline-flex h-6 items-center gap-1 p-2 relative rounded">
                      <div className="relative w-fit mt-[-1.50px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-neutral-black text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                        Credit Card
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="mt-[-1.00px] text-colors-neutral-black text-[length:var(--body-small-font-size)] leading-[var(--body-small-line-height)] relative self-stretch font-body-small font-[number:var(--body-small-font-weight)] tracking-[var(--body-small-letter-spacing)] [font-style:var(--body-small-font-style)]">
                      €153.99
                    </div>

                    <div className="bg-colors-neutral-gray-20 inline-flex h-6 items-center gap-1 p-2 relative rounded">
                      <div className="relative w-fit mt-[-1.50px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-neutral-black text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                        Credit Card
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full mb-[-24.00px] -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="mt-[-1.00px] text-colors-neutral-black text-[length:var(--body-small-font-size)] leading-[var(--body-small-line-height)] relative self-stretch font-body-small font-[number:var(--body-small-font-weight)] tracking-[var(--body-small-letter-spacing)] [font-style:var(--body-small-font-style)]">
                      €153.99
                    </div>

                    <div className="bg-colors-neutral-gray-20 inline-flex h-6 items-center gap-1 p-2 relative rounded">
                      <div className="relative w-fit mt-[-1.50px] font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-neutral-black text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                        Credit Card
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[110px] items-start relative self-stretch -ml-px">
                <div className="flex h-[34px] items-center gap-1 p-3 relative self-stretch w-full bg-colors-neutral-gray-10 border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="relative w-fit mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                    Quantity
                  </div>

                  <img
                    className="relative w-3 h-3 mt-[-1.00px] mb-[-1.00px]"
                    alt="Icon"
                    src="https://c.animaapp.com/gWOBOCcP/img/icon-15.svg"
                  />
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="relative flex-1 mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                      1
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="relative flex-1 mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                      3
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="relative flex-1 mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                      2
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="relative flex-1 mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                      5
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="relative flex-1 mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                      1
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="relative flex-1 mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                      2
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="relative flex-1 mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                      6
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="relative flex-1 mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                      2
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="relative flex-1 mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                      2
                    </div>
                  </div>
                </div>

                <div className="flex-col h-[73px] items-start justify-center gap-2.5 self-stretch w-full mb-[-24.00px] -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="relative flex-1 mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                      2
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-40 items-start relative mb-[-24.00px] -ml-px">
                <div className="w-40 h-[34px] items-center gap-1 bg-colors-neutral-gray-10 flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="relative w-fit mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                    Buyer
                  </div>

                  <img
                    className="relative w-3 h-3 mt-[-1.00px] mb-[-1.00px]"
                    alt="Icon"
                    src="https://c.animaapp.com/gWOBOCcP/img/icon-15.svg"
                  />
                </div>

                <div className="h-[73px] items-center gap-2 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex-wrap items-center gap-[8px_8px] flex-1 grow flex relative">
                    <div className="flex flex-col w-7 h-7 items-center justify-center gap-2.5 px-1 py-[7px] relative bg-[#4b14ff] rounded-[100px]">
                      <div className="relative w-fit font-body-tiny-semibold font-[number:var(--body-tiny-semibold-font-weight)] text-colors-neutral-white text-[length:var(--body-tiny-semibold-font-size)] tracking-[var(--body-tiny-semibold-letter-spacing)] leading-[var(--body-tiny-semibold-line-height)] whitespace-nowrap [font-style:var(--body-tiny-semibold-font-style)]">
                        JB
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                      <div className="relative self-stretch mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                        Jerome Bell
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-[73px] items-center gap-2 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex-wrap items-center gap-[8px_8px] flex-1 grow flex relative">
                    <div className="w-7 h-7 bg-[#8469b5] flex flex-col items-center justify-center gap-2.5 px-1 py-[7px] relative rounded-[100px]">
                      <div className="relative w-fit font-body-tiny-semibold font-[number:var(--body-tiny-semibold-font-weight)] text-colors-neutral-white text-[length:var(--body-tiny-semibold-font-size)] tracking-[var(--body-tiny-semibold-letter-spacing)] leading-[var(--body-tiny-semibold-line-height)] whitespace-nowrap [font-style:var(--body-tiny-semibold-font-style)]">
                        DR
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                      <div className="relative self-stretch mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                        Dianne Russell
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-[73px] items-center gap-2 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex-wrap items-center gap-[8px_8px] flex-1 grow flex relative">
                    <div className="w-7 h-7 bg-[#91ae00] flex flex-col items-center justify-center gap-2.5 px-1 py-[7px] relative rounded-[100px]">
                      <div className="relative w-fit font-body-tiny-semibold font-[number:var(--body-tiny-semibold-font-weight)] text-colors-neutral-white text-[length:var(--body-tiny-semibold-font-size)] tracking-[var(--body-tiny-semibold-letter-spacing)] leading-[var(--body-tiny-semibold-line-height)] whitespace-nowrap [font-style:var(--body-tiny-semibold-font-style)]">
                        RF
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                      <div className="relative self-stretch mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                        Robert Fox
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-[73px] items-center gap-2 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex-wrap items-center gap-[8px_8px] flex-1 grow flex relative">
                    <div className="w-7 h-7 bg-[#ff148d] flex flex-col items-center justify-center gap-2.5 px-1 py-[7px] relative rounded-[100px]">
                      <div className="relative w-fit font-body-tiny-semibold font-[number:var(--body-tiny-semibold-font-weight)] text-colors-neutral-white text-[length:var(--body-tiny-semibold-font-size)] tracking-[var(--body-tiny-semibold-letter-spacing)] leading-[var(--body-tiny-semibold-line-height)] whitespace-nowrap [font-style:var(--body-tiny-semibold-font-style)]">
                        AM
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                      <div className="relative self-stretch mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                        Arlene McCoy
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-[73px] items-center gap-2 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex-wrap items-center gap-[8px_8px] flex-1 grow flex relative">
                    <div className="w-7 h-7 bg-[#15a200] flex flex-col items-center justify-center gap-2.5 px-1 py-[7px] relative rounded-[100px]">
                      <div className="ml-[-0.50px] mr-[-0.50px] relative w-fit font-body-tiny-semibold font-[number:var(--body-tiny-semibold-font-weight)] text-colors-neutral-white text-[length:var(--body-tiny-semibold-font-size)] tracking-[var(--body-tiny-semibold-letter-spacing)] leading-[var(--body-tiny-semibold-line-height)] whitespace-nowrap [font-style:var(--body-tiny-semibold-font-style)]">
                        KW
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                      <div className="relative self-stretch mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                        Kristin Watson
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-[73px] items-center gap-2 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex-wrap items-center gap-[8px_8px] flex-1 grow flex relative">
                    <div className="w-7 h-7 bg-[#1499ff] flex flex-col items-center justify-center gap-2.5 px-1 py-[7px] relative rounded-[100px]">
                      <div className="relative w-fit font-body-tiny-semibold font-[number:var(--body-tiny-semibold-font-weight)] text-colors-neutral-white text-[length:var(--body-tiny-semibold-font-size)] tracking-[var(--body-tiny-semibold-letter-spacing)] leading-[var(--body-tiny-semibold-line-height)] whitespace-nowrap [font-style:var(--body-tiny-semibold-font-style)]">
                        RE
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                      <div className="relative self-stretch mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                        Ralph Edwards
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-[73px] items-center gap-2 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex-wrap items-center gap-[8px_8px] flex-1 grow flex relative">
                    <div className="w-7 h-7 bg-[#ff1418] flex flex-col items-center justify-center gap-2.5 px-1 py-[7px] relative rounded-[100px]">
                      <div className="relative w-fit font-body-tiny-semibold font-[number:var(--body-tiny-semibold-font-weight)] text-colors-neutral-white text-[length:var(--body-tiny-semibold-font-size)] tracking-[var(--body-tiny-semibold-letter-spacing)] leading-[var(--body-tiny-semibold-line-height)] whitespace-nowrap [font-style:var(--body-tiny-semibold-font-style)]">
                        AF
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                      <div className="relative self-stretch mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                        Albert Flores
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-[73px] items-center gap-2 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex-wrap items-center gap-[8px_8px] flex-1 grow flex relative">
                    <div className="w-7 h-7 bg-[#ff14db] flex flex-col items-center justify-center gap-2.5 px-1 py-[7px] relative rounded-[100px]">
                      <div className="ml-[-2.50px] mr-[-2.50px] relative w-fit font-body-tiny-semibold font-[number:var(--body-tiny-semibold-font-weight)] text-colors-neutral-white text-[length:var(--body-tiny-semibold-font-size)] tracking-[var(--body-tiny-semibold-letter-spacing)] leading-[var(--body-tiny-semibold-line-height)] whitespace-nowrap [font-style:var(--body-tiny-semibold-font-style)]">
                        WW
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                      <div className="relative self-stretch mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                        Wade Warren
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-[73px] items-center gap-2 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex-wrap items-center gap-[8px_8px] flex-1 grow flex relative">
                    <div className="flex flex-col w-7 h-7 items-center justify-center gap-2.5 px-1 py-[7px] relative bg-[#4b14ff] rounded-[100px]">
                      <div className="relative w-fit font-body-tiny-semibold font-[number:var(--body-tiny-semibold-font-weight)] text-colors-neutral-white text-[length:var(--body-tiny-semibold-font-size)] tracking-[var(--body-tiny-semibold-letter-spacing)] leading-[var(--body-tiny-semibold-line-height)] whitespace-nowrap [font-style:var(--body-tiny-semibold-font-style)]">
                        T
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                      <div className="relative self-stretch mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                        Savannah Nguyen
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-[73px] items-center gap-2 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex-wrap items-center gap-[8px_8px] flex-1 grow flex relative">
                    <div className="flex flex-col w-7 h-7 items-center justify-center gap-2.5 px-1 py-[7px] relative bg-[#4b14ff] rounded-[100px]">
                      <div className="relative w-fit font-body-tiny-semibold font-[number:var(--body-tiny-semibold-font-weight)] text-colors-neutral-white text-[length:var(--body-tiny-semibold-font-size)] tracking-[var(--body-tiny-semibold-letter-spacing)] leading-[var(--body-tiny-semibold-line-height)] whitespace-nowrap [font-style:var(--body-tiny-semibold-font-style)]">
                        T
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                      <div className="relative self-stretch mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                        Savannah Nguyen
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[187px] items-start relative mb-[-96.00px] -ml-px">
                <div className="flex h-[34px] items-center gap-1 p-3 relative self-stretch w-full bg-colors-neutral-gray-10 border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="relative w-fit mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                    Seller &amp; Listing ID
                  </div>
                </div>

                <div className="h-[73px] items-center gap-2 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex-wrap items-center gap-[8px_8px] flex-1 grow flex relative">
                    <div className="flex flex-col w-7 h-7 items-center justify-center gap-2.5 px-1 py-[7px] relative bg-[#4b14ff] rounded-[100px]">
                      <div className="relative w-fit font-body-tiny-semibold font-[number:var(--body-tiny-semibold-font-weight)] text-colors-neutral-white text-[length:var(--body-tiny-semibold-font-size)] tracking-[var(--body-tiny-semibold-letter-spacing)] leading-[var(--body-tiny-semibold-line-height)] whitespace-nowrap [font-style:var(--body-tiny-semibold-font-style)]">
                        T
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                      <div className="relative self-stretch mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                        Ticketstock
                      </div>

                      <div className="relative self-stretch font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]">
                        16352484624
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-[73px] items-center gap-2 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex-wrap items-center gap-[8px_8px] flex-1 grow flex relative">
                    <div className="flex flex-col w-7 h-7 items-center justify-center gap-2.5 px-1 py-[7px] relative bg-[#4b14ff] rounded-[100px]">
                      <div className="relative w-fit font-body-tiny-semibold font-[number:var(--body-tiny-semibold-font-weight)] text-colors-neutral-white text-[length:var(--body-tiny-semibold-font-size)] tracking-[var(--body-tiny-semibold-letter-spacing)] leading-[var(--body-tiny-semibold-line-height)] whitespace-nowrap [font-style:var(--body-tiny-semibold-font-style)]">
                        T
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                      <div className="relative self-stretch mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                        Ticketstock
                      </div>

                      <div className="relative self-stretch font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]">
                        16352484624
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-[73px] items-center gap-2 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex-wrap items-center gap-[8px_8px] flex-1 grow flex relative">
                    <div className="flex flex-col w-7 h-7 items-center justify-center gap-2.5 px-1 py-[7px] relative bg-[#4b14ff] rounded-[100px]">
                      <div className="relative w-fit font-body-tiny-semibold font-[number:var(--body-tiny-semibold-font-weight)] text-colors-neutral-white text-[length:var(--body-tiny-semibold-font-size)] tracking-[var(--body-tiny-semibold-letter-spacing)] leading-[var(--body-tiny-semibold-line-height)] whitespace-nowrap [font-style:var(--body-tiny-semibold-font-style)]">
                        T
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                      <div className="relative self-stretch mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                        Ticketstock
                      </div>

                      <div className="relative self-stretch font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]">
                        16352484624
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-[73px] items-center gap-2 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex-wrap items-center gap-[8px_8px] flex-1 grow flex relative">
                    <div className="flex flex-col w-7 h-7 items-center justify-center gap-2.5 px-1 py-[7px] relative bg-[#4b14ff] rounded-[100px]">
                      <div className="relative w-fit font-body-tiny-semibold font-[number:var(--body-tiny-semibold-font-weight)] text-colors-neutral-white text-[length:var(--body-tiny-semibold-font-size)] tracking-[var(--body-tiny-semibold-letter-spacing)] leading-[var(--body-tiny-semibold-line-height)] whitespace-nowrap [font-style:var(--body-tiny-semibold-font-style)]">
                        T
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                      <div className="relative self-stretch mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                        Ticketstock
                      </div>

                      <div className="relative self-stretch font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]">
                        16352484624
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-[73px] items-center gap-2 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex-wrap items-center gap-[8px_8px] flex-1 grow flex relative">
                    <div className="flex flex-col w-7 h-7 items-center justify-center gap-2.5 px-1 py-[7px] relative bg-[#4b14ff] rounded-[100px]">
                      <div className="relative w-fit font-body-tiny-semibold font-[number:var(--body-tiny-semibold-font-weight)] text-colors-neutral-white text-[length:var(--body-tiny-semibold-font-size)] tracking-[var(--body-tiny-semibold-letter-spacing)] leading-[var(--body-tiny-semibold-line-height)] whitespace-nowrap [font-style:var(--body-tiny-semibold-font-style)]">
                        T
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                      <div className="relative self-stretch mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                        Ticketstock
                      </div>

                      <div className="relative self-stretch font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]">
                        16352484624
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-[73px] items-center gap-2 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex-wrap items-center gap-[8px_8px] flex-1 grow flex relative">
                    <div className="flex flex-col w-7 h-7 items-center justify-center gap-2.5 px-1 py-[7px] relative bg-[#4b14ff] rounded-[100px]">
                      <div className="relative w-fit font-body-tiny-semibold font-[number:var(--body-tiny-semibold-font-weight)] text-colors-neutral-white text-[length:var(--body-tiny-semibold-font-size)] tracking-[var(--body-tiny-semibold-letter-spacing)] leading-[var(--body-tiny-semibold-line-height)] whitespace-nowrap [font-style:var(--body-tiny-semibold-font-style)]">
                        T
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                      <div className="relative self-stretch mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                        Ticketstock
                      </div>

                      <div className="relative self-stretch font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]">
                        16352484624
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-[73px] items-center gap-2 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex-wrap items-center gap-[8px_8px] flex-1 grow flex relative">
                    <div className="flex flex-col w-7 h-7 items-center justify-center gap-2.5 px-1 py-[7px] relative bg-[#4b14ff] rounded-[100px]">
                      <div className="relative w-fit font-body-tiny-semibold font-[number:var(--body-tiny-semibold-font-weight)] text-colors-neutral-white text-[length:var(--body-tiny-semibold-font-size)] tracking-[var(--body-tiny-semibold-letter-spacing)] leading-[var(--body-tiny-semibold-line-height)] whitespace-nowrap [font-style:var(--body-tiny-semibold-font-style)]">
                        T
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                      <div className="relative self-stretch mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                        Ticketstock
                      </div>

                      <div className="relative self-stretch font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]">
                        16352484624
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-[73px] items-center gap-2 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex-wrap items-center gap-[8px_8px] flex-1 grow flex relative">
                    <div className="flex flex-col w-7 h-7 items-center justify-center gap-2.5 px-1 py-[7px] relative bg-[#4b14ff] rounded-[100px]">
                      <div className="relative w-fit font-body-tiny-semibold font-[number:var(--body-tiny-semibold-font-weight)] text-colors-neutral-white text-[length:var(--body-tiny-semibold-font-size)] tracking-[var(--body-tiny-semibold-letter-spacing)] leading-[var(--body-tiny-semibold-line-height)] whitespace-nowrap [font-style:var(--body-tiny-semibold-font-style)]">
                        T
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                      <div className="relative self-stretch mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                        Ticketstock
                      </div>

                      <div className="relative self-stretch font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]">
                        16352484624
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-[73px] items-center gap-2 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex-wrap items-center gap-[8px_8px] flex-1 grow flex relative">
                    <div className="flex flex-col w-7 h-7 items-center justify-center gap-2.5 px-1 py-[7px] relative bg-[#4b14ff] rounded-[100px]">
                      <div className="relative w-fit font-body-tiny-semibold font-[number:var(--body-tiny-semibold-font-weight)] text-colors-neutral-white text-[length:var(--body-tiny-semibold-font-size)] tracking-[var(--body-tiny-semibold-letter-spacing)] leading-[var(--body-tiny-semibold-line-height)] whitespace-nowrap [font-style:var(--body-tiny-semibold-font-style)]">
                        T
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                      <div className="relative self-stretch mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                        Ticketstock
                      </div>

                      <div className="relative self-stretch font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]">
                        16352484624
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-[73px] items-center gap-2 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex-wrap items-center gap-[8px_8px] flex-1 grow flex relative">
                    <div className="flex flex-col w-7 h-7 items-center justify-center gap-2.5 px-1 py-[7px] relative bg-[#4b14ff] rounded-[100px]">
                      <div className="relative w-fit font-body-tiny-semibold font-[number:var(--body-tiny-semibold-font-weight)] text-colors-neutral-white text-[length:var(--body-tiny-semibold-font-size)] tracking-[var(--body-tiny-semibold-letter-spacing)] leading-[var(--body-tiny-semibold-line-height)] whitespace-nowrap [font-style:var(--body-tiny-semibold-font-style)]">
                        T
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                      <div className="relative self-stretch mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                        Ticketstock
                      </div>

                      <div className="relative self-stretch font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]">
                        16352484624
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-[73px] items-center gap-2 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                  <div className="flex-wrap items-center gap-[8px_8px] flex-1 grow flex relative">
                    <div className="flex flex-col w-7 h-7 items-center justify-center gap-2.5 px-1 py-[7px] relative bg-[#4b14ff] rounded-[100px]">
                      <div className="relative w-fit font-body-tiny-semibold font-[number:var(--body-tiny-semibold-font-weight)] text-colors-neutral-white text-[length:var(--body-tiny-semibold-font-size)] tracking-[var(--body-tiny-semibold-letter-spacing)] leading-[var(--body-tiny-semibold-line-height)] whitespace-nowrap [font-style:var(--body-tiny-semibold-font-style)]">
                        T
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                      <div className="relative self-stretch mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-colors-neutral-black text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                        Ticketstock
                      </div>

                      <div className="relative self-stretch font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-neutral-gray-80 text-[length:var(--body-tiny-font-size)] tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]">
                        16352484624
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[68px] items-start absolute -top-px left-[1022px] bg-colors-neutral-white shadow-panel-shadow border-design-tokens-color-primarystroke">
                <div className="flex flex-col h-[34px] items-start p-2 relative self-stretch w-full">
                  <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto] mb-[-2.00px]">
                    <img
                      className="relative w-5 h-5"
                      alt="Icon"
                      src="https://c.animaapp.com/gWOBOCcP/img/icon-16.svg"
                    />

                    <img
                      className="relative w-5 h-5"
                      alt="Icon"
                      src="https://c.animaapp.com/gWOBOCcP/img/icon-17.svg"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex-col h-[73px] items-center justify-center gap-2.5 self-stretch w-full flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                    <img
                      className="relative w-6 h-6"
                      alt="Icon"
                      src="https://c.animaapp.com/gWOBOCcP/img/icon-27.svg"
                    />
                  </div>

                  <div className="flex-col h-[73px] items-center justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                    <img
                      className="relative w-6 h-6"
                      alt="Icon"
                      src="https://c.animaapp.com/gWOBOCcP/img/icon-27.svg"
                    />
                  </div>

                  <div className="flex-col h-[73px] items-center justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                    <img
                      className="relative w-6 h-6"
                      alt="Icon"
                      src="https://c.animaapp.com/gWOBOCcP/img/icon-27.svg"
                    />
                  </div>

                  <div className="flex-col h-[73px] items-center justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                    <img
                      className="relative w-6 h-6"
                      alt="Icon"
                      src="https://c.animaapp.com/gWOBOCcP/img/icon-27.svg"
                    />
                  </div>

                  <div className="flex-col h-[73px] items-center justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                    <img
                      className="relative w-6 h-6"
                      alt="Icon"
                      src="https://c.animaapp.com/gWOBOCcP/img/icon-27.svg"
                    />
                  </div>

                  <div className="flex-col h-[73px] items-center justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                    <img
                      className="relative w-6 h-6"
                      alt="Icon"
                      src="https://c.animaapp.com/gWOBOCcP/img/icon-27.svg"
                    />
                  </div>

                  <div className="flex-col h-[73px] items-center justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                    <img
                      className="relative w-6 h-6"
                      alt="Icon"
                      src="https://c.animaapp.com/gWOBOCcP/img/icon-27.svg"
                    />
                  </div>

                  <div className="flex-col h-[73px] items-center justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                    <img
                      className="relative w-6 h-6"
                      alt="Icon"
                      src="https://c.animaapp.com/gWOBOCcP/img/icon-27.svg"
                    />
                  </div>

                  <div className="flex-col h-[73px] items-center justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                    <img
                      className="relative w-6 h-6"
                      alt="Icon"
                      src="https://c.animaapp.com/gWOBOCcP/img/icon-27.svg"
                    />
                  </div>

                  <div className="flex-col h-[73px] items-center justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                    <img
                      className="relative w-6 h-6"
                      alt="Icon"
                      src="https://c.animaapp.com/gWOBOCcP/img/icon-27.svg"
                    />
                  </div>

                  <div className="flex-col h-[73px] items-center justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                    <img
                      className="relative w-6 h-6 mt-[-2036.50px] ml-[-1316.00px]"
                      alt="Icon"
                      src="/img/icon.png"
                    />
                  </div>

                  <div className="flex-col h-[73px] items-center justify-center gap-2.5 self-stretch w-full -mt-px flex p-3 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-design-tokens-color-primarystroke">
                    <img
                      className="relative w-6 h-6 mt-[-2108.50px] ml-[-1316.00px]"
                      alt="Icon"
                      src="/img/image.png"
                    />
                  </div>
                </div>
              </div>

              <div className="inline-flex h-[825px] items-center p-1 absolute top-0 left-[1090px] bg-colors-neutral-white">
                <div className="relative w-1.5 h-[313px] bg-colors-neutral-grey-30 rounded-[100px] opacity-[0.66]" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center justify-center gap-10 relative flex-1 grow">
              <div className="inline-flex flex-[0_0_auto] border border-solid border-design-tokens-color-primarystroke h-6 items-center justify-center p-1 relative rounded-[var(--design-tokens-radius-small)]">
                <div className="relative w-fit font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-neutral-black text-[length:var(--body-tiny-font-size)] text-center tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                  50
                </div>

                <img
                  className="relative w-3 h-3"
                  alt="Icon"
                  src="https://c.animaapp.com/gWOBOCcP/img/icon-28.svg"
                />
              </div>

              <div className="flex items-center justify-center gap-2 relative flex-1 grow">
                <div className="flex flex-col w-6 h-6 items-center justify-center p-1 relative rounded-[var(--design-tokens-radius-small)] border border-solid border-design-tokens-color-primarystroke">
                  <img
                    className="relative w-4 h-4"
                    alt="Icon"
                    src="https://c.animaapp.com/gWOBOCcP/img/icon-29.svg"
                  />
                </div>

                <div className="flex flex-col w-6 h-6 items-center justify-center p-1 relative rounded-[var(--design-tokens-radius-small)] border border-solid border-design-tokens-color-primarystroke">
                  <img
                    className="relative w-4 h-4"
                    alt="Icon"
                    src="https://c.animaapp.com/gWOBOCcP/img/icon-30.svg"
                  />
                </div>

                <div className="flex flex-col w-6 h-6 items-center justify-center p-1 relative rounded-[var(--design-tokens-radius-small)] border border-solid border-design-tokens-color-primarystroke">
                  <div className="relative self-stretch font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-neutral-black text-[length:var(--body-tiny-font-size)] text-center tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]">
                    1
                  </div>
                </div>

                <div className="flex flex-col w-6 h-6 items-center justify-center p-1 relative rounded-[var(--design-tokens-radius-small)] border border-solid border-design-tokens-color-primarystroke">
                  <div className="text-colors-neutral-black relative self-stretch font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[length:var(--body-tiny-font-size)] text-center tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]">
                    2
                  </div>
                </div>

                <div className="flex flex-col w-6 bg-colors-brand-primary-red h-6 items-center justify-center p-1 relative rounded-[var(--design-tokens-radius-small)]">
                  <div className="text-colors-neutral-white relative self-stretch font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[length:var(--body-tiny-font-size)] text-center tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]">
                    3
                  </div>
                </div>

                <div className="flex flex-col w-6 h-6 items-center justify-center p-1 relative rounded-[var(--design-tokens-radius-small)] border border-solid border-design-tokens-color-primarystroke">
                  <div className="text-colors-neutral-black relative self-stretch font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[length:var(--body-tiny-font-size)] text-center tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]">
                    4
                  </div>
                </div>

                <div className="flex flex-col w-6 h-6 items-center justify-center p-1 relative rounded-[var(--design-tokens-radius-small)] border border-solid border-design-tokens-color-primarystroke">
                  <div className="text-colors-neutral-black relative self-stretch font-body-tiny font-[number:var(--body-tiny-font-weight)] text-[length:var(--body-tiny-font-size)] text-center tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]">
                    5
                  </div>
                </div>

                <div className="relative w-fit font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-neutral-black text-[length:var(--body-tiny-font-size)] text-center tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
                  ...
                </div>

                <div className="flex flex-col w-6 h-6 items-center justify-center p-1 relative rounded-[var(--design-tokens-radius-small)] border border-solid border-design-tokens-color-primarystroke">
                  <div className="relative self-stretch font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-neutral-black text-[length:var(--body-tiny-font-size)] text-center tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] [font-style:var(--body-tiny-font-style)]">
                    99
                  </div>
                </div>

                <div className="flex flex-col w-6 h-6 items-center justify-center p-1 relative rounded-[var(--design-tokens-radius-small)] border border-solid border-design-tokens-color-primarystroke">
                  <img
                    className="relative w-4 h-4"
                    alt="Icon"
                    src="https://c.animaapp.com/gWOBOCcP/img/icon-31.svg"
                  />
                </div>

                <div className="flex flex-col w-6 h-6 items-center justify-center p-1 relative rounded-[var(--design-tokens-radius-small)] border border-solid border-design-tokens-color-primarystroke">
                  <img
                    className="relative w-4 h-4"
                    alt="Icon"
                    src="https://c.animaapp.com/gWOBOCcP/img/icon-32.svg"
                  />
                </div>
              </div>
            </div>

            <div className="relative w-fit font-body-tiny font-[number:var(--body-tiny-font-weight)] text-colors-neutral-black text-[length:var(--body-tiny-font-size)] text-center tracking-[var(--body-tiny-letter-spacing)] leading-[var(--body-tiny-line-height)] whitespace-nowrap [font-style:var(--body-tiny-font-style)]">
              Showing 50 of 1000 results
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
