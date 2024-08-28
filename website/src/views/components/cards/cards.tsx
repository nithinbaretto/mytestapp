import { ArrowRight, CallMadeOutlined } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { isMobile } from "react-device-detect";

interface Props {}

function CardsComp(props: Props) {
  const {} = props;

  function cardContent({
    cardBackgroundColor,
    textBgColor,
    text1,
    text2,
    arrowBgColor,
    icon,
    arrowColor,
  }: {
    cardBackgroundColor: string;
    textBgColor: string;
    text1: string;
    text2: string;
    arrowBgColor: string;
    icon: string;
    arrowColor: string;
  }) {
    return (
      <Box
        sx={{
          border: "1px solid #191A23",
          borderRadius: 5,
          borderBottomWidth: 5,
          backgroundColor: cardBackgroundColor,
        }}
        minHeight={isMobile ? 100 : 300}
        width={"100%"}
        mb={4}
      >
        <Grid container>
          <Grid lg={6} md={6} sm={12} xs={12}>
            <Box m={4}>
              <Typography
                width={"fit-content"}
                sx={{ backgroundColor: textBgColor }}
                variant="h5"
                borderRadius={1}
                px={1}
              >
                {text1}
              </Typography>
              <Typography
                width={"fit-content"}
                sx={{ backgroundColor: textBgColor }}
                variant="h5"
                borderRadius={1}
                px={1}
              >
                {text2}
              </Typography>
            </Box>
          </Grid>
          <Grid lg={6} md={6} sm={12} xs={12}>
            <Box
              display={"flex"}
              justifyContent={isMobile ? "flex-end" : "flex-start"}
              mt={isMobile ? 0 : 6}
            >
              <img
                src={icon}
                height={isMobile ? 170 : 200}
                width={isMobile ? 170 : 220}
              />
            </Box>
          </Grid>
          <Grid item md={12} lg={12} xs={12}>
            <Box display={"flex"} flexDirection={"row"} mx={4}>
              <Box
                display={"flex"}
                height={30}
                width={30}
                sx={{ backgroundColor: arrowBgColor, borderRadius: 30 }}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <CallMadeOutlined
                  sx={{ color: arrowColor, height: 20, width: 20 }}
                />
              </Box>
              <Typography color={arrowBgColor} ml={2} mb={isMobile ? 2 : 0}>
                Learn more
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  }

  return (
    <Box mt={isMobile ? 5 : 10} mx={isMobile ? 2 : 0}>
      <Grid container justifyContent={"center"} spacing={5}>
        <Grid item md={6} lg={6} sm={12} xs={12}>
          {cardContent({
            arrowBgColor: "#191A23",
            cardBackgroundColor: "#ffffff",
            icon: "images/icons/card5.svg",
            text1: "Search engine",
            text2: "optimization",
            textBgColor: "#B9FF66",
            arrowColor: "#B9FF66",
          })}
        </Grid>
        <Grid item md={6} lg={6} sm={12} xs={12}>
          {cardContent({
            arrowBgColor: "#191A23",
            cardBackgroundColor: "#B9FF66",
            icon: "images/icons/card4.svg",
            text1: "Pay-per-click",
            text2: "advertising",
            textBgColor: "#FFFFFF",
            arrowColor: "#B9FF66",
          })}
        </Grid>
        <Grid item md={6} lg={6} sm={12} xs={12}>
          {cardContent({
            arrowBgColor: "#FFFFFF",
            cardBackgroundColor: "#191A23",
            icon: "images/icons/card4.svg",
            text1: "Social Media",
            text2: "Marketing",
            textBgColor: "#FFFFFF",
            arrowColor: "#000000",
          })}
        </Grid>
        <Grid item md={6} lg={6} sm={12} xs={12}>
          {cardContent({
            arrowBgColor: "#191A23",
            cardBackgroundColor: "#FFFFFF",
            icon: "images/icons/card3.svg",
            text1: "Email",
            text2: "Marketing",
            textBgColor: "#B9FF66",
            arrowColor: "#B9FF66",
          })}
        </Grid>
        <Grid item md={6} lg={6} sm={12} xs={12}>
          {cardContent({
            arrowBgColor: "#191A23",
            cardBackgroundColor: "#B9FF66",
            icon: "images/icons/card4.svg",
            text1: "Content",
            text2: "Creation",
            textBgColor: "#FFFFFF",
            arrowColor: "#B9FF66",
          })}
        </Grid>
        <Grid item md={6} lg={6} sm={12} xs={12}>
          {cardContent({
            arrowBgColor: "#FFFFFF",
            cardBackgroundColor: "#191A23",
            icon: "images/icons/card4.svg",
            text1: "Analytics and ",
            text2: "Tracking",
            textBgColor: "#FFFFFF",
            arrowColor: "#000000",
          })}
        </Grid>
      </Grid>
    </Box>
  );
}

export default CardsComp;
