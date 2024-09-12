import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { isMobile } from "react-device-detect";

interface Props {}

function WhoWeAreSection(props: Props) {
  const {} = props;

  let usersDataCount = [
    { title: "Successful Matchmaking", count: "8yrs" },
    { title: "Users Served", count: "11567" },
    { title: "KYC Verified Users", count: "10445" },
    { title: "Active Men Users", count: "4567" },
    { title: "Active Women Users", count: "5137" },
  ];

  return (
    <Grid
      container
      spacing={2}
      sx={{ my: { xs: 10, sm: 35 }, px: { xs: 2, sm: 0 } }}
      position={"relative"}
    >
      <Box
        position={"absolute"}
        sx={{
          left: {
            xs: 17,
            sm: -120,
          },
          top: {
            xs: -180,
            sm: -200,
          },
        }}
      >
        <img src={"images/icons/flower.svg"} />
      </Box>
      <Grid
        item
        lg={12}
        md={12}
        sm={12}
        xs={12}
        xl={12}
        sx={{
          mt: {
            xs: 25,
          },
        }}
      >
        <Box>
          <Typography
            textAlign={"center"}
            textTransform={"uppercase"}
            color="#A6AEBD"
            sx={{
              letterSpacing: 6, // Adjust the value as needed
            }}
          >
            Who are we
          </Typography>
        </Box>
        <Box
          display={"flex"}
          sx={{
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
            },
          }}
          justifyContent={"center"}
          mt={1}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: {
                xs: "1.8rem",
                md: "3rem",
                lg: "3rem",
                xl: "3rem",
              },
            }}
            fontWeight={600}
            color="#1B2B44"
            textAlign={"center"}
          >
            Find Your Soulmate with
          </Typography>
          <Typography
            ml={1}
            variant="h4"
            fontWeight={600}
            color={"primary.main"}
            sx={{
              fontSize: { xs: "1.8rem", md: "3rem", lg: "3rem", xl: "3rem" },
            }}
            textAlign={"center"}
          >
            WAAW Matrimony
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent={"center"} mt={1}>
          <Typography
            variant="caption"
            textAlign={"center"}
            sx={{
              fontSize: {
                xs: "1rem",
                sm: "0.875rem",
              },
            }}
          >
            We aren’t just a matchmaking site; we are a sanctuary for genuine
            connections and lifelong partnerships. With our personalized <br />
            approach, we foster a secure community where individuals can build
            meaningful relationships. Committed to integrity and
            <br /> inclusivity, we guide you on your journey to lasting love.
          </Typography>
        </Box>
      </Grid>

      <Grid
        display={"flex"}
        justifyContent={"center"}
        item
        lg={2}
        md={2}
        sm={12}
        xs={12}
        xl={2}
        spacing={1}
      >
        <Box sx={{ mt: { xs: 1, sm: 5 } }}>
          <Typography
            sx={{
              fontSize: {
                xs: "1.8rem",
                sm: "3rem",
              },
            }}
            textAlign={"center"}
          >
            {"8"}
            <span>yrs</span>
          </Typography>

          <Typography
            variant="caption"
            color="#666B73"
            sx={{
              fontSize: {
                xs: "0.875rem",
                sm: "0.875rem",
              },
            }}
          >
            {"Successful Matchmaking"}
          </Typography>
        </Box>
      </Grid>
      <Grid
        display={"flex"}
        justifyContent={"center"}
        item
        lg={2}
        md={2}
        sm={12}
        xs={12}
        xl={2}
        spacing={1}
      >
        <Box sx={{ mt: { xs: 1, sm: 5 } }}>
          <Typography
            sx={{
              fontSize: {
                xs: "1.8rem",
                sm: "3rem",
              },
            }}
          >
            {"11567"}
          </Typography>

          <Typography
            display={"flex"}
            variant="caption"
            color="#666B73"
            sx={{
              fontSize: {
                xs: "0.875rem",
                sm: "0.875rem",
              },
            }}
            justifyContent={"center"}
          >
            {"Users Served"}
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        lg={1}
        md={1}
        sm={12}
        xs={12}
        xl={1}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={1.1}
          height={"60%"}
          sx={{
            backgroundColor: "#DADADA",
            width: {
              xs: "40%",
              sm: 1.1,
            },
            height: { xs: 1.1, sm: "60%" },
            mt: {
              xs: 2,
              sm: 7,
            },
          }}
        />
      </Grid>
      <Grid
        display={"flex"}
        justifyContent={"center"}
        item
        lg={2}
        md={2}
        sm={12}
        xs={12}
        xl={2}
        spacing={1}
      >
        <Box sx={{ mt: { xs: 1, sm: 5 } }}>
          <Typography
            sx={{
              fontSize: {
                xs: "1.8rem",
                sm: "3rem",
              },
            }}
            textAlign={"center"}
          >
            {"10445"}
          </Typography>

          <Typography
            display={"flex"}
            variant="caption"
            color="#666B73"
            sx={{
              fontSize: {
                xs: "0.875rem",
                sm: "0.875rem",
              },
            }}
            justifyContent={"center"}
          >
            {"KYC Verified Users"}
          </Typography>
        </Box>
      </Grid>
      <Grid
        display={"flex"}
        justifyContent={"center"}
        item
        lg={2}
        md={2}
        sm={12}
        xs={12}
        xl={2}
        spacing={1}
      >
        <Box sx={{ mt: { xs: 1, sm: 5 } }}>
          <Typography
            sx={{
              fontSize: {
                xs: "1.8rem",
                sm: "3rem",
              },
            }}
            textAlign={"center"}
          >
            {"4567"}
          </Typography>

          <Typography
            variant="caption"
            color="#666B73"
            sx={{
              fontSize: {
                xs: "0.875rem",
                sm: "0.875rem",
              },
            }}
          >
            {"Active Men Users"}
          </Typography>
        </Box>
      </Grid>
      <Grid
        display={"flex"}
        justifyContent={"center"}
        item
        lg={2}
        md={2}
        sm={12}
        xs={12}
        xl={2}
        spacing={1}
      >
        <Box sx={{ mt: { xs: 1, sm: 5 } }}>
          <Typography
            sx={{
              fontSize: {
                xs: "1.8rem",
                sm: "3rem",
              },
            }}
            textAlign={"center"}
          >
            {"5137"}
          </Typography>

          <Typography
            variant="caption"
            color="#666B73"
            sx={{
              fontSize: {
                xs: "0.875rem",
                sm: "0.875rem",
              },
            }}
          >
            {"Active Women Users"}
          </Typography>
        </Box>
      </Grid>

      <Grid lg={1} md={1} sm={12} xs={12} xl={1}></Grid>
    </Grid>
  );
}

export default WhoWeAreSection;
