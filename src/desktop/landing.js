import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { socialLinks } from "./../constants";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import Navigate from "./navigate";
import Profile from "./profile";
import NavigateCard from "./navigateCard";
import { isMobile } from "react-device-detect";
import DesktopAlignment from "./desktopAlignment";
import MobileAlignment from "./mobileAlignment";
import QRCode from "./qrcode";

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
  const [verticalView, setVerticalView] = useState(false);
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    if (verticalView) {
      var elmnt = document.getElementById(activateSectionNbr);
      elmnt.scrollIntoView();
    }
  }, [verticalView]);

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
    if (verticalView) {
      var elmnt = document.getElementById(val);
      elmnt.scrollIntoView();
    }
  };

  const handleViewChange = () => {
    setVerticalView(!verticalView);
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

  const openQR = () => {
    setShowQR(!showQR);
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
          Email Address is copied
        </Alert>
      </Snackbar>

      <Grid container spacing={0}>
        {!isMobile && (
          <Grid xs={3} md={2}>
            <Profile
              handleSocialIconClick={handleSocialIcon}
              handleViewChange={handleViewChange}
            />
          </Grid>
        )}

        {isMobile ? (
          <MobileAlignment handleSocialIconClick={handleSocialIcon} />
        ) : (
          <DesktopAlignment
            verticalView={verticalView}
            activateSectionNbr={activateSectionNbr}
          />
        )}
      </Grid>

      {!floatingNavigation && (
        <NavigateCard
          handleSectionNbr={handleSectionNbr}
          activateSectionNbr={activateSectionNbr}
        />
      )}

      {floatingNavigation ? (
        <React.Fragment>
          {showMenu ? (
            <Navigate handleMenu={openMenu} handleMenuCard={handleCard} />
          ) : null}
          <Fab
            color="primary"
            aria-label="add"
            style={{
              position: "fixed",
              bottom: "50px",
              right: "5%",
              left: "auto",
              textTransform: "capitalize",
              fontFamily: `'jost', sans-serif`,
            }}
            onClick={() => {
              openMenu();
            }}
          >
            <NavigationIcon sx={{ width: "30px", height: "30px" }} />
          </Fab>
        </React.Fragment>
      ) : null}

      {showQR ? <QRCode handleQR={openQR} /> : null}

      {!isMobile ? (
        <Fab
          color="primary"
          aria-label="add"
          style={{
            position: "fixed",
            bottom: "100px",
            right: "5%",
            left: "auto",
            textTransform: "capitalize",
            fontFamily: `'jost', sans-serif`,
            width: "100px",
            backgroundColor:'teal'
          }}
          onClick={() => {
            openQR();
          }}
        >
          View on Mobile
        </Fab>
      ) : null}
    </div>
  );
}
