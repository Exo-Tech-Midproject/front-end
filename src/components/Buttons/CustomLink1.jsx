import { Link,} from "@mui/material";

const CustomLink1 = ({ sx = {}, ...props }) => {
  return (
    <Link sx={{textDecoration:"none", cursor:"pointer",color:"blue",fontSize:"15px",
    "&:hover": {color:"black" }}} {...props}>
    </Link>
  );
};

export default CustomLink1;
