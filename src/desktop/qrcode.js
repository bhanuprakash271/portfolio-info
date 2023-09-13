import * as React from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import qrcode from "../images/qrcode.png";

export default function QRCode(props) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Popper
          open={true}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          style={{ bottom: "160px", right: "4%", left: "auto", top: "auto",width:'300px' }}
        >
          {({ TransitionProps, placement }) => (
            <Grow {...TransitionProps}>
              <Paper sx={{ backgroundColor: "lightcyan" }}>
                <ClickAwayListener
                  onClickAway={() => {
                    props.handleQR();
                  }}
                >
                  <CardMedia
                    component="img"
                    image={qrcode}
                    alt="QR Code"
                    sx={{
                      height: "10%",
                      objectFit: "contain",
                      objectPosition: "bottom",
                    }}
                  />
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
