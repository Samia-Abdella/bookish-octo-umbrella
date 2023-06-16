/* eslint-disable react/prop-types */
import { Box, Grid, Typography } from "@mui/material";
import { Code } from "@mui/icons-material";
import { AiFillBug } from "react-icons/ai";
import { CiPause1 } from "react-icons/ci";

const TextWithIcons = ({ props }) => {
  return (
    <Grid container direction="row">
      <Grid item>
        <Typography
          variant="subtitle2"
          sx={{ color: "#B3B3B3", fontSize: "6" }}
        >
          {props}
        </Typography>
      </Grid>
      <Grid item>
        <Code
          sx={{
            color: "#6d6d6d",
            fontSize: "medium",
            fontWeight: "bold",
            transform: "rotate(90deg)",
          }}
        />
      </Grid>
    </Grid>
  );
};

const Terminal = () => {
  return (
    // a grid column with the first element of the col taking 20% of the col and the second element taking 80% of the col
    // with text as their content
    <Grid container sx={{ height: "100%" }} direction="column">
      {/* upper nav */}
      <Grid item xs={4}>
        <Grid
          container
          direction="row"
          alignContent="center"
          justifyContent="space-between"
          sx={{ paddingX: 1.5, paddingTop: 0.6 }}
        >
          <Grid item sx={{ display: "flex", paddingY: 0.2 }}>
            <Grid item sx={{ marginX: 0.5 }}>
              <AiFillBug color="#6d6d6d" />
            </Grid>

            <Grid item sx={{ marginX: 0.5 }}>
              <CiPause1 color="#B3B3B3" />
            </Grid>

            <Grid item sx={{ marginX: 1 }}>
              <Typography
                variant="subtitle2"
                sx={{ color: "#B3B3B3", fontSize: "8", fontWeight: "bold" }}
              >
                Debugger running -
              </Typography>
            </Grid>

            <Grid item sx={{ marginX: 1 }}>
              <Typography
                variant="subtitle2"
                sx={{ color: "#6d6d6d", fontSize: "6", paddingLeft: 0.4 }}
              >
                article progress
              </Typography>
            </Grid>
          </Grid>

          <Grid item sx={{ display: "flex", marginTop: 0.5 }}>
            <Grid item sx={{ marginX: 1 }}>
              <TextWithIcons props="All Information" />
            </Grid>
            <Grid item sx={{ marginX: 1 }}>
              <TextWithIcons props="This Workflow" />
            </Grid>
            <Grid item sx={{ marginLeft: 1, marginTop: 0.5 }}>
              <Box
                sx={{
                  height: 15,
                  width: 15,
                  border: "1px solid #6d6d6d",
                  backgroundColor: "transparent",
                  borderRadius: 1,
                }}
              ></Box>
            </Grid>
            <Grid item sx={{ marginX: 1 }}>
              <Typography
                variant="subtitle2"
                sx={{ color: "#B3B3B3", fontSize: "6", paddingLeft: 0.4 }}
              >
                Selected Object(s)
              </Typography>
            </Grid>
            <Grid item sx={{ marginX: 1 }}>
              <Typography
                variant="subtitle2"
                sx={{ color: "#B3B3B3", fontSize: "6", paddingLeft: 0.4 }}
              >
                Copy
              </Typography>
            </Grid>
            <Grid item sx={{ marginX: 1 }}>
              <Typography
                variant="subtitle2"
                sx={{ color: "#B3B3B3", fontSize: "6", paddingLeft: 0.4 }}
              >
                Clear
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* terminal */}
      <Grid item xs={8}>
        <Grid
          container
          direction="row"
          alignItems="start"
          justifyContent="start"
          sx={{
            borderTop: "1px solid #6d6d6d",
            height: "100%",
            padding: 1.5,
          }}
        >
          <Grid item>
            <Typography
              variant="subtitle2"
              sx={{ color: "#957BA8", fontSize: "10", fontWeight: 400 }}
            >
              [14:29:57.980]
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle2"
              sx={{
                color: "#B3B3B3",
                fontSize: "10",
                fontWeight: 400,
                paddingLeft: 1,
              }}
            >
              Logging Started ...
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Terminal;
