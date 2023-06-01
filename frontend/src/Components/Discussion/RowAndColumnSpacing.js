import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useEffect, React, useState } from "react";
import "react-calendar/dist/Calendar.css";
import Alldiss from "./Alldiss.js";
import FormDialog from "./FormDialog.js";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: "100%", marginTop: 15 }}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2 }}>
        <Grid item xs={8}>
          <Item style={{ backgroundColor: "#D79F88" }}>
            {" "}
            <div>
              <Alldiss />
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
