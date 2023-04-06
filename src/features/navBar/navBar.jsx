import React from "react";
import {
  Badge,
  Box,
  Divider,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import SearchIcon from "@mui/icons-material/Search";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../assets/logo.png";

function NavBar() {
  const [open, setOpen] = React.useState(false);
  function handleOpen() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }
  return (
    <>
      <Grid
        container
        xs={12}
        sx={{ position: "absolute", zIndex: "1", top: "0" }}
        pb="20px"
      >
        <Grid
          container
          sm={4}
          sx={{
            display: { xs: "none", sm: "flex" },
            justifyContent: "start",
            alignContent: "center",
            alignItems: "center",
            paddingRight: "40px",
          }}
        >
          <Box>
            <SearchIcon sx={{ color: "action.active", my: 0.5 }} />
            <TextField
              id="input-with-sx"
              placeholder="جستجو"
              variant="standard"
              sx={{ width: "85%" }}
            />
          </Box>
        </Grid>
        <Grid
          container
          sm={4}
          sx={{
            display: { xs: "none", sm: "flex" },
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/" style={{ justifyContent: "center" }}>
            <img
              src={logo}
              style={{
                width: "180px",
                height: "80px",
                justifyContent: "center",
              }}
            ></img>
          </Link>
        </Grid>

        <Grid container xs={6} sx={{ display: { xs: "flex", sm: "none" } }}>
          <Button onClick={handleOpen}>
            <MenuIcon sx={{ color: "black" }}></MenuIcon>
          </Button>
          <Drawer anchor={"right"} open={open} onClose={handleClose} >
            <Typography variant="h6" pt="5px" pr="5px" pl="50px">
              خدمات مشتریان
            </Typography>
            <MenuItem>مردانه</MenuItem>
            <MenuItem>زنانه</MenuItem>
            <MenuItem>بچه گانه</MenuItem>
            <MenuItem>برند ها</MenuItem>
            <MenuItem>ساعت</MenuItem>
            <MenuItem>حراج</MenuItem>
          </Drawer>
        </Grid>

        <Grid
          container
          xs={6}
          sm={4}
          sx={{
            justifyContent: { xs: "end", sm: "end" },
            alignContent: "center",
            alignItems: "center",
            padding: "15px",
            paddingLeft: { xs: "15px", sm: "40px" },
          }}
        >
          <Grid>
            <Link to="register">
              <PersonAddAlt1Icon
                sx={{
                  fontSize: { xs: "medium", sm: "x-large" },
                  color: "black",
                }}
              />
            </Link>
          </Grid>
          <Grid>
            <Link to="login">
              <LoginIcon
                sx={{
                  fontSize: { xs: "medium", sm: "x-large" },
                  color: "black",
                  marginRight: { xs: "20px", sm: "30px" },
                  marginLeft: { xs: "15px", sm: "30px" },
                }}
              />
            </Link>
          </Grid>
          <Grid>
            <Link to="/">
              <Badge
                badgeContent={2}
                color="error"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                sx={{ padding: "5px" }}
              >
                <AddShoppingCartIcon
                  sx={{
                    fontSize: { xs: "medium", sm: "x-large" },
                    color: "black",
                  }}
                />
              </Badge>
            </Link>
          </Grid>
        </Grid>
        <Grid
          container
          xs={12}
          sx={{
            display: { xs: "flex", sm: "none" },
          }}
        >
          <Box
            sx={{
              width: 600,
              maxWidth: "100%",
            }}
          >
            <TextField
              fullWidth
              placeholder="جستجو"
              id="fullWidth"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon></SearchIcon>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Grid>
        <Grid
          container
          sm={12}
          sx={{
            display: { xs: "none", sm: "flex" },
            textAlign: "center",
            justifyContent: "center",
            alignContent: "center",
            margin: "7px 0 7px 0",
          }}
        >
          <Divider sx={{ border: "1px solid black", width: "35%" }} />
        </Grid>
        <Grid
          container
          xs={12}
          sx={{
            display: { xs: "none", sm: "flex" },
            justifyContent: "center",
            paddingTop: "5px",
          }}
        >
          <Grid
            xs={8}
            container
            sx={{
              textAlign: "center",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <Typography>مردانه</Typography>
            </Link>
            <Link
              to="/"
              style={{
                marginRight: "37px",
                textDecoration: "none",
                color: "black",
              }}
            >
              <Typography>زنانه</Typography>
            </Link>
            <Link
              to="/"
              style={{
                marginRight: "37px",
                textDecoration: "none",
                color: "black",
              }}
            >
              <Typography>بچه گانه</Typography>{" "}
            </Link>
            <Grid justifyContent="center" textAlign="center">
              <Divider
                variant="fullWidth"
                orientation="vertical"
                sx={{ width: "20px", color: "black", marginRight: "20px" }}
              />
            </Grid>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <Typography>برند ها</Typography>{" "}
            </Link>
            <Link
              to="/"
              style={{
                marginRight: "37px",
                textDecoration: "none",
                color: "black",
              }}
            >
              <Typography>ساعت</Typography>{" "}
            </Link>
            <Link
              to="/"
              style={{
                marginRight: "37px",
                textDecoration: "none",
                color: "black",
              }}
            >
              <Typography>حراج</Typography>{" "}
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default NavBar;
