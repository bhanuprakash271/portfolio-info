import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skills from "./skills";
import Home from "./home";
import Education from "./education";
import Recommendation from "./recommendation";
import Projects from "./projects";
import Experience from "./experience";
import MobileHeaderChip from "../mobile/mobileHeaderChip";
import { navigateCardIcons } from "./../constants";

export default function DesktopAlignment(props) {
  return (
    <React.Fragment>
      <Card
        variant="outlined"
        sx={{
          backgroundColor: "lightblue",
          marginLeft: "5px",
          borderRadius: "0px",
          marginBottom: "100px",
          minHeight: "100vh",
        }}
      >
        <CardContent>
          {props.verticalView ? (
            <React.Fragment>
              <div id="1">
                <Home />
              </div>
              <div id="2">
                <MobileHeaderChip
                  label={"Experience"}
                  icon={navigateCardIcons.experience}
                />
                <Experience />
              </div>
              <div id="3">
                <MobileHeaderChip
                  label={"Projects"}
                  icon={navigateCardIcons.projects}
                />
                <Projects />
              </div>
              <div id="4">
                <MobileHeaderChip
                  label={"Education"}
                  icon={navigateCardIcons.education}
                />
                <Education />
              </div>
              <div id="5">
                <MobileHeaderChip
                  label={"Skills"}
                  icon={navigateCardIcons.skills}
                />
                <Skills />
              </div>
              <div id="6">
                <MobileHeaderChip
                  label={"Recommendations"}
                  icon={navigateCardIcons.recommendations}
                />
                <Recommendation isMobile={false} />
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {props.activateSectionNbr === 1 && <Home />}
              {props.activateSectionNbr === 2 && <Experience />}
              {props.activateSectionNbr === 3 && <Projects />}
              {props.activateSectionNbr === 4 && <Education />}
              {props.activateSectionNbr === 5 && <Skills />}
              {props.activateSectionNbr === 6 && <Recommendation />}
            </React.Fragment>
          )}
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
