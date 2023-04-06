import { Grid, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import MultiCarouselProduct from "../Product/multiCarouselProduct";
import "react-multi-carousel/lib/styles.css";
import product1 from "../../assets/product1.jpg";
import product2 from "../../assets/product2.jpg";
import product3 from "../../assets/product3.jpg";
import product4 from "../../assets/product4.jpg";
import product5 from "../../assets/product5.jpg";
import product6 from "../../assets/product6.jpg";
import product7 from "../../assets/product7.jpg";
import product8 from "../../assets/product8.jpg";
import product9 from "../../assets/product9.jpg";
import product10 from "../../assets/product10.jpg";
import product11 from "../../assets/product11.jpg";
import product12 from "../../assets/product12.jpg";
import product13 from "../../assets/product13.jpg";
import product14 from "../../assets/product14.jpg";
import { Link } from "react-router-dom";

function MultiCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1300, min: 1070 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 1070, min: 800 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 800, min: 468 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 468, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  var photos = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13, product14]


  return (
    <Grid
      sx={{
        bgcolor: "#F5F5F5",
        padding: "20px 15px 40px 15px",
        justifyContent: "center",
        marginBottom: "40px",
      }}
    >
<Grid container justifyContent="space-between">
<Typography variant="h5" mb="30px">
        پیشنهاد شگفت انگیز
      </Typography>
      <Link to="products"><Typography variant="subtitle2" style={{textDecoration:"none", color:"black"}}>مشاهده همه محصولات</Typography></Link>
</Grid>
      <Carousel ssr partialVisbile responsive={responsive} rtl={true}>
        {photos.map(item => <MultiCarouselProduct pic={item} />)}
      </Carousel>
    </Grid>
  );
}

export default MultiCarousel;
