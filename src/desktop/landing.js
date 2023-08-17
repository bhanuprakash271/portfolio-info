import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Unstable_Grid2";
import { socialLinks } from "./../constants";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import Navigate from "./navigate";
import Profile from "./profile";
import Skills from "./skills";
import Home from "./home";
import NavigateCard from "./navigateCard";
import Education from "./education";
import Recommendation from "./recommendation";
//import NavigateCardTwo from "./navigateCradTwo";
import Projects from "./projects";
import Experience from "./experience";
import { isMobile } from "react-device-detect";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import CardMedia from "@mui/material/CardMedia";
import { navigateCardIcons } from "./../constants";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function LandingPage() {
  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [activateSectionNbr, setActivateSectionNbr] = useState(1);
  const [floatingNavigation, setFloatingNavigation] = useState(
    isMobile ? true : false
  );

  const openMenu = () => {
    let value = !showMenu;
    setShowMenu(value);
  };

  const handleCard = (nbr) => {
    setShowMenu(false);
    handleSectionNbr(nbr);
    // to scroll
    var elmnt = document.getElementById(nbr);
    elmnt.scrollIntoView();
  };

  const handleSectionNbr = (val) => {
    setActivateSectionNbr(val);
  };

  const handleFloatingNavigation = () => {
    setFloatingNavigation(!floatingNavigation);
    setShowMenu(false);
  };

  const handleSocialIcon = (value) => {
    let URL = "";
    if (value === 1) {
      URL = socialLinks.linkedin;
      window.open(URL);
    } else if (value === 2) {
      // URL = socialLinks.mail;
      handleGmail();
    } else if (value === 3) {
      URL = socialLinks.github;
      window.open(URL);
    }
    //window.open(URL);
  };

  const handleGmail = () => {
    navigator.clipboard.writeText("veerabhanu.annem@gmail.com");
    setOpen(true);
  };

  const handleSnackBarClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => {
          handleSnackBarClose();
        }}
      >
        <Alert
          onClose={() => {
            handleSnackBarClose();
          }}
          severity="success"
          sx={{ width: "100%", fontFamily: `'jost', sans-serif` }}
        >
          Email Address has copied
        </Alert>
      </Snackbar>
      {!floatingNavigation && (
        <NavigateCard
          handleSectionNbr={handleSectionNbr}
          activateSectionNbr={activateSectionNbr}
        />
      )}

      {/* <Profile/> */}
      <Grid container spacing={0}>
        {/* {((isMobile && activateSectionNbr === 1) || !isMobile) && ( */}
        <Grid xs={12} md={2}>
          <Card
            variant="outlined"
            sx={{
              backgroundColor: "lightblue",
              margin: "5px",
              borderRadius: "10px",
            }}
          >
            <CardContent>
              <Profile
                handleSocialIconClick={handleSocialIcon}
                handleFloatingNavigation={handleFloatingNavigation}
              />
            </CardContent>
          </Card>
        </Grid>
        {/* )} */}
        {/* <Grid xs={0} md={0.5}>
          <Divider orientation="vertical" variant="middle" align="center">
            {" "}
          </Divider>
        </Grid> */}
        {isMobile ? (
          <Grid xs={12} md={10} sx={{ marginBottom: "100px" }}>
            <Card
              variant="outlined"
              sx={{
                backgroundColor: "lightblue",
                margin: "5px",
                borderRadius: "10px",
              }}
            >
              <CardContent>
                <div id="1">
                  <Home />
                </div>

                <div id="2">
                  <Divider
                    variant="middle"
                    align="center"
                    sx={{ margin: "20px" }}
                  >
                    <Chip
                      variant="outlined"
                      label="Experience"
                      sx={{
                        fontFamily: `'jost', sans-serif`,
                        fontWeight: 500,
                        backgroundColor:'palevioletred',
                        color:'white'
                      }}
                      icon={
                        <CardMedia
                          component="img"
                          src={navigateCardIcons.experience}
                          alt="img"
                          sx={{ height: "20px", width: "20px" }}
                        />
                      }
                    />
                  </Divider>

                  <Experience />
                </div>
                <div id="3">
                  <Divider
                    variant="middle"
                    align="center"
                    sx={{ margin: "20px" }}
                  >
                    <Chip
                      variant="outlined"
                      label="Projects"
                      sx={{
                        fontFamily: `'jost', sans-serif`,
                        fontWeight: 500,
                        backgroundColor:'palevioletred',
                        color:'white'
                      }}
                      icon={
                        <CardMedia
                          component="img"
                          src={navigateCardIcons.projects}
                          alt="img"
                          sx={{ height: "20px", width: "20px" }}
                        />
                      }
                    />
                  </Divider>

                  <Projects />
                </div>
                <div id="4">
                  <Divider
                    variant="middle"
                    align="center"
                    sx={{ margin: "20px" }}
                  >
                    <Chip
                      variant="outlined"
                      label="Education"
                      sx={{
                        fontFamily: `'jost', sans-serif`,
                        fontWeight: 500,
                        backgroundColor:'palevioletred',
                        color:'white'
                      }}
                      icon={
                        <CardMedia
                          component="img"
                          src={navigateCardIcons.education}
                          alt="img"
                          sx={{ height: "20px", width: "20px" }}
                        />
                      }
                    />
                  </Divider>

                  <Education />
                </div>
                <div id="5">
                  <Divider
                    variant="middle"
                    align="center"
                    sx={{ margin: "20px" }}
                  >
                    <Chip
                      variant="outlined"
                      label="Skills"
                      sx={{
                        fontFamily: `'jost', sans-serif`,
                        fontWeight: 500,
                        backgroundColor:'palevioletred',
                        color:'white'
                      }}
                      icon={
                        <CardMedia
                          component="img"
                          src={navigateCardIcons.skills}
                          alt="img"
                          sx={{ height: "20px", width: "20px" }}
                        />
                      }
                    />
                  </Divider>

                  <Skills isMobile={isMobile} />
                </div>
                <div id="6">
                  <Divider
                    variant="middle"
                    align="center"
                    sx={{ margin: "20px" }}
                  >
                    <Chip
                      variant="outlined"
                      label="Recommendations"
                      sx={{
                        fontFamily: `'jost', sans-serif`,
                        fontWeight: 500,
                        backgroundColor:'palevioletred',
                        color:'white'
                      }}
                      icon={
                        <CardMedia
                          component="img"
                          src={navigateCardIcons.recommendations}
                          alt="img"
                          sx={{ height: "20px", width: "20px" }}
                        />
                      }
                    />
                  </Divider>

                  <Recommendation />
                </div>
              </CardContent>
            </Card>
          </Grid>
        ) : (
          <Grid xs={12} md={10} sx={{ marginBottom: "100px" }}>
            <Card
              variant="outlined"
              sx={{
                backgroundColor: "lightblue",
                margin: "5px",
                borderRadius: "10px",
              }}
            >
              <CardContent>
                {/* {!floatingNavigation && (
                <NavigateCardTwo
                  handleSectionNbr={handleSectionNbr}
                  activateSectionNbr={activateSectionNbr}
                />
              )} */}
                {activateSectionNbr === 1 && <Home />}
                {activateSectionNbr === 2 && <Experience />}
                {activateSectionNbr === 3 && <Projects />}
                {activateSectionNbr === 4 && <Education />}
                {activateSectionNbr === 5 && <Skills isMobile={isMobile} />}
                {activateSectionNbr === 6 && <Recommendation />}
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>

      {floatingNavigation ? (
        <React.Fragment>
          {showMenu ? (
            <Navigate handleMenu={openMenu} handleMenuCard={handleCard} />
          ) : null}
          <Fab
            variant="extended"
            size="small"
            color="primary"
            aria-label="add"
            style={{
              position: "fixed",
              bottom: "100px",
              right: "5%",
              left: "auto",
              textTransform: "capitalize",
              fontFamily: `'jost', sans-serif`,
            }}
            onClick={() => {
              openMenu();
            }}
          >
            Navigate <NavigationIcon sx={{ lg: 1 }} />
          </Fab>
        </React.Fragment>
      ) : null}
    </div>
  );
}
