import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import CardMedia from "@mui/material/CardMedia";
import profile from "./profile.jpg";
import IconButton from "@mui/material/IconButton";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import DownloadPDF from "./download";

export default function Profile(props) {
  return (
    <React.Fragment>
       {/* <Card
        variant="outlined"
        sx={{ backgroundColor: "antiquewhite",borderRadius:'10px' }}
      >
        <CardContent> */}
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
              <IconButton>
                <AiFillLinkedin
                  style={{
                    color: "blue",
                    height: "40px",
                    width: "40px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    props.handleSocialIconClick(1);
                  }}
                />
              </IconButton>
            </Grid>
            <Grid xs={4}>
              <IconButton>
                <AiOutlineMail
                  style={{
                    color: "green",
                    height: "40px",
                    width: "40px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    props.handleSocialIconClick(2);
                  }}
                />
              </IconButton>
            </Grid>
            <Grid xs={4}>
              <IconButton>
                <AiFillGithub
                  style={{
                    color: "black",
                    height: "40px",
                    width: "40px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    props.handleSocialIconClick(3);
                  }}
                />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <CardMedia
            component="img"
            src={"https://img.icons8.com/ultraviolet/40/place-marker--v1.png"}
            alt="img"
            sx={{ height: "40px", width: "40px" }}
          />
        </Grid>
        <Grid
          item
          sx={{ textAlign: "center", fontFamily: "cursive", fontSize: "15px" }}
        >
          1350 San Remo Point, Florida, United States - 32765.
        </Grid>
        <Grid item>
          <CardMedia
            component="img"
            src={"https://img.icons8.com/ultraviolet/40/phone.png"}
            alt="img"
            sx={{ height: "30px", width: "30px" }}
          />
        </Grid>
        <Grid
          item
          sx={{ textAlign: "center", fontFamily: "cursive", fontSize: "15px" }}
        >
          {"(469) 861-5322"}
        </Grid>
        <Grid item sx={{ marginTop: "10px" }}>
          <DownloadPDF />
        </Grid>
      </Grid>
      {/* </CardContent></Card> */}
    </React.Fragment>
  );
}
