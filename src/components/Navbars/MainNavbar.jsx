import {
  AppBar,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import useScrollPosition from "../../hooks/useScrollPosition";
import CustomLink from "../Buttons/CustomLink";
import SignupLink from "../Buttons/SignupLink";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
  const scrollPosition = useScrollPosition();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <AppBar
      elevation={0}
      sx={{
        py: 1,
        height: 60,
        bgcolor: scrollPosition > 10 ? "#1F485B" : "transparent",
        backdropFilter: scrollPosition > 10 && "blur(60px)",
      }}
    >
      <Container
        sx={{
          [theme.breakpoints.up("lg")]: {
            maxWidth: "1380px!important",
          },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          {/* Logo */}
          <CustomLink href="/" >HEALTHAK</CustomLink>

          {/* Links */}
          {!isMobile && (
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={6}
              sx={{ flex: 1 }}
              flexWrap="wrap"
            >
              <CustomLink href="/">
              <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
                  <HomeIcon fontSize="inherit"/>
                <Typography variant="body2">Home</Typography>
                </Stack>
              </CustomLink>

              <CustomLink href="/QACategories">
              <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
                  <ContactSupportOutlinedIcon fontSize="inherit"/>
                <Typography variant="body2">Q/A</Typography>
                </Stack>
              </CustomLink>

              <CustomLink href="/AboutUs">
                <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
                  <InfoOutlinedIcon fontSize="inherit"/>
                <Typography variant="body2">About us</Typography>
                </Stack>
                
              </CustomLink>

            </Stack>
          )}

          {/* Action Buttons */}
          <Stack direction="row" spacing={5} alignItems="center">
            <CustomLink href="/Login" spacing={1}>
              Login
            </CustomLink>
          <SignupLink href="/Signup" spacing={1}/>
          </Stack>

        </Stack>
      </Container>
    </AppBar>
  );
};

export default Navbar;
