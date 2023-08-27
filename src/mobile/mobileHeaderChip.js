import React from "react";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import CardMedia from "@mui/material/CardMedia";

export default function MobileHeaderChip(props) {
  return (
    <Divider variant="middle" align="center" sx={{ margin: "20px" }}>
      <Chip
        variant="outlined"
        label={props.label}
        sx={{
          fontFamily: `'jost', sans-serif`,
          fontWeight: 500,
          backgroundColor: "palevioletred",
          color: "white",
          fontSize:'16px'
        }}
        icon={
          <CardMedia
            component="img"
            src={props.icon}
            alt="img"
            sx={{ height: "30px", width: "30px" }}
          />
        }
      />
    </Divider>
  );
}
