import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  List,
  ListItem,
  Typography,
  styled,
  ListItemButton,
  ListItemText,
  Button,
} from "@mui/material";
// menu
import DrawerItem from "./DrawerItem";
// rotas
import { Link, useNavigate } from "react-router-dom";

// personalizacao
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const ListMenu = styled(List)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

//rotas
const itemList = [
  // {
  //   text: "Home",
  //   to: "/"
  // },
  // {
  //   text: "About",
  //   to: "/about"
  // },
  // {
  //     text: "Contact",
  //     to: "/contact"
  // }
];

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/login");
  };
  return (
    <AppBar
      component="nav"
      position="sticky"
      sx={{
        backgroundColor: "orange",
      }}
      elevation={0}
    >
      <StyledToolbar>
        <Typography variant="h6" component="h2">
          Conview
        </Typography>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          {/* <DrawerItem />  */}
          <Button
            variant="contained"
            onClick={handleNavigation}
            sx={{
              mr: 2,
              px: 2,
              py: 1,
              fontSize: "0.6rem",
              textTransform: "capitalize",
              borderRadius: 0,
              borderColor: "#14192d",
              color: "#fff",
              backgroundColor: "#14192d",
              "&&:hover": {
                backgroundColor: "#343a55",
              },
              "&&:focus": {
                backgroundColor: "#343a55",
              },
            }}
          >
            SIGN UP / LOG IN
          </Button>
        </Box>
        <ListMenu>
          {itemList.map((item) => {
            const { text } = item;
            return (
              <ListItem key={text}>
                <ListItemButton
                  component={Link}
                  to={item.to}
                  sx={{
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#1e2a5a",
                    },
                  }}
                >
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            );
          })}
          <Button
            variant="contained"
            onClick={handleNavigation}
            sx={{
              mr: 2,
              px: 4,
              py: 1,
              fontSize: "0.9rem",
              textTransform: "capitalize",
              borderRadius: 0,
              borderColor: "#14192d",
              color: "#fff",
              backgroundColor: "#14192d",
              "&&:hover": {
                backgroundColor: "#343a55",
              },
              "&&:focus": {
                backgroundColor: "#343a55",
              },
            }}
          >
            SIGN UP / LOG IN
          </Button>
        </ListMenu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
