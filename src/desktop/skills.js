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

export default function Skills() {
  const skills = ["Programming Skills", "Tools/IDE", "Databases", "Frameworks"];
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
            sx={{ margin: "10px", fontSize: "15px", fontFamily: `'jost', sans-serif` }}
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
          >
            <AccordionSummary
              expandIcon={!showAll && <ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ backgroundColor: "lightgreen", minHeight: "50px" }}
            >
              <Typography sx={{ fontSize: "15px", fontFamily: `'jost', sans-serif` }}>
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
                {skillIcons.map((item) => (
                  <Grid xs={3} md={1}>
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
  );
}
