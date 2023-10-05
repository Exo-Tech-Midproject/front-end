import Link from "@mui/material/Link";

const CustomLink = ({ sx = {}, ...props }) => {
  return (
    <Link sx={{
      textDecoration: "none", cursor: "pointer", color: "text.secondary",
      "&:hover": { color: "white" }
    }} {...props}>
    </Link>
  );
};

export default CustomLink;
