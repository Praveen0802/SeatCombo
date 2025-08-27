import React from "react";
import { Button } from "../../../../components/ui/button";

export const ActionFooterSection = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 flex flex-col w-full items-start gap-2.5 px-8 py-5 border-t border-design-tokens-color-primarystroke backdrop-blur-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.5)_100%)]">
      <div className="flex items-center gap-3 w-full">
        <Button className="h-[34px] bg-colors-brand-primary-red hover:bg-colors-brand-primary-red/90 text-colors-neutral-white rounded-[var(--design-tokens-radius-small)] font-medium text-sm">
          Save Changes
        </Button>

        <Button
          variant="outline"
          className="h-[34px] bg-colors-neutral-white text-[color:var(--colors-neutral-black)] border-design-tokens-color-primarystroke rounded-[var(--design-tokens-radius-small)] font-medium text-sm"
        >
          Cancel
        </Button>
      </div>
    </footer>
  );
};
