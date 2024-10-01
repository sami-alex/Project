import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
export default function HeroSection() {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Image src={"/images/Union.png"} width={100} height={100} alt="" />
        <Typography
          sx={{ color: "white", fontWeight: "900", mx: 3, lineHeight: "30px" }}
          variant="h1"
        >
          Fluid AI
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            position: "absolute",
            bottom: 20,
          }}
        >
          <Image
            src={"/images/Frame 1171275577.png"}
            width={30}
            height={30}
            alt=""
          />
          <Typography sx={{ color: "white", fontWeight: "300" }} variant="h6">
            Scroll down
          </Typography>
        </Box>
      </Box>
    </>
  );
}
