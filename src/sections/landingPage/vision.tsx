import { Box, Container, IconButton, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { visions } from "@/data/visions";
import Slider from "react-slick";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function VisionSection() {
  const sliderRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const goToNext = () => {
    (sliderRef as any).current.slickNext();
  };

  const goToPrev = () => {
    (sliderRef as any).current.slickPrev();
  };

  const goToSlide = (index: any) => {
    (sliderRef as any).current.slickGoTo(index);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    afterChange: (current: any) => setCurrentPage(current),
  };
  return (
    <>
      <Box
        sx={{
          backgroundColor: "black",
          my: 2,
        }}
      >
        <Container maxWidth="xl">
          <Typography
            sx={{
              width: { xs: "100%", md: "50%" },
              color: "white",
              fontWeight: "400",
              my: 4,
            }}
            variant="h4"
          >
            Fluid AI was born out of a desire to simplify and streamline modern
            life
          </Typography>
        </Container>
        <Slider {...settings} ref={sliderRef}>
          {visions.map((vision, index) => (
            <Box
              height={"95vh"}
              width={"100%"}
              sx={{ px: 1, position: "relative" }}
              key={index}
            >
              <Image fill alt="" src={vision.imageUrl} />

              <Box
                sx={{
                  background:
                    "linear-gradient(187.83deg, rgba(186, 186, 186, 0) 14.03%, rgba(186, 186, 186, 0.4) 94.25%)",
                  borderWidth: "2px",
                  borderStyle: "solid",
                  position: "relative",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  borderColor: "rgba(255, 255, 255, 0.4)",
                  borderRadius: "10px",
                  p: 2,
                  zIndex: 4,
                  height: { xs: "70vh", md: "50vh" },
                  width: { xs: "80vw", md: "50%" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <IconButton
                  size="large"
                  onClick={goToPrev}
                  sx={{
                    display: { xs: "none", md: "grid" },
                    position: "absolute",
                    top: "50%",
                    left: "-100px",
                    zIndex: 10,
                    "&.MuiIconButton-root": {
                      backgroundColor: "rgba(100, 100, 100, 0.3)",
                      "&:hover": {
                        backgroundColor: "rgba(100, 100, 100, 0.7)",
                      },
                    },
                  }}
                >
                  <ArrowBackIcon sx={{ color: "white" }} />
                </IconButton>

                <Typography
                  sx={{
                    width: { xs: "100%", md: "50%" },
                    color: "white",
                    fontWeight: "400",
                  }}
                  variant="h6"
                >
                  {vision.content}
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: "400",
                  }}
                  variant="h3"
                >
                  {vision.title}
                </Typography>

                <IconButton
                  size="large"
                  onClick={goToNext}
                  sx={{
                    display: { xs: "none", md: "grid" },
                    position: "absolute",
                    top: "50%",
                    right: "-100px",
                    zIndex: 10,
                    "&.MuiIconButton-root": {
                      backgroundColor: "rgba(100, 100, 100, 0.3)",
                      "&:hover": {
                        backgroundColor: "rgba(100, 100, 100, 0.7)",
                      },
                    },
                  }}
                >
                  <ArrowForwardIcon sx={{ color: "white" }} />
                </IconButton>

                <Box
                  sx={{
                    position: "absolute",
                    display: "flex",
                    bottom: "-30px",
                    zIndex: 10,
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  {visions.map((_, index) => {
                    return (
                      <Box
                        key={index}
                        onClick={() => goToSlide(index)}
                        sx={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          backgroundColor:
                            index === currentPage ? "white" : "gray",
                          mx: 2,
                          cursor: "pointer",
                          transition: "background-color 0.3s ease",
                        }}
                      ></Box>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
}
