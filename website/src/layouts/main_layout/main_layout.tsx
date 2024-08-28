import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";
import BaseLayout from "../base/base_layout";
import { MAIN_THEME_COLOR } from "../../providers/theme/colors/colors";
import Navbar from "../../views/components/navbar/navbar";
import Footer from "../../views/components/footer/footer";

export default function MainLayout({ children }: PropsWithChildren<{}>) {
  return (
    <BaseLayout>
      <Grid container justifyContent={"center"}>
        <Box
          sx={{
            display: "flex",
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: 9999,
            height: 90,
            backgroundColor: "#ffffff",
          }}
        >
          <Grid item md={1} lg={1} />
          <Grid item md={10} lg={10} sm={12} xs={12}>
            <Navbar />
          </Grid>
          <Grid item md={1} lg={1} />
        </Box>
        <Grid md={1} lg={1} />
        <Grid item md={10} lg={10} sm={12} xs={12}>
          {children}
        </Grid>
        <Grid md={1} lg={1} />
        <Grid md={1} lg={1} />
        <Grid item md={10} lg={10} sm={12} xs={12}>
          {/* <Footer /> */}
        </Grid>
        <Grid md={1} lg={1} />
      </Grid>
    </BaseLayout>
  );
}
