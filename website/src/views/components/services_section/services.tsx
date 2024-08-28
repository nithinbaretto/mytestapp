import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { isMobile } from "react-device-detect";

interface Props {}

function Services(props: Props) {
  const {} = props;

  return (
    <Box mt={isMobile ? 5 : 15}>
      <Grid container spacing={3}>
        <Grid item md={1} lg={1} sm={12} xs={12}>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography
              sx={{ backgroundColor: "#B9FF66", borderRadius: 1 }}
              width={"fit-content"}
              textAlign={"center"}
              variant="h4"
              p={1}
            >
              Services
            </Typography>
          </Box>
        </Grid>
        <Grid ml={4} item md={4} lg={4} sm={12} xs={12}>
          <Box>
            <Typography>
              At our digital marketing agency, we offer a range of services to
              help businesses grow and succeed online. These services include:
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6} lg={6} sm={12} xs={12}></Grid>
      </Grid>
    </Box>
  );
}

export default Services;
