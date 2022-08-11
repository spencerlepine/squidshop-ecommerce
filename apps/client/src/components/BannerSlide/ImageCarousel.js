import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Box, Button } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ImageCarousel = ({ images: imagesProp }) => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setIsMobileView(true)
        : setIsMobileView(false);
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    }
  }, []);

  const images = imagesProp.map((imageSrc) => {
    if (typeof imageSrc === "string") {
      return imageSrc
    }
    return missingImage
  })

  const [imageIndex, setImageIndex] = useState(0)
  const [min, max] = [0, images.length - 1]

  const scrollImages = (indexChange) => {
    setImageIndex((prevIndex) => {
      if (indexChange < 0) {
        if (prevIndex === min) {
          return min
        } else {
          return prevIndex + indexChange
        }
      } else {
        if (prevIndex === max) {
          return max
        } else {
          return prevIndex + indexChange
        }
      }
    })
  }

  return (
    <Box className="ImageCarousel" sx={{ margin: "auto", display: "flex",  justifyContent: "center", alignItems: "center" }}>
      {!isMobileView && (
          <Button
            className="button is-info is-pulled-left carouselImageLeft"
            onClick={() => scrollImages(-1)}
            disabled={imageIndex === min}
            sx={{ borderRadius: '0.5em' }}
          >
            <ArrowBackIosIcon />
          </Button>
        )}

      <ImageList sx={{ width: 700 }} cols={1} rowHeight={164}>
         <ImageListItem>
          <img
            className="image profileImage is-inline-block"
            alt="Matchable User"
            src={images[imageIndex] || missingImage}
          />
        </ImageListItem>
      </ImageList>

      {!isMobileView && (
        <Button
          className="button is-info is-pulled-right carouselImageRight"
          onClick={() => scrollImages(1)}
          disabled={imageIndex === max}
          sx={{ borderRadius: '0.5em'}}
        >
          <ArrowForwardIosIcon />
        </Button>
      )}
    </Box>
  )
}

export default ImageCarousel

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
}