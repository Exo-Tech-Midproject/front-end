import { Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const LaunchButton = ({ sx = {}, ...props }) => {
  return (
    <Button variant="contained" sx={{height:"60px", borderRadius: 4, ...sx }} {...props}>
        Get Start
        <KeyboardArrowRightIcon />
    </Button>
  );
};

export default LaunchButton;
