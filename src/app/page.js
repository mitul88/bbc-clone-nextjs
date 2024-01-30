import Hero from "@/components/home/Hero";
import NewsSection from "@/components/home/NewsSection";
import { AppNavbar } from "@/components/master/AppNavbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <AppNavbar />
      <Hero />
      <NewsSection />
    </>
  );
}
