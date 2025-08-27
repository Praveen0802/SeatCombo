import React from "react";
import { Button } from "../../../../components/ui/button";

export const ActionFooterSection = () => {
  return (
    <footer className="flex flex-col w-full items-start gap-2.5 px-8 py-5 relative border-t [border-top-style:solid] border-design-tokens-color-primarystroke backdrop-blur-[28px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(28px)_brightness(100%)] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.5)_100%)] sticky bottom-0">
      <div className="flex gap-3 self-stretch w-full items-center relative flex-[0_0_auto]">
        <Button
          variant="secondary"
          className="h-auto inline-flex items-center justify-center gap-1 p-3 bg-[color:var(--colors-neutral-gray-40)] rounded-[var(--design-tokens-radius-small)] [font-family:'Inter',Helvetica] font-medium text-colors-neutral-gray-70 text-sm tracking-[0] leading-[normal]"
          disabled
        >
          Save
        </Button>

        <Button
          variant="outline"
          className="h-auto inline-flex items-center justify-center gap-1 p-3 bg-colors-neutral-white rounded-[var(--design-tokens-radius-small)] border border-solid border-design-tokens-color-primarystroke [font-family:'Inter',Helvetica] font-medium text-colors-neutral-black text-sm tracking-[0] leading-[normal]"
        >
          Cancel
        </Button>
      </div>
    </footer>
  );
};
