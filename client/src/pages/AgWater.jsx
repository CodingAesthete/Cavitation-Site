import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from 'framer-motion';
import BacteriaColi from '../assets/images/AgWater.jpg';
import BottleAg from '../assets/images/bottleAg.jpg';
import AgUsage from '../assets/images/AgWoman.jpg';
import BacteriaAg from '../assets/images/bacteriaAg.jpg';
import AgModel from '../assets/images/AgModel.jpg';
import OldTimes from '../assets/images/OldTimes.jpg';
import AgGlass from '../assets/images/AgGlass.jpg';
import MoonWater from '../assets/images/MoonLight.jpg';
import { useTranslation, Trans } from 'react-i18next';
import i18n from '../i18n'; // Import i18n instance

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

export default function AgWater() {
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-lg w-11/12 sm:w-5/6 mx-auto rounded-lg px-4 sm:px-10 py-8 mt-6 mb-10 bg-blue-50 shadow-lg"
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isAnimating ? 0 : 1, scale: isAnimating ? 0.95 : 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className='w-full text-center text-2xl font-extrabold text-blue-900 pb-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Сребърна вода - същност и ефект
        </motion.h1>
        <div className="lg:flex lg:items-start lg:flex-row-reverse mb-6">
          <motion.img
            src={BacteriaColi}
            style={{ border: '8px solid #003153', padding: "1px" }}
            alt="Cavitation Process"
            className='lg:float-right lg:ml-6 mb-4 lg:mb-0 w-full lg:w-auto max-w-[365px] xl:max-w-[340px] mx-auto lg:mx-0 rounded-md shadow-md'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
          <div className="lg:mr-6 my-auto">
            <motion.p
              className={`mb-3 text-center sm:text-justify text-gray-700`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Д-р Хари Марграф, биохимик и първи изследовател на среброто, винаги е заявявал; „Благодарение на
              резултатите от съвременните изследвания среброто може да се счита за чудо на
              медицината. Антимикробният ефект на среброто действа срещу много
              микроорганизми: Escherichia coli, Salmonella cholera-suis, Staphylococcus pneumoniae,
              Staphylococcus epidermidis, Klebsiella pneumoniae, Pseudomonas aeruginosa,
              Enterococcus faecalis.
            </motion.p>
            <motion.p
              className={`mb-3 text-center sm:text-justify text-gray-700`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Сребърните препарати имат антивирусен ефект и унищожават грипните вируси от
              щамове А1 и В, Коксаки вирусите и много други. Това им позволява да се използват
              като терапевтични средства при лечението на много бактериални инфекции.
              Сребърната вода е вода, която е наситена с разтворени сребърни йони.
              Има антимикробни и антисептични свойства.
            </motion.p>
          </div>
        </div>
        <div className="lg:flex lg:items-start mb-6">
          <motion.img
            src={BottleAg}
            style={{ border: '8px solid #003153', padding: "1px" }}
            alt="Cavitation Process"
            className='lg:float-left lg:mr-6 mb-4 lg:mb-0 w-full md:w-auto max-w-[340px] xl:max-w-[340px] mx-auto lg:mx-0 rounded-md shadow-md'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
          <div className="lg:ml-6 my-auto">
            <motion.p
              className={`mb-3 text-center sm:text-justify text-gray-700`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Водата не съдържа вредни примеси: оцветители, консерванти, окислители.
              Водата със сребърни йони е естествен антибиотик. Сребърните йони, прониквайки в
              тялото, бързо и лесно проникват в мембраните на бактериите и спират тяхната
              жизнена дейност.

            </motion.p>
            <motion.p
              className={`mb-3 text-center sm:text-justify text-gray-700`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Сребърната вода е враг не само за бактериите, но и за вирусите, които не могат да
              се адаптират (приспособят) за защита от йони, какъвто е случаят с антибиотиците и
              антивирусните лекарства.
              Колоидната сребърна вода съдържа електрически заредени микрочастици сребро
              (от 0,01 до 0,001 микрона в диаметър).
              Следователно колоидните сребърни
              частици представляват своеобразен „генератор” на сребърни йони.
            </motion.p>
          </div>
        </div>

        <motion.div
          className="h-1 bg-blue-900 mt-8 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        <div className="mt-8 flex flex-col lg:flex-row items-center">
          {/* <img
            src={SpeechCav}
            loading="lazy"
            alt="Subject of Activity"
            className="mr-4 rounded-md shadow-md mb-4 lg:mb-0"
            style={{ border: '8px solid #003153', padding: "1px", maxWidth: '300px' }}
          /> */}
          <motion.div>
            <motion.h1
              className="w-full text-center text-2xl font-extrabold text-blue-900 pb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Как хората използват сребърната вода?
            </motion.h1>
            <p
              className={`mb-3 text-center sm:text-justify text-gray-700`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Хората използват сребърна вода за лечение повече от 2000 години. В продължение на много години сребърните препарати намират широко приложение при лечението на хора и животни:<br />
              • като естествен антимикробен агент за изплакване на носната кухина (при респираторни инфекции).<br />
              • като естествено антимикробно средство за гаргара (при инфекции и възпаления).<br />
              • като естествено антимикробно средство за венците (при пародонтоза, стоматит).
            </p>
            <div className="flex flex-col items-center justify-center gap-4 mb-4 sm:flex-row sm:gap-6 mt-4">
              <motion.img
                src={AgUsage}
                style={{ border: '8px solid #003153', padding: '1px' }}
                loading="lazy"
                alt="Event 1"
                className="w-full md:max-w-[80%] lg:max-w-[80%] rounded-md shadow-md mx-auto mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              />
            </div>
          </motion.div>

        </div>

        <motion.div
          className="h-1 bg-blue-900 mt-8 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        <div className="mt-8 flex flex-col lg:flex-row items-center">
          <motion.div>
            <motion.h1
              className="w-full text-center text-2xl font-extrabold text-blue-900 pb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Как сребърната вода унищожава вредните бактерии?
            </motion.h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-4 mt-4">
              {/* First image - hidden on small screens */}
              <motion.img
                src={BacteriaAg}
                style={{ border: '8px solid #003153', padding: '1px' }}
                loading="lazy"
                alt="Event 1"
                className="hidden medium3:block max-w-full sm:max-w-[40%] md:max-w-[42%] medium:max-w-[30%] lg:max-w-[25%] medium2:max-w-[22%] medium3:max-w-[21%] xl:max-w-[24%] rounded-md shadow-md mx-auto mt-2 flex-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              />

              {/* Text container - takes more space */}
              <div className="flex-3">
                <motion.p
                  className={`mb-3 text-center sm:text-justify text-gray-700`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Антимикробният ефект на среброто не зависи от вида на инфекцията (като антибиотиците), а от клетъчната структура на микроба. Всяка клетка без химически устойчива стена е податлива на сребърна атака. Бактерицидните и антивирусните свойства на колоидното сребро са много по-високи от тези на предишните поколения сребърни препарати (на основата на сребърни соли).
                </motion.p>

                <motion.p
                  className={`mb-3 text-center sm:text-justify text-gray-700`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Бактериите и вирусите умират. Среброто има голямо предимство в сравнение със синтетичните антибиотици. В същото време спектърът на действие на колоидното сребро (сребърна вода) се простира до 650 вида бактерии (за сравнение: спектърът на действие на всеки антибиотик е 510 вида бактерии) и не оказва вредно въздействие върху полезните микроорганизми. и чревната микрофлора.
                </motion.p>

                <motion.p
                  className={`mb-3 text-center sm:text-justify text-gray-700`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Благоприятната микрофлора на вътрешните органи остава непроменена. Следователно, човек, който го използва, не е изложен на риск от дисбактериоза. С други думи, сребърната вода ще помогне да се избегне ситуацията „когато лекуваме едно и осакатяваме друго“. Въпреки това трябва да се използва умерено и в правилната концентрация.
                </motion.p>
              </div>

              {/* Second image - always visible */}
              <motion.img
                src={AgModel}
                style={{ border: '8px solid #003153', padding: '1px' }}
                loading="lazy"
                alt="Event 1"
                className="max-w-full sm:max-w-[40%] md:max-w-[42%] medium:max-w-[30%] lg:max-w-[25%] medium2:max-w-[22%] medium3:max-w-[21%] xl:max-w-[24%] rounded-md shadow-md mx-auto mt-2 flex-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              />
            </div>
          </motion.div>
        </div>



        <motion.div
          className="h-1 bg-blue-900 mt-8 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        <div className="mt-8" ref={sectionRef}>
          <motion.h1
            className='w-full text-center text-2xl font-extrabold text-blue-900 pb-6'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Свойства на сребърната вода
          </motion.h1>

          {/* Container for Event Images */}
          <div>
            <motion.p
              className="mb-4 animate-slideInUp md:text-justify text-center  text-gray-700"
            >
              Свойствата на сребърната вода включват способността й да лекува вътрешните органи. Това се дължи на
              сложната структура на сребърната вода и водата, съдържаща се в нашето тяло, се
              пренарежда, за да съответства на структурата на сребърната вода.
            </motion.p>
            <motion.p
              className="mb-4 animate-slideInUp md:text-justify text-center  text-gray-700"
            >
              От древни времена човечеството знае, че среброто има дезинфекциращи свойства.
              Сребърните изделия се използват не само като декорация, но и за дезинфекция на
              вода.  Колоидното сребро прониква свободно в клетката и лекува организма:< br />
              - подпомага заздравяването на трудно лечими рани;< br />
              - възстановява клетките след изгаряния;< br />
              - използва се за изплакване на носа, устата, гърлото и ушните канали.
            </motion.p>
          </div>

          <div className="flex flex-col gap-4 mb-4  sm:flex-row sm:gap-6 mt-6">
            <motion.img
              src={OldTimes}
              style={{ border: '8px solid #003153', padding: "1px" }}
              loading="lazy"
              alt="Event 1"
              className="w-full md:max-w-[48%] lg:max-w-[49%] rounded-md shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            />
            <motion.img
              src={AgGlass}
              style={{ border: '8px solid #003153', padding: "1px" }}
              loading="lazy"
              alt="Event 2"
              className="w-full hidden md:block md:max-w-[48%] lg:max-w-[49%] rounded-md shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            />
          </div>
          <motion.p
            className="mb-4 animate-slideInUp md:text-justify text-center  text-gray-700"
          >
            След контакта на питейната вода със среброто, тя придобива напълно нови
            качества.
            На първо място, такава вода може да се съхранява дълго време, тъй
            като повечето от присъстващите в нея микроорганизми умират. Ако сравните
            среброто с медта или златото, то е много по-ефективно за убиване на микроби.
            Днес хлорът се използва широко за отстраняване на микроби от водата.
          </motion.p>

        </div>

        <motion.div
          className="h-1 bg-blue-900 mt-8 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        <div className="mt-8" ref={sectionRef}>
          <motion.h1
            className='w-full text-center text-2xl font-extrabold text-blue-900 pb-6'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Предимства на среброто пред хлора
          </motion.h1>

          {/* Container for Event Images */}
          <div>
            <motion.p className="mb-4 animate-slideInUp md:text-justify text-center text-gray-700">
              - Среброто е в състояние да акумулира енергията на луната и затова сребърната вода има чудодейни енергийни свойства.<br />
              - Убива повечето бактерии и микроби във водата, осигурявайки по-чиста и безопасна течност за пиене.<br />
              - Не разваля вкуса на водата, а напротив, запазва нейния естествен и свеж вкус.<br />
            </motion.p>

            <motion.p className="mb-4 animate-slideInUp md:text-justify text-center text-gray-700">
              Среброто е жизненоважно за нашето тяло. Без него е невъзможно нормалното функциониране на мозък и гръбначния мозък, както и работата на вътрешните органи, които произвеждат различни хормони. Сребърно-йонизираната вода стимулира и има положителен ефект върху процесите в нашето тяло, вътрешни органи и кръв.
            </motion.p>
          </div>

          {/* Centering the image */}
          <div className="flex justify-center mt-2 max-w-full md:max-w-[75%] mx-auto">
            <motion.img
              src={MoonWater}
              style={{
                border: '8px solid #003153',  // Keeps the border for definition
                borderRadius: '20px',         // Rounded corners for a softer look
                width: '100%',                 // Make the image take full width of its container
                height: 'auto',                // Maintain aspect ratio
                padding: '1px',               // Padding for aesthetics
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)', // Adding a nice shadow for depth
              }}
              loading="lazy"
              alt="Event 2"
            />
          </div>


        </div>


      </motion.div >
    </motion.div >
  );
}
