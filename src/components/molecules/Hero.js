import Image from "next/image";
import React from "react";
import { dummy } from "../../../public";

export default function Hero({ children, image }) {
  return (
    <section className="relative min-h-screen px-6 md:px-10 xl:px-0">
      <div className='relative w-full min-h-screen -z-[1]'>
        <Image src={image} layout='fill' objectFit='cover' alt='' />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40"></div>
        {children}
      </div>
    </section>
  );
}
