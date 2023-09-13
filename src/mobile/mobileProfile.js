import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import CardMedia from "@mui/material/CardMedia";
import profile from "../images/profile.jpg";
import DownloadPDF from "../desktop/download";
import { Typography } from "@mui/material";
import { description } from "./../constants";

export default function MobileProfile() {
  const [text, setText] = useState("React Developer");

  useEffect(() => {
    const interval = setInterval(() => {
      const texts = [
        "Web Developer",
        "Full Stack Developer",
        "React Developer",
      ];
      const randomIndex = Math.floor(Math.random() * texts.length);
      setText(texts[randomIndex]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);



  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Grid xs={12}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Grid xs={12}>
              <Typography
                sx={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  margin: "10px",
                  fontFamily: `'jost', sans-serif`,
                }}
              >
                {"Hey there! I am Veera, a "}{text}
              </Typography>
              {/* <Typography
                sx={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  margin: "10px",
                  fontFamily: `'jost', sans-serif`,
                }}
              >
                {"A "}
                {text}
              </Typography> */}
            </Grid>
          </Grid>
        </Grid>

        <Grid xs={12} align="center">
          <CardMedia
            component="img"
            image={profile}
            alt="Profile Pic"
            sx={{
              height: "80%",
              objectFit: "contain",
              objectPosition: "bottom",
              width: "50%",
            }}
          />
        </Grid>
        <Grid item sx={{ marginTop: "10px" }}>
          <DownloadPDF />
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Typography
          sx={{
            fontSize: "18px",
            margin: "10px",
            textAlign: "justify",
            fontFamily: `'jost', sans-serif`,
          }}
        >
          {description}
        </Typography>
      </Grid>
    </React.Fragment>
  );
}
