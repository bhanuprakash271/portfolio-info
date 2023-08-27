import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { courseWork, universityLinks } from "../constants";
import CardMedia from "@mui/material/CardMedia";
import ucf from "./ucf.png";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import sathyabama from "./sathyabama.png";
import ReactCardFlip from "react-card-flip";

export default function Education() {
  const [flipOne, setFlipOne] = useState(false);
  const [flipTwo, setFlipTwo] = useState(false);

  const handleUniversityLinks = (value) => {
    let URL = "";
    if (value === 1) {
      URL = universityLinks.ucf;
    } else if (value === 2) {
      URL = universityLinks.sathyabama;
    }

    window.open(URL);
  };

  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 2, md: 3 }}
      >
        <Grid xs={12} md={6}>
          <ReactCardFlip
            isFlipped={flipOne}
            flipDirection="horizontal"
            infinite="true"
          >
            <Paper elevation={3}>
              <Card
                sx={{
                  // backgroundColor: "lightgoldenrodyellow",
                  minHeight: "300px",
                }}
              >
                <React.Fragment>
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                  >
                    {" "}
                    <Grid xs={4}>
                      <CardMedia
                        sx={{
                          height: 100,
                          width: 100,
                          objectFit: "contain",
                          objectPosition: "bottom",
                        }}
                        image={ucf}
                        title="UCF"
                      />
                    </Grid>
                    <Grid xs={8}>
                      <CardActions>
                        <Grid
                          container
                          spacing={2}
                          justifyContent="flex-end"
                          alignItems="flex-end"
                          sx={{ width: "100%" }}
                        >
                          <Grid>
                            <Button
                              size="small"
                              variant="outlined"
                              onClick={() => setFlipOne(!flipOne)}
                              sx={{
                                textTransform: "capitalize",
                                fontSize: 14,
                                fontFamily: `'jost', sans-serif`,
                              }}
                            >
                              Course Work
                            </Button>
                          </Grid>
                          <Grid>
                            <Button
                              sx={{
                                textTransform: "capitalize",
                                fontSize: 14,
                                fontFamily: `'jost', sans-serif`,
                              }}
                              size="small"
                              variant="outlined"
                              endIcon={<OpenInNewIcon />}
                              onClick={() => {
                                handleUniversityLinks(1);
                              }}
                            >
                              website
                            </Button>
                          </Grid>
                        </Grid>
                      </CardActions>
                    </Grid>
                    <Grid xs={12}>
                      <CardContent>
                        <Grid
                          container
                          direction="column"
                          justifyContent="flex-start"
                          alignItems="flex-start"
                          spacing={1}
                        >
                          <Grid xs={12}>
                            <Typography
                              sx={{
                                fontSize: 18,
                                fontFamily: `'jost', sans-serif`,
                                fontWeight: "bold",
                              }}
                            >
                              {"Master of Science in Computer Science"}
                            </Typography>
                          </Grid>
                          <Grid xs={12}>
                            <Typography
                              sx={{
                                fontSize: 14,
                                fontFamily: `'jost', sans-serif`,
                              }}
                            >
                              {"University of Central Florida"}
                            </Typography>
                          </Grid>
                          <Grid xs={12}>
                            <Typography
                              sx={{
                                fontSize: 14,
                                fontFamily: `'jost', sans-serif`,
                              }}
                            >
                              {"CGPA: 4"}
                            </Typography>
                          </Grid>
                          <Grid xs={12}>
                            <Typography
                              sx={{
                                fontSize: 14,
                                fontFamily: `'jost', sans-serif`,
                              }}
                            >
                              {"Graduation Year: December 2023"}
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Grid>
                  </Grid>
                </React.Fragment>
              </Card>
            </Paper>
            <Paper elevation={3}>
              <Card sx={{ minHeight: "300px" }}>
                <React.Fragment>
                  <CardContent>
                    {courseWork.map((item, index) => {
                      return (
                        <Grid
                          container
                          direction="column"
                          justifyContent="center"
                          alignItems="center"
                          spacing={3}
                          key={index}
                        >
                          <Grid xs={12}>
                            <Typography
                              sx={{
                                fontSize: 14,
                                fontFamily: `'jost', sans-serif`,
                              }}
                            >
                              <ul style={{ margin: "0px" }}>
                                <li>{item}</li>
                              </ul>
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
                          sx={{
                            textTransform: "capitalize",
                            fontSize: 14,
                            fontFamily: `'jost', sans-serif`,
                          }}
                        >
                          Go Back
                        </Button>
                      </Grid>
                    </Grid>
                  </CardActions>
                </React.Fragment>
              </Card>
            </Paper>
          </ReactCardFlip>
        </Grid>

        <Grid xs={12} md={6}>
          <ReactCardFlip
            isFlipped={flipTwo}
            flipDirection="horizontal"
            infinite="true"
          >
            <Paper elevation={3}>
              <Card
                sx={{
                  // backgroundColor: "lightgoldenrodyellow",
                  minHeight: "300px",
                }}
              >
                <React.Fragment>
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                  >
                    {" "}
                    <Grid xs={4}>
                      <CardMedia
                        sx={{
                          height: 100,
                          width: 100,
                          objectFit: "contain",
                          objectPosition: "bottom",
                          backgroundColor:'lavenderblush'
                        }}
                        image={sathyabama}
                        title="Sathyabama"
                      />
                    </Grid>
                    <Grid xs={8}>
                      <CardActions>
                        <Grid container spacing={2} sx={{ width: "100%" }}>
                          <Grid xs={12} align="right">
                            <Button
                              sx={{
                                textTransform: "capitalize",
                                fontSize: 14,
                                fontFamily: `'jost', sans-serif`,
                              }}
                              size="small"
                              variant="outlined"
                              endIcon={<OpenInNewIcon />}
                              onClick={() => {
                                handleUniversityLinks(2);
                              }}
                            >
                              website
                            </Button>
                          </Grid>
                          {/* <Grid xs={6} align="left">
                            <Button
                              size="small"
                              variant="outlined"
                              onClick={() => setFlipTwo(!flipTwo)}
                              sx={{
                                textTransform: "capitalize",
                                fontSize: 14,
                                fontFamily: `'jost', sans-serif`,
                              }}
                            >
                              Course Work
                            </Button>
                          </Grid> */}
                        </Grid>
                      </CardActions>
                    </Grid>
                    <Grid xs={12}>
                      <CardContent>
                        <Grid
                          container
                          direction="column"
                          justifyContent="flex-start"
                          alignItems="flex-start"
                          spacing={1}
                        >
                          <Grid xs={12}>
                            <Typography
                              sx={{
                                fontSize: 18,
                                fontFamily: `'jost', sans-serif`,
                                fontWeight: "bold",
                              }}
                            >
                              {
                                "Bachelor of Engineering in Electronics and Communications"
                              }
                            </Typography>
                          </Grid>
                          <Grid xs={12}>
                            <Typography
                              sx={{
                                fontSize: 14,
                                fontFamily: `'jost', sans-serif`,
                              }}
                            >
                              {"Sathyabama University"}
                            </Typography>
                          </Grid>
                          <Grid xs={12}>
                            <Typography
                              sx={{
                                fontSize: 14,
                                fontFamily: `'jost', sans-serif`,
                              }}
                            >
                              {"CGPA: 8.62/10"}
                            </Typography>
                          </Grid>
                          <Grid xs={12}>
                            <Typography
                              sx={{
                                fontSize: 14,
                                fontFamily: `'jost', sans-serif`,
                              }}
                            >
                              {"Graduation Year: 2017"}
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Grid>
                  </Grid>
                </React.Fragment>
              </Card>
            </Paper>
            <Paper elevation={3}>
              <Card sx={{ minHeight: "300px" }}>
                <React.Fragment>
                  <CardContent>
                    {courseWork.map((item, index) => {
                      return (
                        <Grid
                          container
                          direction="column"
                          justifyContent="center"
                          alignItems="center"
                          spacing={3}
                          key={index}
                        >
                          <Grid xs={12}>
                            <Typography
                              sx={{
                                fontSize: 14,
                                fontFamily: `'jost', sans-serif`,
                              }}
                            >
                              <ul style={{ margin: "0px" }}>
                                <li>{item}</li>
                              </ul>
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
                          onClick={() => setFlipTwo(!flipTwo)}
                          sx={{
                            textTransform: "capitalize",
                            fontSize: 14,
                            fontFamily: `'jost', sans-serif`,
                          }}
                        >
                          Go Back
                        </Button>
                      </Grid>
                    </Grid>
                  </CardActions>
                </React.Fragment>
              </Card>
            </Paper>
          </ReactCardFlip>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
