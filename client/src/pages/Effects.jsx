import React from 'react';
import { motion } from 'framer-motion';
import Water1 from '../assets/images/water1.jpg';
import Water2 from '../assets/images/water2.jpg';
import Water6 from '../assets/images/water6.jpg';
import Water7 from '../assets/images/water7.jpg';
import Water8 from '../assets/images/water8.jpg';
import Water9 from '../assets/images/water9.jpg';
import Water10 from '../assets/images/water10.jpg';
import Water19 from '../assets/images/water19.jpg';
import Water20 from '../assets/images/water20.jpg';
import Byala1 from '../assets/images/Byala1.jpg';
import Byala2 from '../assets/images/Byala2.jpg';
import BlackHorse from '../assets/images/BlackHorse.jpg';
import Cow from '../assets/images/Cow.jpg';
import Snowflake from '../assets/images/Snowflake.jpg';
import net from '../assets/images/net.jpg';
import WaterStructure from '../assets/images/WaterStructure.jpg';
import WaterInitial from '../assets/images/WaterInitial.jpg';

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
            <div style={albumPhotoContainerStyle} className="hidden md:block">
              <img src={Water1} alt="Water 1" className="max-w-sx md:w-md border rounded-md" />
            </div>
            <div style={albumPhotoContainerStyle}>
              <img src={WaterInitial} alt="Water 2" className=" max-w-sx md:w-md border rounded-md" />
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
            които обединяват и създават пространствени и планарни структури. Те са по-стабилни от
            обикновено, обвързани с общи правила на физическо взаимодействие, но запазват индивидуалните
            си характеристики. Основният тип клъстерна структура е симетричен пръстен от шест водни
            молекули. Тази форма е присъща на клетъчните течности в човешкото тяло, лед и сняг.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:gap-8">
            <div style={albumPhotoContainerStyle}>
              <img loading="lazy" src={Snowflake} alt="Snowflake" className="max-w-sx md:w-md border rounded-md" />
            </div>
            <div style={albumPhotoContainerStyle} className="hidden md:block">
              <img loading="lazy" src={WaterStructure} alt="Water Structure" className="max-w-sx md:w-md border rounded-md" />
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
              <img loading="lazy" src={net} alt="net" className=" max-w-sx md:w-md border rounded-md" />
            </div>
            <div style={albumPhotoContainerStyle} className="hidden md:block">
              <img loading="lazy" src={Water6} alt="Water 1" className="hidden md:block max-w-sx md:w-md border rounded-md" />
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
            Как да се възползваме от предимствата на структурираната вода?
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
              <img loading="lazy" src={BlackHorse} alt="Black Horse" className="max-w-sx md:w-md border rounded-md" />
            </div>
            <div style={albumPhotoContainerStyle} className="hidden md:block">
              <img loading="lazy" src={Cow} alt="Water 2" className="hidden md:block max-w-sx md:w-md border rounded-md" />
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
              <img loading="lazy" src={Byala1} alt="Water 1" className="max-w-sx md:w-md border rounded-md" />
            </div>
            <div style={albumPhotoContainerStyle} className="hidden md:block">
              <img loading="lazy" src={Byala2} alt="Water 2" className="hidden md:block max-w-sx md:w-md border rounded-md" />
            </div>
          </div>
          <p className="text-center text-md italic">
            Пълна дезинфекция и осигуряване на безопасност в плувни басейни
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
