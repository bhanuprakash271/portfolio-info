import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import CardMedia from "@mui/material/CardMedia";
import { socialIcons, recommendations } from "../constants";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";

//const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const AutoPlaySwipeableViews = SwipeableViews;

function Recommendation() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
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

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={6}
    >
      <Grid xs={12} md={6}>
        <Box>
          {/* <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper> */}
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {recommendations.map((step, index) => (
              <div key={index}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Card sx={{ minHeight: "300px", backgroundColor: "beige" }}>
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
                            }}
                          >
                            {step.text}
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
                        <Grid xs={12} align="right">
                          <Typography
                            sx={{
                              fontSize: 20,
                              fontFamily: `'jost', sans-serif`,
                            }}
                          >
                            {step.position}
                          </Typography>
                        </Grid>
                        <Grid xs={12} align="right">
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
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>

          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>
      </Grid>
      <Grid xs={12} md={6}>
        <Card sx={{ minHeight: "300px", backgroundColor: "beige" }}>
          <CardContent>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid xs={12}>
                <Typography
                  sx={{ fontSize: 20, fontFamily: `'jost', sans-serif` }}
                >
                  {"Recommend Me"}
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
      </Grid>
    </Grid>
  );
}

export default Recommendation;
