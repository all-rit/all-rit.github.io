import dan from "../../assets/PIs/dan.jpeg";
import farzana from "../../assets/PIs/farzana.png";
import cathleen from "../../assets/PIs/cathleen.jpg";
import zenon from "../../assets/PIs/zenon.jpg";
import endadul from "../../assets/PIs/endadul.jpg";

import { useState, useRef } from "react";

// PI data
const piData = [
  {
    id: 0,
    name: "Daniel Krutz",
    title: "Associate Professor, Software Engineering",
    institution: "Rochester Institute of Technology",
    link: "https://www.rit.edu/directory/dxkvse-daniel-krutz",
    image: dan,
  },
  {
    id: 1,
    name: "Farzana Rahman",
    title: "Associate Teaching Professor",
    institution: "Syracuse University",
    link: "https://ecs.syracuse.edu/faculty-staff/farzana-rahman/",
    image: farzana,
  },
  {
    id: 2,
    name: "Cathleen Cerosaletti",
    title: "Associate Director of Program Evaluation",
    institution: "University of Rochester",
    link: "https://www.rochester.edu/warner/center/about/meet-the-team/",
    image: cathleen,
  },
  {
    id: 3,
    name: "Zenon Borys",
    title: "Assistant Professor (Clinical) and Assistant Director LiDA",
    institution: "University of Rochester",
    link: "https://www.warner.rochester.edu/directory/zenon-borys",
    image: zenon,
  },
  {
    id: 4,
    name: "Endadul Hoque",
    title: "Assistant Professor",
    institution: "Syracuse University",
    link: "https://ecs.syracuse.edu/faculty-staff/endadul-hoque",
    image: endadul,
  },
];

function PIsText() {
  return (
    <div className="relative shrink-0 w-full" data-name="PIs Text">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pr-0 relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Calibri:Regular',sans-serif] justify-center min-h-px min-w-px not-italic relative text-black">
            <p>These are the principal investigators and advisors behind the Accessible Learning Labs team. They provide guidance and leadership for our student team! We invite you to get to know each of them through their individualized cards.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1({ pi }: { pi: typeof piData[0] }) {
  return (
    <div className="bg-[#face35] content-stretch flex flex-col items-center justify-center overflow-clip p-[15px] md:p-[20px] relative rounded-tl-[16px] rounded-tr-[16px] shrink-0">
      <div className="relative rounded-[10px] shrink-0 w-[180px] h-[180px] md:size-[250px] overflow-hidden">
        {pi.image ? (
          <img alt={pi.name} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={pi.image} />
        ) : (
          <div className="absolute inset-0 bg-[#d9d9d9]" />
        )}
      </div>
    </div>
  );
}

function Frame2({ pi }: { pi: typeof piData[0] }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-full items-start justify-center min-h-px min-w-px not-italic relative text-black">
      <div className="flex flex-col font-['Poppins',sans-serif] justify-center relative shrink-0 w-full">
        <a
          href={pi.link}
          target="_blank"
          rel="noopener noreferrer"
          className=" text-black hover:text-[#0144d5] underline underline-offset-2 transition-colors"
        >
          <h2>{pi.name}</h2>
        </a>
      </div>
      <div className="flex flex-col font-['Calibri:Regular',sans-serif] justify-center relative shrink-0 w-full">
        <p>{pi.title}</p>
        <p>{pi.institution}</p>
      </div>
    </div>
  );
}

function CurrentPi({ pi }: { pi: typeof piData[0] }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Current PI">
      <div className="flex flex-col md:flex-row items-center size-full">
        <div className="content-stretch flex flex-col md:flex-row gap-[20px] md:gap-[30px] items-center pr-0 md:pr-[30px] relative w-full">
          <div className="hidden md:block">
            <Frame1 pi={pi} />
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch w-full">
            <Frame2 pi={pi} />
          </div>
        </div>
      </div>
    </div>
  );
}

function PICard({ pi, isActive, onClick }: { pi: typeof piData[0]; isActive: boolean; onClick: () => void }) {
  const cardRef = useRef<HTMLButtonElement>(null);

  return (
    <button
      ref={cardRef}
      onClick={onClick}
      className={`content-stretch flex flex-col items-center relative shrink-0 flex-1 min-w-0 transition-all ${isActive ? 'scale-105' : 'hover:scale-105'
        }`}
      data-name="PI"
      data-active={isActive}
    >
      <div className="aspect-square relative rounded-tl-[10px] rounded-tr-[10px] shrink-0 w-full overflow-hidden">
        {pi.image ? (
          <img alt={pi.name} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={pi.image} />
        ) : (
          <div className="bg-[#d9d9d9] size-full" />
        )}
      </div>
      <div className="bg-white relative rounded-bl-[10px] rounded-br-[10px] shrink-0 w-full">
        <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[5px] items-center justify-center leading-[normal] not-italic px-[10px] py-[14px] relative text-black w-full">
            <div className="flex flex-col font-['Poppins',sans-serif] justify-center relative shrink-0 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] w-full text-center">
              {pi.name}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

function PIsList({ activePiIndex, onPiSelect }: { activePiIndex: number; onPiSelect: (index: number) => void }) {
  return (
    <div className="bg-[#face35] relative rounded-[16px] md:rounded-none md:rounded-tr-[16px] md:rounded-bl-[16px] md:rounded-br-[16px] shrink-0 w-full" data-name="PIs List">
      <div className="flex flex-row items-center rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] sm:gap-[12px] md:gap-[15px] items-stretch p-[15px] md:p-[20px] relative w-full">
          {piData.map((pi, index) => (
            <PICard
              key={pi.id}
              pi={pi}
              isActive={index === activePiIndex}
              onClick={() => onPiSelect(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function PIsCarousel() {
  const [activePiIndex, setActivePiIndex] = useState(0);
  const activePi = piData[activePiIndex];

  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full gap-[30px] md:gap-0" data-name="PIs Carousel">
      {/* Cards first on mobile */}
      <div className="block md:hidden w-full">
        <PIsList activePiIndex={activePiIndex} onPiSelect={setActivePiIndex} />
      </div>

      {/* Current PI info */}
      <CurrentPi pi={activePi} />

      {/* Cards below on desktop */}
      <div className="hidden md:block w-full">
        <PIsList activePiIndex={activePiIndex} onPiSelect={setActivePiIndex} />
      </div>
    </div>
  );
}

function PIsSection() {
  return (
    <div className="bg-white relative rounded-bl-[20px] rounded-tl-[20px] shrink-0 w-full" data-name="PIs Section">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[30px] md:gap-[50px] items-start justify-center relative w-full pl-[60px] pr-[60px] py-[60px]">
          <div className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[1.2] not-italic relative shrink-0 text-[28px] md:text-[40px] text-black w-full">
            <h1>Principal Investigators</h1>
          </div>
          <PIsText />
          <PIsCarousel />
        </div>
      </div>
    </div>
  );
}

export default function PIs() {
  return (
    <div className="bg-[#0144d5] content-stretch flex flex-col items-center justify-center relative shrink-0 w-full pl-[60px] pr-[0px] py-[40px]" data-name="PIs">
      <PIsSection />
    </div>
  );
}