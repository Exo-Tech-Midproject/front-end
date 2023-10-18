import * as React from "react";
import Box from "@mui/material/Box";

import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Title from "../Title"
import Stack from '@mui/material/Stack';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import Link from '@mui/material/Link';

import img1 from "./sss.png";
import img2 from "./sss2.png";
import "./heroSubscription.css"
export default function HeroSubscription() {

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
			<Stack direction="column" >
				<Box sx={{

					height: "500px",
					background: "#999999",
					backgroundImage: `url(${img2})`,
					backgroundSize: '100%',
					backgroundRepeat: 'no-repeat',
					objectFit: 'cover',
					backgroundPosition: 'center',
					backgroundBlendMode: 'overlay'
				}}
				>
					<Stack sx={{ height: "100%" }} alignItems="center" justifyContent="center">
						<Title
							variant={{ xs: "h3", sm: "h2", md: "h1" }}
							sx={{ letterSpacing: "0.05em", mb: 1, color: "white", textShadow: "2px 2px 9px rgba(0, 0, 0, 0.5)" }}
						>
							Our Medical Experts
						</Title>

						<Breadcrumbs aria-label="breadcrumb">
							<Link
								href="/"
								underline="hover"
								sx={{
									display: 'flex',
									alignItems: 'center',
									textShadow: "2px 2px 9px rgba(0, 0, 0, 0.5)"
								}}
								color="white"

							>
								<HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
								Home
							</Link>
							<Typography
								sx={{ display: 'flex', alignItems: 'center',textShadow: "2px 2px 9px rgba(0, 0, 0, 0.5)" }}
								color="#1F485B"
							>
								<PanoramaFishEyeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
								Subscriptions
							</Typography>
						</Breadcrumbs>

					</Stack>
				</Box>
			</Stack>
		</>
	);
}
