import { Box, Grid, Paper, Typography } from "@mui/material";
import { AiFillBug } from "react-icons/ai";
import { Menu } from "@mui/icons-material";
import { TbMathIntegralX } from "react-icons/tb";
import { RiAddLine } from "react-icons/ri";
import { BsUpload } from "react-icons/bs";

const Title = () => {
  return (
    <Grid container sx={{ height: "12vh", backgroundColor: "black" }}>
      <Grid item xs={9.75}>
        <Grid container direction="column" style={{ height: "100%" }}>
          <Grid item xs={12} style={{ flex: 2 }}>
            <Typography
              variant="h5"
              component="h5"
              sx={{
                paddingX: 1.5,
                paddingTop: 2.5,
                fontWeight: 800,
                fontSize: 24,
              }}
            >
              Open AI helper
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ flex: 1 }}>
            <Grid
              container
              direction="row"
              style={{ height: "100%", paddingLeft: "10px" }}
            >
              <Grid item xs={1.3}>
                <Paper
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    maxWidth: 120,
                    borderRadius: 1,
                    marginTop: 0.5,
                    backgroundColor: "#1F1525",
                  }}
                >
                  <Grid
                    sx={{ padding: 0.25, fontWeight: 400, fontSize: 12 }}
                    container
                    direction="row"
                    alignItems="center"
                    color="#8D5BA4"
                  >
                    Configure Workflow
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="subtitle2"
                  component="h5"
                  sx={{
                    paddingX: 1.5,
                    paddingTop: 0.5,
                    fontWeight: 400,
                    fontSize: 14,
                    color: "#858585",
                  }}
                >
                  Uses Open AI to get do multiple things --v1.0.4
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2.25}>
        <Box
          sx={{
            paddingX: 1.5,
            paddingTop: 2.5,
          }}
        >
          <Grid container direction="row" alignItems="center">
            <Grid item sx={{ marginX: 0.75 }}>
              <TbMathIntegralX color="#6d6d6d" size={25} />
            </Grid>
            <Grid item sx={{ marginX: 0.75 }}>
              <RiAddLine color="#6d6d6d" size={26} />
            </Grid>
            <Grid item sx={{ marginX: 0.75 }}>
              <BsUpload color="#6d6d6d" size={22.5} />
            </Grid>
            <Grid item sx={{ marginX: 0.75 }}>
              <AiFillBug color="#6d6d6d" size={24} />
            </Grid>
            <Grid item sx={{ marginX: 2 }}>
              <Box
                sx={{
                  height: 35,
                  color: "#6d6d6d",
                  borderLeft: "1px solid #6d6d6d",
                }}
              ></Box>
            </Grid>
            <Grid item sx={{ marginX: 0.75 }}>
              <Menu sx={{ color: "#6d6d6d", fontSize: 25 }} />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Title;
