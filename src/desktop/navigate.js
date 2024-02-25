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

  const menuItemStyles = {
    fontFamily: `'jost', sans-serif`,
     fontWeight:500
  };

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Popper
          open={props.showMenu}
          role={undefined}
          transition
          disablePortal
          style={{ bottom: "110px", right: "4%", left: "auto", top: "85px" }}
        >
          {({ TransitionProps, placement }) => (
            <Grow {...TransitionProps}>
              <Paper sx={{backgroundColor:'lightcyan'}}>
                <ClickAwayListener
                  onClickAway={() => {
                    props.handleMenu();
                  }}
                >
                  <MenuList
                    id="composition-menu"
                    aria-labelledby="composition-button"
                  >
                    <MenuItem
                      onClick={() => {
                        props.handleMenuCard(1);
                      }}
                      sx={menuItemStyles}
                    >
                      Home
                    </MenuItem>
                    <Divider variant="middle" align="center"></Divider>
                    <MenuItem
                      onClick={() => {
                        props.handleMenuCard(2);
                      }}
                      sx={menuItemStyles}
                    >
                      Experience
                    </MenuItem>
                    <Divider variant="middle" align="center"></Divider>
                    <MenuItem
                      onClick={() => {
                        props.handleMenuCard(3);
                      }}
                      sx={menuItemStyles}
                    >
                      Projects
                    </MenuItem>
                    <Divider variant="middle" align="center"></Divider>
                    <MenuItem
                      onClick={() => {
                        props.handleMenuCard(4);
                      }}
                      sx={menuItemStyles}
                    >
                      Education
                    </MenuItem>
                    <Divider variant="middle" align="center"></Divider>
                    <MenuItem
                      onClick={() => {
                        props.handleMenuCard(5);
                      }}
                      sx={menuItemStyles}
                    >
                      Skills
                    </MenuItem>
                    <Divider variant="middle" align="center"></Divider>
                    <MenuItem
                      onClick={() => {
                        props.handleMenuCard(6);
                      }}
                      sx={menuItemStyles}
                    >
                      Recommendations
                    </MenuItem>
                    <Divider variant="middle" align="center"></Divider>
                    <MenuItem
                      onClick={() => {
                        props.handleMenuCard(7);
                      }}
                      sx={menuItemStyles}
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
