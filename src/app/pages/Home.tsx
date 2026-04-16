import AboutUsSection from "../components/AboutUsSection";
import PIs from "../components/PIs";

export default function Home() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] md:gap-[30px] items-start relative shrink-0 w-full">
      <AboutUsSection />
      <PIs />
    </div>
  );
}
