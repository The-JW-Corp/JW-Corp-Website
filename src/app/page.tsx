import Navbar from "../components/navbar/navbar";
import Hero from "../components/hero";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-100dvw flex justify-center">
        <div className="w-[80%]">
          <Hero />
          <div className="h-[100dvh]"></div>
        </div>
      </div>
    </>
  );
}
