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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-lg w-11/12 sm:w-5/6 mx-auto rounded-md px-4 sm:px-10 py-6 mt-6 mb-6 bg-blue-50"
    >
      <div>
        <motion.h1
          className='w-full text-center text-3xl font-bold pb-6 pt-3 mb-2'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Свържете се с нас
        </motion.h1>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row gap-6 w-full">
            <div className="w-full">
              <motion.img
                src={Message}
                alt="Contact icon"
                className="lg:float-left lg:max-w-xs lg:mr-4 mb-4 lg:mb-0 w-full"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              />
              <motion.p
                className={`mb-3 ${screenSize === 'sm' ? 'text-center' : 'text-justify'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                С удоволствие ще отговорим на всички ваши въпроси и запитвания относно нашите услуги и продукти. Независимо дали искате да направите поръчка, да получите допълнителна информация или просто да споделите своите идеи и предложения, ние сме тук, за да ви помогнем.
              </motion.p>
              <motion.p
                className={`mb-3 flex items-start sm:items-center ${screenSize === 'sm' ? 'text-left' : 'text-justify'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <img
                  src={Telephone}
                  alt="Telephone icon"
                  className="w-6 h-6 mr-2"
                />
                <span className="block sm:inline">
                  <b>+359-88-661-2166</b>
                  <span className="hidden sm:inline"> - </span>
                  <br className="sm:hidden" />
                  <i>Георги Стоянов Мишков</i>
                </span>
              </motion.p>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start">
            <div className="w-full lg:w-7/12">
              <motion.p
                className={`mb-3 flex ${screenSize === 'sm' ? 'text-left' : 'text-justify'}`}
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
                className={`mb-3 flex ${screenSize === 'sm' ? 'text-left' : 'text-justify'}`}
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
                className={`mb-3 flex ${screenSize === 'sm' ? 'text-left' : 'text-justify'}`}
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
                className={`mb-3 flex ${screenSize === 'sm' ? 'text-left' : 'text-justify'}`}
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
                className={`mb-3 flex ${screenSize === 'sm' ? 'text-left' : 'text-justify'}`}
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
              className="lg:w-5/12 lg:max-h-full rounded-md mt-4 lg:mt-0 w-full"
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
