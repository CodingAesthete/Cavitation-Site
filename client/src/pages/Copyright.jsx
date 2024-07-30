import React from "react";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n'; // Import i18n instance

export default function Copyright() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-lg w-11/12 sm:w-5/6 mx-auto rounded-lg px-4 sm:px-10 py-8 mt-6 mb-10 bg-blue-50 shadow-lg"
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className='w-full text-center text-2xl font-extrabold text-blue-900 pb-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {t("copT1")}
        </motion.h1>
        <div className="text-gray-700">
          <p className="mb-3">
            {t("copT2")} <a href="https://cavitation.bg" className="text-blue-600 hover:underline">cavitation.bg</a> {t("copT3")}
          </p>
          <p className="mb-3">
            {t("copT4")}
          </p>
          <ul className="list-disc list-inside mb-3">
            <li>{t("copT5")} <a href="https://cavitation.bg" className="text-blue-600 hover:underline">www.cavitation.bg</a>,</li>
            <li>{t("copT6")}</li>
            <li>{t("copT7")}</li>
            <li>{t("copT8")}</li>
          </ul>
          <p className="mb-3">
            {t("copT9")}
          </p>
          <p className="mb-3">
            {t("copT10")}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
