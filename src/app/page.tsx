import Navbar from "../components/navbar/navbar";
import Hero from "../components/hero";
import KeyMetrics from "../components/key-metrics";
import OurServices from "../components/our-services/index";
import CaseStudies from "../components/case-studies/case-studies";
import Team from "../components/team/team";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-100dvw flex justify-center">
        <div className="w-[80%] max-w-[1400px] flex flex-col gap-12">
          <Hero />
          <KeyMetrics />
          <OurServices />
          <CaseStudies />
          <Team />
          <div className="h-[100dvh]"></div>
        </div>
      </div>
    </>
  );
}
