import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Unstable_Grid2';
import { description } from "./../constants";
import Typography from "@mui/material/Typography";

export default function Home() {
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
        alignItems="flex-start"
      >
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Grid xs={12}>
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  margin: "10px",
                  fontFamily: "cursive",
                }}
              >
                {"Welcome to my portfolio"}
              </Typography>
            </Grid>
            {/* <Grid xs={6}>
              <Typography
                sx={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  margin: "10px",
                  fontFamily: "cursive",
                }}
              >
                {"know more"}
              </Typography>
            </Grid> */}
          </Grid>
        </Grid>
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: "bold",
            margin: "10px",
            fontFamily: "cursive",
          }}
        >
          {"I am Veera, a "}
          {text}
        </Typography>

        <Typography
          sx={{
            fontSize: "20px",
            margin: "10px",
            textAlign: "justify",
            fontFamily: "cursive",
          }}
        >
          {description}
        </Typography>
      </Grid>
    </React.Fragment>
  );
}
