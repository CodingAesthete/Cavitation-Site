import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from 'framer-motion';
import BacteriaColi from '../assets/images/AgWater.jpg';
import BottleAg from '../assets/images/bottleAg.jpg';
import AgUsage from '../assets/images/AgWoman.jpg';
import BacteriaAg from '../assets/images/bacteriaAg.jpg';
import AgModel from '../assets/images/AgModel.jpg';
import OldTimes from '../assets/images/OldTimes.jpg';
import AgGlass from '../assets/images/AgGlass.jpg';
import MoonWater from '../assets/images/MoonLight.jpg';
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

export default function AgWater() {
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
          {t("agH1")}
        </motion.h1>
        <div className="lg:flex lg:items-start lg:flex-row-reverse mb-6">
          <motion.img
            src={BacteriaColi}
            style={{ border: '8px solid #003153', padding: "1px" }}
            alt="Cavitation Process"
            className='lg:float-right lg:ml-6 mb-4 lg:mb-0 w-full lg:w-auto max-w-[365px] xl:max-w-[340px] mx-auto lg:mx-0 rounded-md shadow-md'
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
              {t("ag1P1")}
            </motion.p>
            <motion.p
              className={`mb-3 text-center sm:text-justify text-gray-700`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {t("ag1P2")}
            </motion.p>
          </div>
        </div>
        <div className="lg:flex lg:items-start mb-6">
          <motion.img
            src={BottleAg}
            style={{ border: '8px solid #003153', padding: "1px" }}
            alt="Cavitation Process"
            className='lg:float-left lg:mr-6 mb-4 lg:mb-0 w-full md:w-auto max-w-[340px] xl:max-w-[340px] mx-auto lg:mx-0 rounded-md shadow-md'
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
              {t("ag1P3")}

            </motion.p>
            <motion.p
              className={`mb-3 text-center sm:text-justify text-gray-700`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {t("ag1P4")}
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
          {/* <img
            src={SpeechCav}
            loading="lazy"
            alt="Subject of Activity"
            className="mr-4 rounded-md shadow-md mb-4 lg:mb-0"
            style={{ border: '8px solid #003153', padding: "1px", maxWidth: '300px' }}
          /> */}
          <motion.div>
            <motion.h1
              className="w-full text-center text-2xl font-extrabold text-blue-900 pb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {t("agUsageH1")}
            </motion.h1>
            <p
              className={`mb-3 text-center sm:text-justify text-gray-700`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              dangerouslySetInnerHTML={{ __html: t("agUsageP1") }}
            >
            </p>
            <div className="flex flex-col items-center justify-center gap-4 mb-4 sm:flex-row sm:gap-6 mt-4">
              <motion.img
                src={AgUsage}
                style={{ border: '8px solid #003153', padding: '1px' }}
                loading="lazy"
                alt="Event 1"
                className="w-full md:max-w-[80%] lg:max-w-[80%] rounded-md shadow-md mx-auto mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              />
            </div>
          </motion.div>

        </div>

        <motion.div
          className="h-1 bg-blue-900 mt-8 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        <div className="mt-8 flex flex-col lg:flex-row items-center">
          <motion.div>
            <motion.h1
              className="w-full text-center text-2xl font-extrabold text-blue-900 pb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {t("agBacteriaH1")}
            </motion.h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-4 mt-4">
              {/* First image - hidden on small screens */}
              <motion.img
                src={BacteriaAg}
                style={{ border: '8px solid #003153', padding: '1px' }}
                loading="lazy"
                alt="Event 1"
                className="hidden medium3:block max-w-full sm:max-w-[40%] md:max-w-[42%] medium:max-w-[30%] lg:max-w-[25%] medium2:max-w-[22%] medium3:max-w-[21%] xl:max-w-[24%] rounded-md shadow-md mx-auto mt-2 flex-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              />

              {/* Text container - takes more space */}
              <div className="flex-3">
                <motion.p
                  className={`mb-3 text-center sm:text-justify text-gray-700`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {t("agBacteriaP1")}
                </motion.p>

                <motion.p
                  className={`mb-3 text-center sm:text-justify text-gray-700`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {t("agBacteriaP2")}
                </motion.p>

                <motion.p
                  className={`mb-3 text-center sm:text-justify text-gray-700`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {t("agBacteriaP3")}
                </motion.p>
              </div>

              {/* Second image - always visible */}
              <motion.img
                src={AgModel}
                style={{ border: '8px solid #003153', padding: '1px' }}
                loading="lazy"
                alt="Event 1"
                className="max-w-full sm:max-w-[40%] md:max-w-[42%] medium:max-w-[30%] lg:max-w-[25%] medium2:max-w-[22%] medium3:max-w-[21%] xl:max-w-[24%] rounded-md shadow-md mx-auto mt-2 flex-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              />
            </div>
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
            {t("agPropertiesH1")}
          </motion.h1>

          {/* Container for Event Images */}
          <div>
            <motion.p
              className="mb-4 animate-slideInUp md:text-justify text-center  text-gray-700"
            >
              {t("agPropertiesP1")}
            </motion.p>
            <motion.p
              className="mb-4 animate-slideInUp md:text-justify text-center  text-gray-700"
              dangerouslySetInnerHTML={{ __html: t("agPropertiesP2") }}
            >

            </motion.p>
          </div>

          <div className="flex flex-col gap-4 mb-4  sm:flex-row sm:gap-6 mt-6">
            <motion.img
              src={OldTimes}
              style={{ border: '8px solid #003153', padding: "1px" }}
              loading="lazy"
              alt="Event 1"
              className="w-full md:max-w-[48%] lg:max-w-[49%] rounded-md shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            />
            <motion.img
              src={AgGlass}
              style={{ border: '8px solid #003153', padding: "1px" }}
              loading="lazy"
              alt="Event 2"
              className="w-full hidden md:block md:max-w-[48%] lg:max-w-[49%] rounded-md shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            />
          </div>
          <motion.p
            className="mb-4 animate-slideInUp md:text-justify text-center  text-gray-700"
          >
            {t("agPropertiesP3")}
          </motion.p>

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
            {t("agAdvantagesH1")}
          </motion.h1>

          {/* Container for Event Images */}
          <div>
            <motion.p className="mb-4 animate-slideInUp md:text-justify text-center text-gray-700"
              dangerouslySetInnerHTML={{ __html: t("agAdvantagesP1") }}>
            </motion.p>

            <motion.p className="mb-4 animate-slideInUp md:text-justify text-center text-gray-700">
              {t("agAdvantagesP2")}
            </motion.p>
          </div>

          {/* Centering the image */}
          <div className="flex justify-center mt-2 max-w-full md:max-w-[75%] mx-auto">
            <motion.img
              src={MoonWater}
              style={{
                border: '8px solid #003153',  // Keeps the border for definition
                borderRadius: '20px',         // Rounded corners for a softer look
                width: '100%',                 // Make the image take full width of its container
                height: 'auto',                // Maintain aspect ratio
                padding: '1px',               // Padding for aesthetics
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)', // Adding a nice shadow for depth
              }}
              loading="lazy"
              alt="Event 2"
            />
          </div>


        </div>


      </motion.div >
    </motion.div >
  );
}
