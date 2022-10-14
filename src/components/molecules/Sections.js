import { Card, Gap, Layout } from "../atoms";
import { cardData } from "../../config/cardData";
import { useEffect, useState } from "react";

export default function Sections({ isTop, desc, id }) {
  const [topDest, setTopDest] = useState([]);
  const [moreDest, setMoreDest] = useState([]);

  useEffect(() => {
    const topDestinations = cardData.filter(datas => datas.top === true);
    const moreDestinations = cardData.filter(datas => datas.more === true);
    setTopDest(topDestinations);
    setMoreDest(moreDestinations);
  }, [])

  return (
    <section className={`min-h-screen bg-gradient-to-b ${isTop && "from-[#00BEAC] via-[#00BEAC] to-[#00BEAC]/0 text-white"}`} id={id}>
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

        <div className={`mt-20 font-sans flex flex-wrap gap-y-5 justify-between ${!isTop && "grid gap-5 grid-cols-3 grid-rows-2 grid-flow-row-dense"}`}>
          {isTop ? topDest.map((data, index) => (
            <div className="w-full xl:w-[23.8%] md:w-[48.8%] h-[553px] rounded-xl overflow-hidden" key={index}>
              <Card image={data.image} style="h-[310px] from-black/90 xl:-bottom-full group-hover:bottom-0 bottom-0">
                <h2 className='text-[40px] font-black'>{data.name}</h2>
                <p className='font-medium uppercase text-sm'>{data.place}</p>
              </Card>
            </div>
          )) :
            moreDest.map((data, index) => (
              <div className={`rounded-xl overflow-hidden text-white ${data.style}`} key={index}>
                <Card image={data.image} style="h-full from-black/60 bottom-0 xl:opacity-0 group-hover:opacity-100 opacity-100">
                  <h2 className='text-[40px] font-black'>{data.name}</h2>
                  <p className='font-medium uppercase text-sm'>{data.place}</p>
                </Card>
              </div>
            ))}
        </div>
      </Layout>
    </section>
  );
}
