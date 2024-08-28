import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
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
      name: "About us",
    },
    {
      id: 1,
      name: "Services",
    },
    {
      id: 1,
      name: "Use Cases",
    },
    {
      id: 1,
      name: "Pricing",
    },
    {
      id: 1,
      name: "Blog",
    },
  ];

  return (
    <Grid container mt={3}>
      <Grid item md={4} lg={4} sm={10} xs={10}>
        <Box display={"flex"} alignItems={"center"}>
          <Box mx={3}>
            <img
              alt="icym logo"
              src="images/icons/Logo.svg"
              width={isMobile ? 120 : 180}
              height={35}
            />
          </Box>
        </Box>
      </Grid>
      {!isMobile && (
        <Grid display={"flex"} item md={8} lg={8} justifyContent={"end"}>
          <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
            {navItems?.map((item) => {
              return (
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Typography color="#000000" ml={5}>
                    {item?.name}
                  </Typography>
                </Link>
              );
            })}
            <Box ml={5}>
              <Button variant="outlined">Request a quote</Button>
            </Box>
          </Box>
        </Grid>
      )}
      {isMobile && <NavbarForMobile />}
    </Grid>
  );
}

export default Navbar;
