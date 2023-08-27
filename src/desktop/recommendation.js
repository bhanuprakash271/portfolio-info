import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import CardMedia from "@mui/material/CardMedia";
import { socialIcons, recommendations } from "../constants";
import Divider from "@mui/material/Divider";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Paper from "@mui/material/Paper";

//const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const AutoPlaySwipeableViews = SwipeableViews;


function Recommendation(props) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = recommendations.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleLinkedIn = (URL) => {
    window.open(URL);
  };

  const handleActiveIndex = (idx) => {
    setActiveStep(idx);
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={6}
    >
      <Grid xs={12} md={8}>
        <div style={{ marginBottom: "20px" }}>
          <Stepper nonLinear activeStep={activeStep}>
            {recommendations.map((item, index) => (
              <Step key={index}>
                <StepButton
                  color="inherit"
                  onClick={() => {
                    handleActiveIndex(index);
                  }}
                ></StepButton>
              </Step>
            ))}
          </Stepper>
        </div>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {!props.isMobile && (
            <Button
              size="large"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <ArrowBackIosIcon />
            </Button>
          )}
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {recommendations.map((step, index) => (
              <div key={index}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <React.Fragment>
                    <Card
                      sx={{
                        minHeight: "300px",
                        backgroundColor: "honeydew",
                        borderRadius: "0px",
                      }}
                    >
                      <CardContent>
                        <Grid
                          container
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          spacing={2}
                        >
                          <Grid xs={12}>
                            <Typography
                              sx={{
                                fontSize: 20,
                                fontFamily: `'jost', sans-serif`,
                                //fontFamily: `'jost', cursive`,
                              }}
                            >
                              {`"` + step.text + `"`}
                            </Typography>
                          </Grid>
                          <Grid xs={12} align="right">
                            <Typography
                              sx={{
                                fontSize: 20,
                                fontFamily: `'jost', sans-serif`,
                              }}
                            >
                              {"- " + step.by}
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                    <Paper
                      elevation={16}
                      sx={{ borderRadius: "0px", backgroundColor: "beige" }}
                    >
                      <Stack
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="center"
                        spacing={2}
                        divider={<Divider orientation="vertical" flexItem />}
                      >
                        <Typography
                          sx={{
                            fontSize: 20,
                            fontFamily: `'jost', sans-serif`,
                          }}
                        >
                          {step.position}
                        </Typography>
                        <IconButton
                          onClick={() => {
                            handleLinkedIn(step.linkedin);
                          }}
                        >
                          <CardMedia
                            component="img"
                            src={socialIcons.linkedin}
                            alt="img"
                            sx={{ height: "40px", width: "40px" }}
                          />
                        </IconButton>
                      </Stack>
                    </Paper>
                  </React.Fragment>
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>

          {!props.isMobile && (
            <Button
              size="large"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              sx={props.isMobile ? { display: "none" } : { display: "block" }}
            >
              <ArrowForwardIosIcon />
            </Button>
          )}
        </Stack>
      </Grid>
      {/* <Grid xs={12} md={6}>
        <Card sx={{ minHeight: "300px", backgroundColor: "seashell" }}>
          <CardContent>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid xs={12} align="center">
                <Typography
                  sx={{
                    fontSize: 20,
                    fontFamily: `'jost', sans-serif`,
                    fontWeight: 600,
                  }}
                >
                  {"Contact Me"}
                </Typography>
              </Grid>
              <Grid xs={12}>
                <Divider />
              </Grid>
              <Grid xs={12}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    sx: {
                      fontFamily: `'jost', sans-serif`,
                    },
                  }}
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  label="Position"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    sx: {
                      fontFamily: `'jost', sans-serif`,
                    },
                  }}
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  label="Linkedin"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    sx: {
                      fontFamily: `'jost', sans-serif`,
                    },
                  }}
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  label="Description"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  InputLabelProps={{
                    sx: {
                      fontFamily: `'jost', sans-serif`,
                    },
                  }}
                />
              </Grid>
              <Grid xs={12} align="center">
                <Button
                  sx={{
                    textTransform: "capitalize",
                    fontFamily: `'jost', sans-serif`,
                  }}
                  variant="contained"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid> */}
    </Grid>
  );
}

export default Recommendation;
