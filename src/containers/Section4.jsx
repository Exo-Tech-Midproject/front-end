import { Container, Grid, Stack, Tab, Tabs, Typography, Box } from "@mui/material";
import{ useState } from "react";

import Title from "../components/Title";
import { section4Content } from "../utils/content";


const { top, bottom, sec5Ved } = section4Content;

const Section4 = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <Box sx={{bgcolor:"white",py:5 }}>
       <Container sx={{color:"#1F485B" }} spacing={2}>
      {/* TOP */}
      <Grid container flexWrap="wrap-reverse" alignItems="center">
        {/* Left */}
        <Grid item xs={12} md={6}>
          <Stack  sx={{ maxWidth: 480 }}>
            <Title variant={{ xs: "h3", md: "h2",color:"#1F485B" }}>{top.title}</Title>
            <Typography variant="body2" color="#1F485B">
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
        flexWrap="wrap-reverse"
        spacing={5}
        alignItems="center"
      >
        {/* Left */}
        <Grid item xs={12} md={6}>
          <img
          alt=""
            src={bottom.TABS[tabValue].image}
            style={{ width:"100%",height:"40vh", objectFit: "cover" ,
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
        <Grid  item xs={12} md={6}>
          <Stack spacing={2} sx={{ maxWidth: 480,
        }}>
            <Tabs
              value={tabValue}
              onChange={(e, v) => setTabValue(v)}
              variant="scrollable"
              scrollButtons="auto"
              alignItems="center"
              sx={{width:"123%",mx:"auto",color:"black",}}
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

export default Section4;
