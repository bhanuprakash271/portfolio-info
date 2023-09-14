import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { skillIcons } from "./../constants";
import CardMedia from "@mui/material/CardMedia";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Chip from "@mui/material/Chip";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiAccordionSummary: {
      styleOverrides: {
        content: {
          '&.Mui-expanded': {
          marginTop:'10px', 
          marginBottom:'10px'
          },
        },
      }
    }
  }
});


export default function Skills() {


  const skills = [
    "Programming languages",
    "Frameworks",
    "Software Tools/IDE",
    "Databases",
  ];
  const [showAll, setShowAll] = useState(true);
  const [showSkillIndex, setShowSkillIndex] = useState(null);

  const handleSwitchChange = () => {
    setShowAll(!showAll);
    setShowSkillIndex(null);
  };

  const handleSpecificSkill = (val) => {
    if (val === showSkillIndex) {
      setShowSkillIndex(null);
    } else {
      setShowSkillIndex(val);
    }
  };
  return (
     <ThemeProvider theme={theme}>
    <React.Fragment>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Grid xs={12} align="center">
          <Chip
            variant={"filled"}
            color={showAll ? "success" : "default"}
            label="Show All Skills"
            onClick={() => {
              handleSwitchChange();
            }}
            sx={{
              margin: "10px",
              fontSize: "15px",
              fontFamily: `'jost', sans-serif`,
              borderRadius:'5px',
            }}
          />
        </Grid>
      </Grid>
      {skills.map((skill, index) => {
        return (
          <Accordion
            expanded={showAll || showSkillIndex == index}
            onChange={() => {
              handleSpecificSkill(index);
            }}
            key={index}
          >
            <AccordionSummary
              expandIcon={!showAll && <ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ backgroundColor: "#F6D397",minHeight:'30px'}}
            >
              <Typography
                sx={{ fontSize: "16px", fontFamily: `'jost', sans-serif` }}
              >
                {skill}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={1}
              >
                {skillIcons[index].map((item, idx) => (
                  <Grid xs={3} md={1} key={idx}>
                    <CardMedia
                      component="img"
                      src={item}
                      alt="img"
                      sx={{ height: "40px", width: "40px" }}
                    />
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </React.Fragment>
     </ThemeProvider>
  );
}
