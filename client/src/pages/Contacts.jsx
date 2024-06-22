import React from 'react';
import { motion } from 'framer-motion';
import Message from '../assets/images/message.webp';
import Telephone from '../assets/images/telephone.png';
import MapImage from '../assets/images/Map.jpg';
import AddressIcon from '../assets/images/AddressIcon.jpg';
import Check from '../assets/images/Check.png';
import SuccessIcon from '../assets/images/SuccessIcon.png';
import ReputationIcon from '../assets/images/Reputation.webp';
import Vision from '../assets/images/Vision2.jpg';

export default function LearnMore() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-lg text-justify w-5/6 mx-auto rounded-md px-10 py-6 mt-6 mb-6 bg-blue-50"
    >
      <div>
        <motion.h1
          className='w-full text-center text-3xl font-bold pb-6 mb-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Свържете се с нас
        </motion.h1>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="w-full">
              <motion.img
                src={Message}
                alt="Contact icon"
                className="float-left max-w-xs mr-4"
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
                  className="w-6 h-6 mr-2"
                />
                <b>+359-88-661-2166</b>&nbsp;-&nbsp;<i>Георги Стоянов Мишков</i>
              </motion.p>

            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <motion.p
                className='mb-3 flex'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <img
                  src={AddressIcon}
                  alt="Address icon"
                  className="w-6 h-6 mr-2"
                />
                гр.Варна, р-н Приморски, Ген.Радко Димитриев 13, вх.Б, ет.1
              </motion.p>
              <motion.p
                className='mb-3 flex'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <img
                  src={Check}
                  alt="Check icon"
                  className="w-6 h-6 mr-2"
                />
                Статусът ни е активен и сме в процес на надграждане
              </motion.p>
              <motion.p
                className='mb-3 flex'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <img
                  src={SuccessIcon}
                  alt="Success icon"
                  className="w-6 h-6 mr-2"
                />
                Дългогодишен опит и успешни проекти
              </motion.p>
              <motion.p
                className='mb-3 flex'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <img
                  src={ReputationIcon}
                  alt="Reputation icon"
                  className="w-6 h-6 mr-2"
                />
                Доволни клиенти и безупречна репутация
              </motion.p>
              <motion.p
                className='mb-3 flex'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <img
                  src={Vision}
                  alt="Vision icon"
                  className="w-6 h-6 mr-2"
                />
                Амбициозни цели и дългосрочна визия
              </motion.p>
            </div>
            <motion.img
              src={MapImage}
              alt="Map"
              className="w-5/12 max-h-full rounded-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            />

          </div>
        </div>
      </div>
    </motion.div >
  );
}
