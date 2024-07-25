import React from "react";
import { motion } from 'framer-motion';

export default function Copyright() {
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
          Копирайт
        </motion.h1>
        <div className="text-gray-700">
          <p className="mb-3">
            Материалите публикувани на <a href="https://cavitation.bg" className="text-blue-600 hover:underline">cavitation.bg</a> са под закрила на Закона за авторското право.
          </p>
          <p className="mb-3">
            Допустимо е използването на текстови, фото и видео материали от този уебсайт, при условие, че:
          </p>
          <ul className="list-disc list-inside mb-3">
            <li>Всяко използване на материалите трябва да включва ясно и видимо посочване на източника с активна препратка към <a href="https://cavitation.bg" className="text-blue-600 hover:underline">www.cavitation.bg</a>,</li>
            <li>Материалите не трябва да бъдат променяни, адаптирани или манипулирани по начин, който би могъл да наруши авторските права или да създаде подвеждаща информация,</li>
            <li>Използването на материалите е разрешено само за лични, образователни или некомерсиални цели, освен ако изрично не е посочено друго в съответния материал.</li>
            <li>Не е разрешено да се използват материали от уебсайта за целите на създаване на конкурентни продукти или услуги, или за публично представяне, разпространение или продажба без изричното разрешение на правопритежателя.</li>
          </ul>
          <p className="mb-3">
            Всяко неразрешено използване, възпроизвеждане, разпространение, показване или публично представяне на материалите, публикувани на този уебсайт, е забранено и може да доведе до правни последствия, включително, но не само, искове за нарушаване на авторски права.
          </p>
          <p className="mb-3">
            Запазваме си правото да променяме тези правила по всяко време, като всички промени ще бъдат публикувани на този уебсайт. Препоръчваме ви редовно да се запознавате с актуалната версия на правилата.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
