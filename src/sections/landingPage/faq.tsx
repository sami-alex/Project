import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { faqs } from "@/data/faqs";

export default function FaqSection() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = (panel: any) => (event: any, isExpanded: any) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Grid sx={{ pt: 10, pb: { xs: 10, md: 20 } }} container>
        <Grid item xs={12} md={6} my={2}>
          <Typography
            sx={{
              color: "white",
              fontSize: { xs: "1.3rem", md: "2.4rem" },
              fontWeight: "900",
              width: { xs: "100%", md: "60%" },
            }}
          >
            What can curiosity, wonder, and awe do for you?
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: { xs: "0.7rem", md: "1rem", opacity: 0.6 },
              width: { xs: "100%", md: "70%" },
            }}
          >
            Research shows that experiencing curiosity and awe can immensely
            benefit our mental, physical, and professional health. Here’s a
            brief overview of what curiosity and awe can do for you.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} my={2}>
          <div>
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                expanded={(expanded as any) === index}
                onChange={handleExpansion(index)}
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  borderBottom:
                    index === faqs.length - 1 ? "none" : "1px solid gray", // Bottom border for all except last
                }}
              >
                <AccordionSummary
                  expandIcon={
                    (expanded as any) === index ? (
                      <RemoveIcon sx={{ color: "white" }} />
                    ) : (
                      <AddIcon sx={{ color: "white" }} />
                    )
                  }
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <Typography sx={{ color: "white" }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "black" }}>
                  <Typography sx={{ color: "white" }}>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </Grid>
      </Grid>
    </>
  );
}
