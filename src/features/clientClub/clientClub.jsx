import React from "react";
import { Grid, Typography } from "@mui/material";
import clientClub2 from "../../assets/clientClub2.jpg";
import clientClub1 from "../../assets/clientClub1.jpg";
import clientClub3 from "../../assets/clientClub3.jpg";

function ClientClub() {
  return (
    <Grid
      container
      xs={12}
      sx={{ justifyContent: "center", marginBottom: "40px" }}
    >
      <Grid xs={12} sm={6} sx={{ justifyContent: "center" }}>
        <Grid xs={10} sx={{ margin: "auto", marginBottom: "30px" }}>
          <Typography variant="h5">باشگاه مشتریان</Typography>
          <Typography variant="subtitle2">
            باشگاه مشتریان از قدیمی‌ترین خدمات ماست؛ ما از روزهای ابتدایی شروع
            به فعالیت با راه‌اندازی باشگاه مشتریان تلاش کردیم مشتری‌مداری را نه
            تنها در سخن بلکه در عمل نیز سرلوحه کار خود قرار دهیم. در باشگاه
            مشتریان شما می‌توانید از خدمات گسترده ما بهره‌مند شوید؛ از تخفیف‌ها
            و جشنواره‌ها مطلع شوید، و با کسب امتیازهای لازم کیفیت خریدهای بعدی
            خود را بالا برده و از ما هدیه بگیرید. .
          </Typography>
        </Grid>
        <Grid xs={10} sx={{ marginTop: "30px", margin: "auto" }}>
          <img
            src={clientClub3}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "30px",
              marginBottom: "20px",
            }}
          />
        </Grid>
      </Grid>
      <Grid xs={5} sm={2} sx={{ marginLeft: "10px" }}>
        <img
          src={clientClub2}
          style={{ width: "100%", height: "97%", borderRadius: "20px" }}
        ></img>
      </Grid>
      <Grid xs={5} sm={2} sx={{}}>
        <img
          src={clientClub1}
          style={{ width: "100%", height: "97%", borderRadius: "20px" }}
        ></img>
      </Grid>
    </Grid>
  );
}

export default ClientClub;
