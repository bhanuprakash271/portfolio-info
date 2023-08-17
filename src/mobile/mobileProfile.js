import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import CardMedia from "@mui/material/CardMedia";
import profile from "../desktop/profile.jpg";
import DownloadPDF from "../desktop/download";
import { Typography } from "@mui/material";
import { description } from "./../constants";

export default function MobileProfile() {
  const [text, setText] = useState("React Developer");

  useEffect(() => {
    const interval = setInterval(() => {
      // Define an array of texts to shuffle
      const texts = [
        "Web Developer",
        "Full Stack Developer",
        "React Developer",
      ];

      // Generate a random index to select a text from the array
      const randomIndex = Math.floor(Math.random() * texts.length);

      // Update the text state with the randomly selected text
      setText(texts[randomIndex]);
    }, 1500);

    // Clear the interval when the component is unmounted or updated
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
                {"Welcome to my portfolio"}
              </Typography>
              <Typography
                sx={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  margin: "10px",
                  fontFamily: `'jost', sans-serif`,
                }}
              >
                {"I am Veera, a "}
                {text}
              </Typography>
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
