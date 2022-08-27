import * as React from 'react';
import { Container } from '@material-ui/core';
import banner from "assets/banner.jpeg";
import banner2 from "assets/banner2.jpeg";
import banner3 from "assets/banner3.jpeg";

import ImageCarousel from './ImageCarousel';

const bannerImages = [banner, banner2, banner3];

// should render large image taking full width
// should display left/right scroll buttons to change image
// should hide left/right scroll buttons when necessary
const BannerSlide = () => {
  return (
    <Container className="BannerSlide">
      <ImageCarousel images={bannerImages} />
    </Container>
  );
}

export default BannerSlide;
