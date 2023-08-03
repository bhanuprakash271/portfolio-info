import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from '@mui/material/Unstable_Grid2';
import { socialLinks } from "./../constants";
import Divider from "@mui/material/Divider";
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

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function LandingPage() {
  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [activateSectionNbr, setActivateSectionNbr] = useState(0);

  const openMenu = () => {
    let value = !showMenu;
    setShowMenu(value);
  };

  const handleCard = (nbr) => {
    setShowMenu(false);
    handleSectionNbr(nbr);
  };

  const handleSectionNbr = (val) => {
    setActivateSectionNbr(val);
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
          sx={{ width: "100%", fontFamily: "cursive" }}
        >
          Email Address has copied
        </Alert>
      </Snackbar>
      <NavigateCard handleSectionNbr={handleSectionNbr}/>

      <Card
        variant="outlined"
        sx={{ backgroundColor: "aliceblue", margin: "20px" ,borderRadius:'10px' }}
      >
        <CardContent>
          {/* <Profile/> */}
          <Grid container spacing={0}>
            <Grid xs={2}>
              <Profile handleSocialIconClick={handleSocialIcon} />
            </Grid>
            <Grid xs={0.5}>
              <Divider orientation="vertical" variant="middle" align="center">
                {" "}
              </Divider>
            </Grid>
            <Grid xs={9.5}>
              {(activateSectionNbr === 0 || activateSectionNbr === 1) && (
                <Home />
              )}
              {activateSectionNbr !== 0 && activateSectionNbr === 2 && (
                <Skills />
              )}
              {activateSectionNbr !== 0 && activateSectionNbr === 3 && (
                <Skills />
              )}
              {activateSectionNbr !== 0 && activateSectionNbr === 4 && (
                <Education />
              )}
              {activateSectionNbr !== 0 && activateSectionNbr === 5 && (
                <Skills />
              )}
              {activateSectionNbr !== 0 && activateSectionNbr === 6 && (
                <Skills />
              )}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {/* {showMenu ? (
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
          fontFamily: "cursive",
        }}
        onClick={() => {
          openMenu();
        }}
      >
        Navigate <NavigationIcon sx={{ lg: 1 }} />
      </Fab> */}
    </div>
  );
}