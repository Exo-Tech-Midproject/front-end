import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const CustomLink = ({ sx = {}, ...props }) => {
  return (

    <Button variant="contained" sx={{ borderRadius: 4, ...sx }} {...props}>
      <Link sx={{ color: "white", textDecoration: "none", cursor: "pointer" }}>Signup</Link>
      <KeyboardArrowRightIcon />
    </Button>
  );
};

export default CustomLink;
