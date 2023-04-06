import React from "react";
import NavBar from "../../features/navBar/navBar";
import { Divider, Grid } from "@mui/material";
import CarouselComponent from "../../features/carousel/carousel";
import MultiCarousel from "../../features/multiCarousel/multiCarousel";
import MultiCarouselProduct from "../../features/Product/multiCarouselProduct";
import ClientClub from "../../features/clientClub/clientClub";
import Footer from "../../features/footer/footer";

function HomePage() {
  return (
    <>
      <CarouselComponent />
      <NavBar />
      <MultiCarousel />
      <ClientClub />
      <Footer />
    </>
  );
}

export default HomePage;
