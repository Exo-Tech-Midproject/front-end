import * as React from "react";
import Box from "@mui/material/Box";

import HomeIcon from '@mui/icons-material/Home';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Title from "../Title"
import Stack from '@mui/material/Stack';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import Link from '@mui/material/Link';

// import img1 from "./sss.png";
import img2 from "./sss2.png";

export default function HeroSubscription() {

	return (
		<>
			<Box
				sx={{
					// margin: "6%",
					marginBottom:"0",
					marginTop: '0'
				}}
			>

			</Box>
			<Stack direction="column" >
				<Box sx={{
					mt: 9.4,
					height: "550px",
					background: "#3D4F57",
					backgroundImage: `url(${img2})`,
					backgroundSize: '100%',
					backgroundRepeat: 'no-repeat',
					objectFit: 'cover',
					backgroundPosition: 'center',
					backgroundBlendMode: 'overlay'
				}}
				>
					<Stack sx={{ height: "130%" }} alignItems="center" justifyContent="center">
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
								sx={{ display: 'flex', alignItems: 'center', textShadow: "2px 2px 9px rgba(0, 0, 0, 0.5)" }}
								color="white"
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
