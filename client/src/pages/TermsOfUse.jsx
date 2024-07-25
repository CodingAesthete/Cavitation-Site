import React, { useRef, useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
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

export default function TermsOfUse() {
  const screenSize = useMediaQuery();
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
          Условия за ползване
        </motion.h1>
        <div className="text-gray-700">
          <p className="mb-3">
            Всяко лице, наричано по-долу за краткост „потребител“, което получи достъп до уеб сайт на адрес https://cavitation.bg/, наричан по-долу за краткост „Сайт“, и до информацията и услугите в него, наричани по-долу за краткост „Съдържание“, предлагани от Вортекс Шипинг ЕООД, наричан по-долу за краткост „Доставчик“, се съгласява и приема Общите условия за ползване, посочени по-долу.
          </p>
          <p className="mb-3">
            При ползването на този Сайт, потребителят се задължава да спазва настоящите общи условия, както и всички други условия, установени от законодателството на Република България и международното законодателство, дори и да не са изрично упоменати в настоящите условия. Потребителят е длъжен, когато не е съгласен с общите условия, да преустанови ползването на този Сайт незабавно. Доставчикът не следва да носи отговорност, ако потребителят не е прочел и не се е запознал с настоящите условия.
          </p>
          <p className="mb-3">
            <strong>1. Общи условия за ползване на уеб сайта</strong>
            <br />
            1.1. Потребителят има право да използва този Сайт и информацията и материалите, съдържащи се и показвани в него, само за законни цели и по начин, който не накърнява правата или ограничава използването и достъпа до този Сайт на трета страна.
          </p>
          <p className="mb-3">
            1.2. Ползването на Сайта е по инициатива, воля и за сметка на потребителя, при спазване ограниченията в ЗАПСП в полза на титуляра на авторското право – Вортекс Шипинг ЕООД или трета страна (където е приложимо).
          </p>
          <p className="mb-3">
            1.3. Вортекс Шипинг ЕООД упълномощава потребителитя да разглежда, съхранява, копира в електронен вид и отпечатва физически копия на материалите от този сайт (включително страници, документи, файлове, снимки) единствено за своя употреба с цел да получи информация относно продуктите и услугите, предлагани от Доставчика, както и да извършва поръчки или оферти за продуктите и услугите в Сайта.
          </p>
          <p className="mb-3">
            1.4. Потребителят няма право да променя, копира, възпроизвежда (цялостно или частично), преиздава, публикува, изпраща или предава (във вид на поща, по електронен път или друг начин), излага, дава под наем, продава, прехвърля, създава вторични материали на базата на съдържанието в Сайта, да свързва или използва за публична или търговска цел, да разпространява по какъвто и да е друг нецитиран тук начин какъвто и да е елемент от съдържанието на този Сайт, без предварително изрично писмено разрешение от Вортекс Шипинг ЕООД. Всяка употреба на съдържанието в друг сайт или електронна среда е забранена за каквито и да било цели без предварително писмено разрешение от Вортекс Шипинг ЕООД.
          </p>
          <p className="mb-3">
            1.5. Всяка непозволена употреба на Сайта или Съдържанието в него (включително, но не само изпращане или предаване на материали с противозаконно, заплашително, невярно, подвеждащо, оскърбително, обидно, противоконкурентно, оклеветяващо, неприлично, порнографско или друг вид незаконно съдържание, или каквито и да са други материали, които представляват или подстрекават поведение, което би било сметнато за криминално престъпление, би довело до гражданска или наказателна отговорност или по друг начин би нарушило законите на Република България) е изрично забранено.
          </p>
          <p className="mb-3">
            1.6. Употребата на всякакъв вид софтуер или устройства с цел достъп и масово копиране/сваляне на съдържанието в Сайта, е изрично забранено.
          </p>
          <p className="mb-3">
            1.7. Потребителят е длъжен да не използва Сайта с цел придобиване на неоторизиран достъп до други компютърни системи или мрежи.
          </p>
          <p className="mb-3">
            1.8. Вортекс Шипинг ЕООД си запазва правото да актуализира (добавя, променя, премества и изтрива) съдържанието или части от него (вкл. цени, публикации, технически данни, продуктова гама или друга информация, описана на Сайта) по всяко време, без предварително известие.
          </p>
          {/* Adding Privacy Policy Section */}
          <p className="mt-6 mb-3">
            <strong>2. Политика за защита на личните данни</strong>
          </p>
          <p className="mb-3">
            2.1. В съответствие с изискванията на Закона за защита на личните данни и Регламент (ЕС) 2016/679 на Европейския парламент и на Съвета, Вортекс Шипинг ЕООД събира и обработва лични данни на потребителите единствено за целите на предоставяне на услугите си и изпълнение на договорни задължения.
          </p>
          <p className="mb-3">
            2.2. Личните данни, които събираме, могат да включват, но не се ограничават до, име, адрес на електронна поща, телефонен номер и информация относно Вашите поръчки.
          </p>
          <p className="mb-3">
            2.3. Вортекс Шипинг ЕООД предприема всички необходими технически и организационни мерки за защита на личните данни от неоторизиран достъп, загуба или злоупотреба.
          </p>
          <p className="mb-3">
            2.4. Потребителите имат право да поискат достъп, корекция или изтриване на личните си данни, както и да се откажат от получаване на маркетингови съобщения.
          </p>
          <p className="mb-3">
            2.5. За повече информация относно начина, по който обработваме Вашите лични данни, моля, посетете нашата Политика за Поверителност на сайта.
          </p>
          {/* Adding Limitation of Liability Section */}
          <p className="mt-6 mb-3">
            <strong>3. Ограничаване на отговорността</strong>
          </p>
          <p className="mb-3">
            3.1. Вортекс Шипинг ЕООД не носи отговорност за каквито и да било щети, включително, но не само, загуба на печалба, приходи, данни или други нематериални активи, произтичащи от или във връзка с използването на Сайта или невъзможността за достъп до него.
          </p>
          <p className="mb-3">
            3.2. Вортекс Шипинг ЕООД не носи отговорност за каквито и да било грешки или неточности в информацията, предоставена на Сайта, и си запазва правото да прави промени в нея по всяко време.
          </p>
          <p className="mb-3">
            3.3. В случай на щети, причинени от използването на Сайта, отговорността на Вортекс Шипинг ЕООД е ограничена до размера на действително заплатената сума за предоставената услуга, която е довела до щетата.
          </p>
          {/* Adding Hyperlinks Section */}
          <p className="mt-6 mb-3">
            <strong>4. Препратки (хипервръзки)</strong>
          </p>
          <p className="mb-3">
            4.1. Сайтът може да съдържа хипервръзки към трети страни. Тези хипервръзки са предоставени само за удобство на потребителите и не означават, че Вортекс Шипинг ЕООД одобрява или носи отговорност за съдържанието на тези сайтове.
          </p>
          <p className="mb-3">
            4.2. Вортекс Шипинг ЕООД не носи отговорност за съдържанието, точността и достъпността на сайтовете, до които се предоставят хипервръзки. Всяко взаимодействие с тези трети сайтове е на отговорност на потребителя.
          </p>
          {/* Adding Copyright Section */}
          <p className="mt-6 mb-3">
            <strong>5. Авторско право</strong>
          </p>
          <p className="mb-3">
            5.1. Всички права на съдържанието на Сайта, включително текстове, изображения, логота и софтуер, са собственост на Вортекс Шипинг ЕООД и са защитени от закона за авторското право и други приложими закони.
          </p>
          <p className="mb-3">
            5.2. Никаква част от съдържанието на този Сайт не може да бъде копирана, репродуцирана или разпространявана без предварително писмено разрешение от Вортекс Шипинг ЕООД.
          </p>
          {/* Adding General Terms Section */}
          <p className="mt-6 mb-3">
            <strong>6. Общи условия</strong>
          </p>
          <p className="mb-3">
            6.1. Настоящите условия представляват целия договор между потребителя и Вортекс Шипинг ЕООД относно използването на Сайта и отменят всички предходни споразумения или договорености, независимо дали са устни или писмени.
          </p>
          <p className="mb-3">
            6.2. Вортекс Шипинг ЕООД си запазва правото да променя условията по всяко време и тези промени ще влязат в сила след публикуването им на Сайта.
          </p>
          <p className="mb-3">
            6.3. В случай че някоя от клаузите на настоящите условия бъде призната за невалидна или неприложима, останалите клаузи ще продължат да са в сила.
          </p>
          <p className="mb-3">
            6.4. Всеки спор, възникнал във връзка с настоящите условия, ще бъде разрешаван по реда, установен от българското законодателство и компетентните съдилища на Република България.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
