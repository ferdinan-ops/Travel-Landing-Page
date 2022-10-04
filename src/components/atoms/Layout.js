import React from "react";

export default function Layout({ children, className }) {
  return (
    <section className={`container mx-auto px-6 md:px-10 xl:px-0 ${className}`}>{children}</section>
  );
}
