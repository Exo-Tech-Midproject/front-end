import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import Title from "../components/Title";
import { Aboutus2 } from "../utils/content";

const { title, subtitle } = Aboutus2;



const Container2 = () => {
	return (
		<Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} sx={{

			backgroundColor: "white",
			padding: "25px",

			width: "100%",
			height: "400px",
		}}>

			<Title variant={{ xs: "h3", md: "h2" }} sx={{ textAlign: "center", color: "#1F485B", py: 1 }}>
				{title}
			</Title>
			<Box m={"0 auto"} width={"60%"}  >
				<Typography variant="body1" sx={{ lineHeight: "2", textAlign: "center", color: "#1F485B", py: 1, textUnderlineOffset: "auto", textUnderlinePosition: "auto" }}>
					{subtitle}
				</Typography>
			</Box>
		</Box>

	);
};



export default Container2;