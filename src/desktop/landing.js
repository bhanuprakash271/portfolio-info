import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { socialLinks } from "./../constants";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Fab from "@mui/material/Fab";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import Navigate from "./navigate";
import Profile from "./profile";
import NavigateCard from "./navigateCard";
import { isMobile } from "react-device-detect";
import DesktopAlignment from "./desktopAlignment";
import MobileAlignment from "./mobileAlignment";
import QRCode from "./qrcode";
import Stack from '@mui/material/Stack';

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
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
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
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
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
          <Grid xs>
              <DesktopAlignment
                verticalView={verticalView}
                activateSectionNbr={activateSectionNbr}
              />
          </Grid>
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
          <Navigate
            handleMenu={closeMenu}
            handleMenuCard={handleCard}
            showMenu={showMenu}
          />
          <Fab
            color="primary"
            aria-label="add"
            style={{
              position: "fixed",
              top: "25px",
              right: "5%",
              left: "auto",
              width: "50px",
              height: "50px",
            }}
            onClick={() => {
              showMenu ? closeMenu() : openMenu();
            }}
          >
            {showMenu ? (
              <KeyboardDoubleArrowUpIcon
                sx={{ width: "30px", height: "30px" }}
              />
            ) : (
              <KeyboardDoubleArrowDownIcon
                sx={{ width: "30px", height: "30px" }}
              />
            )}
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
            backgroundColor: "teal",
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
