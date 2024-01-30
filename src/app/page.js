import Hero from "@/components/home/Hero";
import { AppNavbar } from "@/components/master/AppNavbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <AppNavbar />
      <Hero />
    </>
  );
}
