import React from 'react';
import SubsPagination from "./subsPagination"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Box, Button, Typography, Container, Grid } from '@mui/material';
import defaultPfp from './doc.png'
import defaultCover from './sss.png'
import { motion } from 'framer-motion';

import Heading from "./heading"
import "./cardSubscription.css"
import './subTest.css';

import Rating from '@mui/material/Rating';
import { useEffect, useState } from 'react'
import AuthPatient from '../Auths/AuthPatient';
import AuthPhysician from '../Auths/AuthPhysician';
import axios from 'axios';
import jwtDecode from "jwt-decode";
import cookie from 'react-cookies'
let DBURL = process.env.REACT_APP_BASE_URL


export default function CardSubscription() {
	const [currentPage, setCurrentPage] = useState(1);
	const [subs, setSubs] = useState([]); // Initialize subs as an empty array
	const [rating, setRating] = useState(0);
	const [showRatingForm, setShowRatingForm] = useState(false);
	const [selectedPhysicianUsername, setSelectedPhysicianUsername] = useState(null);


	// let descending = subs?.sort((a, b) => b.id - a.id)

	const startIndex = 3 * (currentPage - 1);
	const endIndex = startIndex + 3;
	const currentPageRender = subs ? subs.slice(startIndex, endIndex) : []

	// Calculate the total number of pages needed
	const PaginationPages = Math.ceil(subs.length / 3);

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

			const newRating = {
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

				console.log("Rating submitted successfully:", response.data);
				let ratingRRR = await fetchUserSubscriptions()
				console.log(ratingRRR)
				setSubs(ratingRRR)


				setShowRatingForm(false);
				setRating(0);
			} catch (err) {
				console.error("Error submitting rating:", err);
			}
		}
	};



	return (
		<>
			<Heading />
			<div>

				<ToastContainer position="top-right" autoClose={1000} />
				<div className='ALL'>
					<div className="mainP">

						<Grid container padding={2} rowGap={2} justifyContent="center" spacing={2}>
							{currentPageRender &&
								currentPageRender.map((user, index) => (
									<div className='SubsCus'>
										<Grid key={user.id}>
											<motion.figure
												transition={{ duration: 0.85 }}
												initial={{ x: -500, opacity: 0 }}
												animate={{ opacity: 1, x: 0 }}
												whileHover={{ scale: 1.05 }}
												className="Ssnip1336"
											>
												<img src={user.coverImg || defaultCover} alt={user.fullName} className="profileCover" />
												<figcaption>
													<img src={user.profileImg || defaultPfp} alt={user.fullName} className="profile" />
													{console.log(user.fullName, user.profileImg)}
													<Typography
														transition={{ delay: 0.3, duration: 0.7 }}
														animate={{ opacity: 1, y: 0 }}
														initial={{ y: 500, opacity: 0 }}
														component={motion.h2}
														variant='h4'
													>
														{user.fullName}
														<AuthPhysician>
															<span>{user.gender}</span>
														</AuthPhysician>
														<span>phone: {user.mobileNumber}</span>
														<span>Email: {user.emailAddress}</span>
													</Typography>
													<Box display='flex' justifyContent='flex-end' marginTop={"10px"}>
														<AuthPatient>
															<Button variant='text' color={'snowWhite'} onClick={() => openRatingForm(user.username)}>Rate Doctor</Button>
															<Rating
																sx={{
																	marginLeft: "20px",
																	color: "white",
																	'& .MuiRating-icon': {
																		color: 'gold',
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
										</Grid>
									</div>
								))}
						</Grid>

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
				</div>
				<Box px={3} mb='10px'>
					{/* <Divider /> */}
				</Box>
				<Container sx={{ marginBottom: '30px' }}>
					<SubsPagination setCurrentPage={setCurrentPage} PaginationPages={PaginationPages} />

				</Container>
			</div>
		</>
	);
}
