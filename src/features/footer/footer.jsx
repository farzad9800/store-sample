import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import beliveableLogo from "../../assets/beliveableLogo.png";
import beliveableLogoEt from "../../assets/beliveableLogoEt.png";
import beliveableLogoNet from "../../assets/beliveableLogoNet.png";
import InputAdornment from "@mui/material/InputAdornment";

function Footer() {
  return (
    <Grid
      container
      xs={12}
      sx={{ padding: "40px", bgcolor: "#F7F7F7" }}
      justifyContent="center"
    >
      <Grid container xs={12} sm={6} mb="40px">
        <Grid xs={5} justifyContent="center" textAlign="center">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Typography variant="h6" py="5px">
              فروشگاه آنلاین{" "}
            </Typography>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Typography variant="subtitle2" py="5px">
              مردانه{" "}
            </Typography>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Typography variant="subtitle2" py="5px">
              {" "}
              زنانه
            </Typography>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Typography variant="subtitle2" py="5px">
              بچه گانه{" "}
            </Typography>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Typography variant="subtitle2" py="5px">
              {" "}
              برند ها
            </Typography>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Typography variant="subtitle2" py="5px">
              ساعت
            </Typography>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Typography variant="subtitle2" py="5px">
              حراج
            </Typography>
          </Link>
        </Grid>
        <Grid
          xs={5}
          sx={{ marginRight: "30px" }}
          justifyContent="center"
          textAlign="center"
        >
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Typography variant="h6" py="5px">
              خدمات مشتریان{" "}
            </Typography>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Typography variant="subtitle2" py="5px">
              باشگاه مشتریان{" "}
            </Typography>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Typography variant="subtitle2" py="5px">
              سوالات متداول
            </Typography>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Typography variant="subtitle2" py="5px">
              بازگشت محصول
            </Typography>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Typography variant="subtitle2" py="5px">
              قوانین سایت{" "}
            </Typography>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Typography variant="subtitle2" py="5px">
              {" "}
              درباره ما{" "}
            </Typography>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Typography variant="subtitle2" py="5px">
              تماس با ما
            </Typography>
          </Link>
        </Grid>
      </Grid>
      <Grid xs={12} sm={6}>
        <Grid xs={12} mb="40px" justifyContent="center">
          <TextField
            sx={{ width: { xs: "70%", sm: "75%" } }}
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <p>ایمیل</p>
                </InputAdornment>
              ),
            }}
          />

          <Button
            variant="contained"
            size="small"
            sx={{
              bgcolor: "#e6e6e6",
              color: "black",
              boxShadow: "1px 1px 1px black",
              height:"25px"
            }}
          >
            ثبت
          </Button>
        </Grid>
        <Grid
          xs={12}
          container
          sx={{ justifyContent: "center", marginLeft: "40px" }}
        >
          <Grid xs={4}>
            <img
              src={beliveableLogo}
              alt=""
              style={{ width: "80%", height: "100px" }}
            />
          </Grid>
          <Grid xs={4}>
            <img
              src={beliveableLogoEt}
              alt=""
              style={{ width: "80%", height: "100px" }}
            />
          </Grid>
        </Grid>
        <Grid
          xs={12}
          container
          sx={{ justifyContent: "center", marginLeft: "40px" }}
        >
          <Grid xs={4}>
            <img
              src={beliveableLogoNet}
              alt=""
              style={{ width: "80%", height: "100px" }}
            />
          </Grid>
          <Grid xs={4}>
            <img
              src={beliveableLogo}
              alt=""
              style={{ width: "80%", height: "100px" }}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid xs={2} sx={{backgroundColor:"red", marginRight:"10px" }}>d</Grid> */}
    </Grid>
  );
}

export default Footer;
