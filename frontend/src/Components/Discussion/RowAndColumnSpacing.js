import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useEffect, React, useState } from "react";
import Alldiss from "./Alldiss.js";
import FormDialog from "./FormDialog.js";
import { Container } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ width: "100%", marginBottom: 15 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Item style={{ backgroundColor: "#BB623E" }}>
              <div>
                <Alldiss />
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
