import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { footerImg } from '../../../public'
import { Layout } from '../atoms'
import { footerLinks1, footerLinks2, footerLinks3, footerLinks4 } from '../../config/links'

export default function Footer() {
  return (
    <footer className='bg-[#003531]'>
      <div className='relative w-full h-[523px]'>
        <div className='bg-gradient-to-b from-white via-[#F5FFFE] to-white/0 absolute w-full z-[2] h-56 top-0'></div>
        <Image src={footerImg} alt="" layout='fill' objectFit='cover' />
      </div>

      <Layout className="pt-28 pb-11 font-sans text-white font-semibold">
        <div className='flex justify-between max-w-[1130px] flex-col gap-10 md:flex-row md:gap-0'>
          <ul className='flex flex-col gap-3'>
            <h4 className='uppercase pb-4 text-[#D0D0D0] font-black leading-[156.69%]'>legal</h4>
            {footerLinks1.map((links, index) => (
              <li key={index}>
                <Link href={links.href}>
                  <a className='hover:underline'>{links.name}</a>
                </Link>
              </li>
            ))}
          </ul>
          <ul className='flex flex-col gap-3'>
            <h4 className='uppercase pb-4 text-[#D0D0D0] font-black leading-[156.69%]'>product</h4>
            {footerLinks2.map((links, index) => (
              <li key={index}>
                <Link href={links.href}>
                  <a className='hover:underline'>{links.name}</a>
                </Link>
              </li>
            ))}
          </ul>
          <ul className='flex flex-col gap-3'>
            <h4 className='uppercase pb-4 text-[#D0D0D0] font-black leading-[156.69%]'>company</h4>
            {footerLinks3.map((links, index) => (
              <li key={index}>
                <Link href={links.href}>
                  <a className='hover:underline'>{links.name}</a>
                </Link>
              </li>
            ))}
          </ul>
          <ul className='flex flex-col gap-3'>
            <h4 className='uppercase pb-4 text-[#D0D0D0] font-black leading-[156.69%]'>Social</h4>
            <div className='flex gap-5 flex-row h-full md:flex-col md:justify-between md:gap-0'>
              {footerLinks4.map((links, index) => (
                <li key={index}>
                  <Link href={links.href}>
                    <a className='w-full h-full'>{links.name}</a>
                  </Link>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </Layout>
    </footer>
  )
}
