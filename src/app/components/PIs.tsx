import imgRectangle1 from "figma:asset/caaf19ddeeb68825ccf40dafa063302a406a1aaf.png";
import { useState, useRef, useEffect } from "react";

// PI data
const piData = [
  {
    id: 0,
    name: "Farzana Rahman",
    title: "Principal Investigator",
    institution: "Syracuse University",
    bio: "Lorem ipsum dolor sit amet consectetur. Tristique tellus sit donec sed. Venenatis condimentum massa pellentesque elit. Accumsan libero volutpat lectus sagittis ac bibendum neque. Leo augue egestas gravida etiam. Id morbi blandit condimentum rhoncus commodo amet. Pellentesque feugiat cursus quam diam aliquam enim dignissim.",
    image: imgRectangle1,
  },
  {
    id: 1,
    name: "John Smith",
    title: "Principal Investigator",
    institution: "Stanford University",
    bio: "Expert in computational biology and machine learning applications in healthcare research. Leading multiple NIH-funded projects.",
    image: null,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "Principal Investigator",
    institution: "MIT",
    bio: "Specializing in biomedical engineering and developing innovative solutions for medical diagnostics and treatment.",
    image: null,
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "Principal Investigator",
    institution: "UC Berkeley",
    bio: "Focused on data science and statistical methods for clinical trials and epidemiological studies.",
    image: null,
  },
  {
    id: 4,
    name: "Emily Davis",
    title: "Principal Investigator",
    institution: "Harvard University",
    bio: "Researching precision medicine and personalized treatment approaches using genomic data and AI technologies.",
    image: null,
  },
];

function PIsText() {
  return (
    <div className="relative shrink-0 w-full" data-name="PIs Text">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pr-0 md:pr-[300px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Calibri:Regular',sans-serif] justify-center leading-[1.4] min-h-px min-w-px not-italic relative text-[16px] md:text-[18px] text-black">
            <p className="leading-[1.4] p-[0px]">Lorem ipsum dolor sit amet consectetur. At urna vel diam egestas pulvinar integer. Aliquam non arcu dui integer nam rutrum neque adipiscing. Phasellus amet adipiscing dolor leo curabitur sit ipsum magna est.</p>
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-full items-start justify-center leading-[1.4] min-h-px min-w-px not-italic relative text-black">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center relative shrink-0 text-[18px] md:text-[20px] w-full">
        <p className="leading-[1.4]">{pi.name}</p>
      </div>
      <div className="flex flex-col font-['Calibri:Regular',sans-serif] justify-center relative shrink-0 text-[16px] md:text-[18px] w-full">
        <p className="leading-[1.4] mb-0">{pi.title}</p>
        <p className="leading-[1.4]">{pi.institution}</p>
      </div>
      <div className="flex flex-col font-['Calibri:Regular',sans-serif] justify-center relative shrink-0 text-[16px] md:text-[18px] w-full">
        <p className="leading-[1.4]">{pi.bio}</p>
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
      className={`content-stretch flex flex-col items-center relative shrink-0 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] transition-all ${
        isActive ? 'scale-105' : 'hover:scale-105'
      }`}
      data-name="PI"
      data-active={isActive}
    >
      <div className="h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] relative rounded-tl-[10px] rounded-tr-[10px] shrink-0 w-full overflow-hidden">
        {pi.image ? (
          <img alt={pi.name} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={pi.image} />
        ) : (
          <div className="bg-[#d9d9d9] size-full" />
        )}
      </div>
      <div className="bg-white relative rounded-bl-[10px] rounded-br-[10px] shrink-0 w-full">
        <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[5px] items-start justify-center leading-[normal] not-italic px-[10px] py-[8px] relative text-black w-full">
            <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center relative shrink-0 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] w-full">
              <p className="leading-[normal] break-words">{pi.name}</p>
            </div>
            <div className="flex flex-col font-['Calibri:Regular',sans-serif] justify-center relative shrink-0 text-[11px] sm:text-[12px] md:text-[13px] w-full">
              <p className="leading-[normal] break-words">{pi.title}</p>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

function PIsList({ activePiIndex, onPiSelect }: { activePiIndex: number; onPiSelect: (index: number) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handlePrev = () => {
    onPiSelect(activePiIndex === 0 ? piData.length - 1 : activePiIndex - 1);
  };

  const handleNext = () => {
    onPiSelect((activePiIndex + 1) % piData.length);
  };

  // Scroll active card to center when it changes
  useEffect(() => {
    const container = containerRef.current;
    const activeCard = container?.querySelector('[data-active="true"]') as HTMLElement;
    
    if (container && activeCard) {
      const containerRect = container.getBoundingClientRect();
      const cardRect = activeCard.getBoundingClientRect();
      const scrollLeft = activeCard.offsetLeft - (containerRect.width / 2) + (cardRect.width / 2);
      
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  }, [activePiIndex]);

  return (
    <div className="bg-[#face35] relative rounded-[16px] md:rounded-none md:rounded-bl-[16px] shrink-0 w-full" data-name="PIs List">
      <div className="flex flex-row items-center overflow-x-hidden rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] sm:gap-[12px] md:gap-[15px] items-center p-[15px] md:p-[20px] relative w-full justify-between">
          <button
            onClick={handlePrev}
            className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-white min-w-[20px] md:min-w-[30px] cursor-pointer bg-transparent border-none hover:scale-110 transition-transform"
            aria-label="Previous PI"
          >
            <p className="leading-[normal]">{`<`}</p>
          </button>
          <div ref={containerRef} className="flex gap-[10px] sm:gap-[12px] md:gap-[15px] items-center flex-1 overflow-x-auto scroll-smooth" style={{ scrollbarWidth: 'none' }}>
            {/* Add spacer before first card to enable centering */}
            <div className="shrink-0" style={{ width: 'calc(50% - 70px)' }} />
            {piData.map((pi, index) => (
              <PICard
                key={pi.id}
                pi={pi}
                isActive={index === activePiIndex}
                onClick={() => onPiSelect(index)}
              />
            ))}
            {/* Add spacer after last card to enable centering */}
            <div className="shrink-0" style={{ width: 'calc(50% - 70px)' }} />
          </div>
          <button
            onClick={handleNext}
            className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-white min-w-[20px] md:min-w-[30px] cursor-pointer bg-transparent border-none hover:scale-110 transition-transform"
            aria-label="Next PI"
          >
            <p className="leading-[normal]">{`>`}</p>
          </button>
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
      {/* Carousel first on mobile */}
      <div className="block md:hidden w-full">
        <PIsList activePiIndex={activePiIndex} onPiSelect={setActivePiIndex} />
      </div>
      
      {/* Current PI info */}
      <CurrentPi pi={activePi} />
      
      {/* Carousel below on desktop */}
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
          <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[1.2] not-italic relative shrink-0 text-[28px] md:text-[40px] text-black w-full">
            <p className="leading-[1.2]">Principal Investigators</p>
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
