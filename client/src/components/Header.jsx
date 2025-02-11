import { Link } from "react-router-dom";
import VortexLogo from '../assets/images/Vortex-Official-Logo.png';
import CavitationLogo from '../assets/images/cav-logo-new.png';
import PerfectLogo from '../assets/images/LastLogo.png';
import CavBgLogo from '../assets/images/CavBgLogo.jpg';
import { useSelector } from 'react-redux';
import LanguagesIcon from '../assets/images/LanguageIcon2.png';
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

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;

    let newLanguage;
    if (currentLanguage === 'bg') {
      newLanguage = 'en';
    } else if (currentLanguage === 'en') {
      newLanguage = 'fr';
    } else {
      newLanguage = 'bg';
    }

    i18n.changeLanguage(newLanguage);
  };

  const { t } = useTranslation();

  return (
    <>
      {/* Inject the keyframes into the document */}
      <style>{styles}</style>

      <header className='fixed top-0 left-0 right-0 bg-blue-200 text-black font-semibold shadow-lg z-50'>
        <div className='flex flex-col header-special:flex-row items-center justify-between mx-4 header-special:mx-24 xl:mx-36'>
          <Link to='/' className='flex flex-row items-center header-special:flex-row header-special:gap-4'>
            <div className='my-1 w-36 extrasmall:w-36 sm:w-48 xl:w-36' style={fadeInStyle}>
              <img src={PerfectLogo} alt="Logo" />
            </div>
          </Link>

          <ul className='text-blue-800 flex flex-col sm:text-xl header-special:mb-0 header-fixer:flex-row items-center gap-1 header-sm:gap-6 sm:gap-3 md:gap-8 text-xl xs:text-lg md:text-2xl xl:text-xl header-special:mt-0 font-bold'>
            <div className='flex flex-row sm:flex-row sm:text-xl md:mb-2 header-special:mb-0 md:flex-row items-center gap-4 xs:gap-8 sm:gap-8 text-xl xs:text-lg md:text-2xl xl:text-xl mt-3 header-special:mt-0'>
              <Link to='/'>
                <li className='hover:underline cursor-pointer'>{t("head1")}</li>
              </Link>
              <Link to='/learn-more'>
                <li className='hover:underline'>{t("head2")}</li>
              </Link>
              <Link to='/effects'>
                <li className='hover:underline'>{t("head3")}</li>
              </Link>
            </div>
            <div className='flex flex-row sm:flex-row sm:text-xl mb-1 header-sm:mb-0 md:flex-row items-center gap-4 xs:gap-8 sm:gap-8 text-xl xs:text-lg md:text-2xl xl:text-xl mt-1 header-special:mt-0'>
              {/* <Link to='/goals'>
                <li className='hover:underline'>{t("head4")}</li>
              </Link> */}
              <Link to='/ag-water'>
                <li className='hover:underline'> {t("head6")} </li>
              </Link>
              <Link to='/contacts'>
                <li className='hover:underline'> {t("head5")} </li>
              </Link>
              <li className='hover:underline cursor-pointer' onClick={toggleLanguage}>
                <img src={LanguagesIcon} alt="Languages Icon" className='w-16 h-10' />
              </li>
            </div>
          </ul>
        </div>
      </header>
    </>
  );
}
