import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Grid from '@mui/material/Unstable_Grid2';
import {
  navigateCardIcons
} from "./../constants";
import CardMedia from "@mui/material/CardMedia";
import Snackbar from "@mui/material/Snackbar";
import Card from "@mui/material/Card";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

export default function NavigateCard(props) {
  const [vertical, setVertical] = useState("bottom");
  const [horizontal, setHorizontal] = useState("center");
  const [activeNbr, setActivateNbr] = useState(1);

  const handleNavigateCard = (value) => {
    setActivateNbr(value);
    props.handleSectionNbr(value);
  };

  return (
    <React.Fragment>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={true}
        sx={{ minWidth: "60%", maxWidth: "70%" }}
        TransitionComponent={TransitionLeft}
      >
        <Card
          variant="outlined"
          sx={{ backgroundColor: "aliceblue", width: "100%",borderRadius:'10px' }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              xs={2}
              sx={activeNbr === 1 ? { backgroundColor: "aquamarine" } : null}
            >
              <IconButton
                sx={{ paddingBottom: "0px", width: "100%" }}
                onClick={() => {
                  handleNavigateCard(1);
                }}
              >
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={0.5}
                >
                  <CardMedia
                    component="img"
                    src={navigateCardIcons.home}
                    alt="img"
                    sx={{ height: "30px", width: "30px" }}
                  />

                  <Typography sx={{fontFamily: "cursive"}}>{"Home"}</Typography>
                </Stack>
              </IconButton>
            </Grid>

            <Grid
              xs={2}
              sx={activeNbr === 2 ? { backgroundColor: "aquamarine" } : null}
            >
              <IconButton
                sx={{ paddingBottom: "0px", width: "100%" }}
                onClick={() => {
                  handleNavigateCard(2);
                }}
              >
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={0.5}
                >
                  <CardMedia
                    component="img"
                    src={navigateCardIcons.experience}
                    alt="img"
                    sx={{ height: "30px", width: "30px" }}
                  />

                  <Typography sx={{fontFamily: "cursive"}}>{"Experience"}</Typography>
                </Stack>
              </IconButton>
            </Grid>

            <Grid
              xs={2}
              sx={activeNbr === 3 ? { backgroundColor: "aquamarine" } : null}
            >
              <IconButton
                sx={{ paddingBottom: "0px", width: "100%" }}
                onClick={() => {
                  handleNavigateCard(3);
                }}
              >
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={0.5}
                >
                  <CardMedia
                    component="img"
                    src={navigateCardIcons.projects}
                    alt="img"
                    sx={{ height: "30px", width: "30px" }}
                  />

                  <Typography sx={{fontFamily: "cursive"}}>{"Projects"}</Typography>
                </Stack>
              </IconButton>
            </Grid>

            <Grid
              xs={2}
              sx={activeNbr === 4 ? { backgroundColor: "aquamarine" } : null}
            >
              <IconButton
                sx={{ paddingBottom: "0px", width: "100%" }}
                onClick={() => {
                  handleNavigateCard(4);
                }}
              >
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={0.5}
                >
                  <CardMedia
                    component="img"
                    src={navigateCardIcons.education}
                    alt="img"
                    sx={{ height: "30px", width: "30px" }}
                  />

                  <Typography sx={{fontFamily: "cursive"}}>{"Education"}</Typography>
                </Stack>
              </IconButton>
            </Grid>

            <Grid
              xs={2}
              sx={activeNbr === 5 ? { backgroundColor: "aquamarine" } : null}
            >
              <IconButton
                sx={{ paddingBottom: "0px", width: "100%" }}
                onClick={() => {
                  handleNavigateCard(5);
                }}
              >
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={0.5}
                >
                  <CardMedia
                    component="img"
                    src={navigateCardIcons.skills}
                    alt="img"
                    sx={{ height: "30px", width: "30px" }}
                  />

                  <Typography sx={{fontFamily: "cursive"}}>{"Skills"}</Typography>
                </Stack>
              </IconButton>
            </Grid>

            <Grid
              xs={2}
              sx={activeNbr === 6 ? { backgroundColor: "aquamarine" } : null}
            >
              <IconButton
                sx={{ paddingBottom: "0px", width: "100%" }}
                onClick={() => {
                  handleNavigateCard(6);
                }}
              >
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={0.5}
                >
                  <CardMedia
                    component="img"
                    src={navigateCardIcons.recommendations}
                    alt="img"
                    sx={{ height: "30px", width: "30px" }}
                  />

                  {/* <BootstrapTooltip title="Recommendations" placement="top"> */}
                  <Typography sx={{fontFamily: "cursive"}}>{"Recommendations"}</Typography>
                  {/* </BootstrapTooltip> */}
                </Stack>
              </IconButton>
            </Grid>
          </Grid>
        </Card>
      </Snackbar>
    </React.Fragment>
  );
}
