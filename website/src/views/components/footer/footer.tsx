import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {}

function Footer() {
  return (
    <Box
      height={300}
      width={"100%"}
      sx={{
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: "#191A23",
      }}
      mt={"30%"}
    >
      <Typography>Footer</Typography>
    </Box>
  );
}

export default Footer;
