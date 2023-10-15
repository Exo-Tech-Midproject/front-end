import { Button, Link } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const LaunchButton = ({ sx = {}, ...props }) => {
  return (
    <Link href="/Signup">
    <Button variant="contained" sx={{height:"60px", borderRadius: 4, bgcolor:"white", color:"#296079",
    "&:hover":{
      bgcolor:"#296079",
      color:"white",
    },...sx }} {...props}>
        Get Start
        <KeyboardArrowRightIcon />
    </Button></Link>
  );
};

export default LaunchButton;
