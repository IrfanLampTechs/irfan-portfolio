import Encryption from "@/components/main/Encryption";

import Hero from "@/components/main/Hero";
import Message from "@/components/main/Message";
import Project from "@/components/main/Project";
import Skills from "@/components/main/Skills";
// import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-[800px] gap-20">
        <Hero />
        <Encryption />
        <Project />
        <Skills />
        <Message />

        {/* <Footer /> */}
      </div>
    </main>
  );
}
