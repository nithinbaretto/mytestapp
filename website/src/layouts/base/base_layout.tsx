import { Box, CssBaseline } from "@mui/material";
import React, { PropsWithChildren } from "react";

interface BaseLayoutProps {}

export default function BaseLayout({
  children,
}: PropsWithChildren<BaseLayoutProps>) {
  return (
    <Box>
      <CssBaseline />
      {children}
    </Box>
  );
}
