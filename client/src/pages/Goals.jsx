import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import CavitationVideo from '../assets/images/cavitation-video.mp4';
import { useTranslation, Trans } from 'react-i18next';
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

  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false); // State for showing overlay
  const { t } = useTranslation();

  const questionsAndAnswers = [
    {
      question: t("factQ1"),
      answer: t("factA1"),
    },
    {
      question: t("factQ2"),
      answer: t("factA2"),
    },
    {
      question: t("factQ3"),
      answer: t("factA3"),
    },
    {
      question: t("factQ4"),
      answer: t("factA4"),
    },
    {
      question: t("factQ5"),
      answer: t("factA5"),
    },
    {
      question: t("factQ6"),
      answer: t("factA6"),
    },
    {
      question: t("factQ7"),
      answer: t("factA7"),
    },
    {
      question: t("factQ8"),
      answer: t("factA8"),
    },
    {
      question: t("factQ9"),
      answer: t("factA9"),
    },
    {
      question: t("factQ10"),
      answer: t("factA10"),
    }
  ];

  const handleQuestionClick = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

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

  const overlayVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-lg text-justify w-11/12 sm:w-5/6 mx-auto rounded-md  px-3 sm:px-10 py-6 mt-6 mb-6 bg-blue-50"
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isAnimating ? 0 : 1, scale: isAnimating ? 0.95 : 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className='text-2xl font-bold mb-4 text-center'>{t("factT1")}</h1>
        <div className='space-y-4'>
          {questionsAndAnswers.map((qa, index) => (
            <div key={index} className='border-b pb-2 border-darkblue-500'>
              <button
                onClick={() => handleQuestionClick(index)}
                className='text-lg font-medium text-left w-full focus:outline-none flex items-center justify-between'
              >
                <span className='flex sm:items-center'>
                  <span className='bg-gradient-to-r from-blue-500 to-violet-500 text-white font-bold mr-2 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center'>
                    {index + 1}
                  </span>
                  <span className=' ml-1 sm:ml-2 sm:text-justify md:text-start'> {qa.question}</span>
                </span>

                {/* <FaChevronDown className={`transform transition-transform duration-300 ${selectedQuestion === index ? 'rotate-180' : ''} sm:hidden`} /> */}
              </button>

              <div className="flex justify-center cursor-pointer mt-2" onClick={() => handleQuestionClick(index)}>
                <FaChevronDown className={`transform transition-transform duration-300 ${selectedQuestion === index ? 'rotate-180' : ''}`} />
              </div>
              {selectedQuestion === index && (
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
              )}
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
            onMouseEnter={() => setShowOverlay(true)}
            onMouseLeave={() => setShowOverlay(false)}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
