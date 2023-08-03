import React, { useState } from "react";
import { saveAs } from "file-saver";
import Annem from "../resume.pdf";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import Grid from "@mui/material/Unstable_Grid2";
import { description, skillIcons, socialLinks } from "./../constants";
import Divider from "@mui/material/Divider";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { courseWork } from "../constants";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import ReactCardFlip from "react-card-flip";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Education() {
  const [flipOne, setFlipOne] = useState(false);
  const [flipTwo, setFlipTwo] = useState(false);

  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={12}
      >
        <Grid xs={6}>
          <Paper elevation={3}>
            <Card sx={{ minHeight: "350px" }}>
              <ReactCardFlip isFlipped={flipOne} flipDirection="vertical">
                <React.Fragment>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {"University of Central Florida"}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Grid
                      container
                      spacing={2}
                      sx={{ width: "100%" }}
                    >
                      <Grid xs={6} align="right">
                        <Button
                          size="small"
                          variant="outlined"
                          // onClick={() => setFlipOne(!flipOne)}
                        >
                          website
                        </Button>
                      </Grid>
                      <Grid xs={6} align="left">
                        <Button
                          size="small"
                          variant="outlined"
                          onClick={() => setFlipOne(!flipOne)}
                        >
                        Course Work
                        </Button>
                      </Grid>
                    </Grid>
                  </CardActions>
                </React.Fragment>

                <React.Fragment>
                  <CardContent>
                    {courseWork.map((item) => {
                      return (
                        <Grid
                          container
                          direction="column"
                          justifyContent="center"
                          alignItems="center"
                          spacing={3}
                        >
                          <Grid xs={12}>
                            <Typography sx={{ fontSize: 14 }}>
                              {bull}{" " + item}
                            </Typography>
                          </Grid>
                        </Grid>
                      );
                    })}
                  </CardContent>
                  <CardActions>
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      spacing={2}
                      sx={{ width: "100%" }}
                    >
                      <Grid xs={12} align="center">
                        <Button
                          size="small"
                          variant="outlined"
                          onClick={() => setFlipOne(!flipOne)}
                        >
                          Go Back
                        </Button>
                      </Grid>
                    </Grid>
                  </CardActions>
                </React.Fragment>
              </ReactCardFlip>
            </Card>
          </Paper>
        </Grid>

        {/* <Grid xs={6}>
          <Paper elevation={3}>
            <Card>
              <ReactCardFlip isFlipped={flipTwo} flipDirection="vertical">
                <React.Fragment>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {"Sathyabama University"}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => setFlipTwo(!flipTwo)}>
                      View Course Work
                    </Button>
                  </CardActions>
                </React.Fragment>
                <React.Fragment>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {"Courses"}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => setFlipTwo(!flipTwo)}>
                      Go Back
                    </Button>
                  </CardActions>
                </React.Fragment>
              </ReactCardFlip>
            </Card>
          </Paper>
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}
