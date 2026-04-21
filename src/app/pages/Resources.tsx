export default function Resources() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] md:gap-[30px] items-start relative shrink-0 w-full">
      {/* Yellow Section */}
      <div className="bg-[#face35] content-stretch flex flex-col items-center justify-center relative shrink-0 w-full pl-[60px] pr-[0px] py-[40px]">
        <div className="bg-white min-h-[300px] relative rounded-bl-[20px] rounded-tl-[20px] shrink-0 w-full">
          <div className="flex flex-col justify-center size-full">
            <div className="content-stretch flex flex-col gap-[20px] md:gap-[30px] items-start justify-center relative size-full p-[60px]">
              <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[1.2] not-italic relative shrink-0 text-[28px] md:text-[40px] text-black w-full">
                <p className="leading-[1.2]">Resources</p>
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

      {/* Blue Section */}
      <div className="bg-[#0144d5] content-stretch flex flex-col items-center justify-center relative shrink-0 w-full pl-[60px] pr-[0px] py-[40px]">
        <div className="bg-white min-h-[300px] relative rounded-bl-[20px] rounded-tl-[20px] shrink-0 w-full">
          <div className="flex flex-col justify-center size-full">
            <div className="content-stretch flex flex-col gap-[20px] md:gap-[30px] items-start justify-center relative size-full p-[60px]">
              <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[1.2] not-italic relative shrink-0 text-[28px] md:text-[40px] text-black w-full">
                <p className="leading-[1.2]">Research Tools</p>
              </div>
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center pr-0 md:pr-[60px] relative w-full">
                    <div className="flex flex-[1_0_0] flex-col font-['Calibri:Regular',sans-serif] justify-center leading-[1.4] min-h-px min-w-px not-italic relative text-[16px] md:text-[18px] text-black">
                      <p className="leading-[1.4] font-[Calibri]">Lorem ipsum dolor sit amet consectetur. At urna vel diam egestas pulvinar integer. Aliquam non arcu dui integer nam rutrum neque adipiscing. Phasellus amet adipiscing dolor leo curabitur sit ipsum magna est.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
