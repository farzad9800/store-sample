import React from "react";

import bb from "../../assets/b.jpg";
import cc from "../../assets/c.jpg";
import { Typography } from "@mui/material";
import {
  Divider,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Rating,
  Avatar,
  Fab,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";

function MultiCarouselProduct({ pic }) {
  return (
    <Grid
      container
      sx={{
        width: "250px",
      }}
    >
      <Card sx={{ position: "relative", boxShadow: "2px 1px 10px gray" }}>
        <Link to="productdetail">
        <CardMedia
          component="img"
          alt="green iguana"
          height="160px"
          width="80px"
          sx={{ marginTop: "20px" }}
          image={pic}
        />
        <CardContent sx={{ padding: "10px" }}>
          <Typography
            variant="body2"
            color="black"
            style={{ textAlign: "start", paddingBottom: "10px" }}
          >
            ساعت مچی بسیار شیک و قدرتمند کاسیو با ظاهر فوق العاده و رنگ نقره ای
          </Typography>
          <Grid container justifyContent="space-between" pb={"10px"}>
            {" "}
            <FavoriteBorderIcon color="error" />
            <Rating
              size="small"
              name="half-rating-read"
              defaultValue={3.5}
              precision={0.5}
              readOnly
              style={{ direction: "ltr" }}
            />
            {/* <FavoriteIcon color="error" /> */}
          </Grid>
          <Grid container>
            <Grid
              xs={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              <Fab sx={{ width: "35px", height: "28px", bgcolor: "action" }}>
                <AddShoppingCartIcon fontSize="small" />
              </Fab>
            </Grid>
            <Grid xs={6} sx={{}}>
              <Grid container justifyContent="end">
                <Typography
                  variant="overline"
                  style={{ textDecoration: "line-through" }}
                >
                  888.888
                </Typography>
                <Avatar
                  sx={{
                    marginRight: "15px",
                    bgcolor: "red",
                    width: "30px",
                    height: "26px",
                  }}
                >
                  <Grid>
                    <Typography variant="overline" display="block" gutterBottom>
                      <span>%</span>25
                    </Typography>
                  </Grid>
                </Avatar>
              </Grid>
              <Grid container justifyContent="end">
                <Typography sx={{ display: "flex", flexDirection: "row" }}>
                  888.888 <Typography mr={2}>تومان</Typography>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        </Link>
      </Card>
    </Grid>
  );
}

export default MultiCarouselProduct;
