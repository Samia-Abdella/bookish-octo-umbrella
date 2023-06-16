/* eslint-disable react/prop-types */
import { Grid, Paper } from "@mui/material";

const SideBarButtons = (props) => {
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        maxWidth: 160,
        borderRadius: 3,
        marginTop: 0.5,
      }}
    >
      <Grid
        sx={{ padding: 0.75 }}
        container
        direction="row"
        alignItems="center"
      >
        {props.children}
      </Grid>
    </Paper>
  );
};

export default SideBarButtons;
