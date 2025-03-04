import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from 'framer-motion';
import CavitationVideo from '../assets/images/cavitation-video.mp4';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n'; // Import i18n instance

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

export default function Goals() {
  const screenSize = useMediaQuery();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

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

  const { t } = useTranslation();

  const questionsAndAnswers = [
    { question: t("factQ2"), answer: t("factA2") },
    { question: t("factQ3"), answer: t("factA3") },
    { question: t("factQ4"), answer: t("factA4") },
    { question: t("factQ5"), answer: t("factA5") },
    { question: t("factQ6"), answer: t("factA6") },
    { question: t("factQ7"), answer: t("factA7") },
    { question: t("factQ8"), answer: t("factA8") },
    { question: t("factQ9"), answer: t("factA9") },
  ];

  const answerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.01,
        delayChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-lg text-justify w-full sm:w-full rounded-md py-6 mt-6 mb-6 bg-blue-50"
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isAnimating ? 0 : 1, scale: isAnimating ? 0.95 : 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className='w-full text-center text-2xl font-extrabold text-blue-900 pb-6'>{t("factT1")}</h1>
        <div className='space-y-4'>
          {questionsAndAnswers.map((qa, index) => (
            <div key={index} className='border-b pb-2 border-darkblue-500'>
              <button
                className='text-lg font-medium text-left w-full focus:outline-none flex items-center justify-between'
              >
                <span className='flex sm:items-center'>
                  <span className='bg-gradient-to-r from-blue-500 to-violet-500 text-white font-bold mr-2 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center'>
                    {index + 1}
                  </span>
                  <span className='ml-1 sm:ml-2 sm:text-justify md:text-start text-gray-700'> {qa.question}</span>
                </span>
              </button>

              {/* Display answer directly */}
              <motion.div
                variants={answerVariants}
                initial='hidden'
                animate='visible'
                className='mt-2 text-gray-700 text-center sm:text-justify'
              >
                {qa.answer.split('').map((letter, idx) => (
                  <motion.span key={idx} variants={letterVariants}>
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Video component with animated overlay */}
        <div style={{ position: 'relative', maxWidth: '100%', maxHeight: 'auto', margin: '10px auto' }}>
          <motion.video
            src={CavitationVideo}
            type="video/mp4"
            autoPlay
            loop
            muted
            style={{ maxWidth: '100%', display: 'block' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="rounded-md"
          />
        </div>
      </motion.div>
    </motion.div >
  );
}
