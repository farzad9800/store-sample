import React from "react";
import product1 from "../../assets/product1.jpg";
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
  Box,
  Fab,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";
import MinimizeIcon from "@mui/icons-material/Minimize";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

function Product({pic}) {
  return (
    <>
    <Grid
    container
    sx={{
      display:{xs:"none", sm:"block"},
      width: "250px",
      margin:"10px"
    }}
  >
    <Card sx={{ position: "relative", boxShadow: "2px 1px 10px gray" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140px"
        width="80px"
        sx={{ marginTop: "15px" }}
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
    </Card>
    </Grid>

    <Card
        sx={{
          display: { xs: "flex", sm: "none" },
          width: "100%",
          bgcolor: "#F5F5F5",
          boxShadow: "1px 1px 1px 1px black",
          borderRadius: "10px",
          py: "5px",
          px: "2px",
          margin:"10px"
        }}
      >
        <Box>
          <CardMedia>
            <img
              src={pic}
              style={{ width: "85px", padding: "5px" }}
            />
          </CardMedia>
        </Box>
        <Grid container sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent
            sx={{
              padding: "5px",
              "&:last-child": {
                paddingBottom: 0,
              },
            }}
          >
            <Typography
              variant="subtitle2"
              color="black"
              style={{ textAlign: "start", paddingBottom: "10px" }}
            >            ساعت مچی بسیار شیک و قدرتمند کاسیو با ظاهر فوق العاده 

            </Typography>
            <Grid container mb="8px" justifyContent="space-between">
<Grid><FavoriteBorderIcon color="error" /></Grid>
          <Rating
            size="small"
            name="half-rating-read"
            defaultValue={3.5}
            precision={0.5}
            readOnly
            style={{ direction: "ltr" }}
          />
            </Grid>

            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                pl: 1,
                pb: 1,
                justifyContent: "space-between",
              }}
            >
              <Grid container xs={7}>
                <Typography
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    mr: { md: "30px" },
                  }}
                  variant="subtitle1"
                >
                  888.888
                  <Typography
                    variant="overline"
                    sx={{ mr: { xs: "3px", md: "6px" } }}
                  >
                    تومان
                  </Typography>
                </Typography>
              </Grid>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    display: { xs: "flex", sm: "none" },
                    borderRadius: "10px",
                    bgcolor: "yellow",
                    color: "black",
                  }}
                >
                  <AddShoppingCartIcon fontSize="small" />
                </Button>
            </Grid>
          </CardContent>
        </Grid>
      </Card>
  
  </>
  )
}

export default Product