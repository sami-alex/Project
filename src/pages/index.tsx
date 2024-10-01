import React from "react";
import HeroSection from "@/sections/landingPage/hero";
import AboutUsSection from "@/sections/landingPage/features";
import { Container } from "@mui/material";
export default function Home() {
  return (
    <>
      <Container maxWidth="xl">
        <HeroSection />
        <AboutUsSection />
      </Container>
    </>
  );
}
