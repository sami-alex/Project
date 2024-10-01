import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { features } from "@/data/features";
export default function FeaturesSection() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "black",
          py: 5,
        }}
      >
        <Typography sx={{ color: "white", textAlign: "center", opacity: 0.5 }}>
          Our Features
        </Typography>
        <Typography
          sx={{ color: "white", textAlign: "center", mt: 4 }}
          variant="h3"
        >
          Fluid AI was born out of a
        </Typography>
        <Typography sx={{ color: "white", textAlign: "center" }} variant="h3">
          desire to simplify and
        </Typography>
        <Typography sx={{ color: "white", textAlign: "center" }} variant="h3">
          streamline modern life
        </Typography>

        <Box sx={{ my: 10 }}>
          <Box width={"100%"}>
            {features.map((feature, index) => {
              return (
                <Grid
                  container
                  key={index}
                  alignItems="center"
                  spacing={4}
                  sx={{ my: 10, position: "relative" }}
                >
                  <Grid item xs={12} md={4} order={{ xs: 1, md: 2 }}>
                    <Box
                      sx={{
                        width: "100%",
                        height: { xs: "40vh", md: "60vh" },
                        position: "relative",
                      }}
                    >
                      <Image
                        src={feature.imageUrl}
                        alt=""
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </Box>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={4}
                    order={{
                      xs: 2,
                      md: feature.contentDirection === "left" ? 1 : 1,
                    }}
                  >
                    {feature.contentDirection === "left" && (
                      <>
                        <Typography sx={{ color: "white" }} variant="h4">
                          {feature.title}
                        </Typography>
                        <Typography
                          sx={{ color: "white", opacity: 0.7 }}
                          variant="body2"
                        >
                          {feature.content}
                        </Typography>
                        <Typography
                          sx={{
                            color: "white",
                            opacity: 0.7,
                            position: { xs: "relative", md: "absolute" },
                            bottom: { xs: "auto", md: 0 },
                            textAlign: { xs: "center", md: "left" },
                            width: "100%",
                            mt: { xs: 2, md: 0 },
                          }}
                          variant="body2"
                        >
                          {index + 1}/{features.length}
                        </Typography>
                      </>
                    )}
                  </Grid>

                  {feature.contentDirection === "right" && (
                    <Grid item xs={12} md={4} order={{ xs: 2, md: 3 }}>
                      <Typography sx={{ color: "white" }} variant="h4">
                        {feature.title}
                      </Typography>
                      <Typography
                        sx={{ color: "white", opacity: 0.7 }}
                        variant="body2"
                      >
                        {feature.content}
                      </Typography>
                      <Typography
                        sx={{
                          color: "white",
                          opacity: 0.7,
                          position: { xs: "relative", md: "absolute" },
                          bottom: { xs: "auto", md: 0 },
                          textAlign: { xs: "center", md: "left" },
                          width: "100%",
                          mt: { xs: 2, md: 0 },
                        }}
                        variant="body2"
                      >
                        {index + 1}/{features.length}
                      </Typography>
                    </Grid>
                  )}
                </Grid>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
}
