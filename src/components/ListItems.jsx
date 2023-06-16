import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
// import chatgpt from "../assets/ChatGPT-Logo.jpg"

export default function ListItems(list) {
  const listItem = list.prop;

  const onDragStart = (event, nodeType,) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  
  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360 }}>
        {listItem.map((item) => {
          return (
            <ListItem onDragStart={(event) => onDragStart(event, `${item.primary}`)} draggable
              key={item.id}
              sx={{ marginX: 0.5, marginY: 0.5, padding: 0 }}
            >
              <ListItemAvatar>
                <Avatar  
                  src= {item.img}
                  style={{ height: "40px", width: "40px" }}
                />
              </ListItemAvatar>
              <ListItemText 
                primary={item.primary}
                primaryTypographyProps={{
                  style: { color: "white", fontSize: 16 },
                }}
                secondary={item.secondary}
                secondaryTypographyProps={{
                  style: { color: "#6d6d6d", fontSize: 14 },
                }}
              />
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
