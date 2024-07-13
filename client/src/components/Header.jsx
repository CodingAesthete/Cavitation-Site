import { Link } from "react-router-dom";
import VortexLogo from '../assets/images/Vortex-Official-Logo.png';
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className='fixed top-0 left-0 right-0 bg-blue-200 text-black font-semibold shadow-lg z-50'>
      <div className='flex flex-col header-special:flex-row items-center justify-between mx-4 header-special:mx-24 xl:mx-36'>
        <Link to='/' className='flex flex-row items-center header-special:flex-row header-special:gap-4'>
          <div className='my-2 w-48 extrasmall:w-48 sm:w-56'>
            <img src={VortexLogo} alt="Logo" />
          </div>
        </Link>

        <ul className='text-blue-800 flex flex-col header-sm:flex-row sm:text-xl mb-2 header-special:mb-0 md:flex-row items-center gap-1 header-sm:gap-6 sm:gap-8 text-xl xs:text-lg md:text-2xl xl:text-xl mt-4 header-special:mt-0 font-bold'>
          <div className='flex flex-row sm:flex-row sm:text-xl mb-2 header-special:mb-0 md:flex-row items-center gap-4 xs:gap-8 sm:gap-8 text-xl xs:text-lg md:text-2xl xl:text-xl mt-4 header-special:mt-0'>
            <Link to='/'>
              <li className='hover:underline cursor-pointer'>За нас</li>
            </Link>
            <Link to='/learn-more'>
              <li className='hover:underline'>Кавитация</li>
            </Link>
            <Link to='/effects'>
              <li className='hover:underline'>Eфекти</li>
            </Link>
          </div>
          <div className='flex flex-row sm:flex-row sm:text-xl mb-2 header-special:mb-0 md:flex-row items-center gap-4 xs:gap-8 sm:gap-8 text-xl xs:text-lg md:text-2xl xl:text-xl mt-4 header-special:mt-0'>
            <Link to='/goals'>
              <li className='hover:underline'>Факти</li>
            </Link>
            <Link to='/contacts'>
              <li className='hover:underline'> Контакти </li>
            </Link>
          </div>
        </ul>
      </div>
    </header>
  );
}
