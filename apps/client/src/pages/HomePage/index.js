import React from "react";
import BannerSlide from "../../components/BannerSlide";
import CatalogView from "../../components/CatalogView";
import { Container } from "@mui/material";

const HomePage = () => {
  return (
    <Container component="main" maxWidth="md">
      <BannerSlide />
      <CatalogView hideTitle />
    </Container>
  );
};

export default HomePage;
