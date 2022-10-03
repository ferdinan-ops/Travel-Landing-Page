import React from "react";
import { Layout } from "../atoms";

export default function Sections({ isTop }) {
  return (
    <section
      className={`min-h-screen bg-gradient-to-b ${
        isTop && "from-[#00BEAC] via-[#00BEAC] to-[#00BEAC]/30 text-white"
      }`}
    >
      <Layout className="pt-4">
        <div>
          <h2
            className={`text-center font-serif text-[150px] ${
              isTop ? "text-third" : "text-[#0CA296]"
            }`}
          >
            {isTop ? "top" : "more"}
          </h2>
          <h1 className="-mt-20 text-center font-sans text-7xl font-black">
            destinations
          </h1>
          <div
            className={`mx-auto mt-2 mb-8 h-5 w-10 rounded-full ${
              isTop ? "bg-[#41D6C7]" : "bg-[#CBE7E4]"
            }`}
          ></div>
          <p className="mx-auto max-w-4xl text-center font-sans text-2xl font-semibold">
            It&#39;s hard enough deciding to move, you don&#39;t have to worry
            about where to move to. These are some of the most popular and best
            locations to move to based on a number of factors.
          </p>
        </div>
      </Layout>
    </section>
  );
}
