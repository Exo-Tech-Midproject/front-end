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
import TextField from '@mui/material/TextField';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const CustomToggleButton = ({ children, ...props }) => (
 
  <ToggleButton
    sx={{
      width: "30px",
      height: "30px",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "transparent",
      borderRadius: "50%",
      border: "0",
      outline: "none",
      "&:hover":{
       backgroundColor: "#f1f1f1",
      }
    }} 
    {...props}
  >
    {children}
  </ToggleButton>
);
function QASection() {
  const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  }
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
      <Box  sx={{ width:"100%", height:"70vh", bgcolor: "white" }}>
        {/* <Box sx={{
          position: "relative",
          height: "140px",
          width: "240px",
          padding: "20px",
          backgroundColor: "#FFF",
          borderRadius: "4px",
          color: "#333",
          boxShadow: "0px 0px 60px 5px rgba(0, 0, 0, 0.4)",
          "&:after": {
            position: "absolute",
            content: "''",
            right: "-10px",
            bottom: "18px",
            width: "0",
            height: "0",
            borderLeft: "0px solid transparent",
            borderRight: "10px solid transparent",
            borderBottom: "10px solid #1a044e",
          }
        }}>
          <Typography sx={{
            fontSize: "20px",
            textAlign: "center",
            fontWeight: "bold",
            letterSpacing: "4px",
            lineHeight: "28px",
          }}>Question
          </Typography>
          <TextField placeholder="Your Question" variant='standard' sx={{
            position: "absolute",
            bottom: "30px",
            padding: "10px",
            width: "82%",
            background: "transparent",
            transition: "all .25s ease",
            "&:focus": {
              outline: "none",
              borderBottom: "1px solid #0d095e",
              fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', 'sans-serif'",
            }
          }} />
          <Button sx={{
            position: "absolute",
            borderRadius: "30px",
            borderBottomRightRadius: "0",
            borderTopRightRadius: "0",
            backgroundColor: "#0f0092",
            color: "#FFF",
            padding: "12px 25px",
            display: "inline-block",
            fontSize: "12px",
            fontWeight: "bold",
            letterSpacing: "5px",
            right: "-10px",
            bottom: "-20px",
            cursor: "pointer",
            transition: "all .25s ease",
            boxShadow: "-5px 6px 20px 0px rgba(26, 26, 26, 0.4)",
            "&:hover": {
              backgroundColor: "#07013d",
              boxShadow: "-5px 6px 20px 0px rgba(88, 88, 88, 0.569)",
            }
          }}>SEND</Button>
        </Box> */}
        <Box px={5} m="auto" sx={{
          width: "450px",
          height: "fit-content",
          backgroundColor: "white",
          boxShadow: "0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)",
          borderRadius: "17px 17px 27px 27px",
        }}>
          <Typography sx={{
             width: "100%",
             height: "50px",
             position: "relative",
             display: "flex",
             alignItems: "center",
             paddingLleft: "20px",
             borderBottom: "1px solid #f1f1f1",
             fontWeight: "700",
             fontSize: "13px",
             color: "#47484b",
             "&:after":{
              content: "''",
  width: "8ch",
  height: "1px",
  position: "absolute",
  bottom: "-1px",
  backgroundColor: "#47484b",
             }
          }}>
            Question
            </Typography>
        
            <Box p={2}  class="comment-container">
              <Stack direction="row">
                <AccountCircleOutlinedIcon />
                <Stack direction="column" >
                  <Typography sx={{ fontSize: "18px",
  lineHeight: "16px",
  fontWeight: 600,
  color: "#5f6064" }}>Tasneem Hassasneh</Typography>
                  <Typography sx={{ fontSize: "12px", p:1 }}>Wednesday, March 13th at 2:45pm</Typography>
                </Stack>
              </Stack>
              <Typography sx={{ 
                fontSize: "12px",
  lineHeight: "16px",
  fontWeight: 600,
  color: "#5f6064", }}>
                I've been using this product for a few days now and I'm really impressed! The interface is intuitive and easy to
                use, and the features are exactly what I need to streamline my workflow.
              </Typography>
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
            }} class="box-container">
              <textarea sx={{
                 width: "100%",
                 height: "40px",
                 resize: "none",
                 border: "0",
                 borderRadius: "6px",
                 padding: "12px 12px 10px 12px",
                 fontSize: "13px",
                 outline: "none",
                 caretColor: "#0a84ff",
              }} placeholder="Reply"></textarea>
              <Box>
                <ToggleButtonGroup
                  value={formats}
                  onChange={handleFormat}
                  aria-label="text formatting"
                >
                  <CustomToggleButton value="bold" aria-label="bold">
                    <FormatBoldIcon />
                  </CustomToggleButton>
                  <CustomToggleButton value="italic" aria-label="italic">
                    <FormatItalicIcon />
                  </CustomToggleButton>
                  <CustomToggleButton value="underlined" aria-label="underlined">
                    <FormatUnderlinedIcon />
                  </CustomToggleButton>
                </ToggleButtonGroup>
                <Button sx={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "#0a84ff",
                  margin: "0 0 0 auto",
                  "&:hover":{
                    backgroundColor: "#026eda",
                  }
                }} type="submit" class="send" title="Send">
                  <ArrowCircleUpIcon />
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Stack >
  );
}

export default QASection