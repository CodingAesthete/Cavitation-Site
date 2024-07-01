import React, { useRef } from "react";
import { motion, useInView } from 'framer-motion';
import CavitationPool from '../assets/images/cavitation-pool.jpg';
import CavitationGlass from '../assets/images/cavitation-result.jpg';
import SubjectOfActivity from '../assets/images/SubjectOfActivity.jpg';
import CavitationRealImg from '../assets/images/cavitation-real.jpg';
import MAE from '../assets/images/mae-logo2.png';
import Lions from '../assets/images/lions-logo.png';

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

export default function Home() {
  const screenSize = useMediaQuery();

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-lg w-11/12 sm:w-5/6 mx-auto rounded-md px-4 sm:px-10 py-6 mt-6 pt-10 mb-10 bg-blue-50"
    >
      <div>
        <motion.h1
          className='w-full text-center text-2xl font-bold pb-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Система за бактериално почистване на води
        </motion.h1>
        <div className="lg:flex lg:items-start mb-3">
          <motion.img
            src={CavitationRealImg}
            alt="Cavitation Process"
            className='lg:float-left lg:mr-6 mb-4 lg:mb-0 w-full md:w-auto max-w-[340px] mx-auto lg:mx-0'
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
          <div className="lg:ml-6">
            <motion.p
              className={`mb-3 text-center sm:text-justify`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Фирма <b className='text-lg'>Vortex Shipping</b> - гр. Варна предлага комплексна система за бактериално почистване на басейни, аквариуми и други както затворени, така и отворени водни пространства. Защитена е с патент <b>№ 5767</b> от 26.03.2024.
            </motion.p>
            <motion.p
              className={`mb-3 text-center sm:text-justify`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Смисълът за работата на системата за бактериологично очистване на води при
              затворен цикъл се състои в това, че водата от басейна преминава през система за бактериално очистване и отново се влива в общия обем на водното пространтво. Кавитационната обработка на течността довежда до нейната активация, изменя физико-химическите свойства и спомага за интензификацията на физико-технологическите процеси.
            </motion.p>
          </div>
        </div>
        <div className="lg:flex lg:items-start lg:flex-row-reverse">
          <motion.img
            className='pt-2 lg:float-right lg:ml-6 mb-4 lg:mb-0 w-full lg:w-auto max-w-[265px] xl:max-w-[340px] mx-auto lg:mx-0'
            src={CavitationGlass}
            alt="Cavitation Example"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          />
          <div className="lg:mr-6">
            <motion.p
              className={`mb-3 text-center sm:text-justify`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              След кавитационната обработка, чистата питейна вода става "мека" и "лечебна" поради произхождащите в нея структурни изменения.
              Водата е обеззаразена и с качества недопускащи развитието на болествотворни
              бактерии и микроорганизми.
            </motion.p>
            <motion.p
              className={`mb-3 text-center sm:text-justify`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Преимуществата на тази система от затворен тип се явява отсъствието на всякакви химически вещества, както на основата на хлора, така и всякакъв друг вид
              химически продукти.
              Така обработената вода влияе изключително здравословно върху кожата на човека и повишава общия енергиен баланс.
            </motion.p>
          </div>
        </div>
      </div>

      <motion.div
        className="h-1 bg-blue-900 mt-6 home-upper:mt-12 home-container:mt-6"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      <div className="mt-6 flex flex-col home-container:flex-row items-center">
        <img
          src={SubjectOfActivity}
          alt="Subject of Activity"
          className="mr-4"
          style={{ maxWidth: '300px' }}
        />
        <motion.div>
          <motion.h1
            className='w-full text-center text-2xl font-semibold pb-6 text-blue-900'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <b>Предмет на дейност</b>
          </motion.h1>
          <p className={`text-lg leading-6 italic ${screenSize === 'sm' ? 'text-left' : 'text-justify'}`}>
            - търговски сделки пряко и непряко свързани с морско, речно и каботажно плаване;<br /><br />
            - маркетинг, внос и износ, лизингова дейност,<br /><br />
            - търговско представителство и посредничество,<br /><br />
            - складови сделки,<br /><br />
            - сделки с интелектуална собственост, покупка на стоки или други вещи <br /><br />
            - продажба на стоки от собствено производство, комисионни, спедиционни и превозни сделки, менителници, записи на заповед и чекове,<br /><br />
            - лицензионни сделки, стоков контрол, покупка, проектиране, строителство,<br /><br />
            - ремонт или обзавеждане на недвижими имоти с цел продажба или отдаване под наем, земеделие и животновъдство;<br /><br />
            - еко земеделие, проектиране, производство и търговия с иновативни производствени екосистеми системи;<br /><br />
            - внедряване в производствени екосистеми за пречистване на бункеровани танкерни води, пречиствателни корабни и наземни станции за пречистване на морски и отпадъчни води.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="h-1 bg-blue-900 mt-6"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      <div className="mt-6" ref={sectionRef}>
        <motion.h1
          className='w-full text-center text-2xl font-semibold pb-6 text-violet-900'
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2 }}
        >
          <b>Нашите Партньори</b>
        </motion.h1>
        <div className="flex flex-row justify-around items-start flex-wrap">
          <motion.div
            className="mx-0 sm:mx-4 mb-4 max-w-xs sm:max-w-md flex flex-col justify-center items-center"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              src={Lions}
              alt="Lions Logo"
              className="max-w-80"
              whileHover={{ rotate: 0 }}
              animate={isInView ? {
                rotate: [0, -3, 3, 0],
                scale: [1, 1.1, 1]
              } : {}}
              transition={isInView ? {
                repeat: 1,
                duration: 1.2,
                ease: "easeInOut"
              } : {}}
            />
            <p className="text-center mt-3">Lions Clubs International е призната по целия свят като символ на коректност и обслужване. В рамките на бранда се съдържат няколко  лога и емблеми, които представят различните инициативи.</p>
          </motion.div>
          <motion.div
            className="mx-0 sm:mx-4 mb-4 max-w-xs sm:max-w-md flex flex-col justify-center items-center"

            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              src={MAE}
              alt="MAE Logo"
              className="max-w-80"
              whileHover={{ rotate: 0 }}
              animate={isInView ? {
                rotate: [0, -3, 3, 0],
                scale: [1, 1.1, 1]
              } : {}}
              transition={isInView ? {
                repeat: 1,
                duration: 1.2,
                ease: "easeInOut"
              } : {}}
            />
            <p className="text-center">Международната академия по екология се фокусира върху решаването на екологични проблеми в медицината и фармакологията, организирайки научни конференции.</p>
          </motion.div>
        </div>
      </div>

    </motion.div>
  );
}
