import Search from "./Search.jsx";
import ListItems from "./ListItems.jsx";
import { TopListData, BottomListData } from "../data/ListData.js";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/material";
import SideBarButtons from "./SideBarButtons.jsx";

export default function LeftSideBar() {
  return (
    <>
      <div style={{ height: 10 }} />
      <Paper sx={{ maxWidth: 330, borderRadius: 3, padding: 1 }}>
        <Search />
        <Typography
          variant="subtitle2"
          component="h2"
          fontWeight="700"
          sx={{
            paddingX: 1.1,
            paddingTop: 1.5,
            color: "#6d6d6d",
            fontWeight: 700,
          }}
        >
          Installed
        </Typography>
        <ListItems prop={TopListData} />
      </Paper>
      <div style={{ height: 120 }} />
      <Paper sx={{ maxWidth: 330, borderRadius: 3, padding: 1 }}>
        <Typography variant="subtitle1" component="h3" sx={{ paddingX: 1.1 }}>
          Recommended
        </Typography>
        <ListItems prop={BottomListData} />
      </Paper>
      <Box
        sx={{
          maxWidth: 330,
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          justifyContent: "space-between",
          padding: 1,
        }}
      >
        <SideBarButtons>
          <Typography variant="body2" sx={{ padding: 0.5 }}>
            Go to Community
          </Typography>
          <ArrowForwardIcon sx={{ fontSize: 18, fontWeight: 900 }} />
        </SideBarButtons>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <SideBarButtons >
            <Typography
              variant="body2"
              sx={{ paddingY: 0.5, paddingX: 1.5, fontSize: 20, fontWeight: 900 }}
            >
              +
            </Typography>
          </SideBarButtons>
          <div style={{ width: 10 }} />
          <SideBarButtons >
            <Typography
              variant="body2"
              sx={{ paddingY: 0.5, paddingX: 1.8, fontSize: 20, fontWeight: 900 }}
            >
              -
            </Typography>
          </SideBarButtons>
        </Box>
      </Box>
    </>
  );
}
