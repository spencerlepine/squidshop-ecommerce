import * as React from 'react';
import BannerSlide from "components/Catalog/BannerSlide";
import CatalogView from "components/Catalog/CatalogView";
import PageElement from 'layout/PageElement';
import DepartmentLinkOptions from 'components/Department/DepartmentLinkOptions';

const HomePage = () => {
  return (
    <PageElement maxWidth="md">
      <BannerSlide />
      <DepartmentLinkOptions />
      <CatalogView hideTitle />
    </PageElement>
  );
};

export default HomePage;
