import React from "react";
import HeroSection from "@/sections/landingPage/hero";
import AboutUsSection from "@/sections/landingPage/features";
import { Container } from "@mui/material";
import VisionSection from "@/sections/landingPage/vision";
export default function Home() {
  return (
    <>
      <HeroSection />
      <Container maxWidth="xl">
        <AboutUsSection />
      </Container>
      <VisionSection />
    </>
  );
}
