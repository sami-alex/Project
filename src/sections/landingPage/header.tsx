import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
export default function Header() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          top: 20,
          position: "fixed",
          zIndex: 10,
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{ color: "white", cursor: "pointer", mx: 2 }}
            variant="body2"
          >
            Our Feature
          </Typography>
          <Typography
            sx={{ color: "white", cursor: "pointer", mx: 2 }}
            variant="body2"
          >
            Areas
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{ color: "white", cursor: "pointer", mx: 2 }}
            variant="body2"
          >
            Faqs
          </Typography>
          <Typography
            sx={{ color: "white", cursor: "pointer", mx: 2 }}
            variant="body2"
          >
            The Waitlist
          </Typography>
        </Box>
      </Box>
    </>
  );
}
