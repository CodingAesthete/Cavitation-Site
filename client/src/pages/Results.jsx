import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from 'framer-motion';
import Vvmu from '../assets/images/vvmu.jpg';
import Vik from '../assets/images/vik.jpg';
import Bacteria from '../assets/images/bacteria.jpg';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n'; // Import i18n instance

import styled from "styled-components";

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

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
}

export default function Results() {
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
      className="text-lg w-11/12 sm:w-5/6 mx-auto rounded-md px-4 sm:px-10 py-6 mt-6 mb-6 bg-blue-50"
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isAnimating ? 0 : 1, scale: isAnimating ? 0.95 : 1 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <motion.h1
            className='w-full text-center text-2xl font-extrabold text-blue-900 pb-6'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {t("resultsLink")}
          </motion.h1>

          <div className="flex flex-col justify-center gap-6">
            <div className="flex flex-col items-center">
              <motion.h2
                className="text-lg font-bold text-blue-800 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {t("resultsT1")}
              </motion.h2>
              <motion.img
                src={Vik}
                alt="Contact icon"
                className="w-full h-auto rounded-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              />
            </div>

            {/* Horizontal Divider */}
            <motion.div
              className="h-1 bg-blue-900 mt-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
            ></motion.div>

            <div className="flex flex-col items-center">
              <motion.h2
                className="text-lg font-bold text-blue-800 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {t("resultsT2")}
              </motion.h2>
              <div className="relative w-full flex justify-center overflow-hidden">
                <motion.div
                  className="transform -rotate-90"
                  style={{ transformOrigin: 'center' }}
                >
                  <motion.img
                    src={Vvmu}
                    alt="Map"
                    className="rounded-md max-h-[calc(100vh-3rem)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  />
                </motion.div>
              </div>
            </div>

            {/* New Section */}
            <motion.div
              className="flex flex-col items-center mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.h2
                className="text-lg font-bold text-blue-800 mb-4 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {t("resultsT3")}
              </motion.h2>

              <motion.img
                src={Bacteria}
                alt="Bacteria under microscope"
                className="w-full h-auto rounded-md max-w-xl mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              />

              <div className="w-full max-w-xl">
                {[
                  t("resultsT3P1"),
                  t("resultsT3P2"),
                  t("resultsT3P3"),
                  t("resultsT3P4")
                ].map((text, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.2 }}
                  >
                    <div className="bg-blue-800 w-2 h-2 rounded-full mr-4"></div>
                    <p className="text-blue-700">{text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
