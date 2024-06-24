import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import CavitationVideo from '../assets/images/cavitation-video.mp4';

export default function Goals() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false); // State for showing overlay

  const questionsAndAnswers = [
    {
      question: "Какво бе вдъхновението, стоящо зад създаването Вортекс Шипинг и как се е развила компанията от нейното основаване?",
      answer: "🌟 Вортекс Шипинг бе създадена с мисията да предоставя висококачествени услуги. От създаването си компанията се е разраснала като потенциал и възможности благодарение на упорита работа, иновации и удовлетвореността на нашите клиенти."
    },
    {
      question: "Как кавитацията може да се използва за подобряване на безопасността на храните?",
      answer: "🛡️ Кавитацията може да се използва за дезинфекция на хранителни продукти и оборудване чрез ултразвуково разрушаване на бактерии и вируси. Тя също така може да помогне за подобряване на текстурата и вкуса на храните чрез ултразвукова обработка."
    },
    {
      question: "Какви са перспективите за използване на кавитацията в космическите технологии?",
      answer: "🌐 Кавитацията може да бъде използвана за разработване на нови методи за управление на топлината и горивото в космическите апарати. Тя също така може да помогне за подобряване на ефективността на системите за пречистване на вода и въздух в космическите мисии."
    },
    {
      question: "Как кавитацията може да бъде използвана за контрол на температурата в индустриални процеси?",
      answer: "🌡️ Кавитацията може да бъде използвана за контрол на температурата чрез ултразвуково охлаждане и нагряване на течности. Тя създава микро-турбуленции и подобрява топлообмена, което повишава ефективността на охлаждащите и нагревателните системи."
    },
    {
      question: "Кои са най-големите предизвикателства, пред които сте изправени в корабоплавателната индустрия днес, и как планирате да ги преодолеете?",
      answer: "🔍 Най-големите предизвикателства включват регулаторните изисквания, икономическите колебания и екологичните стандарти. Планираме да ги преодолеем чрез иновации, устойчиви практики и стратегически партньорства."
    },
    {
      question: "Как кавитацията може да подобри ефективността на морските съдове?",
      answer: "🚢 Кавитацията може да се използва за създаване на кавитационни повърхности на корабните витла, което намалява съпротивлението и подобрява ефективността на плаването. Тя също така може да помогне за почистване на корпусите на корабите от биофауна и отлагания."
    },
    {
      question: "Как кавитацията може да бъде използвана за опазване на околната среда?",
      answer: "🌍 Кавитацията може да се използва за разграждане на замърсители в отпадъчните води и за обработка на индустриални отпадъци. Тя може също така да помогне за разрушаване на токсични вещества и подобряване на биодеградацията, което намалява вредното въздействие върху околната среда."
    },
    {
      question: " Как кавитацията допринася за подобряване на ефективността на горивните системи?",
      answer: "⚡ Кавитацията може да се използва за емулгиране на горивото, като го разбива на по-малки капчици и по този начин подобрява горенето и повишава ефективността на горивната система. Това води до по-икономично използване на горивото и намаляване на вредните емисии."
    },
    {
      question: "Какви са основните причини за образуването на кавитация в течности?",
      answer: "🌊 Основните причини за кавитация включват високи скорости на течността, които водят до падане на налягането, бързи промени в налягането и повишаване на температурата на течността, което намалява нейното парно налягане."
    },
    {
      question: "Какво представлява явлението кавитация и как се образуват кавитационни мехурчета?",
      answer: "💧 Кавитацията е явление, при което в течност се образуват и колапсират мехурчета с пара или газ, когато локалното налягане падне под парното налягане на течността. Тези мехурчета се образуват в зони с ниско налягане и колапсират в зони с високо налягане."
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
      <h1 className='text-2xl font-bold mb-4 text-center'>Допълнителни факти за кавитацията</h1>
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

        {/* Animated overlay text */}
        <motion.div
          initial="hidden"
          animate={showOverlay ? "visible" : "hidden"}
          variants={overlayVariants}
          className="flex justify-center items-center absolute bottom-1/4 sm:bottom-1/2 md:top-1/2 md:right-1/4 transform -translate-x-1/2 -translate-y-1/2 text-green-50 font-bold p-4"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: '8px' }}
        >
          <motion.p className=" text-lg sm:text-xl font-semibold text-center">
            Кавитацията е ключ към развитието и просперитета.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}
