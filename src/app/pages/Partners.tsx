function InstitutionCard() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <div className="bg-[#d9d9d9] aspect-square rounded-tl-[20px] rounded-tr-[20px] shrink-0 w-full" />
      <div className="bg-white h-[100px] relative rounded-bl-[20px] rounded-br-[20px] shrink-0 w-full">
        <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[30px] py-[10px] relative size-full">
            <div className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">
              <p className="leading-[normal]">Lorem Ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Partners() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] md:gap-[30px] items-start relative shrink-0 w-full">
      {/* Yellow Section */}
      <div className="bg-[#face35] content-stretch flex flex-col items-center justify-center relative shrink-0 w-full pl-[60px] pr-[0px] py-[40px]">
        <div className="bg-white min-h-[300px] relative rounded-bl-[20px] rounded-tl-[20px] shrink-0 w-full">
          <div className="flex flex-col justify-center size-full">
            <div className="content-stretch flex flex-col gap-[20px] md:gap-[30px] items-start justify-center relative size-full p-[60px]">
              <div className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[1.2] not-italic relative shrink-0 text-[28px] md:text-[40px] text-black w-full">
                <p className="leading-[1.2]">Partners</p>
              </div>
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center pr-0 md:pr-[60px] relative w-full">
                    <div className="flex flex-[1_0_0] flex-col font-['Calibri:Regular',sans-serif] justify-center leading-[1.4] min-h-px min-w-px not-italic relative text-[16px] md:text-[18px] text-black">
                      <p className="leading-[1.4] font-[Calibri]">Lorem ipsum dolor sit amet consectetur. Fermentum aliquam elementum nibh urna vel sed. Nam in tempus vitae eget et nibh velit. Habitasse semper a et elementum euismod neque curabitur. Arcu sodales eget tincidunt purus tellus adipiscing.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blue Section - Collaborating Institutions Grid */}
      <div className="bg-[#0144d5] content-stretch flex flex-col items-center justify-center relative shrink-0 w-full px-[30px] md:px-[60px] lg:px-[120px] py-[40px] md:py-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[30px] w-full">
          {Array.from({ length: 9 }).map((_, index) => (
            <InstitutionCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
