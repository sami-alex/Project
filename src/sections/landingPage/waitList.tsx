import {
  Box,
  Typography,
  TextField,
  Button,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";

const countries = [
  { code: "US", name: "United States", flag: "/us.svg" },
  { code: "CA", name: "Canada", flag: "/ca.svg" },
];

export default function WaitingSection() {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryChange = (event: any) => {
    setSelectedCountry(event.target.value);
  };

  const selectedCountryObj = countries.find(
    (country) => country.code === selectedCountry
  );

  return (
    <Box
      sx={{
        position: "relative",
        py: 10,
        px: 2,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Image src={"/Снимок экрана 2024-07-30 в 11.32.25 2.png"} alt="" fill />
      <Box sx={{ position: "relative", zIndex: 10, mx: { xs: 0, md: 5 } }}>
        <Typography
          sx={{ color: "white", cursor: "pointer", mx: 2 }}
          variant="h3"
        >
          Join the Fluid AI
        </Typography>
        <Typography
          sx={{ color: "white", cursor: "pointer", mx: 2 }}
          variant="h3"
        >
          Waitlist Today!
        </Typography>
        <Box
          sx={{
            display: { xs: "", md: "flex" },
            flexDirection: "column",

            mt: 4,
            mx: 2,
          }}
        >
          <TextField
            variant="standard"
            label="Name"
            fullWidth
            InputProps={{
              sx: {
                backgroundColor: "transparent",
                borderBottom: "1px solid white",
                "& .MuiInputBase-input": {
                  borderBottom: "none",
                  color: "white",
                  backgroundColor: "transparent",
                },
              },
            }}
            sx={{
              mb: 2,
              "& .MuiFormLabel-root": {
                color: "rgba(255, 255, 255, 0.4)",
              },
              "& .MuiInputBase-root:before": {
                borderBottom: "none",
              },
              "& .MuiInputBase-root:after": {
                borderBottom: "none",
              },
            }}
          />
          <TextField
            variant="standard"
            label="Email"
            fullWidth
            InputProps={{
              sx: {
                backgroundColor: "transparent",
                borderBottom: "1px solid white",
                "& .MuiInputBase-input": {
                  borderBottom: "none",
                  color: "rgba(255, 255, 255, 0.4)",
                  backgroundColor: "transparent",
                },
              },
            }}
            sx={{
              mb: 2,
              "& .MuiFormLabel-root": {
                color: "rgba(255, 255, 255, 0.4)",
              },
              "& .MuiInputBase-root:before": {
                borderBottom: "none",
              },
              "& .MuiInputBase-root:after": {
                borderBottom: "none",
              },
            }}
          />
          <FormControl variant="standard" sx={{ mb: 2 }} fullWidth>
            <InputLabel sx={{ color: "white" }}>Country</InputLabel>
            <Select
              fullWidth
              value={selectedCountry}
              onChange={handleCountryChange}
              renderValue={(value) => (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {selectedCountryObj && (
                    <img
                      src={selectedCountryObj.flag}
                      alt={selectedCountryObj.name}
                      style={{ width: "20px", marginRight: "8px" }}
                    />
                  )}
                  {selectedCountryObj?.name}
                </Box>
              )}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: "black",
                    color: "white",
                  },
                },
              }}
              sx={{
                backgroundColor: "transparent",
                borderBottom: "1px solid white",
                color: "white",
                "& .MuiSelect-select": {
                  color: "white",
                  backgroundColor: "transparent",
                },
                "& .MuiSelect-icon": {
                  color: "white",
                },
                "& .MuiInputBase-root:before": {
                  borderBottom: "none",
                },
                "& .MuiInputBase-root:after": {
                  borderBottom: "none",
                },
              }}
            >
              {countries.map((country) => (
                <MenuItem
                  key={country.code}
                  value={country.code}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    src={country.flag}
                    alt={country.name}
                    style={{ width: "20px", marginRight: "8px" }}
                  />
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            variant="contained"
            sx={{
              color: "black",
              "&:hover": {
                backgroundColor: "lightgray",
              },
              mt: 2,
              "&.MuiButton-root": {
                backgroundColor: "white",
                width: "200px",
                borderRadius: "100px",
                py: 1,
                boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.7)",
              },
            }}
          >
            Join Waitlist
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          zIndex: 10,
          height: "60vh",
          width: { xs: "100%", md: "60%" },
          bottom: -100,
        }}
      >
        <Image src={"/Mask group (1).png"} alt="" fill objectFit="contain" />
      </Box>
    </Box>
  );
}
