import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Lottie from "lottie-react";
import appointmentAnimation from "./appointmentAnimation.json";
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default function appointmentsHero() {
	return (
		<>
			<Box
				sx={{
					margin: "2%",
					marginTop: '0',
					Width: "100%",

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
							sx={{
								display: 'flex',
								alignItems: 'center'
							}}
							color="#4070f4"
							href="/dashboard/appointment"
						>
							<GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
							Appointments
						</Link>
					</Breadcrumbs>
				</div>
			</Box>

			<Container
				sx={{
					// margin: "0",
					display: 'flex',
					justifyContent: "center",
					minHeight: "25vh",
					alignItems: "center",
					width: "100%",
					bgcolor: 'white',
					borderRadius: "10px",

				}}
			>
				<Container sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center'
				}}>
					<Typography variant="h1" textTransform="capitalize" sx={{
						color: '#062942',
						fontFamily: "Serif"
					}}>
						Your Appointments
					</Typography>

				</Container>
				<Lottie animationData={appointmentAnimation} style={{ width: "40%" }} />

			</Container>
		</>
	)
}
