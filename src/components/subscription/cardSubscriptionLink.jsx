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
			console.log()

		} catch (err) {
			console.log(err)
		}
	}
	useEffect(() => {
		fetchUserSubscrptions()

	}, [])
	let img = doc
	return (
		<div className="mainP">
			{subs &&
				subs.map((user, index) => (
					<div className="Subcard" key={index}>
						<div className="Subcard-text">

							<div className="Subportada" style={{ backgroundImage: `url(${img})` }} >{/*`url(${user.profileImg})`*/}</div>
							<div className="Subtitle-total">
								{/* <AuthPatient> */}
								<div className="Subtitle">"{user.department}"</div>
								{/* </AuthPatient> */}
								<h3>{user.fullName}</h3>
								<h5>{user.emailAddress}</h5>
								<div className="Subtitle">{user.mobileNumber}</div>
								<h3>{user.insurance}</h3>
								{/* <AuthPhysician> */}
								<Rating sx={{ marginLeft: "25px" }} name="half-rating-read" defaultValue={user.rating} precision={0.5} size="small" readOnly />
								{/* </AuthPhysician> */}
							</div>
						</div>
					</div>
				))
			}
		</div >

	);
}
