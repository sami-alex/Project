import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
export default function FooterSection() {
  return (
    <>
      <Grid
        sx={{
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          pt: 5,
          pb: 10,
        }}
        container
      >
        <Grid item xs={12} md={5}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image src={"/images/Union.png"} width={30} height={30} alt="" />
            <Typography
              sx={{
                color: "white",
                fontWeight: "400",
                mx: 3,
                lineHeight: "30px",
              }}
              variant="h5"
            >
              Fluid AI
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "white",
              fontWeight: "400",
              my: 2,
              lineHeight: "30px",
              opacity: 0.7,
            }}
            variant="body1"
          >
            {new Date().getFullYear()} Fluid AI
          </Typography>
        </Grid>
        <Grid item xs={12} md={7}>
          <Grid container sx={{ justifyContent: { xs: "start", md: "end" } }}>
            <Grid item xs={6}>
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "400",
                  my: 1,
                  lineHeight: "30px",
                  opacity: 0.7,
                }}
              >
                Our Features
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "400",
                  my: 1,
                  lineHeight: "30px",
                  opacity: 0.7,
                }}
              >
                Areas
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "400",
                  my: 1,
                  lineHeight: "30px",
                  opacity: 0.7,
                }}
              >
                FAQs
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "400",
                  my: 1,
                  lineHeight: "30px",
                  opacity: 0.7,
                }}
              >
                The Waitlist
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "400",
                  my: 1,
                  lineHeight: "30px",
                  opacity: 0.7,
                }}
              >
                Contact Us
              </Typography>
            </Grid>
            <Grid>
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "400",
                  my: 1,
                  lineHeight: "30px",
                  opacity: 0.7,
                }}
              >
                Terms of Service
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "400",
                  my: 1,
                  lineHeight: "30px",
                  opacity: 0.7,
                }}
              >
                Privacy Policy
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
