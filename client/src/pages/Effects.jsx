import React from 'react';
import { motion } from 'framer-motion';
import Water1 from '../assets/images/water1.jpg';
import Water2 from '../assets/images/water2.jpg';
import Water3 from '../assets/images/water3.jpg';
import Water4 from '../assets/images/water4.jpg';
import WaterExtra from '../assets/images/WaterExtra.jpg';
import WaterExtra2 from '../assets/images/WaterExtra2.jpg';
import Water5 from '../assets/images/water5.jpg';
import Water6 from '../assets/images/water6.jpg';
import Water7 from '../assets/images/water7.jpg';
import Water8 from '../assets/images/water8.jpg';
import Water9 from '../assets/images/water9.jpg';
import Water10 from '../assets/images/water10.jpg';
import Water11 from '../assets/images/water11.jpg';
import Water12 from '../assets/images/water12.jpg';
import Water13 from '../assets/images/water13.jpg';
import Water14 from '../assets/images/water14.jpg';
import Water15 from '../assets/images/water15.jpg';
import Water16 from '../assets/images/water16.jpg';
import Water17 from '../assets/images/water17.jpg';
import Water18 from '../assets/images/water18.jpg';
import Water19 from '../assets/images/water19.jpg';
import Water20 from '../assets/images/water20.jpg';

