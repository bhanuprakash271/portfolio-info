import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import CardMedia from "@mui/material/CardMedia";
import profile from "../images/profile.jpg";
import IconButton from "@mui/material/IconButton";
import DownloadPDF from "./download";
import { socialIcons } from "../constants";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skills from "./skills";
import Home from "./home";
import NavigateCard from "./navigateCard";
import Education from "./education";
import Recommendation from "./recommendation";
import Projects from "./projects";
import Experience from "./experience";
import MobileHeaderChip from "../mobile/mobileHeaderChip";
import { navigateCardIcons } from "./../constants";
import MobileProfile from "../mobile/mobileProfile";
import MobileContact from "../mobile/mobileContact";


export default function MobileAlignment(props) {
  return (
<Grid xs={12}>
            <Card
              variant="outlined"
              sx={{
                backgroundColor: "lightblue",
                // margin: "5px",
                // borderRadius: "10px",
              }}
            >
              <CardContent>
                <div id="1">
                  <MobileProfile />
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
                  <Recommendation isMobile={true} />
                </div>

                <div id="7">
                  <MobileHeaderChip
                    label={"Contact Me"}
                    icon={navigateCardIcons.contact}
                  />
                  <MobileContact handleSocialIconClick={props.handleSocialIconClick} />
                </div>
              </CardContent>
            </Card>
          </Grid>
  );
}
