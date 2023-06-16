import { ExpansionPanelData } from "../data/ListData.js";
import { TbCarouselVertical } from 'react-icons/tb';
import Typography from "@mui/material/Typography";
import {
  ChevronRight,
  Menu,
  Search,
  FirstPage,
  LastPage,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
} from "@mui/material";

export default function RightSideBar() {
  return (
    <>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: 2,
          paddingY: 1.6,
          marginX: 1,
          borderRadius: 3,
        }}
      >
        <Box>
          <Menu
            sx={{
              color: "#B3B3B3",
              fontWeight: 400,
              fontSize: 23,
              marginRight: 1,
            }}
          />
          <Search sx={{ color: "#B3B3B3" }} />
        </Box>
        <Box>
          <LastPage
            sx={{ fontSize: 20, color: "#B3B3B3", transform: "rotate(90deg)" }}
          />
          <FirstPage
            sx={{ fontSize: 20, color: "#B3B3B3", transform: "rotate(90deg)" }}
          />
        </Box>
      </Paper>

      {ExpansionPanelData.map((item) => {
        return (
          <Accordion
            key={item.id}
            disableGutters={true}
            square={true}
            sx={{
              margin: 1,
              borderRadius: 3,
              padding: 0,
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              sx={{ flexDirection: "row-reverse"}}
              expandIcon={
                <ChevronRight
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                />
              }
            >
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontWeight: "w700",
                  fontSize: 14,
                  marginY: 1,
                  marginX: 0.5,
                }}
              >
                {item.groupTitle}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List >
                {item.childrenData.map((child) => {
                  return (
                    <>
                      <ListItem
                        key={child.id}
                        sx={{ marginY: 1, padding: 0, marginX: 0 }}
                      >
                        <ListItemAvatar>
                          <Avatar
                            src={child.img}
                            style={{ height: "40px", width: "40px" }}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={child.title}
                          primaryTypographyProps={{
                            style: { color: "white", fontSize: 12 },
                          }}
                          secondary={child.subTitle}
                          secondaryTypographyProps={{
                            style: { color: "#B3B3B3", fontSize: 10 },
                          }}
                        />
                      </ListItem>
                    </>
                  );
                })}
              </List>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
}
