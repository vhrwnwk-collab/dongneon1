import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TemperaturePricing from "@/components/TemperaturePricing";
import StepProcess from "@/components/StepProcess";
import FAQ from "@/components/FAQ";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import FloatingBar from "@/components/FloatingBar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#0b0f19] text-slate-100 pb-16">
      <Header />
      <Hero />
      <TemperaturePricing />
      <StepProcess />
      <FAQ />
      <CtaBanner />
      <Footer />
      <FloatingBar />
    </main>
  );
}
