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
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const TypeWriter = () => {
    const [displayText, setDisplayText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    useEffect(() => {
      let currentIndex = 0;
      const timer = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(timer);
        }
      }, 100); // Adjust speed here (milliseconds)

      const cursorTimer = setInterval(() => {
        if (currentIndex <= text.length) {
        setShowCursor((prev) => !prev);
        }else {
          setShowCursor(false);
        }
      }, 200); // Adjust cursor blink speed here (milliseconds)

      return () => {
        clearInterval(timer);
        clearInterval(cursorTimer);
      }; // Cleanup function
    }, [text]);
    return (
      <span>
        {displayText}
        {showCursor && <span>{"|"}</span>}
      </span>
    );
  };

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
            justifyContent="center"
            alignItems="center"
          >
            <Grid xs={12}>
              <Typography
                sx={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  margin: "10px",
                  marginLeft:"10px",
                  fontFamily: `'jost', sans-serif`,
                }}
              >
                {"Hey there! I am Veera."}
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
              width: "70%",
            }}
          />
        </Grid>
        <Grid xs={12} align="center">
          <Typography
            sx={{
              fontSize: "25px",
              fontWeight: "bold",
              margin: "10px",
              fontFamily: `'jost', sans-serif`,
            }}
          >
            <TypeWriter></TypeWriter>
          </Typography>
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
