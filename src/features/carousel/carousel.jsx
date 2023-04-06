import React from "react";
import { Grid } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import header1 from "../../assets/header1.jpg";
import header2 from "../../assets/header2.jpg";
import header3 from "../../assets/header3.jpg";
import header4 from "../../assets/header4.jpg";
import header5 from "../../assets/header5.jpg";
import header6 from "../../assets/header6.jpg";
import header7 from "../../assets/header7.jpg";
import header9 from "../../assets/header9.jpg";


function CarouselComponent() {
  return (
    <>
      <Grid
        sx={{
          display: { xs: "none", sm: "block" },
          position: "relative",
          zIndex: "0",
          marginBottom: "30px",
        }}
      >
        <Carousel>
          <Grid>
            <img src={header1} style={{ width: "100%", height: "714px" }} />
          </Grid>
          <Grid>
            <img src={header2} style={{ width: "100%", height: "714px" }} />
          </Grid>
          <Grid>
            <img src={header3} style={{ width: "100%", height: "714px" }} />
          </Grid>
          <Grid>
            <img src={header4} style={{ width: "100%", height: "714px" }} />
          </Grid>
          <Grid>
            <img src={header7} style={{ width: "100%", height: "714px" }} />
          </Grid>
          <Grid>
            <img src={header5} style={{ width: "100%", height: "714px" }} />
          </Grid>
          <div>
            <img src={header6} style={{ width: "100%", height: "714px" }} />
          </div>
          <div>
            <img src={header9} style={{ width: "100%", height: "714px" }} />
          </div>
        </Carousel>
      </Grid>
      <Grid
        sx={{
          display: { xs: "block", sm: "none" },
          position: "relative",
          zIndex: "0",
        }}
      >
        <Carousel>
          <Grid>
            <img src={header1} style={{ width: "100%", height: "330px" }} />
            {/* <p className="legend">Legend 1</p> */}
          </Grid>
          <div>
            <img src={header2} style={{ width: "100%", height: "330px" }} />
            {/* <p className="legend">Legend 2</p> */}
          </div>
          <div>
            <img src={header3} style={{ width: "100%", height: "330px" }} />
            {/* <p className="legend">Legend 3</p> */}
          </div>
          <div>
            <img src={header4} style={{ width: "100%", height: "330px" }} />
            {/* <p className="legend">Legend 3</p> */}
          </div>
          <div>
            <img src={header7} style={{ width: "100%", height: "330px" }} />
            {/* <p className="legend">Legend 3</p> */}
          </div>
          <div>
            <img src={header5} style={{ width: "100%", height: "330px" }} />
            {/* <p className="legend">Legend 3</p> */}
          </div>
          <div>
            <img src={header6} style={{ width: "100%", height: "330px" }} />
            {/* <p className="legend">Legend 3</p> */}
          </div>
          <div>
            <img src={header9} style={{ width: "100%", height: "330px" }} />
            {/* <p className="legend">Legend 3</p> */}
          </div>
        </Carousel>
      </Grid>
    </>
  );
}

export default CarouselComponent;
