import Encryption from "@/components/main/Encryption";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Project from "@/components/main/Project";
import Skills from "@/components/main/Skills";
// import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-[800px] gap-20">
        <Hero />
        <Encryption />
        <Skills />

        <Project />
        <Footer />
      </div>
    </main>
  );
}
