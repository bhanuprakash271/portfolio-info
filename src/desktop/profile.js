import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import CardMedia from "@mui/material/CardMedia";
import profile from "./profile.jpg";
import IconButton from "@mui/material/IconButton";
import DownloadPDF from "./download";
import { socialIcons } from "../constants";
import Button from "@mui/material/Button";

export default function Profile(props) {
  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item>
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
        <Grid item>
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
        <Grid item>
          <CardMedia
            component="img"
            src={socialIcons.address}
            alt="img"
            sx={{ height: "40px", width: "40px" }}
          />
        </Grid>
        <Grid
          item
          sx={{ textAlign: "center", fontFamily: `'jost', sans-serif`, fontSize: "15px" }}
        >
          1350 San Remo Point, Florida, United States - 32765.
        </Grid>
        <Grid item>
          <CardMedia
            component="img"
            src={socialIcons.phone}
            alt="img"
            sx={{ height: "30px", width: "30px" }}
          />
        </Grid>
        <Grid
          item
          sx={{ textAlign: "center", fontFamily: `'jost', sans-serif`, fontSize: "15px" }}
        >
          {"(469) 861-5322"}
        </Grid>
        <Grid item sx={{ marginTop: "10px" }}>
          <DownloadPDF />
        </Grid>
        <Grid item sx={{ marginTop: "10px" }}>
          <Button
            sx={{ textTransform: "capitalize", fontFamily: `'jost', sans-serif` }}
            onClick={() => {
              props.handleFloatingNavigation();
            }}
            variant="contained"
          >
            Change Navigation
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
