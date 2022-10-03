import React from "react";

export default function Layout({ children, className }) {
  return (
    <section className={`container mx-auto ${className}`}>{children}</section>
  );
}
