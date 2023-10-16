import * as React from "react";
import Box from "@mui/material/Box";

import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

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
		<>
		<Box
				sx={{
					margin: "2%",
					marginTop: '0'
				}}
			>
				<div role="presentation">
					<Breadcrumbs aria-label="breadcrumb">
						<Link
							underline="hover"
							sx={{
								display: 'flex',
								alignItems: 'center'
							}}
							color="#062942"
							href="/"
						>
							<HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
							Home
						</Link>
						<Link
							underline="hover"
							sx={{ display: 'flex', alignItems: 'center' }}
							color="#062942"
							href="/dashboard/Profile"
						>
							<WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
							Profile
						</Link>
						<Link
							underline="hover"
							sx={{ display: 'flex', alignItems: 'center', textDecoration: "none", }}
							color="#4070f4"
							href="/dashboard/subscriptions"
						>
							<GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
							Subscriptions
						</Link>
					</Breadcrumbs>
				</div>
			</Box>
			<Box sx={boxStyles} marginBottom={8}>
				<img src={img2} alt="HeroImage" style={{ width: "100%", height: "80" }} />

				<div style={textStyles} className="underlined">
					Our Medical Experts
					<span className="underline-mask"></span>
				</div>
			</Box>
		</>
	);
}
