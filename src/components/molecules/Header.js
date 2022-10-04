import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Cross } from "../../../public";
import { links } from "../../config/links";
import { Hamburger, NavLink } from "../atoms";

export default function Header() {
  const [show, setShow] = useState(false);
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      setTop(window.pageYOffset <= 20);
    };
    window.addEventListener("scroll", scrollHandler);
    scrollHandler();
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-10 transition-all ${top ? "bg-gradient-to-b from-black/70 to-black/5" : "bg-primary"}`}>
      <div className="container mx-auto flex h-20 w-full items-center px-6 text-white md:px-8 xl:px-0">
        <header className="flex w-full items-center justify-between">
          <Link href="/">
            <a className="font-serif text-5xl">Selocate</a>
          </Link>

          <nav className={`fixed top-0 z-10 flex h-full w-full flex-col items-center justify-center gap-11 bg-primary transition-all xl:static xl:h-auto xl:w-auto xl:flex-row xl:justify-between xl:gap-0 xl:bg-transparent ${show ? "left-0" : "-left-full"}`}>
            {links.map((link, index) => (
              <div key={index}>
                <NavLink href={link.href} top={top} style={link.style}>{link.name}</NavLink>
              </div>
            ))}
            <Cross
              className="absolute top-6 right-6 cursor-pointer xl:hidden"
              onClick={() => setShow(false)}
            />
          </nav>

          <div className="hidden items-center gap-11 xl:flex">
            <NavLink href="/sign-in">Sign In</NavLink>
            <Link href="/sign-up">
              <a
                className={`rounded-md px-4 py-2 ${top
                  ? "shadow-button bg-primary text-white hover:bg-[#4DC8BB]"
                  : "shadow-button-top bg-white text-primary hover:bg-slate-100"
                  }`}
              >
                Sign Up
              </a>
            </Link>
          </div>

          <div className="block cursor-pointer xl:hidden">
            <Hamburger onClick={() => setShow(true)} />
          </div>
        </header>
      </div>
    </div>
  );
}
