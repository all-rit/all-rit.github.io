import AccordionItem from '../components/AccordionItem';
import csFlyer from '../../assets/Final-CS4ALL-Flyer.png';

const accordionData = [
  {
    title: 'Cost',
    content: 'TBA',
  },
  {
    title: 'Schedule',
    content: 'TBA',
  },
  {
    title: 'SOCE and CS Certification',
    content: 'TBA',
  },
  {
    title: 'Maps, Parking, and Facilities',
    content: 'TBA',
  },
  {
    title: 'Computers and Wifi Access',
    content: 'TBA',
  },
  {
    title: 'Curriculum Maps',
    content: 'TBA',
  },
  {
    title: 'Lunches',
    content: 'TBA',
  },
  {
    title: 'Hotels',
    content: 'TBA',
  },
  {
    title: 'Surveys',
    content: 'TBA',
  },
  {
    title: 'Questions',
    content: 'TBA',
  },
];

export default function ProfessionalDevelopment() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] md:gap-[30px] items-start relative shrink-0 w-full">
      {/* Yellow Section */}
      <div className="bg-[#face35] content-stretch flex flex-col items-center justify-center relative shrink-0 w-full pl-[60px] pr-[0px] py-[40px]">
        <div className="bg-white min-h-[300px] relative rounded-bl-[20px] rounded-tl-[20px] shrink-0 w-full">
          <div className="flex flex-col justify-center size-full">
            <div className="content-stretch flex flex-col gap-[20px] md:gap-[30px] items-start justify-center relative size-full p-[60px]">
              <div className="flex flex-col font-['Poppins',sans-serif] justify-center not-italic relative shrink-0 text-black w-full">
                <h1>Professional Development</h1>
              </div>
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center pr-0 md:pr-[60px] relative w-full">
                    <div className="flex flex-[1_0_0] flex-col font-['Calibri:Regular',sans-serif] justify-center min-h-px min-w-px not-italic relative text-black">
                      <p>Below, find information about professional development information and opportunities.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full pr-0 md:pr-[60px]">
                <img
                  src={csFlyer}
                  alt="CS4ALL Professional Development Flyer"
                  className="w-full max-w-[700px] mx-auto block"
                />
              </div>


            </div>
          </div>
        </div>
      </div>

      {/* Blue Section - Training & Workshops Accordion */}
      <div className="bg-[#0144d5] content-stretch flex flex-col items-center justify-center relative shrink-0 w-full pl-[30px] md:pl-[60px] pr-[0px] py-[40px]">
        <div className="bg-white relative rounded-bl-[20px] rounded-tl-[20px] shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[40px] md:gap-[60px] items-start justify-center px-[30px] md:px-[60px] lg:px-[100px] py-[40px] md:py-[60px] relative w-full">
            {accordionData.map((item, index) => (
              <AccordionItem key={index} title={item.title} content={item.content} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}