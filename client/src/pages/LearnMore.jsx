import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from 'framer-motion';
import Baloons from '../assets/images/balloons.jpg';
import Baloons2 from '../assets/images/baloons2.jpg';
import Chain from '../assets/images/cavitation-chain.jpg';
import Formula1 from '../assets/images/formula1.png';
import Formula2 from '../assets/images/formula2.png';
import Formula3 from '../assets/images/formula3.png';
import WaterDrops from '../assets/images/water-drops.jpg';
import Food from '../assets/images/Food.jpg';
import Medicine from '../assets/images/medicine.jpg';
import Farming from '../assets/images/farming.jpg';
import Oil from '../assets/images/Oil.jpg';
import Polishing from '../assets/images/Polishing.jpg';
import Chlor from '../assets/images/Chlor.jpg';
import UV from '../assets/images/UV.jpg';
import CavitationMethod from '../assets/images/CavitationMethod.jpg';
import ContactImage from '../assets/images/ContactImage.jpg';
import Water15 from '../assets/images/water15.jpg';
import WaterExtra2 from '../assets/images/WaterExtra2.jpg';
import Water17 from '../assets/images/water17.jpg';
import Water18 from '../assets/images/water18.jpg';
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

    // Initial check on mount
    handleResize();

    // Listen to window resize event
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
}


