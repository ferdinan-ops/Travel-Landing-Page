import Image from 'next/image';
import React from 'react';
import { bag, dummy } from '../../../public';
import { Card, Hero, Template } from "../../components";
import { detailDesc } from '../../config/desc';

export default function Detail() {
  const detailCard = [
    { name: "Panduan Lengkap Wisata Lombok", place: "www.klook.com" },
    { name: "LOMBOK Itinerary ~ 2022", place: "www.thebrokebackpacker.com" },
    { name: "The Perfect 3 Weeks In Lombok Itinerary", place: "www.wanderersandwarriors.com" },
  ]

  return (
    <Template title="Selocate - Detail">
      <Hero image={dummy}>
        <div className='flex flex-col relative h-screen heading-shadow text-white items-center justify-center'>
          <h1 className='font-black text-9xl leading-[202px] text-secondary'>Seinggigi</h1>
          <span className='font-medium text-lg uppercase'>Lombok</span>
        </div>
      </Hero>
      <section className='mt-20 container mx-auto flex justify-between gap-36'>
        <div className='w-[647px]'>
          <div className='font-semibold leading-relaxed text-base '>
            {detailDesc.map((details, index) => (
              <p className='mb-8' key={index}>{details}</p>
            ))}
          </div>

          <div className='mt-[50px]'>
            <span className='text-xs font-medium uppercase text-[#565656]'>ARTICLES ABOUT PARATY</span>
            <div className='w-full flex gap-8'>
              {detailCard.map((details, index) => (
                <div className='w-[194px] h-[202px] rounded-xl overflow-hidden mt-9' key={index}>
                  <Card isTop image={dummy} style="bottom-0 text-xs text-white px-3 py-5 bg-gradient-to-t from-black/90 min-h-[92px]">
                    <div className='w-full'>
                      <h2 className='text-sm leading-[18px] font-black'>{details.name}</h2>
                      <p className='font-medium uppercase text-[8px] mt-[10px]'>{details.place}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='w-full'>
          <div className='grid grid-cols-2 grid-rows-2 gap-[10px]'>
            <div className='col-span-2 relative rounded-xl overflow-hidden'>
              <Image src={dummy} alt="" layout='fill' objectFit='cover' />
            </div>
            <div className='col-span-1 relative h-[194px] rounded-xl overflow-hidden'>
              <Image src={dummy} alt="" layout='fill' objectFit='cover' />
            </div>
            <div className='col-span-1 relative h-[194px] rounded-xl overflow-hidden'>
              <Image src={dummy} alt="" layout='fill' objectFit='cover' />
            </div>
          </div>
        </div>
      </section>

      <section className='w-full container mx-auto bg-[#00BEAC] h-[133px] mt-48 relative flex items-center rounded-xl pr-[159px] justify-between mb-5'>
        <div className='absolute bottom-4 left-6'>
          <Image src={bag} width={190} height={177} alt="" />
        </div>
        <div className='ml-[276px] flex flex-col justify-center text-white'>
          <span className='font-black text-2xl'>Are you ready to move?</span>
          <span className='font-semibold'>Get in touch and let our team help you put things together and plan your move.</span>
        </div>
        <button className='bg-white text-[#0CA296] h-fit px-6 py-[10px] rounded shadow-md font-black'>Get in touch</button>
      </section>
    </Template>
  )
}
