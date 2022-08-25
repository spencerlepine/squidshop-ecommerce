import React from "react";
import BannerSlide from "../../components/BannerSlide";
import CatalogView from "../../components/CatalogView";
import PageElement from '../../layout/PageElement';

const HomePage = () => {
  return (
    <PageElement maxWidth="md">
      <BannerSlide />
      <CatalogView hideTitle />
    </PageElement>
  );
};

export default HomePage;
