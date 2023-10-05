import {
  AppBar,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { NAVBAR_HEIGHT } from "../../constants";
import useScrollPosition from "../../hooks/useScrollPosition";
import CustomLink from "../Buttons/CustomLink";
import SignupLink from "../Buttons/SignupLink";

const LinkButton = ({ children, ...props }) => (
  <Stack
    direction="row"
    alignItems="center"
    spacing={0.2}
    sx={{
      cursor: "pointer",
      color: "text.secondary",
      "&:hover": { color: "white" },
    }}
    {...props}
  >
    {children}
  </Stack>
);

const Navbar = () => {
  const scrollPosition = useScrollPosition();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <AppBar
      elevation={0}
      sx={{
        py: 1,
        height: NAVBAR_HEIGHT,
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
          <text style={{ height: "100%", objectFit: "contain" }} >HEALTHAK</text>

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
                <Typography variant="body2">Home</Typography>
              </CustomLink>

              <CustomLink href="/About">
                <Typography variant="body2">About</Typography>
              </CustomLink>

              <LinkButton>
                <Typography variant="body2">Services</Typography>
              </LinkButton>

              <LinkButton>
                <Typography variant="body2">Why to use</Typography>
              </LinkButton>

              <LinkButton spacing={0.5}>
                <Typography variant="body2">Doctors</Typography>
              </LinkButton>

              <LinkButton spacing={0.5}>
                <Typography variant="body2">Contact us</Typography>
              </LinkButton>
            </Stack>
          )}

          {/* Action Buttons */}
          <Stack direction="row" spacing={5} alignItems="center">
            <CustomLink href="/Login" spacing={1}>
              Login
            </CustomLink>
            <SignupLink href="/Signup" spacing={1} />
          </Stack>

        </Stack>
      </Container>
    </AppBar>
  );
};

export default Navbar;
