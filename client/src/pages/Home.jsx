import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from 'framer-motion';
import CavitationPool from '../assets/images/cavitation-pool.jpg';
import CavitationGlass from '../assets/images/cavitation-result.jpg';
import SubjectOfActivity from '../assets/images/SubjectOfActivity.jpg';
import CavitationRealImg from '../assets/images/cavitation-real.jpg';
import MAE from '../assets/images/mae-logo2.png';
import Lions from '../assets/images/lions-logo.png';
import CavitationVortex from '../assets/images/cavitation-vortex-2.jpg';
import Event1 from '../assets/images/event1.jpg';
import Event2 from '../assets/images/event2.jpg';
import FB from '../assets/images/fb.jpg';
import YT from '../assets/images/yt2.png';
import IN from '../assets/images/in.png';
import Conf from '../assets/images/conf.jpg';
import { useTranslation, Trans } from 'react-i18next';
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

export default function Home() {
  const screenSize = useMediaQuery();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
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
          {t("homeTitle1")}
        </motion.h1>
        <div className="lg:flex lg:items-start mb-6">
          <motion.img
            src={CavitationVortex}
            alt="Cavitation Process"
            className='lg:float-left lg:mr-6 mb-4 lg:mb-0 w-full md:w-auto max-w-[340px] mx-auto lg:mx-0 rounded-md shadow-md'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
          <div className="lg:ml-6 my-auto">
            <motion.p
              className={`mb-3 text-center sm:text-justify text-gray-700`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Trans i18nKey="homeT1P1">
                Фирма <strong className='text-lg'>Vortex Shipping</strong> - гр. Варна предлага комплексна система за бактериално почистване на басейни, аквариуми и както затворени, така и отворени водни пространства. Защитена е с патент <strong>№ 5767</strong> от 26.03.2024.
              </Trans>
            </motion.p>
            <motion.p
              className={`mb-3 text-center sm:text-justify text-gray-700`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {t("homeT1P2")}
            </motion.p>
          </div>
        </div>
        <div className="lg:flex lg:items-start lg:flex-row-reverse mb-6">
          <motion.img
            src={CavitationGlass}
            alt="Cavitation Process"
            className='lg:float-right lg:ml-6 mb-4 lg:mb-0 w-full lg:w-auto max-w-[265px] xl:max-w-[340px] mx-auto lg:mx-0 rounded-md shadow-md'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
          <div className="lg:mr-6 my-auto">
            <motion.p
              className={`mb-3 text-center sm:text-justify text-gray-700`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {t("homeT2P1")}
            </motion.p>
            <motion.p
              className={`mb-3 text-center sm:text-justify text-gray-700`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {t("homeT2P2")}
            </motion.p>
          </div>
        </div>

        <motion.div
          className="h-1 bg-blue-900 mt-8 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        <div className="mt-8 flex flex-col lg:flex-row items-center">
          <img
            src={SubjectOfActivity}
            loading="lazy"
            alt="Subject of Activity"
            className="mr-4 rounded-md shadow-md mb-4 lg:mb-0"
            style={{ maxWidth: '300px' }}
          />
          <motion.div>
            <motion.h1
              className='w-full text-center text-2xl font-extrabold text-blue-900 pb-6'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {t("subjectOfActivity")}
            </motion.h1>
            <p
              className={`text-lg leading-6 italic ${screenSize === 'sm' ? 'text-left' : 'text-justify'} text-gray-700`}
              dangerouslySetInnerHTML={{ __html: t("subjectDescription") }}
            />
          </motion.div>
        </div>

        <motion.div
          className="h-1 bg-blue-900 mt-8 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        <div className="mt-8" ref={sectionRef}>
          <motion.h1
            className='w-full text-center text-2xl font-extrabold text-blue-900 pb-6'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {t("ourPartners")}
          </motion.h1>
          <div className="flex flex-row justify-around items-start flex-wrap">
            <motion.div
              className="mx-0 sm:mx-4 mb-4 max-w-xs sm:max-w-md flex flex-col justify-center items-center bg-white  p-4 rounded-lg shadow-lg hover:shadow-xl"
            >
              <motion.img
                src={MAE}
                loading="lazy"
                alt="MAE Logo"
                className="max-w-80 mb-3"
                whileHover={{ rotate: 0 }}
              />
              <p className="text-center text-gray-700">{t("maeDescription")}</p>
            </motion.div>
            <motion.div
              className="mx-0 sm:mx-4 mb-4 max-w-xs sm:max-w-md flex flex-col justify-center items-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl"
            >
              <motion.img
                loading="lazy"
                src={Lions}
                alt="Lions Logo"
                className="max-w-80 mb-3"
                whileHover={{ rotate: 0 }}
              />
              <p className="text-center text-gray-700 mt-3">{t("lionsDescription")}</p>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="h-1 bg-blue-900 mt-8 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        <div className="mt-8" ref={sectionRef}>
          <motion.h1
            className='w-full text-center text-2xl font-extrabold text-blue-900 pb-6'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {t("evT1")}
          </motion.h1>

          {/* Container for Event Images */}
          <div className="flex flex-col gap-4 mb-4  sm:flex-row sm:gap-6">
            <motion.img
              src={Event1}
              loading="lazy"
              alt="Event 1"
              className="w-full md:max-w-[48%] lg:max-w-[49%] rounded-md shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            />
            <motion.img
              src={Conf}
              loading="lazy"
              alt="Event 2"
              className="w-full hidden md:block md:max-w-[48%] lg:max-w-[49%] rounded-md shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            />
          </div>

          <motion.p
            className="text-lg leading-[1.9] text-gray-800 italic p-4 bg-blue-100 border-l-4 border-r-4 border-blue-900 shadow-md rounded-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t("evP1")}
          </motion.p>

          <div className="mt-8 gap-8 flex flex-col md:flex-row justify-around text-center">
            <div className="w-full md:w-5/12 lg:w-5/12">
              <div className="relative" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '0.375rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <iframe
                  src="https://www.youtube.com/embed/FrWi9gA65qA?si=sVJ88AP8To_KdVj2"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                ></iframe>
              </div>
              <motion.div
                className="bg-white p-4 mt-3 rounded-md shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <p className="text-center text-gray-700 font-bold text-lg">
                  {t("evP3")}
                </p>
                <p className="text-center text-gray-500 italic">
                  {t("evP4")}
                </p>
              </motion.div>
            </div>
            <div className="w-full md:w-5/12 lg:w-5/12">
              <div className="relative" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '0.375rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <iframe
                  src="https://www.youtube.com/embed/xX5kpHwXeiY?si=Y6YLLFKYbPBmxlRu"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                ></iframe>
              </div>
              <motion.div
                className="bg-white p-4 mt-3 rounded-md shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <p className="text-center text-gray-700 font-bold text-lg">
                  {t("evP5")}
                </p>
                <p className="text-center text-gray-500 italic">
                  {t("evP6")}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="mt-8 text-center">
            <p className="text-lg font-semibold mb-4 text-gray-900">
              {t("evP2")}
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.facebook.com/profile.php?id=61562812142550"
              >
                <motion.img
                  src={FB}
                  alt="Facebook"
                  className="w-20 h-20 rounded-full shadow-lg hover:shadow-xlduration-300"
                />
              </a>
              <a
                href="https://www.youtube.com/@cavitation-bg"
              >
                <motion.img
                  src={YT}
                  alt="YouTube"
                  className="w-20 h-20 rounded-full shadow-lg hover:shadow-xlduration-300"
                />
              </a>
              <a
                href="https://www.youtube.com/@cavitation-bg"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110"
              >
                <motion.img
                  src={IN}
                  alt="YouTube"
                  className="w-20 h-20 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                />
              </a>
            </div>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
}
