import React from 'react';
import { Link } from "react-router-dom";
import OfficialLogo from '../assets/images/OfficialLogo.png';
import Avatar from "../assets/images/site-avatar.jpg";
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className='bg-blue-200 text-black font-semibold shadow-lg'>
      <div className='flex items-center justify-between lg:gap-4 sm:mx-28'>
        <Link to='/'>
          <div className='flex items-center gap-2 sm:gap-4'>
            <div className='w-10 sm:w-16'>
              <img src={OfficialLogo} alt="Logo" className='' />
            </div>
            <motion.div
              className='text-lg sm:text-3xl text-center font-bold text-black whitespace-nowrap'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                letterSpacing: '3px',
                fontFamily: 'Pacifico, cursive',
                background: 'linear-gradient(to right, #1e3c72, #2a5298)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Vortex Shipping
            </motion.div>
          </div>
        </Link>
        <ul className='flex items-center gap-0 sm:gap-8 text-lg lg:text-xl sm:whitespace-nowrap'>
          <Link to='/'>
            <li className='hidden lg:inline hover:underline cursor-pointer'>За нас</li>
          </Link>
          <Link to='/learn-more'>
            <li className='hidden sm:inline hover:underline'>Кавитация</li>
          </Link>
          <Link to='/goals'>
            <li className='hidden xl:inline hover:underline'>Нашите цели</li>
          </Link>
          <Link to='/contacts'>
            <li className='hidden lg:inline hover:underline'> Контакти </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
