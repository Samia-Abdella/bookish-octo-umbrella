import SideBar from "./LeftSideBar";
import WorkFlow from "./WorkFlow";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

//react-icons

import { FaHardHat } from "react-icons/fa";
import { TbAtom } from "react-icons/tb";
import { AiOutlinePartition } from "react-icons/ai";
import { TfiPaintRoller } from "react-icons/tfi";
import { FiSpeaker } from "react-icons/fi";
import { GiAutoRepair } from "react-icons/gi";
import { TbCircles } from "react-icons/tb";
import { BiPieChartAlt2 } from "react-icons/bi";
import { FaQuestionCircle } from "react-icons/fa";
import { HiOutlineRefresh } from "react-icons/hi";

const topDrawerIcons = [
  { id: 1, text: "Inbox", icon: <FaHardHat /> },
  { id: 2, text: "Starred", icon: <TbAtom /> },
  { id: 3, text: "Send email", icon: <AiOutlinePartition /> },
  { id: 4, text: "Drafts", icon: <TfiPaintRoller /> },
  { id: 5, text: "All Mail", icon: <FiSpeaker /> },
  { id: 6, text: "Trash", icon: <GiAutoRepair /> },
];

const bottomDrawerIcons = [
  { id: 1, text: "Inbox", icon: <TbCircles /> },
  { id: 2, text: "Starred", icon: <BiPieChartAlt2 /> },
  { id: 3, text: "Send email", icon: <FaQuestionCircle /> },
  { id: 4, text: "Send email", icon: <HiOutlineRefresh /> },
];

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          {!open ? (
            <IconButton onClick={handleDrawerOpen}>
              <ChevronRightIcon style={{ padding: 3.5, fontSize: 26 }} />
            </IconButton>
          ) : (
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon style={{ fontSize: 26 }} />
            </IconButton>
          )}
        </DrawerHeader>
        {/* Custom Icons */}
        <List>
          {topDrawerIcons.map((item) => (
            <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  maxHeight: 45,
                  fontSize: 24,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List>
          <div style={{ height: "200%" }} />
          {bottomDrawerIcons.map((item) => (
            <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 40,
                  fontSize: 22,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    maxWidth: 40,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      
      {/* <Box component="main" sx={{ flexGrow: 1, px: 3 }}>
        <Grid container spacing={5}>
          <Grid item xs={2.8}>
            <SideBar />
          </Grid>
          <Grid item xs={6}>
            <WorkFlow />
          </Grid>
          <Grid item xs={3}>
            <SideBar />
          </Grid>
        </Grid>
      </Box> */}
    </Box>
  );
}
