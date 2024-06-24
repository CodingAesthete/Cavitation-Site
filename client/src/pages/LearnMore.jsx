import React from 'react';
import { motion } from 'framer-motion';
import CavitationPool from '../assets/images/cavitation-pool.jpg';
import CavitationGlass from '../assets/images/cavitation-result.jpg';
import Baloons from '../assets/images/balloons.jpg';
import Baloons2 from '../assets/images/baloons2.jpg';
import Chain from '../assets/images/cavitation-chain.jpg';
import Formula1 from '../assets/images/formula1.png';
import Formula2 from '../assets/images/formula2.png';
import Formula3 from '../assets/images/formula3.png';
import WaterDrops from '../assets/images/water-drops.jpg';
import Technologies from '../assets/images/Technologies.jpg';
import Technologies2 from '../assets/images/Technologies2.jpg';
import Food from '../assets/images/Food.jpg';
import Medicine from '../assets/images/medicine.jpg';
import Farming from '../assets/images/farming.jpg';
import Oil from '../assets/images/Oil.jpg';
import Polishing from '../assets/images/Polishing.jpg';
import Chlor from '../assets/images/Chlor.jpg';
import UV from '../assets/images/UV.jpg';
import CavitationMethod from '../assets/images/CavitationMethod.jpg';
import ContactImage from '../assets/images/ContactImage.jpg';

