import * as React from "react";
import { useState, useEffect } from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Lottie from "lottie-react";
import Animation from "./subs.json"
export default function Heading() { 
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const revealTimeout = setTimeout(() => {
			setIsVisible(true);
		}, 600); 

		return () => clearTimeout(revealTimeout);
	}, []);

	return (
		<Box sx={{
			paddingX: "10px",
		}}>

			<Box
				sx={{
					display: 'flex',
					justifyContent: "center",
					minHeight: "23vh",
					alignItems: "center",
					width: "100%",
				}}
			>
				<Container sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					width: "60%"
				}}>
					<Typography variant="h1" textTransform="capitalize" sx={{
						marginBottom: '3%',
						color: '#062942'
					}}>
						Subscriptons
					</Typography>
					<Typography
						variant="h3"
						textTransform="capitalize"
						sx={{
							color: '#1F485B',
							textAlign: 'center',
							transform: `translateX(${isVisible ? 0 : '-110%'})`,
							transition: 'transform 1.5s ease',
							overflow: 'hidden',
						}}
					>

						Connecting patients to doctors is a crucial aspect of healthcare
					</Typography>
				</Container>
				<Lottie animationData={Animation} style={{ width: "25%", height: "" }} />
			</Box>
		</Box>
	)
}
