import React from 'react'
import { Link } from "react-router-dom"
import Logo from "../assets/images/logo-site.png"
import Avatar from "../assets/images/site-avatar.jpg"

export default function Header() {
  return (
    <header className='bg-blue-200 text-black font-semibold shadow-lg'>
      <div className='flex items-center justify-between p-2 lg:gap-4 sm:mx-10'>
        <Link to='/'>
          <div className='flex items-center gap-2 sm:gap-6'>
            <div className='w-8 sm:w-14'>
              <img src={Logo} alt="Logo" className='shadow-lg rounded-full' />
            </div>
            <div className='text-lg sm:text-3xl text-center font-bold text-black whitespace-nowrap' style={{ letterSpacing: '3px' }}>
              Кавитация БГ
            </div>
          </div>

        </Link>
        <ul className='flex items-center gap-0 sm:gap-8 text-lg lg:text-xl sm:whitespace-nowrap'>
          <Link to='/'>
            <li className='hidden lg:inline hover:underline cursor-pointer'>Начало</li>
          </Link>
          <Link to='/about'>
            <li className='hover:underline'>Технологии</li>
          </Link>
          <Link to='/goals'>
            <li className='hidden xl:inline hover:underline'>Нашите цели</li>
          </Link>
          <Link to='/learn-more'>
            <li className='hidden sm:inline hover:underline'> Научете повече</li>
          </Link>
          <Link to='/contacts'>
            <li className='hidden lg:inline hover:underline'> Контакти </li>
          </Link>
          <Link to='/signup'><li className='inline hover:underline cursor-pointer'><img className=' w-11 bg-blue-200 rounded-full' src={Avatar} alt="avatar icon" /></li>
          </Link>
        </ul>
      </div>
    </header>
  )
}