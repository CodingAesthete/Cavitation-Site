import React from 'react';
import { motion } from 'framer-motion';
import Water1 from '../assets/images/water1.jpg';
import Water2 from '../assets/images/water2.jpg';
import Water6 from '../assets/images/water6.jpg';
import Water7 from '../assets/images/water7.jpg';
import Water8 from '../assets/images/water8.jpg';
import Water9 from '../assets/images/water9.jpg';
import Water10 from '../assets/images/water10.jpg';
import Water19 from '../assets/images/water19.jpg';
import Water20 from '../assets/images/water20.jpg';
import Byala1 from '../assets/images/Byala1.jpg';
import Byala2 from '../assets/images/Byala2.jpg';
import BlackHorse from '../assets/images/BlackHorse.jpg';
import Cow from '../assets/images/Cow.jpg';
import Snowflake from '../assets/images/Snowflake.jpg';
import net from '../assets/images/net.jpg';
import WaterStructure from '../assets/images/WaterStructure.jpg';
import WaterInitial from '../assets/images/WaterInitial.jpg';
import { useTranslation, Trans } from 'react-i18next';
import i18n from '../i18n'; // Import i18n instance

export default function Effects() {
  const { t } = useTranslation();
  const albumPhotoContainerStyle = {
    border: '8px solid #6B4226', // Brown border
    borderRadius: '8px', // Rounded corners
    overflow: 'hidden',
  };

  const albumPhotoStyle = {};

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0 },
  };

  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    pointerEvents: 'none', // Allows clicking through the container
    zIndex: 1,
  };

  const dropStyle = {
    position: 'absolute',
    width: '10px',
    height: '10px',
    borderRadius: '100%',
    backgroundColor: 'rgba(255, 255, 255, 1)', // Semi-transparent white drops
  };

  const WaterDrops = () => {
    const drops = Array.from({ length: 10 }).map((_, index) => ({
      id: index,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      scale: Math.random() * 0.8 + 0.2,
      opacity: Math.random(),
      speed: Math.random() * 1.15 + 1,
    }));

    const dropVariants = {
      animate: (custom) => ({
        y: window.innerHeight + 20,
        transition: {
          duration: custom.speed,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        },
      }),
    };



    return (
      <div style={containerStyle}>
        {drops.map((drop) => (
          <motion.div
            key={drop.id}
            style={{
              ...dropStyle,
              left: drop.x,
              right: drop.x - 40,
              top: drop.y,
              scale: drop.scale,
              opacity: drop.opacity,
            }}
            variants={dropVariants}
            animate="animate"
            custom={drop}
          />
        ))}
      </div>
    );
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="text-lg text-justify w-11/12 sm:w-5/6 mx-auto rounded-md px-3 sm:px-10 py-6 mt-6 mb-6 bg-blue-50 relative"
      style={{ zIndex: 2 }} // Ensure this has a higher z-index than WaterDrops
    >
      <WaterDrops />
      <div className="p-6min-h-screen">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center animate-fadeInSlow">
            {t("effT1")}
          </h2>
          <p className="mb-4 animate-slideInUp md:text-justify text-center">
            {t("effT1P1")}
          </p>
          <ul className="list-disc list-inside pl-4 animate-slideInUp mb-4">
            <li>{t("effT1P2")}</li>
            <li>{t("effT1P3")}</li>
          </ul>
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:gap-8">
            <div style={albumPhotoContainerStyle} className="hidden md:block">
              <img src={Water1} alt="Water 1" className="max-w-sx md:w-md border rounded-md" />
            </div>
            <div style={albumPhotoContainerStyle}>
              <img src={WaterInitial} alt="Water 2" className=" max-w-sx md:w-md border rounded-md" />
            </div>
          </div>
          <p className="text-center text-md italic">
            {t("effT1P4")}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center animate-fadeInSlow">
            {t("effT2")}
          </h2>
          <p className="mb-4 animate-slideInUp md:text-justify text-center">
            {t("effT2P1")}
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:gap-8">
            <div style={albumPhotoContainerStyle}>
              <img loading="lazy" src={Snowflake} alt="Snowflake" className="max-w-sx md:w-md border rounded-md" />
            </div>
            <div style={albumPhotoContainerStyle} className="hidden md:block">
              <img loading="lazy" src={WaterStructure} alt="Water Structure" className="max-w-sx md:w-md border rounded-md" />
            </div>
          </div>
          <p className="text-center text-md italic">
            {t("effT2P2")}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center animate-fadeInSlow">
            {t("effT3")}
          </h2>
          <p className="mb-4 animate-slideInUp md:text-justify text-center">
            {t("effT3P1")}
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:gap-8">
            <div style={albumPhotoContainerStyle}>
              <img loading="lazy" src={net} alt="net" className=" max-w-sx md:w-md border rounded-md" />
            </div>
            <div style={albumPhotoContainerStyle} className="hidden md:block">
              <img loading="lazy" src={Water6} alt="Water 1" className="hidden md:block max-w-sx md:w-md border rounded-md" />
            </div>
          </div>
          <p className="text-center text-md italic">
            {t("effT3P2")}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center animate-fadeInSlow">
            {t("effT4")}
          </h2>
          <p className="mb-4 animate-slideInUp md:text-justify text-center">
            {t("effT4P1")}
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:gap-8">
            <div style={albumPhotoContainerStyle}>
              <img loading="lazy" src={Water7} alt="Water 1" className="max-w-sx md:w-md border rounded-md" />
            </div>
            <div style={albumPhotoContainerStyle} className="hidden md:block">
              <img loading="lazy" src={Water8} alt="Water 2" className="hidden md:block max-w-sx md:w-md border rounded-md" />
            </div>
          </div>
          <p className="text-center text-md italic">
            {t("effT4P2")}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center animate-fadeInSlow">
            {t("effT5")}
          </h2>
          <p className="mb-4 animate-slideInUp md:text-justify text-center">
            {t("effT5P1")}
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:gap-8">
            <div style={albumPhotoContainerStyle}>
              <img loading="lazy" src={Water9} alt="Water 1" className="max-w-sx md:w-md border rounded-md" />
            </div>
            <div style={albumPhotoContainerStyle} className="hidden md:block">
              <img loading="lazy" src={Water10} alt="Water 2" className="hidden md:block max-w-sx md:w-md border rounded-md" />
            </div>
          </div>
          <p className="text-center text-md italic">
            {t("effT5P2")}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center animate-fadeInSlow">
            {t("effT6")}
          </h2>
          <p className="mb-4 animate-slideInUp md:text-justify text-center">
            {t("effT6P1")}
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:gap-8">
            <div style={albumPhotoContainerStyle}>
              <img loading="lazy" src={BlackHorse} alt="Black Horse" className="max-w-sx md:w-md border rounded-md" />
            </div>
            <div style={albumPhotoContainerStyle} className="hidden md:block">
              <img loading="lazy" src={Cow} alt="Water 2" className="hidden md:block max-w-sx md:w-md border rounded-md" />
            </div>
          </div>
          <p className="text-center text-md italic">
            {t("effT6P2")}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center animate-fadeInSlow">
            {t("effT7")}
          </h2>
          <p className="mb-4 animate-slideInUp md:text-justify text-center">
            {t("effT7P1")}
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:gap-8">
            <div style={albumPhotoContainerStyle}>
              <img loading="lazy" src={Water19} alt="Water 1" className="max-w-sx md:w-md border rounded-md" />
            </div>
            <div style={albumPhotoContainerStyle} className="hidden md:block">
              <img loading="lazy" src={Water20} alt="Water 2" className="hidden md:block max-w-sx md:w-md border rounded-md" />
            </div>
          </div>
          <p className="text-center text-md italic">
            {t("effT7P2")}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center animate-fadeInSlow">
            {t("effT8")}
          </h2>
          <div className="animate-slideInUp">
            <p className="mb-4 animate-slideInUp md:text-justify text-center">
              {t("effT8P1")}
            </p>
            <p className="mb-4 animate-slideInUp md:text-justify text-center">
              {t("effT8P2")}
            </p>
            <p className="mb-4 animate-slideInUp md:text-justify text-center">
              {t("effT8P3")}
            </p>
            <p className="mb-4 animate-slideInUp md:text-justify text-center">
              {t("effT8P4")}
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:gap-8">
            <div style={albumPhotoContainerStyle}>
              <img loading="lazy" src={Byala1} alt="Water 1" className="max-w-sx md:w-md border rounded-md" />
            </div>
            <div style={albumPhotoContainerStyle} className="hidden md:block">
              <img loading="lazy" src={Byala2} alt="Water 2" className="hidden md:block max-w-sx md:w-md border rounded-md" />
            </div>
          </div>
          <p className="text-center text-md italic">
            {t("effT8P5")}
          </p>
        </section>

      </div>
    </motion.div>
  );
}
