import React from 'react';
import { motion } from 'framer-motion';
import Message from '../assets/images/message.webp';
import Telephone from '../assets/images/telephone.png';
import MapImage from '../assets/images/Map.jpg';
import SubjectOfActivity from '../assets/images/SubjectOfActivity.jpg';

export default function LearnMore() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-lg text-justify w-5/6 mx-auto rounded-md px-10 py-6 mt-6 mb-10 bg-blue-50"
    >
      <div>
        <motion.h1
          className='w-full text-center text-3xl font-bold pb-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Свържете се с нас
        </motion.h1>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-3/5">
            <motion.img
              src={Message}
              alt="Contact icon"
              style={{ float: 'left', maxWidth: '150px', marginRight: '6px' }}
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
              С удоволствие ще отговорим на всички ваши въпроси и запитвания относно нашите услуги и продукти. Независимо дали искате да направите поръчка, да получите допълнителна информация или просто да споделите своите идеи и предложения, ние сме тук, за да ви помогнем.
            </motion.p>
            <motion.p
              className='mb-3 flex items-center'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <img
                src={Telephone}
                alt="Telephone icon"
                style={{ width: '24px', height: '24px', marginRight: '8px' }}
              />
              <b>+359-88-661-2166</b>&nbsp;-&nbsp;<i>Георги Стоянов Мишков</i>
            </motion.p>
            <motion.p
              className='mb-3 flex items-center'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <img
                src={Telephone}
                alt="Telephone icon"
                style={{ width: '24px', height: '24px', marginRight: '8px' }}
              />
              гр.Варна, р-н Приморски, Ген.Радко Димитриев 13, вх.Б, ет.1
            </motion.p>
          </div>
          <div className="flex-1 md:w-2/5">
            <motion.img
              src={MapImage}
              alt="Map"
              style={{ width: '100%', maxHeight: 'auto', borderRadius: '8px' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            />
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center">
        <img
          src={SubjectOfActivity}
          alt="Subject of Activity"
          className="mr-4"
          style={{ maxWidth: '300px' }}
        />
        <motion.div>
          <motion.h1
            className='w-full text-center text-xl font-semibold pb-6 text-blue-900'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <i>Предмет на дейност</i>
          </motion.h1>
          <p className="text-lg leading-8 italic">
            - търговски сделки пряко и непряко свързани с морско, речно и каботажно плаване;<br />
            - маркетинг, внос и износ, лизингова дейност,<br />
            - търговско представителство и посредничество,<br />
            - складови сделки,<br />
            - сделки с интелектуална собственост, покупка на стоки или други вещи <br />
            - продажба на стоки от собствено производство, комисионни, спедиционни и превозни сделки, менителници, записи на заповед и чекове,<br />
            - лицензионни сделки, стоков контрол, покупка, проектиране, строителство,<br />
            - ремонт или обзавеждане на недвижими имоти с цел продажба или отдаване под наем, земеделие и животновъдство;<br />
            - еко земеделие, проектиране, производство и търговия с иновативни производствени екосистеми системи;<br />
            - внедряване в производствени екосистеми за пречистване на бункеровани танкерни води, пречиствателни корабни и наземни станции за пречистване на морски и отпадъчни води.
          </p>

        </motion.div>
      </div>
    </motion.div>
  );
}
