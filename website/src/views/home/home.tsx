import { Box } from "@mui/material";
import React from "react";
import MainLayout from "../../layouts/main_layout/main_layout";
import HeroSection from "../components/hero_section/hero_section";
import CompanyLogo from "../components/company_logo/company_logo";
import Services from "../components/services_section/services";
import CardsComp from "../components/cards/cards";
import WhoWeAreSection from "../who_we_are_section/who_we_are_section";

interface Props {}

function Home(props: Props) {
  const {} = props;

  return (
    <MainLayout>
      <HeroSection />
      <WhoWeAreSection />
    </MainLayout>
  );
}

export default Home;
