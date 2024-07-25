import { Link } from "react-router-dom";
import VortexLogo from '../assets/images/Vortex-Official-Logo.png';
import CavitationLogo from '../assets/images/cav-logo-new.png';
import PerfectLogo from '../assets/images/PerfectLogo2.png';
import CavBgLogo from '../assets/images/CavBgLogo.jpg';
import { useSelector } from 'react-redux';
import LanguagesIcon from '../assets/images/languages-icon.png';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n'; // Import i18n instance

// Inline styles for the animation
const fadeInStyle = {
  animation: 'fadeIn 1s ease-in-out',
};

// Inline CSS keyframes
const styles = `
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export default function Footer() {
  const { currentUser } = useSelector((state) => state.user);
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'bg' ? 'en' : 'bg';
    i18n.changeLanguage(newLanguage);
  };

  const { t } = useTranslation();

  return (
    <>

      <header className=' bottom-0 left-0 right-0 py-1 bg-blue-900 text-black font-semibold shadow-lg z-50'>
        <div className='flex flex-col md:flex-row items-center justify-between mx-4 header-special:mx-24 xl:mx-36'>
          <div className='text-blue-100 font-extrabold my-1 w-52' style={fadeInStyle}>
            @2024 Cavitation System
          </div>

          <ul className='text-blue-100 flex flex-col header-sm:flex-row sm:text-xl mb-0  mt-0 header-special:mb-0 md:flex-row items-center gap-1 header-sm:gap-6 sm:gap-8 text-xl xs:text-lg md:text-2xl xl:text-xl header-special:mt-0 font-bold'>
            <div className='flex flex-row sm:flex-row sm:text-lg mb-2 header-special:mb-0 md:flex-row items-center gap-4 xs:gap-8 sm:gap-8 text-lg xs:text-md md:text-xl xl:text-lg mt-4 header-special:mt-0'>
              <Link to='/terms-of-use'>
                <li className='hover:underline cursor-pointer'>{t("Условия за ползване")}</li>
              </Link>
              <Link to='/copyright'>
                <li className='hover:underline cursor-pointer'>{t("Копирайт")}</li>
              </Link>
            </div>
          </ul>
        </div>
      </header>
    </>
  );
}