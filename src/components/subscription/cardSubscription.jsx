import React from 'react';
import './cardSubscription.css';
import doc from "./doc.png"
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

	useEffect(() => {
		// Define the function as an async function within the useEffect to properly use state
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
					console.log("data for patients => ", userSub.data);
					console.log("data=> ", userSub.data)
					setSubs(userSub.data)
					console.log()
				}

				if (payload?.accountType === 'physician') {
					let userSub = await axios.get(
						`${DBURL}/physician/${payload.username}/patients/subscribers`,
						{
							headers: { Authorization: `Bearer ${token}` }
						}
					);
					console.log("data for physicians => ", userSub.data);
					setSubs(userSub.data);
				}
			} catch (err) {
				console.log(err);
			}
		}

		fetchUserSubscriptions();
	}, []);

	let img = doc
	return (
		<div className="mainP">
			{subs &&
				subs.map((user, index) => (
					<div className="Subcard" key={index}>
						<div className="Subcard-text">

							<div className="Subportada" style={{ backgroundImage: `url(${user.profileImg})` }} ></div>
							<div className="Subtitle-total">
								<AuthPhysician>
									<h3>{user.insurance}</h3>
								</AuthPhysician>
								<h3>{user.fullName}</h3>
								<h5>{user.emailAddress}</h5>
								<h4>{user.mobileNumber}</h4>
								<AuthPatient>
									<div className="Subtitle">{user.department}</div>
									<Rating sx={{ marginLeft: "25px" }} name="half-rating-read" defaultValue={user.rating} precision={0.5} size="medium" readOnly />
								</AuthPatient>
							</div>
						</div>
					</div>
				))
			}
		</div >

	);
}
