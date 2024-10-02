import React from "react";
import HeroSection from "@/sections/landingPage/hero";
import AboutUsSection from "@/sections/landingPage/features";
import { Container } from "@mui/material";
import VisionSection from "@/sections/landingPage/vision";
import FooterSection from "@/sections/landingPage/footer";
import Header from "@/sections/landingPage/header";
import WaitingSection from "@/sections/landingPage/waitList";
import FaqSection from "@/sections/landingPage/faq";
export default function Home() {
  return (
    <>
      <Header />

      <HeroSection />
      <Container maxWidth="xl">
        <AboutUsSection />
      </Container>
      <VisionSection />
      <Container maxWidth="xl">
        <FaqSection />
      </Container>
      <WaitingSection />

      <Container maxWidth="xl">
        <FooterSection />
      </Container>
    </>
  );
}
