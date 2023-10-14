import * as React from "react";
import Box from "@mui/material/Box";

import img1 from "./sss.png";
import img2 from "./sss2.png";
import "./heroSubscription.css"
export default function HeroSubscription() {
	const boxStyles = {
		boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
		position: "relative",
	};

	const textStyles = {
		position: "absolute",
		top: "70%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		color: "white",
		fontSize: "70px",
		fontWeight: "bold",
		textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
		animation: "fade-in 3s infinite",
		fontFamily: "sans-serif",
	};

	return (
		<Box sx={boxStyles}>
			<img src={img2} alt="HeroImage" style={{ width: "100%", height: "80" }} />

			<div style={textStyles} className="underlined">
				Our Medical Experts
				<span className="underline-mask"></span>
			</div>
		</Box>
	);
}
