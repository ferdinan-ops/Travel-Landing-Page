import Image from 'next/image'
import React from 'react'

export default function Card({ image, style, children }) {
  return (
    <div className='relative w-full h-full group transition-all cursor-pointer'>
      <div className='relative w-full h-full'>
        <Image src={image} alt="" layout='fill' objectFit='cover' />
      </div>
      <div className={`${style} absolute flex justify-center items-center flex-col z-[1] w-full bg-gradient-to-t to-black/0 transition-all duration-300`}>
        {children}
      </div>
    </div>
  )
}
