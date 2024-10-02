import React from "react";
import HeroSection from "@/sections/landingPage/hero";
import AboutUsSection from "@/sections/landingPage/features";
import { Container } from "@mui/material";
import VisionSection from "@/sections/landingPage/vision";
import FooterSection from "@/sections/landingPage/footer";
import Header from "@/sections/landingPage/header";
import WaitingSection from "@/sections/landingPage/waitList";
export default function Home() {
  return (
    <>
      <Header />

      <HeroSection />
      <Container maxWidth="xl">
        <AboutUsSection />
      </Container>
      <VisionSection />
      <WaitingSection />
      <Container maxWidth="xl">
        <FooterSection />
      </Container>
    </>
  );
}