export default function LearnMore() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-lg text-justify w-11/12 sm:w-5/6 mx-auto rounded-md px-4  sm:px-10  py-4 mt-6 mb-10 bg-blue-50"
    >
      <div style={{ clear: 'both' }}>
        <br />
        <motion.h2
          className='w-full text-center text-2xl font-bold pb-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Що е кавитация?
        </motion.h2>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}
          className='flex-col sm:flex-row'>
          <motion.img
            src={Baloons2}
            alt="Baloons 2"
            style={{ flex: '0 1 45%', maxHeight: '220px', marginBottom: '10px' }}
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className='m-0'
          />
          <motion.img
            src={Baloons}
            alt="Baloons"
            style={{ flex: '0 1 45%', maxHeight: '220px', marginBottom: '10px' }}
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Кавитацията е образуването на въздушните мехурчета във водата поради резки промени в налягането, това е процес на нарушаване целостта на течността, който се извършва в тези части на потока, където налягането се понижава и достига до критично значение. С възникването на въздушните балончета и изменението на техните размери в процеса на кавитацията се променят физическите и акустичните свойства на водата.
        </motion.p>

        <motion.div
          className='mt-12 mb-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.img
            className='w-full mx-auto'
            src={Chain}
            alt="cavitation chain"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          />
        </motion.div>

        <ul>
          <motion.li
            className="mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            При гидродинамичната обработка на водата се изменят нейните физико-химически характеристики. По време на този процес водните молекули се разпадат, освобождават се кислород и водороден прекис, които са мощни окислители. Според учените "студеното кипене" на водата може да се сравни с работата на огромен миксер.
          </motion.li>
          <motion.li
            className="mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            При разрушаването на кавитационите балончета се освобождава определено количество енергия и настъпва следния химически процес:
          </motion.li>
          <motion.div
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            className='mt-12 mb-6 sm:flex-row flex-col gap-3 sm:gap-0'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.img
              className='w-7/12 sm:w-1/4 mx-auto'
              src={Formula1}
              alt="cavitation formulas"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
            <motion.img
              className='w-7/12 sm:w-1/4 mx-auto'
              src={Formula2}
              alt="cavitation formulas"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            />
            <motion.img
              className='w-7/12 sm:w-1/4 mx-auto'
              src={Formula3}
              alt="cavitation formulas"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            />
          </motion.div>
          <motion.div
            style={{
              clear: 'both',
              display: 'flex',
              justifyContent: 'center',
              backgroundImage: `url(${WaterDrops})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay',
              backgroundColor: 'rgba(173, 216, 230, 0.7)',
              width: '95%',
              margin: '0 auto',
            }}
            className='mt-12 mb-6 rounded-2xl lg:w-80 lg:mx-auto'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="p-2 sm:p-6 bg-slate-100 bg-opacity-65 rounded-2xl border-4 border-dashed border-blue-300">
              <p>
                Молекулите на водата се насищат с кислород на основание на хидродинамическото изменение. Характеристиките на флуида, изменят своето енергийно състояние и получават допълнителна степен на свобода.
                В резултат на това водата се дезинфекцира, микробите и бактериите умират. Освен това, когато мехурчетата се неутрализират, се отделя голямо количество енергия, която може да се използва за обезсоляване и затопляне на водата.
                Кавитационата обработка на водата позволява да се постигне дълбока молекулярна обработка, запазвайки при това биологически важните микроелементи.
                Ефективността на бактерицидното въздействие зависи от интензивността на кавитацията и времето на въздействие.
                На ефективността на процеса не влияе качеството на входната вода, мътността,
                солеността, цветността и т.н.
                Бактериите се подлагат еднновремено на хидродинамично, топло и ударно въздействие, което води до разрушаване на повърхността им и тяхното унищожаване. Най-интензивното унищожаве на микроорганизмите се извършва в момента на възникване на кавитацията, а пълно обеззаразяване става при равномерното разпределение на водата в кавитационите зони.
              </p>
            </div>
          </motion.div>


          <motion.li
            className="mb-2 mt-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            whileHover={{ color: 'darkblue' }}
            style={{
              overflowWrap: 'break-word',
            }}
          >
            <u><i>Ефективността се дължи на няколко фактора:</i></u>
            <br />
            - ерозия на твърдото тяло,
            <br />
            - почистване на повърхностите,
            <br />
            - дисперсия на твърдите частици,
            <br />
            - екстрагиране, хомогенизация, емулсия на твърдите частици.
          </motion.li>
        </ul>
      </div>

      <motion.div
        className="h-1 bg-blue-900 mt-6"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      <div style={{ clear: 'both' }}>
        <br />
        <motion.h2
          className='w-full text-center text-2xl font-bold pb-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Приложение на кавитацията
        </motion.h2>

        {/* First Application Section */}
        <motion.div
          className="flex flex-col gap-3 lg:gap-0 lg:flex-row items-center mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.p className="lg:w-3/5 lg:pr-6">
            Кавитационната обработка има широко приложение в промишленоста, селското
            стопанство и медицината. В <b>хранителната промишленост</b> за хомогенизация и
            пастьоризация на млякото, консервация на хранителните емулсии, както и
            повишаване на срока на съхранение на продуктите.
          </motion.p>
          <motion.img
            src={Food}
            alt="Agriculture"
            className="mb-3 lg:mb-0 lg:ml-6 lg:max-h-170"
            style={{ maxHeight: '170px' }}
            whileHover={{ scale: 1.1 }}
          />
        </motion.div>

        {/* Second Application Section */}
        <motion.div
          className="flex flex-col gap-3 lg:gap-0 lg:flex-row items-center mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.p className="lg:w-3/5 lg:pr-6">
            В <b>медицината</b> също открива приложение - използва се за бактериологично обеззаразяване, така също и за ефективното проникване на лекарствените вещества към центъра на поразяване. Подобрява кръвообращението и стимулира регенеративните процеси.
          </motion.p>
          <motion.img
            src={Medicine}
            alt="Medicine"
            className="mb-3 lg:mb-0 lg:ml-6 lg:max-h-170"
            style={{ maxHeight: '170px' }}
            whileHover={{ scale: 1.1 }}
          />
        </motion.div>

        {/* Third Application Section */}
        <motion.div
          className="flex flex-col gap-3 lg:gap-0 lg:flex-row items-center mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.p className="lg:w-3/5 lg:pr-6">
            В <b>селското стопанство</b> при използването на кавитационно-обработената вода се наблюдава значително увеличаване на добивите, а също и намаляване на заболяваемостта на посевите, което е свързано с повишеното съдържание на кислорода във водата.
          </motion.p>
          <motion.img
            src={Farming}
            alt="Farming"
            className="mb-3 lg:mb-0 lg:ml-6 lg:max-h-170"
            style={{ maxHeight: '170px' }}
            whileHover={{ scale: 1.1 }}
          />
        </motion.div>

        {/* Fourth Application Section */}
        <motion.div
          className="flex flex-col gap-3 lg:gap-0 lg:flex-row items-center mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.p className="lg:w-3/5 lg:pr-6">
            Не по-малка се оказва ролята на кавитацията в <b>нефтената промишленост</b> - кавитационната обработка позволява да се увеличи процентът на леките фракции при крекинг процеса и като следствие на това да се получи по-лека фракция на мазута.
          </motion.p>
          <motion.img
            src={Oil}
            alt="Oil"
            className="mb-3 lg:mb-0 lg:ml-6 lg:max-h-170"
            style={{ maxHeight: '170px' }}
            whileHover={{ scale: 1.1 }}
          />
        </motion.div>

        {/* Fifth Application Section */}
        <motion.div
          className="flex flex-col gap-3 lg:gap-0 lg:flex-row items-center mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.p className="lg:w-3/5 lg:pr-6">
            Приложението й в други области кавитационната технология се състои в изчистване и полиране на вътрешните повърхности на оборудванието, изчистване от замърсяване и накипи, производство на биогаз, както и за отопление на помещенията.
          </motion.p>
          <motion.img
            src={Polishing}
            alt="Polishing"
            className="mb-3 lg:mb-0 lg:ml-6 lg:max-h-170"
            style={{ maxHeight: '170px' }}
            whileHover={{ scale: 1.1 }}
          />
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-1 bg-blue-900 mt-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </div>


      <div style={{ clear: 'both' }}>
        <br />
        <motion.h2
          className='w-full text-center text-2xl font-bold pb-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Сравнителен анализ и преимущества
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* First Column */}
          <motion.div
            className="flex items-start border-blue-900 border-dotted border-r-0 lg:border-r-2 pr-3 mb-6 lg:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <motion.p>
              <b>1.</b> Обработка с хлор:
              Този способ е най-разпространен, тъй като хлорът е относително евтин.
              Недостатъци. Част от бактерите и яйцата на вирусите са устойчиви на ниска концентрация на хлориране. Освен това хлорирането на питейната вода
              предизвиква изменение на генната основа и повишава токсичността на
              човешкия организъм.
            </motion.p>
          </motion.div>

          {/* Second Column */}
          <motion.div
            className="flex items-start border-blue-900 border-dotted border-r-0 lg:border-r-2 pr-3 mb-6 lg:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <motion.p>
              <b>2.</b> Обработка с ултра-виолетови лъчи:
              Този метод не използува химически агенти и е екологически чист.
              Към недостатъците следва да се отбележи, че изисква висока прозрачност на обработваемата вода, отсъствие на водорасли, плесени и други микроорганизми.
            </motion.p>
          </motion.div>

          {/* Third Column */}
          <motion.div
            className="flex items-start mb-6 lg:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <motion.p>
              <b>3.</b> Обработката с използуване на кавитационния ефект няма по-горе отбелязаните недостатъци; Тя е много по-енергоефективна и по-евтина.
              За сравнение, разходите на кавитационния способ в сравнение с другите способи
              за изчистване на водите е както следва:
              способ за изчистване с УВ - 1,7 пъти по-малко,
              способ с хлориране - 3,5 пъти по-малко,
              озониране- 10 пъти по-малко.
            </motion.p>
          </motion.div>
        </div>

        {/* Images Section (Below lg) */}
        <motion.div className="grid grid-cols-1 justify-center items-center mx-auto lg:hidden gap-4 mb-6">
          <motion.img
            src={Chlor}
            alt="Chlor"
            className="mb-3"
            style={{ maxWidth: '100%', height: 'auto' }} // Adjusted width to be responsive
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            src={CavitationMethod}
            alt="Cavitation-Method"
            className="mb-3"
            style={{ maxWidth: '100%', height: 'auto' }} // Adjusted width to be responsive
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            src={UV}
            alt="UV-Treatment"
            className="mb-3"
            style={{ maxWidth: '100%', height: 'auto' }} // Adjusted width to be responsive
            whileHover={{ scale: 1.1 }}
          />
        </motion.div>

        {/* Images Section (lg and larger) */}
        <motion.div className="hidden lg:grid lg:grid-cols-3 gap-4 mt-2">
          <motion.img
            src={Chlor}
            alt="Chlor"
            className="mb-3 lg:mb-0"
            style={{ maxWidth: '95%', height: 'auto' }} // Adjusted width to be responsive
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            src={CavitationMethod}
            alt="Cavitation-Method"
            className="mb-3 lg:mb-0"
            style={{ maxWidth: '95%', height: 'auto' }} // Adjusted width to be responsive
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            src={UV}
            alt="UV-Treatment"
            className="mb-3 lg:mb-0"
            style={{ maxWidth: '95%', height: 'auto' }} // Adjusted width to be responsive
            whileHover={{ scale: 1.1 }}
          />
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-1 bg-blue-900 mt-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </div>



      <div style={{ clear: 'both' }} className='mt-3'>
        <motion.h2
          className='w-full text-center text-2xl font-bold pb-3'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Резултати от кавитацията
        </motion.h2>
        <div className='text-xl mb-2'>~ Степента на обеззаразяване се достига, както следва (<b>c кавитация</b>):</div>
        <table style={{ borderCollapse: 'collapse', border: '1px solid black', width: '100%' }}>
          <colgroup>
            <col style={{ width: '50%' }} />
            <col style={{ width: '50%' }} />
          </colgroup>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>Аспект</th>
              <th style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>Процент</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>Яйца и Личинки</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>100.0 %</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>Вируси</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>99.97 %</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>Бактерии</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>99.90 %</td>
            </tr>
          </tbody>
        </table>

        <div className='text-xl mb-2 mt-3'>~ Степента на обеззаразяване се достига, както следва (<b>без кавитация</b>):</div>
        <table style={{ borderCollapse: 'collapse', border: '1px solid black', width: '100%' }}>
          <colgroup>
            <col style={{ width: '50%' }} />
            <col style={{ width: '50%' }} />
          </colgroup>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>Метод</th>
              <th style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>Процент</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>Озонна обработка</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>97.80 %</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>Обработка с хлор</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>92.00 %</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>УВ-третиране</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>46.60 %</td>
            </tr>
          </tbody>
        </table>
        <motion.div
          className="flex items-center mb-3 mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >

          <motion.p>
            По този начин, при въздействието на кавитационната обработка на водата,
            последната многократно се подлага на термобарично и електромагнитно въздействие. Методът на "студено кипене" на водата не изисква използването на допълнителни реагенти или сорбенти.
          </motion.p>
        </motion.div>
        <motion.div
          className="flex items-center mb-3 mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >

          <motion.p>
            При многократните изследвания e доказана високата ефективност на бактерицидното въздействие на хидродинамичната кавитация при минимални енергийни и икономически разходи.
          </motion.p>
        </motion.div>
        <motion.div
          className="h-1 bg-blue-900 mt-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </div>

      <motion.div
        style={{ clear: 'both', position: 'relative', textAlign: 'center' }}
        className='mt-12 mb-6'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.img
          className='w-full sm:w-4/5 md:w-3/5 mx-auto'
          src={ContactImage}
          alt="cavitation chain"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{ display: 'block', margin: '0 auto' }}
        />
        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '32px',
            letterSpacing: '2px',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            WebkitTextStroke: '1px blue',
            textStroke: '1px green',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className='hidden sm:inline text-2xl md:text-3xl pb-3'>Имате въпроси?</p>
          <p className='text-2xl md:text-3xl pb-3'>Свържете се с нас!</p>
        </motion.div>
      </motion.div>



    </motion.div>
  );
}
