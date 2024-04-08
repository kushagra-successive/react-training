// import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
// import { Link, Outlet } from "react-router-dom";
// import styles from "../assignment4.module.css";
// const SideBar = () => {
//   return (
//     <div className={styles.container}>
//       <Sidebar>
//         <Menu>
//           <MenuItem>
//             <h2>SideBar</h2>
//           </MenuItem>
//           <MenuItem>
//             <Link to="/setting"> Settings </Link>
//           </MenuItem>
//           <MenuItem>
//             <Link to="/about"> AboutsUs </Link>
//           </MenuItem>
//           <MenuItem>
//             <Link to="/charts"> Charts </Link>
//           </MenuItem>
//           <MenuItem>
//             <Link to="/logout"> Logout</Link>
//           </MenuItem>
//         </Menu>
//       </Sidebar>
//       <div>
//         <h1 className={styles.content}>WELCOME TO FRONTPAGE</h1>
//       </div>
//       <Outlet />
//     </div>
//   );
// };

// export default SideBar;
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import ListItemText from "@mui/material/ListItemText";
const SideBar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      {/* When the drawer is open it displays the content in the <Drawer> component. When the drawer is closed, the onClose function sets the open state to false to close the drawer. */}
    </div>
  );
};
export default SideBar;
