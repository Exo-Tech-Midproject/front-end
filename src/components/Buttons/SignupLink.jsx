import { Link, Stack, Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const CustomLink = ({ sx = {}, ...props }) => {
  return (

    <Link href="/Signup" alignItems="center" justifyContent="center" variant="contained" sx={{
      width: "100%", textDecoration: "none", borderRadius: 4, p: 1, bgcolor: "#1F485B", color: "white",
      cursor: "pointer",
      "&:hover": {
        bgcolor: "white",
        color: "#1F485B",
      }
    }} >
      Signup
    </Link>



  );
};

export default CustomLink;
