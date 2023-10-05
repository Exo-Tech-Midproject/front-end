import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";


import { Aboutus3 } from "../utils/content";

const { PorImg } = Aboutus3;

// --- Social Media Buttons ---

const SocialMediaButtons = () => {
	const handleLinkedInClick = () => {
		window.location.href = 'https://www.linkedin.com/';
	};

	const handleGitHubClick = () => {
		window.location.href = 'https://github.com/';
	};

	const handleFacebookClick = () => {
		window.location.href = 'https://www.facebook.com/';
	};

	return (
		<CardActions>
			<Button onClick={handleLinkedInClick} sx={{ color: "#blue", '&:hover': { backgroundColor: "#1F485B" } }}>
				<FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '24px' }} />
			</Button>
			<Button onClick={handleGitHubClick} sx={{ color: "#blue", '&:hover': { backgroundColor: "#1F485B" } }}>
				<FontAwesomeIcon icon={faGithub} style={{ fontSize: '24px' }} />
			</Button>
			<Button onClick={handleFacebookClick} sx={{ color: "#blue", '&:hover': { backgroundColor: "#1F485B" } }}>
				<FontAwesomeIcon icon={faFacebook} style={{ fontSize: '24px' }} />
			</Button>
		</CardActions>
	);
};

export default function Container4() {

	// --- expand on scroll ---

	const [expanded, setExpanded] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 700) {
				setExpanded(true);
			} else {
				setExpanded(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	// --- card data ---

	const cardsData = [
		{
			id: 1,
			name: 'Hasan',
			description: 'With amazing coding skills and a background in healthcare, Hasan provides valuable insights into the medical field, ensuring that our virtual medical website is accurate and reliable.',
			image: PorImg,
		},
		{
			id: 2,
			name: 'Anas',
			description: 'Anas is great at coding and technology implementation, ensuring that our website is robust, secure, and operates seamlessly.',
			image: PorImg,
		},
		{
			id: 3,
			name: 'Tasneem',
			description: 'A dedicated coder with expertise in user experience design, Tasneem brings a creative touch to our project. Her attention to detail ensures that our website is visually appealing and user-friendly.',
			image: PorImg,
		},
		{
			id: 4,
			name: 'Abdullah',
			description: 'Abdullah is our strategic thinker. He helps us define the roadmap for our project, ensuring that we stay on course and meet our goals. His project management skills keep us organized and efficient.',
			image: PorImg,
		},
	];

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				padding: '20px',
				backgroundColor: '#1F485B',
				minHeight: '300px',
				flexWrap: 'wrap',
				gap: '15px',
			}}
		>
			{cardsData.map((card) => (
				<Card
					key={card.id}
					sx={{
						width: 280,
						borderRadius: '20px',
						maxWidth: '100%',
						transition: 'max-height 2s ease',
						maxHeight: expanded ? '600px' : '280px',
					}}
				>
					<CardMedia component="img" height="220" image={card.image} alt={card.name} />
					<CardContent>
						<Typography variant="h2" sx={{ textAlign: 'center', color: '#1F485B', py: 1 }}>
							{card.name}
						</Typography>
					</CardContent>
					<CardContent>
						<SocialMediaButtons />
						<Typography variant="h9" sx={{ textAlign: 'center', color: '#1F485B', py: 1 }}>
							{card.description}
						</Typography>
					</CardContent>
				</Card>
			))}
		</Box>
	);
}
