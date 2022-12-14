import React from "react";

export default function NavLink({ children, style, href, top }) {
  return (
    <a
      className={`font-sans text-3xl xl:text-base ${style} ${top ? "xl:hover:text-primary" : "xl:hover:text-black"
        }`}
      href={href}
    >
      {children}
    </a>
  );
}
