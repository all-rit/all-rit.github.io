import AccordionItem from '../components/AccordionItem';
import csFlyer from '../../assets/Final-CS4ALL-Flyer.png';

const accordionData = [
  {
    title: 'Cost',
    content: 'There is no cost to attend this PD. We encourage school districts however to cover teacher travel costs and pay them a stipend if possible.',
  },
  {
    title: 'Schedule',
    content: (
      <>
        <p className="leading-[1.4] mb-0 font-[Calibri]">Lorem ipsum dolor sit amet consectetur. Vel cras quis lectus nunc. Id ut fringilla id placerat ut felis nisi vitae. Tristique netus eget nisl ipsum sollicitudin in. Molestie hendrerit et ut volutpat. Ultricies imperdiet nulla velit proin viverra aliquet.</p>
        <p className="leading-[1.4] font-[Calibri]">Viverra sit tempus vestibulum lectus dictum. Faucibus dolor proin integer a. Suspendisse porttitor mattis quis sem. Praesent convallis volutpat est felis phasellus sapien. Vitae et porttitor suspendisse sed felis mi ornare ut hendrerit. Elit at fames facilisi amet odio. Neque maecenas feugiat proin dui lorem pellentesque. Lobortis viverra odio dignissim purus sit nisi amet risus.</p>
      </>
    ),
  },
  {
    title: 'SOCE and CS Certification',
    content: 'Lorem ipsum dolor sit amet consectetur. Adipiscing egestas vel ultrices sed nulla vel. Sapien quis id scelerisque montes ac. Donec aliquam amet magna risus lorem tincidunt. Sed vitae lectus ullamcorper iaculis sagittis at suscipit. Maecenas quam placerat vitae amet. Nulla risus in est et vitae tortor placerat mattis. Lacinia a nulla tincidunt nunc nulla neque suscipit sit sed. Tellus pellentesque quam dapibus euismod sit mauris sed velit mi. Ornare nunc pharetra consectetur neque. Proin eget eros lacus morbi est elementum sit urna. Massa molestie habitasse interdum vel. Non tempus maecenas porttitor porta velit auctor. Pellentesque pulvinar vulputate aenean id facilisis mi pulvinar facilisi. Faucibus consectetur arcu nulla molestie placerat est.',
  },
  {
    title: 'Maps, Parking, and Facilities',
    content: 'Lorem ipsum dolor sit amet consectetur. Adipiscing egestas vel ultrices sed nulla vel. Sapien quis id scelerisque montes ac. Donec aliquam amet magna risus lorem tincidunt. Sed vitae lectus ullamcorper iaculis sagittis at suscipit. Maecenas quam placerat vitae amet. Nulla risus in est et vitae tortor placerat mattis. Lacinia a nulla tincidunt nunc nulla neque suscipit sit sed. Tellus pellentesque quam dapibus euismod sit mauris sed velit mi. Ornare nunc pharetra consectetur neque. Proin eget eros lacus morbi est elementum sit urna. Massa molestie habitasse interdum vel. Non tempus maecenas porttitor porta velit auctor. Pellentesque pulvinar vulputate aenean id facilisis mi pulvinar facilisi. Faucibus consectetur arcu nulla molestie placerat est.',
  },
  {
    title: 'Computers and Wifi Access',
    content: 'Lorem ipsum dolor sit amet consectetur. Adipiscing egestas vel ultrices sed nulla vel. Sapien quis id scelerisque montes ac. Donec aliquam amet magna risus lorem tincidunt. Sed vitae lectus ullamcorper iaculis sagittis at suscipit. Maecenas quam placerat vitae amet. Nulla risus in est et vitae tortor placerat mattis. Lacinia a nulla tincidunt nunc nulla neque suscipit sit sed. Tellus pellentesque quam dapibus euismod sit mauris sed velit mi. Ornare nunc pharetra consectetur neque. Proin eget eros lacus morbi est elementum sit urna. Massa molestie habitasse interdum vel. Non tempus maecenas porttitor porta velit auctor. Pellentesque pulvinar vulputate aenean id facilisis mi pulvinar facilisi. Faucibus consectetur arcu nulla molestie placerat est.',
  },
  {
    title: 'Curriculum Maps',
    content: 'Lorem ipsum dolor sit amet consectetur. Adipiscing egestas vel ultrices sed nulla vel. Sapien quis id scelerisque montes ac. Donec aliquam amet magna risus lorem tincidunt. Sed vitae lectus ullamcorper iaculis sagittis at suscipit. Maecenas quam placerat vitae amet. Nulla risus in est et vitae tortor placerat mattis. Lacinia a nulla tincidunt nunc nulla neque suscipit sit sed. Tellus pellentesque quam dapibus euismod sit mauris sed velit mi. Ornare nunc pharetra consectetur neque. Proin eget eros lacus morbi est elementum sit urna. Massa molestie habitasse interdum vel. Non tempus maecenas porttitor porta velit auctor. Pellentesque pulvinar vulputate aenean id facilisis mi pulvinar facilisi. Faucibus consectetur arcu nulla molestie placerat est.',
  },
  {
    title: 'Lunches',
    content: 'Lorem ipsum dolor sit amet consectetur. Adipiscing egestas vel ultrices sed nulla vel. Sapien quis id scelerisque montes ac. Donec aliquam amet magna risus lorem tincidunt. Sed vitae lectus ullamcorper iaculis sagittis at suscipit. Maecenas quam placerat vitae amet. Nulla risus in est et vitae tortor placerat mattis. Lacinia a nulla tincidunt nunc nulla neque suscipit sit sed. Tellus pellentesque quam dapibus euismod sit mauris sed velit mi. Ornare nunc pharetra consectetur neque. Proin eget eros lacus morbi est elementum sit urna. Massa molestie habitasse interdum vel. Non tempus maecenas porttitor porta velit auctor. Pellentesque pulvinar vulputate aenean id facilisis mi pulvinar facilisi. Faucibus consectetur arcu nulla molestie placerat est.',
  },
  {
    title: 'Hotels',
    content: 'Lorem ipsum dolor sit amet consectetur. Adipiscing egestas vel ultrices sed nulla vel. Sapien quis id scelerisque montes ac. Donec aliquam amet magna risus lorem tincidunt. Sed vitae lectus ullamcorper iaculis sagittis at suscipit. Maecenas quam placerat vitae amet. Nulla risus in est et vitae tortor placerat mattis. Lacinia a nulla tincidunt nunc nulla neque suscipit sit sed. Tellus pellentesque quam dapibus euismod sit mauris sed velit mi. Ornare nunc pharetra consectetur neque. Proin eget eros lacus morbi est elementum sit urna. Massa molestie habitasse interdum vel. Non tempus maecenas porttitor porta velit auctor. Pellentesque pulvinar vulputate aenean id facilisis mi pulvinar facilisi. Faucibus consectetur arcu nulla molestie placerat est.',
  },
  {
    title: 'Surveys',
    content: 'Lorem ipsum dolor sit amet consectetur. Adipiscing egestas vel ultrices sed nulla vel. Sapien quis id scelerisque montes ac. Donec aliquam amet magna risus lorem tincidunt. Sed vitae lectus ullamcorper iaculis sagittis at suscipit. Maecenas quam placerat vitae amet. Nulla risus in est et vitae tortor placerat mattis. Lacinia a nulla tincidunt nunc nulla neque suscipit sit sed. Tellus pellentesque quam dapibus euismod sit mauris sed velit mi. Ornare nunc pharetra consectetur neque. Proin eget eros lacus morbi est elementum sit urna. Massa molestie habitasse interdum vel. Non tempus maecenas porttitor porta velit auctor. Pellentesque pulvinar vulputate aenean id facilisis mi pulvinar facilisi. Faucibus consectetur arcu nulla molestie placerat est.',
  },
  {
    title: 'Questions',
    content: 'Lorem ipsum dolor sit amet consectetur. Adipiscing egestas vel ultrices sed nulla vel. Sapien quis id scelerisque montes ac. Donec aliquam amet magna risus lorem tincidunt. Sed vitae lectus ullamcorper iaculis sagittis at suscipit. Maecenas quam placerat vitae amet. Nulla risus in est et vitae tortor placerat mattis. Lacinia a nulla tincidunt nunc nulla neque suscipit sit sed. Tellus pellentesque quam dapibus euismod sit mauris sed velit mi. Ornare nunc pharetra consectetur neque. Proin eget eros lacus morbi est elementum sit urna. Massa molestie habitasse interdum vel. Non tempus maecenas porttitor porta velit auctor. Pellentesque pulvinar vulputate aenean id facilisis mi pulvinar facilisi. Faucibus consectetur arcu nulla molestie placerat est.',
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
                      <p>Lorem ipsum dolor sit amet consectetur. Fermentum aliquam elementum nibh urna vel sed. Nam in tempus vitae eget et nibh velit. Habitasse semper a et elementum euismod neque curabitur. Arcu sodales eget tincidunt purus tellus adipiscing.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CS4ALL Flyer */}
              <div className="w-full pr-0 md:pr-[60px]">
                <img
                  src={csFlyer}
                  alt="CS4ALL Professional Development Flyer"
                  className="w-full"
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