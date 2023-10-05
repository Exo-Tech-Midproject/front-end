import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { section1Content } from "../utils/content";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Title from "../components/Title";
import useMeasure from "react-use-measure";

import LaunchButton from "../components/Buttons/LaunchButton";


const {
  MainVed,
  title,
  subtitle,
} = section1Content;

const CustomButton = ({ children, ...props }) => (
  <Button
    variant="outlined"
    sx={{
      borderRadius: 4,
      color: "white",
      borderColor: "white",
      height: 58,
      px: 2,
    }}
    {...props}
  >
    {children}
  </Button>
);

const Section1 = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [ref, { height }] = useMeasure();


  return (
    <Box >
      {/* Main Background */}

      <Box sx={{ position: "fixed", zIndex: -20, top: 0, left: 0, right: 0 }}>
        <video style={{ width: "100%", height: "100%" }} src={MainVed} autoPlay loop muted />
      </Box>



      {/* backgrounds elements */}
      <Box
        ref={ref}
        sx={{
          position: "absolute",
          width: "100%",
          zIndex: -1,
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <video src={MainVed} style={{ width: "100%", opacity: 0 }} />

        <Box
          sx={{
            bgcolor: "white",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "800px",
            top: `calc(${height}px - 13%)`,
          }}
        ></Box>
      </Box>

      {/* Content */}
      <Container
        sx={{
          height: "80vh",
          mt: -80,
          [theme.breakpoints.up("md")]: { mt: 6 },
        }}
      >

        <Stack sx={{ height: "100%" }} justifyContent="center">
          <Box
            sx={{
              bgcolor: "black",
              opacity: 0.4,
              position: "absolute",
              zIndex: -1,
              top: 0,
              left: 0,
              right: 0,
              height: "102vh",

            }}
          ></Box>
          <Title
            variant={{ xs: "h3", sm: "h2", md: "h1" }}
            sx={{ letterSpacing: "0.02em", mb: 1, color: 'white' }}
          >
            {title}
          </Title>

          <Title
            variant={{ xs: "h6", sm: "h5", md: "h4" }}
            sx={{ fontWeight: 500, letterSpacing: "0.05em", mb: 5, color: 'white' }}
          >
            {subtitle}
          </Title>

          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems="center"
            spacing={4}
          >
            <LaunchButton  
             >
            </LaunchButton>

            <CustomButton fullWidth={isSmallScreen} >
              <InfoOutlinedIcon sx={{ fontSize: 30, ml: -1 }} />
              <Stack sx={{ textAlign: "left", ml: 1 }}>
                <Typography variant="h6">Learn More</Typography>
              </Stack>
            </CustomButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Section1;
