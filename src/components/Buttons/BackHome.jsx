import { Link, Stack, Typography } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const CustomLink = ({ sx = {}, ...props }) => {
  return (
    <Link href="/" sx={{
      textDecoration: "none", cursor: "pointer", color: "white",
      "&:hover": { color: "text.secondary" }
    }} {...props}>
      <Stack direction="row" alignItems="center">
        <ArrowBackIosIcon />
        <Typography variant="h5">
          HEALTHAK
        </Typography>
      </Stack>

    </Link>
  );
};

export default CustomLink;
