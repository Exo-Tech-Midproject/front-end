import React from 'react'
import Title from '../components/Title';
import Navbar from '../components/Navbars/MainNavbar'
import { Container, Stack,  Grid, Box } from "@mui/material"
import { styled, alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ServiceCard from "../components/Cards/ServiceCard";
import { QASectionContent } from "../utils/content";

const { title, ITEMS } = QASectionContent;
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 4,
  backgroundColor: alpha(theme.palette.common.white, 1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.75),
  }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function QACategoriesSection() {
  
  return (

    <Stack alignItems="center" direction="column" spacing={10}>
      <Stack alignItems="center" direction="column" >
      <Navbar />
      <Box sx={{position:"fixed",zIndex:1, top:60, left:0, right:0 , width:"100%", bgcolor:"#1F485B"}}>
        <Stack spacing={2} direction="column" alignItems="center" py={2}>
          <Typography sx={{ textAlign: "center", color: "white" }}>We're here to help</Typography>
          <Search sx={{width:{xs:"300px", md:"600px"} , }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Stack>
      </Box>
      </Stack>
      

      <Box sx={{position:"relative",top:100, bgcolor: "white", width: "100%" }}>
        <Container sx={{ my: { xs: 5, md:2, lg: 1 } }}>
          <Title variant={{ xs: "h3", md: "h2" }} sx={{ mb: { xs: 2, md: 0 }, color: "#1F485B" , textAlign:{xs:"center", md:"left"} }}>
            {title}
          </Title>

          <Grid container spacing={5}>
            {ITEMS.map((item) => (
              <Grid item xs={12} md={4} key={item.title}>
                <ServiceCard {...item} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

    </Stack>

  )
}

export default QACategoriesSection