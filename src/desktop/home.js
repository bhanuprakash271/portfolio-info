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
    }, 2500);

    // Clear the interval when the component is unmounted or updated
    return () => clearInterval(interval);
  }, []);


    const TypeWriter = () =>{
      const [displayText, setDisplayText] = useState('');
      const [showCursor, setShowCursor] = useState(true);
      useEffect(()=>{
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
          setShowCursor((prev) => !prev);
        }, 200); // Adjust cursor blink speed here (milliseconds)
        
        return () =>{
          clearInterval(timer);
          clearInterval(cursorTimer);
        }  // Cleanup function
      },[text])
      return <span>{displayText}
      {showCursor && <span>|</span>}</span>;
    };


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
                  fontSize: "25px",
                  fontWeight: "bold",
                  margin: "10px",
                  fontFamily: `'jost', sans-serif`,
                }}
              >
                {"Hey there! I am Veera, a "}<TypeWriter></TypeWriter>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Typography
          sx={{
            fontSize: "20px",
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
