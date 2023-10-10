import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Aboutus1 } from "../utils/content";

const { HeroImg } = Aboutus1;

const Container1 = () => {


	return (
		<Container sx={{ width: "100%", height: "70vh", position: "relative" }}>
			<Box
				sx={{
					position: "fixed",
					zIndex: -20,
					top: 0,
					left: 0,
					right: 0,
					height: "100%",
					width: "100%",
				}}
			>
				<img src={HeroImg} alt="HeroImage" style={{ width: "100%", height: "100vh" }} />
			</Box>
			<Typography variant="body1" sx={{ fontSize: "150px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", color: "white", py: 1, }}>
				About Us
			</Typography>
		</Container>

	);
};

export default Container1;

