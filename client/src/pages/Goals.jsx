import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import CavitationVideo from '../assets/images/cavitation-video.mp4';

export default function Goals() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false); // State for showing overlay

  const questionsAndAnswers = [
    {
      question: "Какво ви вдъхнови да създадете Вортекс Шипинг и как се е развила компанията от нейното основаване през 2012 година?",
      answer: "🌟 Вортекс Шипинг бе създадена с мисията да предоставя висококачествени морски транспортни услуги. От създаването си през 2012 година, компанията се е разраснала благодарение на упорита работа, иновации и удовлетвореността на нашите клиенти."
    },
    {
      question: "Можете ли да ни разкажете по-подробно за специфичните търговски сделки, свързани с морско, речно и каботажно плаване, които Вортекс Шипинг предлага?",
      answer: "🚢 Нашата компания предлага широк спектър от търговски сделки, включително превоз на товари по море и реки, както и каботажно плаване. Ние сме специализирани в маркетинг, внос и износ, лизингова дейност и търговско представителство."
    },
    {
      question: "Кои са вашите основни клиенти и на кои пазари основно предоставяте вашите транспортни услуги?",
      answer: "🌍 Нашите основни клиенти са големи търговски компании и производители, които се нуждаят от надежден и ефективен транспорт на своите стоки. Ние работим основно на пазарите в Европа и Азия."
    },
    {
      question: "Как Вортекс Шипинг интегрира съвременни технологии в своите операции за подобряване на ефективността и предоставянето на услуги?",
      answer: "💡 Ние използваме модерни технологии като GPS проследяване, автоматизация на логистичните процеси и софтуер за управление на флотата, за да гарантираме висока ефективност и точност на услугите ни."
    },
    {
      question: "Кои са най-големите предизвикателства, пред които сте изправени в корабоплавателната индустрия днес, и как планирате да ги преодолеете?",
      answer: "🔍 Най-големите предизвикателства включват регулаторните изисквания, икономическите колебания и екологичните стандарти. Планираме да ги преодолеем чрез иновации, устойчиви практики и стратегически партньорства."
    },
    {
      question: "Можете ли да ни предоставите повече подробности за вашата регистрация по ДДС и какво означава това за вашите бизнес операции?",
      answer: "📜 Нашата регистрация по ДДС ни позволява да оперираме легално и да предоставяме услугите си с високо ниво на професионализъм и доверие. Тя също така улеснява международните търговски операции."
    },
    {
      question: "Какви са вашите дългосрочни цели за Вортекс Шипинг и къде виждате компанията след 5-10 години?",
      answer: "🚀 Дългосрочните ни цели включват разширяване на пазарите, увеличаване на флотата и интегриране на нови технологии. Виждаме компанията като лидер в морския транспорт с глобално присъствие."
    },
    {
      question: "Как Вортекс Шипинг адресира екологичните проблеми и има ли инициативи за устойчиво развитие?",
      answer: "🌱 Ние сме ангажирани с опазването на околната среда чрез използване на енергийно ефективни кораби, минимизиране на отпадъците и участие в инициативи за устойчиво развитие."
    },
    {
      question: "Можете ли да ни разкажете повече за екипа зад Вортекс Шипинг, особено за вашата роля и приноса ви към успеха на компанията?",
      answer: "👥 Екипът ни се състои от опитни професионалисти с дългогодишен опит в индустрията. Моето участие като основател и управител включва стратегическо планиране, управление на проекти и поддържане на високите стандарти на компанията."
    },
    {
      question: "Как поддържате силни връзки с вашите клиенти и как обработвате обратната връзка и предложенията за подобряване на услугите ви?",
      answer: "💬 Поддържаме силни връзки чрез постоянна комуникация, персонализирани услуги и бърза реакция на нуждите и обратната връзка на клиентите. Това ни помага да подобряваме непрекъснато услугите си."
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
      <h1 className='text-2xl font-bold mb-4 text-center'>Често задавани въпроси</h1>
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
