
import { Link } from "react-router-dom";
import OfficialLogo from '../assets/images/OfficialLogo.png';
import Avatar from "../assets/images/site-avatar.jpg"
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className='bg-blue-200 text-black font-semibold shadow-lg'>
      <div className='flex flex-col lg:flex-row items-center justify-between mx-4 lg:mx-24 xl:mx-28'>
        <Link to='/' className='flex flex-row items-center lg:flex-row lg:gap-4'>
          <div className='w-14 sm:w-16'>
            <img src={OfficialLogo} alt="Logo" />
          </div>
          <motion.div
            className='text-2xl xs:text-3xl text-center font-bold text-black whitespace-nowrap'
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
        </Link>
        <ul className='flex flex-col mb-2 lg:mb-0 xs:flex-row items-center gap-4 xs:gap-8 sm:gap-8 text-xl xs:text-lg md:text-2xl xl:text-xl mt-4 lg:mt-0'>
          <Link to='/'>
            <li className='hover:underline cursor-pointer'>За нас</li>
          </Link>
          <Link to='/learn-more'>
            <li className='hover:underline'>Кавитация</li>
          </Link>
          <Link to='/goals'>
            <li className='hover:underline'>Факти</li>
          </Link>
          <Link to='/contacts'>
            <li className='hover:underline'> Контакти </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
