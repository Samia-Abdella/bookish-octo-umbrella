import { Grid, ThemeProvider, createTheme } from "@mui/material";
import MiniDrawer from "./components/MiniDrawer";
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";
import Title from "./components/Title";
import Terminal from "./components/Terminal";
import CssBaseline from "@mui/material/CssBaseline";

import WorkFlow from "./components/WorkFlow";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    action: {
      disabledBackground: "",
      disabled: "white",
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Grid container sx={{ height: "100vh", width: "100vw" }}>
        <Grid item xs={0.5} sx={{ backgroundColor: "black" }}>
          <MiniDrawer />
        </Grid>

        <Grid item xs={2.25} sx={{ backgroundColor: "black" }}>
          <LeftSideBar />
        </Grid>

        <Grid item xs={9.25}>
          <Grid container>
            <Grid item xs={12} sx={{ height: "11vh" }}>
              <Title />
            </Grid>

            <Grid item xs={9.75} sx={{ height: "calc(100vh - (11vh * 2))" }}>
              <WorkFlow />
            </Grid>

            <Grid
              item
              xs={2.25}
              sx={{
                height: "calc(100vh - (11vh * 2))",
                backgroundColor: "black",
                overflowY: "auto",
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
              }}
            >
              <div>
                <RightSideBar />
              </div>
            </Grid>

            <Grid item xs={12} sx={{ height: "11vh" }}>
              <Terminal />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
