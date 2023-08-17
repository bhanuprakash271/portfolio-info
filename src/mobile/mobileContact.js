import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import { socialIcons } from "../constants";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

export default function MobileContact(props) {
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
                paddingBottom:'30px'
              }}
            >
              {"(469) 861-5322"}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
