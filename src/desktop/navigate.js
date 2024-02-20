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
  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Popper
          open={props.showMenu}
          role={undefined}
          transition
          disablePortal
          style={{ bottom: "110px", right: "4%", left: "auto", top: "110px" }}
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
