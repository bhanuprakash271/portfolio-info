import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Unstable_Grid2";
import { description, experience } from "../constants";
import Stack from "@mui/material/Stack";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleExperience = (val) => {
    setActiveIndex(val);
  };
  return (
    <React.Fragment>
      <Card sx={{ minHeight: "300px" }}>
        <CardContent>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
          >
            <Grid xs={12} md={2} align="center">
              <Stack
                direction={{ xs: "row", md: "column" }}
                justifyContent="flex-start"
                alignItems="flex-end"
                spacing={1}
              >
                {experience.map((item, idx) => {
                  return (
                    <Paper
                      key={idx}
                      sx={
                        activeIndex === idx
                          ? {
                              backgroundColor: "lightblue",
                              minHeight: "50px",
                              width: "100%",
                              cursor: "pointer",
                              fontFamily: `'jost', sans-serif`,
                              fontSize: "14px",
                            }
                          : {
                              backgroundColor: "aliceblue",
                              minHeight: "50px",
                              width: "100%",
                              cursor: "pointer",
                              fontFamily: `'jost', sans-serif`,
                              fontSize: "14px",
                            }
                      }
                      elevation={activeIndex === idx ? 8 : 0}
                      onClick={() => {
                        handleExperience(idx);
                      }}
                    >
                      <CardMedia
                        component="img"
                        src={"https://img.icons8.com/color/48/calendar--v1.png"}
                        alt="img"
                        sx={{
                          height: "30px",
                          width: "30px",
                          cursor: "pointer",
                        }}
                      />
                      <Typography sx={{ fontFamily: `'jost', sans-serif` }}>
                        {item.year}
                      </Typography>
                    </Paper>
                  );
                })}
              </Stack>
            </Grid>
            <Grid xs={12} md={10} align="left">
              {experience.map((item, idx) => {
                return activeIndex == idx ? (
                  <React.Fragment key={idx}>
                    <Typography
                      sx={{ fontFamily: `'jost', sans-serif`, fontWeight: 600 }}
                    >
                      {item.position}
                    </Typography>
                    <Typography sx={{ fontFamily: `'jost', sans-serif` }}>
                      {item.company + ", " + item.location}
                    </Typography>
                    {item.description.map((txt, txtIndex) => {
                      return (
                        <Typography
                          key={txtIndex}
                          sx={{ fontFamily: `'jost', sans-serif` }}
                        >
                          <ul style={{ margin: "0px" }}>
                            <li>{txt}</li>
                          </ul>
                        </Typography>
                      );
                    })}
                  </React.Fragment>
                ) : null;
              })}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
