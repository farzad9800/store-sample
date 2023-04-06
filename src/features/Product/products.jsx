import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Product from "./product";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
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
import product15 from "../../assets/product2.jpg";
import sortIcon from "@mui/icons-material/Sort";

function Products() {
  const [category, setCategory] = React.useState("");
  const [brand, setBrand] = React.useState("");

  var photos = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
    product9,
    product10,
    product11,
    product12,
    product13,
    product14,
    product15,
  ];

  const handleChange = (event) => {
    setBrand(event.target.value);
  };

  const handleChangee = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <Grid
        container
        xs={12}
        justifyContent="center"
        pb="30px"
        sx={{ bgcolor: "#FDFDFD", paddingTop:{xs:"150px", sm:"200px"} }}
      >
        <Grid
          container
          xs={12} sm={11}
          sx={{ border: {sm:"1px solid black"}, borderRadius: "20px" }}
          justifyContent="center"
          pr="15px"
        >
          
          <Grid container xs={3} sx={{display:{xs:"none", sm:"flex"}}} my="15px">
            <Grid
              container
              sx={{
                border: "1px solid black",
                borderRadius: "10px",
                height: "410px",
              }}
              mt="10px"
              p="10px"
            >
              <Typography variant="h6">فیلترها</Typography>

              <Grid container sx={{}} mb="10px">
                <FormControl size="small" fullWidth>
                  <InputLabel id="demo-select-small">دسته بندی</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={brand}
                    label="دسته بندی"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>مردانه</MenuItem>
                    <MenuItem value={20}>زنانه</MenuItem>
                    <MenuItem value={30}>بچه گانه</MenuItem>
                    <MenuItem value={30}> برند</MenuItem>
                    <MenuItem value={30}> ساعت</MenuItem>
                    <MenuItem value={30}> حراج</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid container sx={{}} mb="10px">
                <FormControl size="small" fullWidth>
                  <InputLabel id="demo-select-small">برند</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={brand}
                    label="برند"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>کاسیو</MenuItem>
                    <MenuItem value={20}>سیتی زن</MenuItem>
                    <MenuItem value={30}>کاسیو</MenuItem>
                    <MenuItem value={30}>رولکس</MenuItem>
                    <MenuItem value={30}>رومانسون</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Divider fullWidth />
              <Grid container sx={{}} mb="10px">
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    جنسیت
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="زنانه"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="مردانه"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid container sx={{}} mt="5px">
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    انتخاب رنگ
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="yellow"
                      control={<Radio sx={{ color: "yellow" }} />}
                      label="زرد"
                    />
                    <FormControlLabel
                      value="red"
                      control={<Radio sx={{ color: "red" }} />}
                      label="قرمز"
                    />
                    <FormControlLabel
                      value="blue"
                      control={<Radio sx={{ color: "blue" }} />}
                      label="آبی"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid container xs={12} sm={9} sx={{}} my="15px" justifyContent="center">
            {photos.map((item) => (
              <Product pic={item} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Products;
