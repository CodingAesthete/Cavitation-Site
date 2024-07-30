import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n'; // Import i18n instance

// Import images
import FB from '../assets/images/fb.jpg';
import YT from '../assets/images/yt2.png';
import IN from '../assets/images/in.png';

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
  const { t } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'bg' ? 'en' : 'bg';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <>
      <header className='bottom-0 left-0 right-0 py-1 bg-blue-900 text-black font-semibold shadow-lg z-50'>
        <div className='flex flex-col md:flex-row items-center justify-between mx-4 header-special:mx-24 xl:mx-36'>

          {/* Container for social media icons and footer text */}
          <div className='flex items-center space-x-2 gap-2'>
            {/* Footer Text */}
            <div className='text-blue-100 font-extrabold my-1' style={fadeInStyle}>
              @2024 Cavitation System
            </div>

            <div className="flex justify-center space-x-3">
              <a
                href="https://www.facebook.com/profile.php?id=61562812142550"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img
                  src={FB}
                  alt="Facebook"
                  className="w-6 h-6 rounded-full shadow-lg hover:shadow-xl duration-300"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                />
              </a>
              <a
                href="https://www.youtube.com/@cavitation-bg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img
                  src={YT}
                  alt="YouTube"
                  className="w-6 h-6 rounded-full shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img
                  src={IN}
                  alt="Instagram"
                  className="w-6 h-6 rounded-full shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <ul className='text-blue-100 flex flex-col header-sm:flex-row sm:text-xl mb-0 mt-0 header-special:mb-0 md:flex-row items-center gap-1 header-sm:gap-6 sm:gap-8 text-xl xs:text-lg md:text-2xl xl:text-xl header-special:mt-0 font-bold'>
            <div className='flex flex-row sm:flex-row sm:text-lg mb-2 header-special:mb-0 md:flex-row items-center gap-4 xs:gap-8 sm:gap-8 text-lg xs:text-md md:text-xl xl:text-lg mt-4 header-special:mt-0'>
              <Link to='/terms-of-use'>
                <li className='hover:underline cursor-pointer'>{t("footT1")}</li>
              </Link>
              <Link to='/copyright'>
                <li className='hover:underline cursor-pointer'>{t("footT2")}</li>
              </Link>
            </div>
          </ul>
        </div>
      </header>
      <style>{styles}</style> {/* Include keyframes for the fade-in animation */}
    </>
  );
}
