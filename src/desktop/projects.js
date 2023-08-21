import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { projectContent, socialIcons } from "../constants";

export default function Projects() {
  const handleGitHub = (URL) => {
    window.open(URL);
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      {projectContent.map((item, index) => {
        return (
          <Grid xs={12} md={6} key={index}>
            <Card sx={{ minHeight: "300px" }}>
              <CardContent>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid xs={item.github ? 10 : 12} align="left">
                    <Typography
                      sx={{
                        fontFamily: `'jost', sans-serif`,
                        backgroundColor: "lavender",
                        fontWeight: 600,
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Grid>
                
                    {item.github && (
                        <Grid xs={2} align="right">
                      <CardMedia
                        component="img"
                        src={socialIcons.github}
                        alt="img"
                        sx={{
                          height: "30px",
                          width: "30px",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          handleGitHub(item.github);
                        }}
                      /> </Grid>
                    )}
                 
                  <Grid xs={12}>
                    <Typography
                      sx={{
                        fontFamily: `'jost', sans-serif`,
                        minHeight: "100px",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Grid>
                  <Grid xs={12}>
                    <Divider
                      variant="middle"
                      align="center"
                      sx={{ fontFamily: `'jost', sans-serif`, fontWeight: 500 }}
                    >
                      Technologies Used
                    </Divider>
                  </Grid>
                  <Grid xs={12}>
                    <Typography variant="body2" color="text.secondary">
                      {item.skills.map((skill, skillIndex) => {
                        return (
                          <Chip
                            variant="outlined"
                            color="info"
                            label={skill}
                            key={skillIndex}
                            sx={{
                              fontFamily: `'jost', sans-serif`,
                              margin: "5px",
                            }}
                          />
                        );
                      })}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
