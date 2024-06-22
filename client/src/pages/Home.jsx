import React from 'react';
import { motion } from 'framer-motion';
import CavitationPool from '../assets/images/cavitation-pool.jpg';
import CavitationGlass from '../assets/images/cavitation-result.jpg';
import SubjectOfActivity from '../assets/images/SubjectOfActivity.jpg';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-lg text-justify w-5/6 mx-auto rounded-md px-10 py-6 mt-6 mb-10 bg-blue-50"
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
        <div>
          <motion.img
            src={CavitationPool}
            alt="Cavitation Process"
            style={{ float: 'left', marginRight: '24px', maxWidth: '340px' }}
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
          <motion.p
            className='mb-3'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Фирма <b className='text-lg'>Vortex Shipping</b> - гр. Варна предлага комплексна система за бактериално почистване на басейни, аквариуми и други както затворени, така и отворени водни пространства. Защитена е с патент <b>№ 5767</b> от 26.03.2024.
          </motion.p>
          <motion.p
            className='mb-3'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Смисълът за работата на системата за бактериологично очистване на води при
            затворен цикъл се състои в това, че водата от басейна преминава през система за бактериално очистване и отново се влива в общия обем на водното пространтво. Кавитационната обработка на течността довежда до нейната активация, изменя физико-химическите свойства и спомага за интензификацията на физико-технологическите процеси.
          </motion.p>
          <motion.img
            className='pt-2'
            src={CavitationGlass}
            alt="Cavitation Example"
            style={{ float: 'right', marginLeft: '24px', maxWidth: '265px' }}
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          />
          <motion.p
            className='mb-3'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            След кавитационната обработка, чистата питейна вода става "мека" и "лечебна" поради произхождащите в нея структурни изменения.
            Водата е обеззаразена и с качества недопускащи развитието на болествотворни
            бактерии и микроорганизми.
          </motion.p>
          <motion.p
            className='mb-3'
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

      <motion.div
        className="h-1 bg-blue-900 mt-6"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      <div className="mt-6 flex items-center">
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
          <p className="text-lg leading-6 italic">
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
    </motion.div>
  );
}
