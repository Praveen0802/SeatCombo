import React from "react";
import { Button } from "../../../../components/ui/button";

export const MergeActionSection = () => {
  return (
    <footer className="flex flex-col w-full items-start gap-2.5 px-8 py-5 border-t border-design-tokens-color-primarystroke backdrop-blur-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.5)_100%)]">
      <div className="flex items-center gap-3 w-full">
        <Button className="h-auto bg-colors-brand-primary-red text-colors-neutral-white font-medium text-sm rounded-[var(--design-tokens-radius-small)]">
          {window.location.hash === '#merge-api' ? 'Merge API' : 'Merge Seat Category'}
        </Button>

        <Button
          variant="outline"
          className="h-auto bg-colors-neutral-white border-design-tokens-color-primarystroke text-[color:var(--colors-neutral-black)] font-medium text-sm rounded-[var(--design-tokens-radius-small)]"
        >
          Cancel
        </Button>
      </div>
    </footer>
  );
};
