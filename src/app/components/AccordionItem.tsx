import { useState } from 'react';

interface AccordionItemProps {
  title: string;
  content: string | JSX.Element;
}

export default function AccordionItem({ title, content }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      {/* Header with arrow */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="content-stretch flex h-[60px] items-center justify-between relative shrink-0 w-full cursor-pointer bg-transparent border-none p-0"
      >
        <div className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[1.2] not-italic relative shrink-0 text-[28px] md:text-[40px] text-black w-full text-left">
          <p className="leading-[1.2]">{title}</p>
        </div>
        <div
          className={`flex h-[20px] items-center justify-center relative shrink-0 w-[49px] transition-transform duration-300 ${
            isOpen ? 'rotate-[-90deg]' : 'rotate-90'
          }`}
        >
          <div className="flex flex-col font-['Calibri:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[40px] text-black whitespace-nowrap">
            <p className="leading-[normal]">{`<`}</p>
          </div>
        </div>
      </button>

      {/* Divider line */}
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="h-0 relative w-full border-b border-black" />
      </div>

      {/* Content */}
      {isOpen && (
        <div className="content-stretch flex items-center justify-center pr-0 md:pr-[60px] relative shrink-0 w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Calibri:Regular',sans-serif] justify-center leading-[1.4] min-w-px not-italic relative text-[16px] md:text-[18px] text-black">
            {typeof content === 'string' ? (
              <p className="leading-[1.4] font-[Calibri]">{content}</p>
            ) : (
              content
            )}
          </div>
        </div>
      )}
    </div>
  );
}
