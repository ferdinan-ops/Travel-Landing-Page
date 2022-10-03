import React from "react";

export default function Hamburger({ ...rest }) {
  return (
    <div className="flex rounded-lg bg-white/20 p-3" {...rest}>
      <div className="flex w-6 flex-col gap-1">
        <span className="h-[3px] w-full rounded-full bg-white"></span>
        <span className="h-[3px] w-full rounded-full bg-white"></span>
        <span className="h-[3px] w-full rounded-full bg-white"></span>
      </div>
    </div>
  );
}
