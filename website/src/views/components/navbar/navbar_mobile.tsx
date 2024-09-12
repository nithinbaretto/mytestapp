import React from "react";
import MainLayout from "../../../layouts/main_layout/main_layout";
import { Box, Drawer, Grid, IconButton, Typography } from "@mui/material";
import { ChevronRightRounded, Close, Menu } from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import { MAIN_THEME_COLOR } from "../../../providers/theme/colors/colors";

interface Props {}

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -drawerWidth,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
  /**
   * This is necessary to enable the selection of content. In the DOM, the stacking order is determined
   * by the order of appearance. Following this rule, elements appearing later in the markup will overlay
   * those that appear earlier. Since the Drawer comes after the Main content, this adjustment ensures
   * proper interaction with the underlying content.
   */
  position: "relative",
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

function NavbarForMobile(props: Props) {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { pathname } = useLocation();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const {} = props;

  let navItems = [
    {
      id: 1,
      name: "About us",
    },
    {
      id: 1,
      name: "Services",
    },
    {
      id: 1,
      name: "Plans",
    },
    {
      id: 1,
      name: "Success Stories",
    },
  ];

  return (
    <>
      <Grid display={"flex"} justifyContent={"start"} item sm={1} xs={1} ml={1}>
        <IconButton
          color="primary"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          sx={{ ...(open && { display: "none" }), p: 0, m: 0 }}
        >
          <Box
            border="1px solid #ffffff"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 32,
              width: 44,
              borderRadius: 1,
            }}
          >
            <Menu
              style={{
                color: "#ffffff",
              }}
            />
          </Box>
        </IconButton>
      </Grid>

      <Main open={open}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
          variant="persistent"
          anchor="right"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? <Close /> : <Close />}
            </IconButton>
          </DrawerHeader>
          <Box display={"flex"} flexDirection={"column"}>
            {navItems.map((item, index) => (
              <Box
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                m={2}
              >
                <Box sx={{ borderBottom: `1px solid ${MAIN_THEME_COLOR}` }}>
                  <Link
                    to={"/"}
                    style={{
                      textDecoration: "none",
                      width: "fit-content",
                    }}
                  >
                    <Typography color={"#1B001B"}>{item?.name}</Typography>
                  </Link>
                </Box>
                <ChevronRightRounded />
              </Box>
            ))}
          </Box>
        </Drawer>
      </Main>
    </>
  );
}

export default NavbarForMobile;
