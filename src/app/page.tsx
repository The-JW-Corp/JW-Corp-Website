import Navbar from "../components/navbar/navbar";
import Hero from "../components/hero";
import KeyMetrics from "../components/key-metrics";
import OurServices from "../components/our-services/index";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-100dvw flex justify-center">
        <div className="w-[80%] max-w-[1200px]">
          <Hero />
          <KeyMetrics />
          <OurServices />
          <div className="h-[100dvh]"></div>
        </div>
      </div>
    </>
  );
}
