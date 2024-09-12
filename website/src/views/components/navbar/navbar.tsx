import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { isMobile } from "react-device-detect";
import { Link, useLocation } from "react-router-dom";
import NavbarForMobile from "./navbar_mobile";
import { Menu } from "@mui/icons-material";

interface Props {}

function Navbar(props: Props) {
  const {} = props;
  const [open, setOpen] = React.useState(false);
  const { pathname } = useLocation();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  let navItems = [
    {
      id: 1,
      name: "About",
    },
    {
      id: 2,
      name: "Services",
    },
    {
      id: 3,
      name: "Plans",
    },
    {
      id: 4,
      name: "Success Stories",
    },
  ];

  return (
    <Box
      sx={{
        mx: {
          xs: 3,
          sm: 7,
        },
      }}
      mx={5}
    >
      <Grid container mt={3}>
        <Grid item md={4} lg={4} sm={10} xs={10}>
          <Box display={"flex"} alignItems={"flex-start"}>
            <Box>
              <img
                alt="icym logo"
                src="images/icons/Logo.svg"
                width={"auto"}
                height={35}
              />
            </Box>
          </Box>
        </Grid>
        {!isMobile && (
          <Grid
            display={"flex"}
            item
            md={6}
            lg={6}
            justifyContent={"flex-start"}
          >
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              zIndex={100}
              sx={{ backgroundColor: "#ffffff" }}
            >
              {navItems?.map((item) => {
                return (
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Typography color="#000000" ml={5} variant="body2">
                      {item?.name}
                    </Typography>
                  </Link>
                );
              })}
            </Box>
          </Grid>
        )}
        {!isMobile && (
          <Grid
            display={"flex"}
            item
            md={2}
            lg={2}
            justifyContent={"flex-end"}
            // zIndex={98}
          >
            <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#EAEAEA",
                  borderRadius: 2,
                  minWidth: 100,
                  color: "#1B2B44",
                }}
                size="large"
              >
                <Typography fontSize={12} fontWeight={600}>
                  Login
                </Typography>
              </Button>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              ml={1}
            >
              <Button
                variant="text"
                sx={{
                  textTransform: "capitalize",
                  textDecoration: "underline",
                  textDecorationColor: "#ffffff",
                }}
              >
                <Typography sx={{ color: "#ffffff" }} fontSize={12}>
                  Need Help ?
                </Typography>
              </Button>
            </Box>
          </Grid>
        )}

        {isMobile && <NavbarForMobile />}
      </Grid>
    </Box>
  );
}

export default Navbar;