export default function LearnMore() {
  const albumPhotoContainerStyle = {
    border: '8px solid #6B4226', // Brown border
    borderRadius: '8px', // Rounded corners
    overflow: 'hidden',
  };

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
      }, 100); // Duration of the animation in milliseconds
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
      className="text-lg text-justify w-11/12 sm:w-5/6 mx-auto rounded-md px-4  sm:px-10  py-4 mt-6 mb-10 bg-blue-50"
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isAnimating ? 0 : 1, scale: isAnimating ? 0.95 : 1 }}
        transition={{ duration: 0.6 }}
      >
        <div style={{ clear: 'both' }}>
          <br />
          <motion.h2
            className='w-full text-center text-2xl font-bold pb-6'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {t("cavT1")}
          </motion.h2>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}
            className='flex-col sm:flex-row'>
            <motion.img
              src={Baloons2}
              alt="Baloons 2"
              style={{ flex: '0 1 45%', maxHeight: '220px', marginBottom: '10px' }}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className='m-0'
            />
            <motion.img
              src={Baloons}
              alt="Baloons"
              style={{ flex: '0 1 45%', maxHeight: '220px', marginBottom: '10px' }}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className='text-center sm:text-justify'
          >
            {t("cavT1P1")}
          </motion.p>

          <ul className='text-center sm:text-justify'>
            <motion.li
              className="mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {t("cavT1P2")}
            </motion.li>
            <motion.li
              className="mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {t("cavT1P3")}
            </motion.li>
            <motion.div
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              className='mt-12 mb-6 lg:flex-row flex-col gap-3 lg:gap-2'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.img
                className='w-11/12 sm:w-3/4 lg:w-1/3 mx-auto'
                src={Formula1}
                alt="cavitation formulas"
                loading="lazy"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              />
              <motion.img
                className='w-11/12 sm:w-3/4 lg:w-1/3  mx-auto'
                src={Formula2}
                alt="cavitation formulas"
                loading="lazy"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              />
              <motion.img
                className='w-11/12 sm:w-3/4 lg:w-1/3  mx-auto'
                src={Formula3}
                alt="cavitation formulas"
                loading="lazy"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              />
            </motion.div>
            <motion.div
              style={{
                clear: 'both',
                display: 'flex',
                justifyContent: 'center',
                backgroundImage: `url(${WaterDrops})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay',
                backgroundColor: 'rgba(173, 216, 230, 0.7)',
                width: '95%',
                margin: '0 auto',
              }}
              className='mt-12 mb-6 rounded-2xl lg:w-80 lg:mx-auto'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="p-2 sm:p-6 bg-slate-100 bg-opacity-65 rounded-2xl border-4 border-dashed border-blue-300">
                <p>
                  {t("cavT1P4")}
                </p>
              </div>
            </motion.div>
          </ul>
        </div>

        <motion.div
          className="h-1 bg-blue-900 mt-6 mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='text-center sm:text-justify'
        >
          <h2 className="text-2xl font-bold mb-4 text-center animate-fadeInSlow">
            {t("cavT2")}
          </h2>
          <p className="mb-4 animate-slideInUp md:text-justify text-center">
            {t("cavT2P1")}
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:gap-8">
            <div style={albumPhotoContainerStyle}>
              <img loading="lazy" src={Water15} alt="Water 1" className="max-w-sx md:w-md border rounded-md" />
            </div>
            <div style={albumPhotoContainerStyle} className="hidden md:block">
              <img loading="lazy" src={WaterExtra2} alt="Water 2" className="hidden md:block max-w-sx md:w-md border rounded-md" />
            </div>
          </div>
          <p className="text-center text-md italic">
            {t("cavT2P2")}
          </p>
        </motion.div>

        <motion.div
          className="h-1 bg-blue-900 mt-6 mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='text-center sm:text-justify'
        >
          <h2 className="text-2xl font-bold mb-4 text-center animate-fadeInSlow">
            {t("cavT3")}
          </h2>
          <p className="mb-4 animate-slideInUp md:text-justify text-center">
            {t("cavT3P1")}
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:gap-8">
            <div style={albumPhotoContainerStyle}>
              <img loading="lazy" src={Water17} alt="Water 1" className="max-w-sx md:w-md border rounded-md" />
            </div>
            <div style={albumPhotoContainerStyle} className="hidden md:block">
              <img loading="lazy" src={Water18} alt="Water 2" className="hidden md:block max-w-sx md:w-md border rounded-md" />
            </div>
          </div>
          <p className="text-center text-md italic">
            {t("cavT3P2")}
          </p>
        </motion.div>



        <motion.div
          className="h-1 bg-blue-900 mt-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        <div style={{ clear: 'right', width: '100%' }}>
          <br />
          <motion.h2
            className='w-full text-center text-2xl font-bold pb-6'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {t("cavT4")}
          </motion.h2>

          {/* First Application Section */}
          <motion.div
            className="flex flex-col lg:flex-row gap-3 lg:gap-0 items-center mb-3 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.p className="lg:pr-6 text-center sm:text-justify w-full lg:w-auto">
              <Trans i18nKey="cavT4P1">
                Кавитационната обработка има широко приложение в промишлеността, селското
                стопанство и медицината. В <strong>хранителната промишленост</strong> за хомогенизация и
                пастьоризация на млякото, консервация на хранителните емулсии, както и
                повишаване на срока на съхранение на продуктите.
              </Trans>
            </motion.p>
            <motion.img
              src={Food}
              alt="Agriculture"
              className="mb-3 lg:mb-0 lg:ml-6"
              style={{ maxHeight: '170px' }}
              whileHover={{ scale: 1.1 }}
              loading="lazy"
            />
          </motion.div>

          {/* Second Application Section */}
          <motion.div
            className="flex flex-col lg:flex-row gap-3 lg:gap-0 items-center mb-3 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.p className=" lg:pr-6 text-center sm:text-justify w-full lg:w-auto">
              <Trans i18nKey="cavT4P2">
                В <b>медицината</b> също открива приложение - използва се за бактериологично обеззаразяване, така също и за ефективното проникване на лекарствените вещества към центъра на поразяване. Подобрява кръвообращението и стимулира регенеративните процеси.
              </Trans>
            </motion.p>
            <motion.img
              src={Medicine}
              alt="Medicine"
              loading="lazy"
              className="mb-3 lg:mb-0 lg:ml-6"
              style={{ maxHeight: '170px' }}
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>

          {/* Third Application Section */}
          <motion.div
            className="flex flex-col lg:flex-row gap-3 lg:gap-0 items-center mb-3 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.p className="lg:pr-6 text-center sm:text-justify w-full lg:w-auto">
              <Trans i18nKey="cavT4P3">
                В <b>селското стопанство</b> при използването на кавитационно-обработената вода се наблюдава значително увеличаване на добивите, а също и намаляване на заболяваемостта на посевите, което е свързано с повишеното съдържание на кислорода във водата.
              </Trans>
            </motion.p>
            <motion.img
              src={Farming}
              alt="Farming"
              className="mb-3 lg:mb-0 lg:ml-6"
              loading="lazy"
              style={{ maxHeight: '170px' }}
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>

          {/* Fourth Application Section */}
          <motion.div
            className="flex flex-col lg:flex-row gap-3 lg:gap-0 items-center mb-3 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.p className="lg:pr-6 text-center sm:text-justify w-full lg:w-auto">
              <Trans i18nKey="cavT4P4">
                Не по-малка се оказва ролята на кавитацията в <b>нефтената промишленост</b> - при кавитационната обработка  се променя процентното съдържание на леките и тежките фракции при крекинг процеса в полза на леките.
              </Trans>
            </motion.p>
            <motion.img
              src={Oil}
              alt="Oil"
              loading="lazy"
              className="mb-3 lg:mb-0 lg:ml-6"
              style={{ maxHeight: '170px' }}
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>

          {/* Fifth Application Section */}
          <motion.div
            className="flex flex-col lg:flex-row gap-3 lg:gap-0 items-center mb-3 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.p className="lg:pr-6 text-center sm:text-justify w-full lg:w-auto">
              <Trans i18nKey="cavT4P5">
                <b>Приложението й в други области</b>: кавитационната технология се състои в изчистване и полиране на вътрешните повърхности на оборудванието, изчистване от замърсяване и накипи, производство на биогаз, както и за отопление на помещенията.
              </Trans>
            </motion.p>
            <motion.img
              src={Polishing}
              alt="Polishing"
              loading="lazy"
              className="mb-3 lg:mb-0 lg:ml-6"
              style={{ maxHeight: '170px' }}
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>

          {/* Divider */}
          <motion.div
            className="h-1 bg-blue-900 mt-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </div>



        <div style={{ clear: 'both' }}>
          <br />
          <motion.h2
            className='w-full text-center text-2xl font-bold pb-6'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {t("cavT5")}
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* First Column */}
            <motion.div
              className="text-center sm:text-justify flex items-start border-blue-900 border-dotted border-r-0 lg:border-r-2 pr-3 mb-6 lg:mb-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <motion.p>
                <Trans i18nKey="cavT5P1">
                  <b>1.</b> Обработка с хлор:
                  Този способ е най-разпространен, тъй като хлорът е относително евтин.
                  Недостатъци: Част от бактерите и яйцата на вирусите са устойчиви на ниска концентрация на хлориране. Освен това хлорирането на питейната вода
                  предизвиква изменение на генната основа и повишава токсичността на
                  човешкия организъм.
                </Trans>
              </motion.p>
            </motion.div>

            {/* Second Column */}
            <motion.div
              className="text-center sm:text-justify flex items-start border-blue-900 border-dotted border-r-0 lg:border-r-2 pr-3 mb-6 lg:mb-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <motion.p>
                <Trans i18nKey="cavT5P2">
                  <b>2.</b> Обработка с ултра-виолетови лъчи:
                  Този метод не използува химически агенти и е екологически чист.
                  Към недостатъците следва да се отбележи, че изисква висока прозрачност на обработваемата вода, отсъствие на водорасли, плесени и други микроорганизми.
                </Trans>
              </motion.p>
            </motion.div>

            {/* Third Column */}
            <motion.div
              className="text-center sm:text-justify flex items-start mb-6 lg:mb-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <motion.p>
                <Trans i18nKey="cavT5P3">
                  <b>3.</b> Обработката с използване на кавитационния ефект няма по-горе отбелязаните недостатъци; Тя е много по-енергоефективна и по-евтина.
                  Разходите на кавитационния способ в сравнение с другите способи
                  за изчистване на водите, са както следва:
                  способ за изчистване с УВ - 1,7 пъти по-малко,
                  способ с хлориране - 3,5 пъти по-малко,
                  озониране- 10 пъти по-малко.
                </Trans>
              </motion.p>
            </motion.div>
          </div>

          {/* Images Section (Below lg) */}
          <motion.div className="grid grid-cols-1 justify-center items-center mx-auto lg:hidden gap-4 mb-6">
            <motion.img
              src={Chlor}
              alt="Chlor"
              className="mb-3"
              style={{ maxWidth: '100%', height: 'auto' }} // Adjusted width to be responsive
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src={CavitationMethod}
              alt="Cavitation-Method"
              className="mb-3"
              style={{ maxWidth: '100%', height: 'auto' }} // Adjusted width to be responsive
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src={UV}
              alt="UV-Treatment"
              className="mb-3"
              style={{ maxWidth: '100%', height: 'auto' }} // Adjusted width to be responsive
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>

          {/* Images Section (lg and larger) */}
          <motion.div className="hidden lg:grid lg:grid-cols-3 gap-4 mt-2">
            <motion.img
              src={Chlor}
              alt="Chlor"
              className="mb-3 lg:mb-0"
              style={{ maxWidth: '95%', height: 'auto' }} // Adjusted width to be responsive
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src={CavitationMethod}
              alt="Cavitation-Method"
              className="mb-3 lg:mb-0"
              style={{ maxWidth: '95%', height: 'auto' }} // Adjusted width to be responsive
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src={UV}
              alt="UV-Treatment"
              className="mb-3 lg:mb-0"
              style={{ maxWidth: '95%', height: 'auto' }} // Adjusted width to be responsive
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>

          {/* Divider */}
          <motion.div
            className="h-1 bg-blue-900 mt-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </div>



        <div style={{ clear: 'both' }} className='mt-3'>
          <motion.h2
            className='w-full text-center text-2xl font-bold pb-3'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {t("cavT6")}
          </motion.h2>
          <div className='text-xl mb-2'><Trans i18nKey="cavT6P1">~ Степента на обеззаразяване се достига, както следва (<b>c кавитация</b>):</Trans></div>
          <table style={{ borderCollapse: 'collapse', border: '1px solid black', width: '100%' }}>
            <colgroup>
              <col style={{ width: '50%' }} />
              <col style={{ width: '50%' }} />
            </colgroup>
            <thead>
              <tr>
                <th style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>{t("cavT6A1")}</th>
                <th style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>{t("cavT6A2")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>{t("cavT6A3")}</td>
                <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>100.0 %</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>{t("cavT6A4")}</td>
                <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>99.97 %</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>{t("cavT6A5")}</td>
                <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>99.90 %</td>
              </tr>
            </tbody>
          </table>

          <div className='text-xl mb-2 mt-3'><Trans i18nKey="cavT6P2">~ Степента на обеззаразяване се достига, както следва (<b>без кавитация</b>):</Trans></div>
          <table style={{ borderCollapse: 'collapse', border: '1px solid black', width: '100%' }}>
            <colgroup>
              <col style={{ width: '50%' }} />
              <col style={{ width: '50%' }} />
            </colgroup>
            <thead>
              <tr>
                <th style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>{t("cavT6B1")}</th>
                <th style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>{t("cavT6B2")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>{t("cavT6B3")}</td>
                <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>97.80 %</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>{t("cavT6B4")}</td>
                <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>92.00 %</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>{t("cavT6B5")}</td>
                <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>46.60 %</td>
              </tr>
            </tbody>
          </table>
          <motion.div
            className="text-center sm:text-justify flex items-center mb-3 mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >

            <motion.p>
              {t("cavT6P3")}
            </motion.p>
          </motion.div>
          <motion.div
            className=" text-center sm:text-justify flex items-center mb-3 mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >

            <motion.p>
              {t("cavT6P4")}
            </motion.p>
          </motion.div>
          <motion.div
            className="h-1 bg-blue-900 mt-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </div>

        <motion.div
          style={{ clear: 'both', position: 'relative', textAlign: 'center' }}
          className='mt-12 mb-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.img
            className='w-full sm:w-4/5 md:w-3/5 mx-auto'
            src={ContactImage}
            alt="cavitation chain"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            style={{ display: 'block', margin: '0 auto' }}
          />
          <motion.div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '32px',
              letterSpacing: '2px',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              WebkitTextStroke: '1px blue',
              textStroke: '1px green',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p className='hidden sm:inline text-2xl md:text-3xl pb-3'>{t("cavT7P1")}</p>
            <p className='text-2xl md:text-3xl pb-3'>{t("cavT7P2")}</p>
          </motion.div>
        </motion.div>



      </motion.div>
    </motion.div>
  );
}
