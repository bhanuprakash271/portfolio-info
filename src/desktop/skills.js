import React from "react";
import { saveAs } from "file-saver";
import Annem from "../resume.pdf";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import Grid from '@mui/material/Unstable_Grid2';
import { description, skillIcons, socialLinks } from "./../constants";
import Divider from "@mui/material/Divider";
import CardMedia from "@mui/material/CardMedia";

export default function Skills() {
  return (
    <React.Fragment>
      <Divider variant="middle" align="center">
        Skills/ Tools
      </Divider>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={1}
      >
        {skillIcons.map((item) => (
          <Grid xs={1}>
            <CardMedia
              component="img"
              src={item}
              alt="img"
              sx={{ height: "80px", width: "80px" }}
            />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
