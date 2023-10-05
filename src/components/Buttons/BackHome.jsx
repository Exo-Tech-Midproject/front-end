import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
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
