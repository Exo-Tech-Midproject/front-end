// import React from 'react';
// import './cardSubscription.css';
// import doc from "./doc.png"
// import Rating from '@mui/material/Rating';
// import { useEffect, useState } from 'react'
// import AuthPatient from '../Auths/AuthPatient';
// import AuthPhysician from '../Auths/AuthPhysician';
// import axios from 'axios';
// import jwtDecode from "jwt-decode";
// import cookie from 'react-cookies'
// let DBURL = process.env.REACT_APP_BASE_URL


// export default function CardSubscription() {
// 	const [subs, setSubs] = useState(null);
// 	const [rating, setRating] = useState(0);
// 	const [showRatingForm, setShowRatingForm] = useState(false);
// 	const [selectedPhysicianUsername, setSelectedPhysicianUsername] = useState(null);
// 	console.log("rating", rating)


// 	async function fetchUserSubscriptions() {
// 		try {
// 			let token = cookie.load("auth");
// 			let payload = await jwtDecode(token);

// 			if (payload?.accountType === 'patient') {
// 				let userSub = await axios.get(
// 					`${DBURL}/patient/${payload.username}/physicians/subscriptions`,
// 					{
// 						headers: { Authorization: `Bearer ${token}` }
// 					}
// 				);
// 				console.log("data for patients => ", userSub.data);
// 				console.log("data=> ", userSub.data)
// 				setSubs(userSub.data)

// 				return (userSub.data)
// 			}

// 			if (payload?.accountType === 'physician') {
// 				let userSub = await axios.get(
// 					`${DBURL}/physician/${payload.username}/patients/subscribers`,
// 					{
// 						headers: { Authorization: `Bearer ${token}` }
// 					}
// 				);
// 				console.log("data for physicians => ", userSub.data);
// 				setSubs(userSub.data);

// 				return (userSub.data)
// 			}
// 		} catch (err) {
// 			console.log(err);
// 		}
// 	}

// 	useEffect(() => {

// 		fetchUserSubscriptions();
// 	}, []);
// 	const handleRatePhysician = async (physicianUsername) => {
// 		try {
// 			let token = cookie.load("auth");
// 			let payload = await jwtDecode(token);

// 			const response = await axios.post(`${DBURL}/patient/${payload.username}/rating/${physicianUsername}`, {
// 				rating: rating
// 			}, {
// 				headers: { Authorization: `Bearer ${token}` }
// 			});

// 			return response
// 			console.log("response:", response.data);
// 		} catch (err) {
// 			console.error("Error rating physician:", err);
// 		}
// 	};
// 	const openRatingForm = (physicianUsername) => {
// 		setSelectedPhysicianUsername(physicianUsername);
// 		setShowRatingForm(true);
// 	};

// 	const submitRating = async () => {
// 		if (selectedPhysicianUsername) {
// 			let res = await handleRatePhysician(selectedPhysicianUsername);
// 			console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", res.data)
// 			setSubs(await fetchUserSubscriptions())
// 			setShowRatingForm(false);
// 		}

// 		setRating(0)
// 	};


// 	let img = doc
// 	return (
// 		<div className="mainP">
// 			{subs &&
// 				subs.map((user, index) => (
// 					<div className="Subcard" key={index}>
// 						<div className="Subcard-text">
// 							<div className="Subportada" style={{ backgroundImage: `url(${img})` }}></div>
// 							<div className="Subtitle-total">
// 								<AuthPhysician>
// 									<h3>Name: {user.fullName}</h3>
// 									<h5>Phone: {user.mobileNumber}</h5>
// 									<h5>Email: {user.emailAddress}</h5>
// 									<h5>Birthdate: {user.birthdate}</h5>
// 									<h5>Gender: {user.gender}</h5>
// 									<h5>Race: {user.race}</h5>
// 								</AuthPhysician>
// 								<AuthPatient>
// 									<h3>Name: {user.fullName}</h3>
// 									<h5>Phone: {user.mobileNumber}</h5>
// 									<h5>Email: {user.emailAddress}</h5>
// 									<h5>Department:{user.department}</h5>
// 									<Rating sx={{ marginLeft: "25px",marginBottom:"4px" }} name="half-rating-read" defaultValue={user.rating} precision={0.5} size="medium" readOnly />
// 									<button className='subrateB' onClick={() => openRatingForm(user.username)}>Rate Physician</button>
// 								</AuthPatient>
// 							</div>
// 						</div>
// 					</div>
// 				))}
// 			{showRatingForm && (
// 				<div className="rating14-form">
// 					<label>Rate the Physician:</label>
// 					<Rating
// 						name="rating14-input"
// 						value={rating}
// 						precision={0.5}
// 						onChange={(event, newValue) => setRating(newValue)}
// 					/>
// 					<button className='subButton14' onClick={submitRating}>Submit</button>
// 				</div>
// 			)}
// 		</div>

// 	);
// }
