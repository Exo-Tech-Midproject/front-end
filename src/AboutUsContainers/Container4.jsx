import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import Title from "../components/Title";



const Container4 = () => {


	return (
		<Box m={"0 auto"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} sx={{
			backgroundColor: "white",
			padding: "25px",
			width: "100%",
			height: "400px",
		}}>

			<Title variant={{ xs: "h3", md: "h2" }} sx={{ textAlign: "center", color: "#1F485B", py: 1 }}>
				Our Mission
			</Title>
			<Box m={"0 auto"} width={"60%"}  >
				<Typography variant="body1" sx={{ lineHeight: "2", textAlign: "center", color: "#1F485B", py: 1 }}>
					Our mission is to provide a reliable and user-friendly virtual medical platform that bridges the gap between patients and healthcare providers. We believe that access to quality healthcare should be convenient and accessible to all, and our website aims to make that a reality.
				</Typography>
			</Box>
		</Box>

	);
};

export default Container4;