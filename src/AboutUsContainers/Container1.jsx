import React from "react";
import { Box, Container } from "@mui/material";
import { Aboutus1 } from "../utils/content";

const { HeroImg } = Aboutus1;

const Container1 = () => {


	return (
		<Container sx={{ width: "100%", height: "70vh" }}>
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
		</Container>
	);
};

export default Container1;
