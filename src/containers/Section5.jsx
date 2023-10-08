// import { Container, Grid, Stack, Tab, Tabs, Typography, Box } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import{ useState } from "react";

import Title from "../components/Title";
import { section5Content } from "../utils/content";


const { top, bottom, sec5Ved } = section5Content;

const Section5 = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <Box sx={{bgcolor:"white", height:"130vh"}}>
       <Container sx={{ mt: { xs: 0, md: 5, lg: 10}, color:"#1F485B" }}>
      {/* TOP */}
      <Grid container spacing={10} flexWrap="wrap-reverse" alignItems="center">
        {/* Left */}
        <Grid item xs={12} md={6}>
          <Stack spacing={2} sx={{ maxWidth: 480 }}>
            <Title variant={{ xs: "h3", md: "h2",color:"#1F485B" }}>{top.title}</Title>

            <Typography variant="body2" color="#1F485B" sx={{ pb: 2 }}>
              {top.subtitle}
            </Typography>
          </Stack>
        </Grid>

        {/* Right */}
        <Grid item xs={12} md={6}>
        <video 
            src={sec5Ved}
            style={{ width:"100%", objectFit: "contain" ,
            position: "relative",
            p: 4,
            borderRadius: "30px",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              borderRadius: "30px",
              border: "1px solid transparent",
              background: "linear-gradient(120deg,#5f5f61,transparent) border-box",
              WebkitMask:
                "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exlude",
            },}}
            autoPlay loop muted
          />         
        </Grid>
      </Grid>

      {/* BOTTOM */}

      <Grid
        container
        spacing={10}
        flexWrap="wrap-reverse"
        alignItems="center"
        sx={{ mt: { xs: 0, md: 5, alignItems:"center" } }}
      >
        {/* Left */}
        <Grid item xs={12} md={6}>
          <img
          alt=""
            src={bottom.TABS[tabValue].image}
            style={{ width:"100%",height:"50vh", objectFit: "cover" ,
            borderRadius: "30px",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              borderRadius: "30px",
              border: "1px solid transparent",
              background: "linear-gradient(120deg,#5f5f61,transparent) border-box",
              WebkitMask:
                "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exlude",
            }}}
          />
        </Grid>

        {/* Right */}
        <Grid sx={{width:"100%"}} item xs={12} md={6}>
          <Stack spacing={2} sx={{ maxWidth: 480,
        }}>
            <Tabs
              value={tabValue}
              onChange={(e, v) => setTabValue(v)}
              variant="scrollable"
              scrollButtons="auto"
              alignItems="center"
              sx={{width:"122%",mx:"auto",color:"black"}}
            >
              {bottom.TABS.map(({ name }) => (
                <Tab
                  label={name}
                  key={name}
                  sx={{
                    fontSize:"15px",
                    minWidth: 60,
                    color:"#1F485B",
                    "&.Mui-selected": { color:"#1F485B",bgcolor: "#00000010", borderRadius:"5px" },
                  }}
                />
              ))}
            </Tabs>

            <Typography
              variant="body2"
               sx={{ width:"122%",minHeight: 70 , textAlign: "left", p:4, color:"#A8A196" ,
                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
            }}
            >
              {bottom.TABS[tabValue].subtitle}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
    </Box>
   
  );
};

export default Section5;