import Image from 'next/image'
import React from 'react'

export default function Card({ name, place, image, isTop }) {
  return (
    <div className='relative w-full h-full group transition-all cursor-pointer'>
      <div className='relative w-full h-full'>
        <Image src={image} alt="" layout='fill' objectFit='cover' />
      </div>
      <div className={`${isTop ? "h-[310px] from-black/90 xl:-bottom-full group-hover:bottom-0 bottom-0" : "h-full from-black/60 bottom-0 xl:opacity-0 group-hover:opacity-100 opacity-100"} absolute flex justify-center items-center flex-col z-[1] w-full bg-gradient-to-t to-black/0 transition-all duration-300`}>
        <h2 className='text-[40px] font-black'>{name}</h2>
        <p className='font-medium uppercase text-sm'>{place}</p>
      </div>
    </div>
  )
}
