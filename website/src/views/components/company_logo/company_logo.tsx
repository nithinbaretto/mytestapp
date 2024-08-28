import { Box, Typography } from "@mui/material";
import React from "react";
import { isMobile } from "react-device-detect";

interface Props {}

function CompanyLogo(props: Props) {
  const {} = props;

  return (
    <Box mt={6}>
      <Box
        display={"flex"}
        width={"100%"}
        flexDirection={"row"}
        flexWrap={"wrap"}
        justifyContent="flex-start"
      >
        <img
          height={50}
          width={100}
          style={{
            display: "flex",
            flex: 1,
            marginRight: 8,
            marginLeft: 8,
          }}
          src={"images/icons/company_logo_1.svg"}
        />
        <img
          height={50}
          width={100}
          style={{ display: "flex", flex: 1, marginLeft: 8, marginRight: 8 }}
          src={"images/icons/company_logo_2.svg"}
        />
        <img
          height={50}
          width={100}
          style={{ display: "flex", flex: 1, marginLeft: 8, marginRight: 8 }}
          src={"images/icons/company_logo_3.svg"}
        />
        <img
          height={50}
          width={100}
          style={{ display: "flex", flex: 1, marginLeft: 8, marginRight: 8 }}
          src={"images/icons/company_logo_4.svg"}
        />
        <img
          height={50}
          width={100}
          style={{ display: "flex", flex: 1, marginLeft: 8, marginRight: 8 }}
          src={"images/icons/company_logo_5.svg"}
        />
      </Box>
    </Box>
  );
}

export default CompanyLogo;
