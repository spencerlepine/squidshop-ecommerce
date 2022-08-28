import * as React from 'react';
import BannerSlide from "components/Catalog/BannerSlide";
import CatalogView from "components/Catalog/CatalogView";
import PageElement from 'layout/PageElement';

const HomePage = () => {
  return (
    <PageElement maxWidth="md">
      <BannerSlide />
      <CatalogView hideTitle />
    </PageElement>
  );
};

export default HomePage;
