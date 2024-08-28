import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { isMobile } from "react-device-detect";

interface Props {}

function HeroSection(props: Props) {
  const {} = props;

  return (
    <Grid container spacing={2} mt={isMobile ? 10 : 20}>
      <Grid lg={6} md={6} sm={12} xs={12} xl={6}>
        <Box display={"flex"} flexDirection={"column"} mx={isMobile ? 4 : 0}>
          <Box>
            <Typography variant="h3">
              Navigating the <br /> digital landscape <br /> for success
            </Typography>
          </Box>
          {isMobile && (
            <Box mt={5}>
              <img
                height={isMobile ? 250 : 400}
                width={isMobile ? 350 : 600}
                src={"images/icons/hero_section.svg"}
              />
            </Box>
          )}
          <Box mt={2}>
            <Typography variant="subtitle2">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </Typography>
          </Box>
          <Box mt={3}>
            <Button
              fullWidth={isMobile}
              variant="contained"
              sx={{ minWidth: 200, minHeight: 50 }}
            >
              Book a consultation
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid
        display={"flex"}
        lg={6}
        md={6}
        sm={12}
        xs={12}
        xl={6}
        justifyContent={"center"}
      >
        {!isMobile && (
          <Box height={400} width={400}>
            <img
              height={isMobile ? 200 : 400}
              width={isMobile ? 300 : 600}
              src={"images/icons/hero_section.svg"}
            />
          </Box>
        )}
      </Grid>
    </Grid>
  );
}

export default HeroSection;
