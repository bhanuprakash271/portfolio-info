import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import CardMedia from "@mui/material/CardMedia";
import profile from "./profile.jpg";
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

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

export default function Profile(props) {
  const [vertical, setVertical] = useState("top");
  const [horizontal, setHorizontal] = useState("left");
  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={true}
      style={{ width: "inherit", top: "0px", left: "0px", height:"-webkit-fill-available"}}
      TransitionComponent={TransitionDown}
    >
      <Card
        variant="outlined"
        sx={{
          backgroundColor: "lightblue",
          margin: "5px",
          borderRadius: "10px",
          height:"-webkit-fill-available"
        }}
      >
        <CardContent>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Grid xs={12}>
              <CardMedia
                component="img"
                image={profile}
                alt="Profile Pic"
                sx={{
                  height: "80%",
                  objectFit: "contain",
                  objectPosition: "bottom",
                }}
              />
            </Grid>
            <Grid xs={12}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
              >
                <Grid xs={4}>
                  <IconButton
                    onClick={() => {
                      props.handleSocialIconClick(1);
                    }}
                  >
                    <CardMedia
                      component="img"
                      src={socialIcons.linkedin}
                      alt="img"
                      sx={{ height: "40px", width: "40px" }}
                    />
                  </IconButton>
                </Grid>
                <Grid xs={4}>
                  <IconButton
                    onClick={() => {
                      props.handleSocialIconClick(2);
                    }}
                  >
                    <CardMedia
                      component="img"
                      src={socialIcons.mail}
                      alt="img"
                      sx={{ height: "40px", width: "40px" }}
                    />
                  </IconButton>
                </Grid>
                <Grid xs={4}>
                  <IconButton
                    onClick={() => {
                      props.handleSocialIconClick(3);
                    }}
                  >
                    <CardMedia
                      component="img"
                      src={socialIcons.github}
                      alt="img"
                      sx={{ height: "40px", width: "40px" }}
                    />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid sx={12}>
              <Stack
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <CardMedia
                  component="img"
                  src={socialIcons.address}
                  alt="img"
                  sx={{ height: "40px", width: "40px" }}
                />
                <Typography
                  sx={{
                    textAlign: "center",
                    fontFamily: `'jost', sans-serif`,
                    fontSize: "15px",
                  }}
                >
                  1350 San Remo Point, Florida, United States - 32765.
                </Typography>
              </Stack>
            </Grid>
            <Grid sx={12}>
              <Stack
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <CardMedia
                  component="img"
                  src={socialIcons.phone}
                  alt="img"
                  sx={{ height: "30px", width: "30px" }}
                />
                <Typography
                  sx={{
                    textAlign: "center",
                    fontFamily: `'jost', sans-serif`,
                    fontSize: "15px",
                  }}
                >
                  {"(469) 861-5322"}
                </Typography>
              </Stack>
            </Grid>
            <Grid item sx={{ marginTop: "10px" }}>
              <DownloadPDF />
            </Grid>
            <Grid item sx={{ marginTop: "10px" }}>
              <Button
                style={{
                  textTransform: "capitalize",
                  fontFamily: `'jost', sans-serif`,
                  backgroundColor:'lightgreen',
                  color:'black'
                }}
                onClick={() => {
                  props.handleFloatingNavigation();
                }}
                variant="contained"
              >
                Change View
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Snackbar>
  );
}