export default function Effects() {
  const albumPhotoContainerStyle = {
    border: '8px solid #6B4226', // Brown border
    borderRadius: '8px', // Rounded corners
    overflow: 'hidden',
  };

  const albumPhotoStyle = {};

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0 },
  };

  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    pointerEvents: 'none', // Allows clicking through the container
    zIndex: 1,
  };

  const dropStyle = {
    position: 'absolute',
    width: '10px',
    height: '10px',
    borderRadius: '100%',
    backgroundColor: 'rgba(255, 255, 255, 1)', // Semi-transparent white drops
  };

  const WaterDrops = () => {
    const drops = Array.from({ length: 10 }).map((_, index) => ({
      id: index,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      scale: Math.random() * 0.8 + 0.2,
      opacity: Math.random(),
      speed: Math.random() * 1.15 + 1,
    }));

    const dropVariants = {
      animate: (custom) => ({
        y: window.innerHeight + 20,
        transition: {
          duration: custom.speed,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        },
      }),
    };

    return (
      <div style={containerStyle}>
        {drops.map((drop) => (
          <motion.div
            key={drop.id}
            style={{
              ...dropStyle,
              left: drop.x,
              right: drop.x - 40,
              top: drop.y,
              scale: drop.scale,
              opacity: drop.opacity,
            }}
            variants={dropVariants}
            animate="animate"
            custom={drop}
          />
        ))}
      </div>
    );
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="text-lg text-justify w-11/12 sm:w-5/6 mx-auto rounded-md px-3 sm:px-10 py-6 mt-6 mb-6 bg-blue-50 relative"
      style={{ zIndex: 2 }} // Ensure this has a higher z-index than WaterDrops
    >
      <WaterDrops />
      <div className="p-6min-h-screen">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center animate-fadeInSlow">
            Ефект на структурираната вода
          </h2>
          <p className="mb-4 animate-slideInUp md:text-justify text-center">
            Кавитационната обработка на водата променя нейната структура на молекулно ниво. Водата във всякаква форма е най-„аномалното“ съединение в природата.
            Лесно променя агрегатното си състояние при температурни, електромагнитни, електролитни и
            други въздействия. Молекулярната структура на водата може да се коригира, след което
            нейните характеристики и ефекти върху човешкото тяло се променят. <br className="mt-2" />
            Със сигурност модифицираната вода:
          </p>
          <ul className="list-disc list-inside pl-4 animate-slideInUp mb-4">
            <li>става по-здравословна за организма;</li>
            <li>осигурява много по-дълбока хидратация на органи и тъкани.</li>
          </ul>
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:gap-8">
            <div style={albumPhotoContainerStyle}>
              <img src={Water1} alt="Water 1" className="max-w-sx md:w-md border rounded-md" />
            </div>
            <div style={albumPhotoContainerStyle} className="hidden md:block">
              <img src={Water2} alt="Water 2" className="hidden md:block max-w-sx md:w-md border rounded-md" />
            </div>
          </div>
          <p className="text-center text-md italic">
            Визуализация на структурираната вода: различия в молекулната структура след кавитационна обработка.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center animate-fadeInSlow">
            Химичните връзки във водните молекули
          </h2>
          <p className="mb-4 animate-slideInUp md:text-justify text-center">
            Химичните връзки във водните молекули са ковалентни и полярни. Водородът привлича електрони
            с положителен заряд, а кислородът -  частици с отрицателен заряд. Биполярните молекули могат да се
            интегрират една с друга, образувайки клъстери - групи. Структурата на H2O молекулата може
            да бъде стабилизирана и направена симетрична, увеличавайки ползите от използването на
            такава вода в плувните басейни. Процесът възниква поради водородната връзка. Клъстерите,
            които обединява, създават пространствени и планарни структури. Те са по-стабилни от
            обикновено, обвързани с общи правила на физическо взаимодействие, но запазват индивидуалните
            си характеристики. Основният тип клъстерна структура е симетричен пръстен от шест водни
            молекули. Тази форма е присъща на клетъчните течности в човешкото тяло, лед и сняг.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:gap-8">
            <div style={albumPhotoContainerStyle}>
              <img loading="lazy" src={Water3} alt="Water 1" className="max-w-sx md:w-md border rounded-md" />
            </div>
            <div style={albumPhotoContainerStyle} className="hidden md:block">
              <img loading="lazy" src={WaterExtra} alt="Water 2" className="hidden md:block max-w-sx md:w-md border rounded-md" />
            </div>
          </div>
          <p className="text-center text-md italic">
            Химична структура на водните молекули
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center animate-fadeInSlow">
            Конвенционалните клъстери
          </h2>
          <p className="mb-4 animate-slideInUp md:text-justify text-center">
            Конвенционалните клъстери се образуват от макромолекулни структури. В тях има най-малко 15
            молекули - те се движат хаотично и са разположени асиметрично. Следователно водата е
            неактивна, не прониква добре през клетъчните мембрани и не е полезна. За да се подобри
            производителността й, е необходимо да се образуват шестоъгълни клъстери.
            За целта се променя структурата на водата. Новите клъстери са подобни на групи в
            междуклетъчната течност, съдържащи 5-7 молекули.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:gap-8">
            <div style={albumPhotoContainerStyle}>
              <img loading="lazy" src={Water5} alt="Water 1" className="max-w-sx md:w-md border rounded-md" />
            </div>
            <div style={albumPhotoContainerStyle} className="hidden md:block">
              <img loading="lazy" src={Water6} alt="Water 2" className="hidden md:block max-w-sx md:w-md border rounded-md" />
            </div>
          </div>
          <p className="text-center text-md italic">
            Химична структура при новосъздаден клъстер
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center animate-fadeInSlow">
            Основни предимства на структурирана вода
          </h2>
          <p className="mb-4 animate-slideInUp md:text-justify text-center">
            В природата процесът на образуване на
            структурирана нискомолекулна вода възниква по време на замразяването и размразяването на
            снега. Това се случва в местата с планински потоци, водопади и реки. Движението по естествени
            спирали повишава биологичната активност на водата. Под въздействието на кавитационната
            технология H2O молекулите се зареждат отрицателно, обогатявайки течността със свободни
            електрони.
            Подобен ефект се наблюдава и в природата - в потоци и извори, особено планински
            извори, чието начало е свързано с  ледници. Произхождайки от границата на агрегатните
            състояния, водата променя кристалната си решетка. Връзките й са силни и
            молекулите й са подредени, затова е толкова лесно и приятно да се пие от планински
            потоци и чисти извори.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:gap-8">
            <div style={albumPhotoContainerStyle}>
              <img loading="lazy" src={Water7} alt="Water 1" className="max-w-sx md:w-md border rounded-md" />
            </div>
            <div style={albumPhotoContainerStyle} className="hidden md:block">
              <img loading="lazy" src={Water8} alt="Water 2" className="hidden md:block max-w-sx md:w-md border rounded-md" />
            </div>
          </div>
          <p className="text-center text-md italic">
            Промяна на кристалната решетка на водата във връзка с преминаването в различно агрегатно състояние
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center animate-fadeInSlow">
            Как да се възползваме от предимствата?
          </h2>
          <p className="mb-4 animate-slideInUp md:text-justify text-center">
            В човешкото тяло водата също е структурирана. Кристалната й решетка е подобна на
            тази на леда. Благодарение на нискомолекулната си структура, водата лесно
            прониква в клетката, повишава метаболитната й активност, качеството на
            биохимичните реакции и в крайна сметка влияе върху „работата“ на човешкото тяло.
            След промяна на структурата на водата, нейните клъстери стават плътни,
            подобни на клетъчните. Усвояването й става много по-лесно- тялото не губи енергия. Необходимите вещества бързо се доставят в клетката и
            ефективността на хидратацията се увеличава. Нейната „памет“ е до голяма степен
            изтрита, което намалява вредата от натрупаната негативна енергия.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:gap-8">
            <div style={albumPhotoContainerStyle}>
              <img loading="lazy" src={Water9} alt="Water 1" className="max-w-sx md:w-md border rounded-md" />
            </div>
            <div style={albumPhotoContainerStyle} className="hidden md:block">
              <img loading="lazy" src={Water10} alt="Water 2" className="hidden md:block max-w-sx md:w-md border rounded-md" />
            </div>
          </div>
          <p className="text-center text-md italic">
            Допълнителна хидратация на тялото, изложено на кавитационна вода
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center animate-fadeInSlow">
            Ефект на кавитацията при животните
          </h2>
          <p className="mb-4 animate-slideInUp md:text-justify text-center">
            Кавитационната обработка на водата променя структурата на молекулите, което подобрява качеството на водата особено за животните. Новообразуваните структури са полезни за тялото, тъй като съдържат микроелементи, минерали и други хранителни вещества, необходими за здравето. Тези клъстерни структури са по-стабилни и способстват за по-добро хидратиране и подобряване на общото състояние на организмите, които ги консумират.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:gap-8">
            <div style={albumPhotoContainerStyle}>
              <img loading="lazy" src={Water11} alt="Water 1" className="max-w-sx md:w-md border rounded-md" />
            </div>
            <div style={albumPhotoContainerStyle} className="hidden md:block">
              <img loading="lazy" src={Water12} alt="Water 2" className="hidden md:block max-w-sx md:w-md border rounded-md" />
            </div>
          </div>
          <p className="text-center text-md italic">
            Набавяне на важни елементи посредством консумацията на обработената вода при животните
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center animate-fadeInSlow">
            Свойства на структурираната вода
          </h2>
          <div className="animate-slideInUp">
            <p className="mb-4 animate-slideInUp md:text-justify text-center">
              1. Структурираната вода, благодарение на модифицираната си структура, е полезна при плуване в басейн.
            </p>
            <p className="mb-4 animate-slideInUp md:text-justify text-center">
              2. Прониква до клетъчно ниво без допълнителни разходи за „обработка” от тялото, поддържайки високо ниво на енергия в човека.
            </p>
            <p className="mb-4 animate-slideInUp md:text-justify text-center">
              3. В зависимост от характеристиките на променената структура, течността се превръща в ефективен антиоксидант, предотвратяващ стареенето на клетките и разрушаването на ДНК.
            </p>
            <p className="mb-4 animate-slideInUp md:text-justify text-center">
              4. Има ефект на активен антисептик, неутрализиращ инфекции и възпалителни процеси.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:gap-8">
            <div style={albumPhotoContainerStyle}>
              <img loading="lazy" src={Water13} alt="Water 1" className="max-w-sx md:w-md border rounded-md" />
            </div>
            <div style={albumPhotoContainerStyle} className="hidden md:block">
              <img loading="lazy" src={Water14} alt="Water 2" className="hidden md:block max-w-sx md:w-md border rounded-md" />
            </div>
          </div>
          <p className="text-center text-md italic">
            Пълна дезинфекция и осигуряване на безопасност в плувни басейни
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center animate-fadeInSlow">
            Пречистване на течности
          </h2>
          <p className="mb-4 animate-slideInUp md:text-justify text-center">
            Понастоящем методите без реагенти за пречистване на течности са обещаващи.
            Безреагентните методи за пречистване на водата не замърсяват природната среда с
            химикали и не оказват вредно или дразнещо действие върху човешкия организъм при
            контакт. Един от обещаващите методи за пречистване на водата е
            обработката й в кавитационни реактори.
            Бактерицидният ефект на кавитацията е правопропорционален на нейния интензитет,
            честота или време на въздействие. Ефектът на кавитацията върху водните разтвори
            се свежда до разделянето на водните молекули в кавитационните мехурчета.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:gap-8">
            <div style={albumPhotoContainerStyle}>
              <img loading="lazy" src={Water15} alt="Water 1" className="max-w-sx md:w-md border rounded-md" />
            </div>
            <div style={albumPhotoContainerStyle} className="hidden md:block">
              <img loading="lazy" src={WaterExtra2} alt="Water 2" className="hidden md:block max-w-sx md:w-md border rounded-md" />
            </div>
          </div>
          <p className="text-center text-md italic">
            Преминаване на водата през т.нар. кавитационни реактори
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center animate-fadeInSlow">
            Кавитацията в пречистването на водата
          </h2>
          <p className="mb-4 animate-slideInUp md:text-justify text-center">
            Интензивният ефект на ударните вълни върху бактерии като Salmonella или E-coli
            може да намали техния брой хиляди пъти. Въздействието на кумулативните струи
            течност по време на колапса на кавитационните микромехурчета причинява смъртта
            на бактериите. Оценката на ефекта от кавитационната обработка върху
            съдържанието на жизнеспособни спори на суспензия от Fusarium solani и живи клетки
            от бактерии и гъбички показа, че след пет цикъла на обработка на суспензията в КВУ,
            броят на спорите намаляват наполовина, броят на живите резервоари намалява с
            порядък, значително намалява дължината на актиномицетния мицел. След
            кавитационно третиране на отпадъчни води в КВУ броят на общите колиформни
            бактерии (TCB) намалява почти 100 000 пъти, броят на термотолерантните
            бактерии (TCB) с 60 000 пъти и броят на колифагите (бактериални вируси) с 80
            пъти. Най-ефективният метод за унищожаване на патогенната микрофлора се счита
            комбинацията от различни методи на физическо въздействие върху третираната
            течност, комбинираното използване на кавитация, ултравиолетово облъчване,
            насищане на течността с озон и кислород дава синергичен ефект и значително
            увеличава; ефективността на дезинфекция на течности. Методът на кавитационна
            дезинфекция на течности може да се използва ефективно при третирането на
            отпадъчни води от предприятия, общински пречиствателни станции за отпадъчни
            води, канализация в плувни басейни, регенериране на флуиди и
            други течности, с които хората влизат в контакт или се изхвърлят в околната среда.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:gap-8">
            <div style={albumPhotoContainerStyle}>
              <img loading="lazy" src={Water17} alt="Water 1" className="max-w-sx md:w-md border rounded-md" />
            </div>
            <div style={albumPhotoContainerStyle} className="hidden md:block">
              <img loading="lazy" src={Water18} alt="Water 2" className="hidden md:block max-w-sx md:w-md border rounded-md" />
            </div>
          </div>
          <p className="text-center text-md italic">
            Използване на кавитационния метод  за пречустването на отпадъчни води и предотвратяване на замърсяването
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center animate-fadeInSlow">
            Кавитацията за битови нужди
          </h2>
          <p className="mb-4 animate-slideInUp md:text-justify text-center">
            Структурираната вода може да се използва и в домашни условия. Цветята, които се
            поливат с него, растат по-добре, а зеленчуците и овощните култури дават стабилна
            реколта. Структурираната вода не съдържа вредни вещества, микроби и токсини,
            затова е препоръчително да миете лицето си с нея, за да запазите младостта и
            красотата на кожата на лицето. Структурираната вода се използва за ефективно
            почистване на повърхности от калциеви отлагания и предотвратяване на метална
            корозия в бойлери, съдомиялни машини и други уреди.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:gap-8">
            <div style={albumPhotoContainerStyle}>
              <img loading="lazy" src={Water19} alt="Water 1" className="max-w-sx md:w-md border rounded-md" />
            </div>
            <div style={albumPhotoContainerStyle} className="hidden md:block">
              <img loading="lazy" src={Water20} alt="Water 2" className="hidden md:block max-w-sx md:w-md border rounded-md" />
            </div>
          </div>
          <p className="text-center text-md italic">
            Консумация на кавитационна вода, несъдържаща хлор и други химикали, вредни за човешкото здраве
          </p>
        </section>

      </div>
    </motion.div>
  );
}
