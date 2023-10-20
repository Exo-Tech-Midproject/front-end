import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import defaultPfp from '../../assets/images/defaultImges/we-are-not-the-same.jpg'
import defaultCover from '../../assets/images/defaultImges/pharmacy.PNG'
import { motion } from 'framer-motion';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Alert } from '@mui/material';

import "./cardSubscription.css"
import './subTest.css';
import doc from "./doc.png"
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import { useEffect, useState } from 'react'
import AuthPatient from '../Auths/AuthPatient';
import AuthPhysician from '../Auths/AuthPhysician';
import axios from 'axios';
import jwtDecode from "jwt-decode";
import cookie from 'react-cookies'
let DBURL = process.env.REACT_APP_BASE_URL


export default function CardSubscription() {
	const [subs, setSubs] = useState(null);
	const [rating, setRating] = useState(0);
	const [showRatingForm, setShowRatingForm] = useState(false);
	const [selectedPhysicianUsername, setSelectedPhysicianUsername] = useState(null);
	const [showErrorAlert, setShowErrorAlert] = useState(false);

	// console.log("rating", rating)

	async function fetchUserSubscriptions() {
		try {
			let token = cookie.load("auth");
			let payload = await jwtDecode(token);

			if (payload?.accountType === 'patient') {
				let userSub = await axios.get(
					`${DBURL}/patient/${payload.username}/physicians/subscriptions`,
					{
						headers: { Authorization: `Bearer ${token}` }
					}
				);

				setSubs(userSub.data)
				console.log("userSub.data", userSub.data)
				return (userSub.data)
			}

			// if (payload?.accountType === 'physician') {
			// 	let userSub = await axios.get(
			// 		`${DBURL}/physician/${payload.username}/patients/subscribers`,
			// 		{
			// 			headers: { Authorization: `Bearer ${token}` }
			// 		}
			// 	);

			// 	setSubs(userSub.data);

			// 	return (userSub.data)
			// }
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {

		fetchUserSubscriptions();
	}, []);
	const handleRatePhysician = async (physicianUsername) => {
		try {
			let token = cookie.load("auth");
			let payload = await jwtDecode(token);

			const response = await axios.get(
				`${DBURL}/patient/${payload.username}/physicians/subscriptions`,
				{
					headers: { Authorization: `Bearer ${token}` }
				}
			);

			console.log("response:", response.data);
			return response
		} catch (err) {
			console.error("Error rating physician:", err);
		}
	};


	const openRatingForm = async (physicianUsername) => {
		try {
			let token = cookie.load("auth");
			let payload = jwtDecode(token);
			const response = await axios.get(
				`${DBURL}/patient/${payload.username}/rating/`,
				{
					headers: { Authorization: `Bearer ${token}` }
				}
			);
			let Ratingdata = response.data;

			if (Array.isArray(Ratingdata)) {
				const PhysiciansArray = [...new Set(Ratingdata.map(item => item.physician))];
				if (!PhysiciansArray.includes(physicianUsername)) {
					setSelectedPhysicianUsername(physicianUsername);
					setShowRatingForm(true);
				} else {
					toast.error('You have already rated this doctor.');
				}
			}
		} catch (err) {
			console.error("Error rating physician:", err);
		}
	};



	// console.log("showRatingForm", showRatingForm)

	const submitRating = async () => {
		if (selectedPhysicianUsername) {
			console.log("selectedPhysicianUsername", selectedPhysicianUsername);

			let token = cookie.load("auth");
			let payload = jwtDecode(token);

			// Define the rating data to send to the server
			const newRating = {
				// Define the properties of the rating data here
				// For example, you might have a "rating" property that represents the rating value
				rating: rating,
			};
			console.log("newRating", newRating)

			try {
				const response = await axios.post(
					`${DBURL}/patient/${payload.username}/rating/${selectedPhysicianUsername}`,
					newRating,
					{
						headers: { Authorization: `Bearer ${token}` },
					}
				);

				// Handle the response as needed
				// console.log("Rating submitted successfully:", response.data);
				// let ratingRRR = await fetchUserSubscriptions()
				// 	setSubs(ratingRRR)

				const updatedSubs = subs.map((physician) => {
					if (physician.username === selectedPhysicianUsername) {
						// Update the avgRating with the new value
						physician.avgRating = response.data.avgRating;
					}
					return physician;
				});

				// Set the updated subs state
				setSubs(updatedSubs);

				setShowRatingForm(false);
				setRating(0);
			} catch (err) {
				console.error("Error submitting rating:", err);
			}
		}
	};



	let img = doc
	return (
		<div>
			<ToastContainer position="top-right" autoClose={5000} />
			<div className='ALL'>
				<div className="mainP">
					{subs &&
						subs.map((user, index) => (
							<motion.figure
								transition={{ duration: 0.85 }}
								initial={{ x: -500, opacity: 0, }}
								animate={{ opacity: 1, x: 0, }}
								whileHover={{ scale: 1.05 }}
								className="snip1336">
								<img src={user.coverImg || defaultCover} alt={user.fullName} />
								<figcaption>
									<img src={user.profileImg || defaultPfp} alt={user.fullName} className="profile" />
									<Typography transition={{ deplay: 0.3, duration: 0.7 }} animate={{ opacity: 1, y: 0, }} initial={{ y: 500, opacity: 0, }} component={motion.h2} variant='h4'>
										{user.fullName}
										<AuthPhysician>
											<span>{user.gender}</span>
										</AuthPhysician>
										<span>phone: {user.mobileNumber}</span>
										<span>Email: {user.emailAddress}</span>
									</Typography>
									{/* <p>{text}</p> */}
									<Box display='flex' justifyContent='flex-end' marginTop={"10px"}>
										<AuthPatient>
											<Button variant='text' color={'snowWhite'} onClick={() => openRatingForm(user.username)}>Rate Doctor</Button>

											<Rating
												sx={{
													marginLeft: "20px",
													color: "white",
													// Additional star styling
													'& .MuiRating-icon': {
														color: 'gold',
														// You can add more styling properties here
													},
												}}
												name="half-rating-read"
												defaultValue={user.avgRating}
												precision={0.5}
												size="medium"
												readOnly
											/>

										</AuthPatient>

									</Box>
								</figcaption>

							</motion.figure>
						))}
					{showRatingForm && (
						<div className="rating14-form">
							<label>Rate the Physician</label>

							<Rating
								name="rating14-input"
								value={rating}
								precision={0.5}
								size="medium"
								onChange={(event, newValue) => setRating(newValue)}
							/>
							<button className='subButton14' onClick={submitRating}>Submit</button>
						</div>
					)}

				</div>
				{showErrorAlert && (
					<Alert severity="error">You have already rated this doctor.</Alert>
				)}
			</div>
		</div>
	);
}
