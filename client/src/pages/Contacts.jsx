import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n'; // Import i18n instance
import emailjs from "@emailjs/browser";

// Import images
import Handshake from '../assets/images/handshake.avif';
import Email from '../assets/images/Email.jpg';
import Telephone from '../assets/images/telephone.png';
import AddressIcon from '../assets/images/AddressIcon.jpg';
import Check from '../assets/images/Check.png';
import SuccessIcon from '../assets/images/SuccessIcon.png';
import ReputationIcon from '../assets/images/Reputation.webp';
import Vision from '../assets/images/Vision2.jpg';
import MapImage from '../assets/images/Map.jpg';

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

export default function Contacts() {
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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i65gcnr",
        "template_9qyf2qf",
        form.current,
        "riEk3h4Locf_7PiQ1"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
            {t("conT1")}
          </motion.h1>
          <div className="flex flex-col justify-center gap-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="w-full lg:w-5/12">
                <motion.img
                  src={Handshake}
                  style={{ border: '8px solid #003153', padding: "1px" }}
                  alt="Contact icon"
                  className="w-full lg:max-w-lg lg:mr-4 mb-4 lg:mb-0 rounded-lg border-4 border-blue-800"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                />
              </div>
              <div className="flex items-center w-full">
                <div>
                  <motion.p
                    className="mb-4 md:text-justify text-center text-gray-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {t("conT1P1")}
                  </motion.p>
                  <motion.p
                    className={`mb-3 flex items-start md:text-justify text-center text-gray-700`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <img
                      src={Email}
                      alt="Email icon"
                      className="w-6 h-6 mr-2"
                    />
                    <span className="block sm:inline">
                      <b>cavitationsystem@gmail.com</b>
                    </span>
                  </motion.p>
                  <motion.p
                    className={`mb-3 flex items-start md:text-justify text-center text-gray-700`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <img
                      src={Telephone}
                      alt="Telephone icon"
                      className="w-6 h-6 mr-2"
                    />
                    <b>+359-88-661-2166</b>&nbsp;-&nbsp;<i>{t("conT1P2")}</i>
                  </motion.p>
                </div>
              </div>
            </div>

            <div className=" lg:text-lg flex flex-col-reverse lg:flex-row justify-between items-center lg:items-center">
              <div className="w-full lg:w-7/12">
                <motion.p
                  className={`mb-3 flex items-start md:text-justify text-center text-gray-700`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <img
                    src={AddressIcon}
                    alt="Address icon"
                    className="w-6 h-6 mr-2"
                  />
                  {t("conT1P3")}
                </motion.p>
                <motion.p
                  className={`mb-3 flex items-start md:text-justify text-center text-gray-700`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <img
                    src={Check}
                    alt="Check icon"
                    className="w-6 h-6 mr-2"
                  />
                  {t("conT1P4")}
                </motion.p>
                <motion.p
                  className={`mb-3 flex items-start md:text-justify text-center text-gray-700`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <img
                    src={SuccessIcon}
                    alt="Success icon"
                    className="w-6 h-6 mr-2"
                  />
                  {t("conT1P5")}
                </motion.p>
                <motion.p
                  className={`mb-3 flex items-start md:text-justify text-center text-gray-700`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <img
                    src={ReputationIcon}
                    alt="Reputation icon"
                    className="w-6 h-6 mr-2"
                  />
                  {t("conT1P6")}
                </motion.p>
                <motion.p
                  className={`mb-3 flex items-start md:text-justify text-center text-gray-700`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <img
                    src={Vision}
                    alt="Vision icon"
                    className="w-6 h-6 mr-2"
                  />
                  {t("conT1P7")}
                </motion.p>
              </div>
              <motion.img
                src={MapImage}
                style={{ border: '8px solid #003153', padding: "1px" }}
                alt="Map"
                className="lg:w-5/12 lg:max-h-full rounded-md mt-4 lg:mt-0 w-full border-4 border-blue-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              />
            </div>
          </div>
        </div>
        <div className="w-full max-w-full mx-auto mt-6">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
            <label className="block text-gray-700 font-medium mb-2">{t("conT2")}</label>
            <input type="text" name="user_name" className="w-full p-2 border border-gray-300 rounded-md focus:border-green-700" />
            <label className="block text-gray-700 font-medium mb-2">{t("conT3")}</label>
            <input type="email" name="user_email" className="w-full p-2 border border-gray-300 rounded-md focus:border-green-700" />
            <label className="block text-gray-700 font-medium mb-2">{t("conT4")}</label>
            <textarea name="message" className="w-full p-2 border border-gray-300 rounded-md focus:border-green-700 min-h-[100px]" />
            <input type="submit" value={t("conT5")} className="w-full py-2 px-4 bg-blue-700 text-white rounded-md cursor-pointer hover:bg-blue-900" />
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
}
