import { Link } from "react-scroll";
import { ArrowDown } from "../../../public";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-bgHero bg-cover bg-center bg-no-repeat px-6 md:px-10 xl:px-0" id="home">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40"></div>

      <div className="relative z-[1] flex min-h-screen w-full flex-col  justify-center xl:container xl:mx-auto xl:pt-32">
        <h1 className="heading-shadow font-serif text-9xl leading-[82.8%] text-secondary md:text-[200px] xl:text-[300px]">
          make the sight
        </h1>
        <div className="flex flex-col gap-[100px] text-white md:gap-[200px] xl:flex-row xl:justify-between xl:gap-0">
          <h1 className="heading-shadow -mt-6 text-[110px] font-black leading-[76%] md:text-[200px] xl:-mt-16 xl:text-[300px]">
            move.
          </h1>
          <Link className="flex max-w-[225px] items-center gap-6 xl:mx-0" to="see" smooth spy offset={-80} duration={500}>
            <div className="cursor-pointer">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-dashed bg-white/20">
                <ArrowDown className="mb-6 animate-bounce" />
              </div>
            </div>
            <span className="font-sans text-lg uppercase">
              explore destinations
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
