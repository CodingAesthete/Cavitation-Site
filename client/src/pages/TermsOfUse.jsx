import React, { useRef, useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n'; // Import i18n instance

// Custom hook to detect screen size
function useMediaQuery() {
  const [screenSize, setScreenSize] = React.useState('');

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize('sm');
      } else {
        setScreenSize('lg');
      }
    };

    // Initial check on mount
    handleResize();

    // Listen to window resize event
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
}

export default function TermsOfUse() {
  const screenSize = useMediaQuery();
  const { t } = useTranslation();

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleLanguageChange = () => {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 200); // Duration of the animation in milliseconds
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-lg w-11/12 sm:w-5/6 mx-auto rounded-lg px-4 sm:px-10 py-8 mt-6 mb-10 bg-blue-50 shadow-lg"
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isAnimating ? 0 : 1, scale: isAnimating ? 0.95 : 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className='w-full text-center text-2xl font-extrabold text-blue-900 pb-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {t('termsT1')}
        </motion.h1>
        <div className="text-gray-700">
          <p className="mb-3">{t('termsT2')}</p>
          <p className="mb-3">{t('termsT3')}</p>
          <p className="mb-3"><strong>{t('termsT4')}</strong></p>
          <p className="mb-3">{t('termsT5')}</p>
          <p className="mb-3">{t('termsT6')}</p>
          <p className="mb-3">{t('termsT7')}</p>
          <p className="mb-3">{t('termsT8')}</p>
          <p className="mb-3">{t('termsT9')}</p>
          <p className="mb-3">{t('termsT10')}</p>
          <p className="mb-3">{t('termsT11')}</p>
          <p className="mb-3">{t('termsT12')}</p>
          <p className="mt-6 mb-3"><strong>{t('termsT13')}</strong></p>
          <p className="mb-3">{t('termsT14')}</p>
          <p className="mb-3">{t('termsT15')}</p>
          <p className="mb-3">{t('termsT16')}</p>
          <p className="mb-3">{t('termsT17')}</p>
          <p className="mb-3">{t('termsT18')}</p>
          <p className="mt-6 mb-3"><strong>{t('termsT19')}</strong></p>
          <p className="mb-3">{t('termsT20')}</p>
          <p className="mb-3">{t('termsT21')}</p>
          <p className="mb-3">{t('termsT22')}</p>
          <p className="mt-6 mb-3"><strong>{t('termsT23')}</strong></p>
          <p className="mb-3">{t('termsT24')}</p>
          <p className="mb-3">{t('termsT25')}</p>
          <p className="mt-6 mb-3"><strong>{t('termsT26')}</strong></p>
          <p className="mb-3">{t('termsT27')}</p>
          <p className="mb-3">{t('termsT28')}</p>
          <p className="mt-6 mb-3"><strong>{t('termsT29')}</strong></p>
          <p className="mb-3">{t('termsT30')}</p>
          <p className="mb-3">{t('termsT31')}</p>
          <p className="mb-3">{t('termsT32')}</p>
          <p className="mb-3">{t('termsT33')}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
