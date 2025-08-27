import React from "react";
import { Button } from "../../../../components/ui/button";

export const OrderActionsSection = () => {
  const actionButtons = [
    {
      text: "Save",
      variant: "secondary",
      className:
        "bg-[color:var(--colors-neutral-gray-40)] text-colors-neutral-gray-70 hover:bg-[color:var(--colors-neutral-gray-40)]/80",
    },
    {
      text: "Cancel",
      variant: "outline",
      className:
        "bg-colors-neutral-white text-colors-neutral-black border-design-tokens-color-primarystroke hover:bg-colors-neutral-white/80",
    },
  ];

  return (
    <section className="flex flex-col w-full items-start gap-2.5 px-8 py-5 relative border-t [border-top-style:solid] border-design-tokens-color-primarystroke backdrop-blur-[28px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(28px)_brightness(100%)] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.5)_100%)] flex-shrink-0">
      <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
        {actionButtons.map((button, index) => (
          <Button
            key={`action-button-${index}`}
            variant={button.variant}
            className={`h-auto inline-flex items-center justify-center gap-1 p-3 relative flex-[0_0_auto] rounded-[var(--design-tokens-radius-small)] [font-family:'Inter',Helvetica] font-medium text-sm tracking-[0] leading-[normal] whitespace-nowrap ${button.className}`}
          >
            {button.text}
          </Button>
        ))}
      </div>
    </section>
  );
};
