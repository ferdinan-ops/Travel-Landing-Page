import React, { useEffect, useState } from "react";
import { Card, Gap, Layout } from "../atoms";
import { cardData } from "../../config/cardData";

export default function Sections({ isTop, desc }) {
  const topDestinations = cardData.filter(datas => datas.top === true);
  const moreDestinations = cardData.filter(datas => datas.more === true);

  return (
    <section className={`min-h-screen bg-gradient-to-b ${isTop && "from-[#00BEAC] via-[#00BEAC] to-[#00BEAC]/0 text-white"}`}>
      <Layout>
        {isTop && <Gap height={81} />}
        <div className="text-center">
          <h2 className={`font-serif text-8xl leading-[82.8%] md:text-[150px] ${isTop ? "text-third" : "text-[#0CA296]"}`}>
            {isTop ? "top" : "more"}
          </h2>
          <h1 className="-mt-4 font-sans text-5xl md:text-7xl font-black">destinations</h1>
          <div className={`mx-auto mt-2 mb-6 md:mb-8 h-5 w-10 rounded-full ${isTop ? "bg-[#41D6C7]" : "bg-[#CBE7E4]"}`}></div>
          <p className="mx-auto max-w-4xl font-sans text-sm md:text-xl font-semibold">{desc}</p>
        </div>

        <div className={`mt-20 font-sans flex justify-between gap-5 ${!isTop && "grid grid-cols-3 grid-rows-2 grid-flow-row-dense"}`}>
          {isTop ? topDestinations.map((data, index) => (
            <div className="w-3/12 h-[553px] rounded-xl overflow-hidden" key={index}>
              <Card {...data} isTop />
            </div>
          )) :
            moreDestinations.map((data, index) => (
              <div className={` rounded-xl overflow-hidden text-white ${data.style}`} key={index}>
                <Card {...data} />
              </div>
            ))}
        </div>
      </Layout>
    </section>
  );
}
