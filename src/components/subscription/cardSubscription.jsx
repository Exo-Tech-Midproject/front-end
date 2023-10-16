import React from 'react';
import './cardSubscription.css';
import doc from "./doc.png"
import Rating from '@mui/material/Rating';

import { useEffect, useState } from 'react'

import axios from 'axios';
import jwtDecode from "jwt-decode";
import cookie from 'react-cookies'
let DBURL = process.env.REACT_APP_BASE_URL

export default function CardSubscription() {


	const [subs, setSubs] = useState(null)

	async function fetchUserSubscrptions() {
		try {
			let token = cookie.load("auth")
			let payload = await jwtDecode(token)
			let userSub = await axios.get(`${DBURL}/physician/${payload.username}/patients/subscribers`,
				{
					headers: { Authorization: `Bearer ${token}` }
				})
			console.log("data=> ", userSub.data)
			setSubs(userSub.data)

		} catch (err) {
			console.log(err)
		}
	}
	useEffect(() => {
		fetchUserSubscrptions()

	}, [])

	const cardsData = [
		{
			id: 1,
			name: 'Hasan',
			bio: 'caring specialist with 3 years of experience. They prioritize patient well-being, advocate for preventive care, and contribute to medical research.',
			rating: 3,
			department: "Doctor",
			img: doc,
			profile: "http://localhost:3000/dashboard/subscriptions",
		},
		{
			id: 2,
			name: 'Anas',
			bio: 'caring specialist with 3 years of experience. They prioritize patient well-being, advocate for preventive care, and contribute to medical research.',
			rating: 4,
			department: "Doctor",
			img: doc,
			profile: "http://localhost:3000/dashboard/subscriptions",
		},
		{
			id: 3,
			name: 'Tasneem',
			bio: 'caring specialist with 3 years of experience. They prioritize patient well-being, advocate for preventive care, and contribute to medical research.',
			rating: 2,
			department: "Doctor",
			img: doc,
			profile: "http://localhost:3000/dashboard/subscriptions",
		},
		{
			id: 4,
			name: 'Abdullah',
			bio: 'caring specialist with 3 years of experience. They prioritize patient well-being, advocate for preventive care, and contribute to medical research.',
			department: "Doctor",
			img: doc,
			profile: "http://localhost:3000/dashboard/subscriptions",
			rating: 3.5,
		},
		{
			id: 4,
			name: 'Abdullah',
			bio: 'caring specialist with 3 years of experience. They prioritize patient well-being, advocate for preventive care, and contribute to medical research.',
			department: "Doctor",
			img: doc,
			profile: "http://localhost:3000/dashboard/subscriptions",
			rating: 2.5,
		},
		{
			id: 4,
			name: 'Abdullah',
			bio: 'caring specialist with 3 years of experience. They prioritize patient well-being, advocate for preventive care, and contribute to medical research.',
			department: "Doctor",
			img: doc,
			profile: "http://localhost:3000/dashboard/subscriptions",
			rating: 1,
		},


	];

	// const renderStars = (rating) => {
	// 	const stars = [];
	// 	for (let i = 1; i <= 5; i++) {
	// 		const starClass = i <= rating ? 'star filled' : 'star';
	// 		stars.push(<span key={i} className={starClass}>&#9733;</span>);
	// 	}
	// 	return stars;
	// };

	return (
		<div className="mainP">
			{cardsData.map((card) => (
				// <a key={card.id} href={card.profile}>
				<div className="Subcard">
					<div className="Subcard-text">
						<div className="Subportada" style={{ backgroundImage: `url(${card.img})` }}></div>

						<div className="Subtitle-total">
							<div className="Subtitle">{card.department}</div>
							<h3>{card.name}</h3>
							<div className="Subdesc">{card.bio}</div>
							{/* <div className="rating">{renderStars(card.rating)}</div> */}
							<Rating sx={{ marginLeft: "20px" }} name="half-rating-read" defaultValue={card.rating} precision={0.5} size="small" readOnly />
						</div>
					</div>
				</div>
				// </a>
			))}
		</div>


	);
}
