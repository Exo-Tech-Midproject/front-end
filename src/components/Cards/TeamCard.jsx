import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import React from "react";
import Title from "../Title";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import img from "./image.png"

const CustomLink = ({ children, }) => (
	<Link
		sx={{
			width: "1rem",
			cursor: "pointer",
			transition: "transform 0.2s, fill 0.2s, stroke-width 0.2s",
			color: " #003870",
			strokeWidth: "2px",

			"&:hover": {
				transform: "scale(1.25)",
				color: "#007EFC",
				strokeWidth: "2px",
				transitionDuration: "0.2s"
			}
		}}
	>
		{children}
	</Link>
);

const TeamCard = ({ title, subtitle, image }) => {
	return (
		<Box sx={{
			padding: "1rem",
			width: "27rem",
			height: "10rem",
			backgroundColor: "#fff",
			borderRadius: "0.375rem",
			boxShadow: "0px 0px 0.25rem rgba(0, 0, 0, 0.2)",
			alignItems: "center",
			justifyContent: "space-around",
		}}>
			<Stack direction="row" spacing={0} width="100%" alignItems="center" justifyContent="space-around">
				<Box sx={{
					width: "8rem",
					height: "8rem",
					borderRadius: "50%",
					boxShadow: "0px 0px 0.25rem rgba(0, 0, 0, 0.2)",
					background: "linear-gradient(to right, #F9C97C, #A2E9C1)",
					cursor: "pointer",
					transition: "transform 0.3s",
					"&:hover": {
						transform: "scale(1.1)",
						background: "linear-gradient(to right, #C9A9E9, #7EE7FC)",
					}
				}}>
					{/* <Stack direction="row" width="100%" height="100%" alignItems="center" justifyContent="center"> */}
					{/* <AccountCircleOutlinedIcon sx={{
							width: "1.75rem",
							color: "#003870",
						}} /> */}
					<img src={image} alt="team img" style={{
						width: "8rem",
						height: "8rem",
						borderRadius: "50%",
						color: "#003870",
						objectFit: 'cover'
					}} />
					{/* </Stack> */}

				</Box>
				<Box sx={{
					borderLeft: "1px solid #ccc",
					margin: "0.75rem",
				}}>
					<Stack direction="column" spacing={1} width="100%" height="100%" alignItems="center" justifyContent="center">
						<Typography sx={{
							paddingLeft: "0.75rem",
							color: "#888",
							fontWeight: "600",
							fontSize: "0.875rem",
						}}>{title}</Typography>
						<Typography sx={{
							paddingLeft: "0.75rem",
							background: "linear-gradient(to left, #005BC4, #27272A)",
							WebkitBackgroundClip: "text",
							backgroundClip: "text",
							color: "transparent",
							fontWeight: "100px",
							fontSize: "1.20rem",
						}}>{subtitle}</Typography>
						<Box>
							<Stack direction="row" spacing={3} width="100%" alignItems="center" justifyContent="center">
								<CustomLink ><FacebookRoundedIcon fontSize="15px" /></CustomLink>
								<CustomLink><TwitterIcon fontSize="15px" /></CustomLink>
								<CustomLink><GitHubIcon fontSize="15px" /></CustomLink>
							</Stack>
						</Box>
					</Stack>
				</Box>
			</Stack>
		</Box>

	);
};

export default TeamCard;
