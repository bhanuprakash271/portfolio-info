import * as React from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

export default function Navigate(props) {
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
          style={{ bottom: "160px", right: "4%", left: "auto", top: "auto" }}
        >
          {({ TransitionProps, placement }) => (
            <Grow {...TransitionProps}>
              <Paper>
                <ClickAwayListener
                  onClickAway={() => {
                    props.handleMenu();
                  }}
                >
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem
                      onClick={() => {
                        props.handleMenuCard(1);
                      }}
                      sx={{ fontFamily: `'jost', sans-serif` }}
                    >
                      Home
                    </MenuItem>
                    <Divider variant="middle" align="center"></Divider>
                    <MenuItem
                      onClick={() => {
                        props.handleMenuCard(2);
                      }}
                      sx={{ fontFamily: `'jost', sans-serif` }}
                    >
                      Experience
                    </MenuItem>
                    <Divider variant="middle" align="center"></Divider>
                    <MenuItem
                      onClick={() => {
                        props.handleMenuCard(3);
                      }}
                      sx={{ fontFamily: `'jost', sans-serif` }}
                    >
                      Projects
                    </MenuItem>
                    <Divider variant="middle" align="center"></Divider>
                    <MenuItem
                      onClick={() => {
                        props.handleMenuCard(4);
                      }}
                      sx={{ fontFamily: `'jost', sans-serif` }}
                    >
                      Education
                    </MenuItem>
                    <Divider variant="middle" align="center"></Divider>
                    <MenuItem
                      onClick={() => {
                        props.handleMenuCard(5);
                      }}
                      sx={{ fontFamily: `'jost', sans-serif` }}
                    >
                      Skills
                    </MenuItem>
                    <Divider variant="middle" align="center"></Divider>
                    <MenuItem
                      onClick={() => {
                        props.handleMenuCard(6);
                      }}
                      sx={{ fontFamily: `'jost', sans-serif` }}
                    >
                      Recommendations
                    </MenuItem>
                    <Divider variant="middle" align="center"></Divider>
                    <MenuItem
                      onClick={() => {
                        props.handleMenuCard(7);
                      }}
                      sx={{ fontFamily: `'jost', sans-serif` }}
                    >
                      Contact Me
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
