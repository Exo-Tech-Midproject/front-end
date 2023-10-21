import React from 'react'
import Title from '../components/Title';
import Navbar from '../components/Navbars/MainNavbar'
import { Stack, Box, Button, } from "@mui/material"
import Typography from '@mui/material/Typography';
import Footer from '../components/Footers/MainFooter'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import Link from '@mui/material/Link';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
function QASection() {
  return (
    <Stack direction="column" >
      <Navbar />
      <Box sx={{
        mt: 8,
        height: "250px",
        background: "#112731",
        backgroundImage: 'url("https://images.pexels.com/photos/3652097/pexels-photo-3652097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        objectFit: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
      >
        <Stack sx={{ height: "100%" }} alignItems="center" justifyContent="center">
          <Title
            variant={{ xs: "h3", sm: "h2", md: "h1" }}
            sx={{ letterSpacing: "0.02em", mb: 1, color: "white" }}
          >
            Questions
          </Title>

          <Breadcrumbs aria-label="breadcrumb">
            <Link
              href="/"
              underline="hover"
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
              color="white"

            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Home
            </Link>
            <Link
              href="/QACategories"
              underline="hover"
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
              color="white"

            >
              <ContactSupportOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Category
            </Link>
            <Typography
              sx={{ display: 'flex', alignItems: 'center', textDecoration: "underline" }}
              color="#67ABCB"
            >
              <PanoramaFishEyeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Questions
            </Typography>
          </Breadcrumbs>

        </Stack>
      </Box>
      <Box sx={{ width: "100%", bgcolor: "white", height: "100vh" }}>
      <Stack direction="row" spacing={4} alignItems="center" justifyContent="center" sx={{ height: "100%" }} >
      <Box sx={{
          width: "80%",
          height: "fit-content",
          backgroundColor: "white",
          boxShadow: "0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)",
          borderRadius: "17px 17px 27px 27px",
        }}>
        <Box p={3}>
          <Box>
            <Stack spacing={1} direction="row" alignItems="center"  sx={{width: "100%", }}>
              <AccountCircleOutlinedIcon sx={{ color: "black" }} />
              <Stack direction="column" spacing={0.4}>
                <Typography sx={{
                  fontWeight: "700",
                  fontSize: "12px",
                  color: "#47484b",
                }}>Tasneem Hassasneh</Typography>
              </Stack>
            </Stack>
          </Box>

        </Box>
        <Box sx={{
          width: "100%",
          height: "fit-content",
          backgroundColor: "#f1f1f1",
          padding: "8px",
        }}>
          <Box sx={{
            backgroundColor: "#ffffff",
            borderRadius: "8px 8px 21px 21px",
            padding: "8px",
          }}>
             <Box ><textarea style={{
              width: "100%",
              height: "40px",
              resize: "none",
              border: "0",
              borderRadius: "6px",
              padding: "12px 12px 10px 12px",
              fontSize: "13px",
              outline: "none",
              caretColor: "#0a84ff",
             }} placeholder='Ask Question'></textarea></Box>
          <Box>
            <Button sx={{
              width: "30px",
              height: "30px",
              backgroundColor: "#0a84ff",
              margin: "0 0 0 auto",
              "&:hover": {
                backgroundColor: "#026eda",
              }
            }}  variant="contained">
              SEND
            </Button>     
          </Box>
          </Box>
         
        </Box>
    </Box>
        <Box sx={{
          width: "450px",
          height: "fit-content",
          backgroundColor: "white",
          boxShadow: "0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)",
          borderRadius: "17px 17px 27px 27px",
        }}>
          <Box>
            <Typography sx={{
              width: "100%",
              height: "50px",
              position: "relative",
              display: "flex",
              alignItems: "center",
              paddingLeft: "20px",
              borderBottom: "1px solid #f1f1f1",
              fontWeight: 700,
              fontSize: "13px",
              color: "#47484b",
              "&:after": {
                content: "''",
                width: "8ch",
                height: "1px",
                position: "absolute",
                bottom: "-1px",
                backgroundColor: "#47484b",
            }
          }}>Qusetion</Typography>
        </Box>
        <Box p={3}>
          <Box>
            <Stack spacing={1} direction="row" alignItems="center"  sx={{width: "100%", }}>
              <AccountCircleOutlinedIcon sx={{ color: "black" }} />
              <Stack direction="column" spacing={0.4}>
                <Typography sx={{
                  fontWeight: "700",
                  fontSize: "12px",
                  color: "#47484b",
                }}>Tasneem Hassasneh</Typography>
                <Typography sx={{
                  fontWeight: "600",
                  fontSize: "10px",
                  color: "#acaeb4",
                }}>Wednesday, Oct 18th at 2:45pm</Typography>
              </Stack>
            </Stack>
          </Box>
          <Box p={1}>
            <Typography sx={{
              fontSize: "12px",
              lineHeight: "16px",
              fontWeight: 600,
              color: "#5f6064",
            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
          </Box>

        </Box>
        <Box sx={{
          width: "100%",
          height: "fit-content",
          backgroundColor: "#f1f1f1",
          padding: "8px",
        }}>
          <Box sx={{
            backgroundColor: "#ffffff",
            borderRadius: "8px 8px 21px 21px",
            padding: "8px",
          }}>
             <Box ><textarea style={{
              width: "100%",
              height: "40px",
              resize: "none",
              border: "0",
              borderRadius: "6px",
              padding: "12px 12px 10px 12px",
              fontSize: "13px",
              outline: "none",
              caretColor: "#0a84ff",
             }} placeholder='Reply'></textarea></Box>
          <Box>
    
            
            <Button sx={{
              width: "30px",
              height: "30px",
              backgroundColor: "#0a84ff",
              margin: "0 0 0 auto",
              "&:hover": {
                backgroundColor: "#026eda",
              }
            }}  variant="contained">
              <ArrowUpwardIcon />
            </Button>
            
          </Box>
          </Box>
         
        </Box>
    </Box>


      </Stack >
     
    </Box >
      <Footer />
    </Stack >
  );
}

export default QASection