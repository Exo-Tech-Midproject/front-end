import React from 'react'
import { useEffect, useState } from 'react'
import Title from '../components/Title';
import Navbar from '../components/Navbars/MainNavbar'
import { Stack, Box, } from "@mui/material"
import Typography from '@mui/material/Typography';
import Footer from '../components/Footers/MainFooter'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import Link from '@mui/material/Link';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import Q from "../components/Q&A/Q"
import Post from "../components/Q&A/post"
import AuthPatient from '../components/Auths/AuthPatient';
// import AuthPhysician from '../components/Auths/AuthPhysician';
import axios from 'axios';
import jwtDecode from "jwt-decode";
import cookie from 'react-cookies'
let DBURL = process.env.REACT_APP_BASE_URL

function QASection() {
	const [post, setpost] = useState([]);


	async function fetchUserpost() {
		try {
			let token = cookie.load("auth");
			let payload = await jwtDecode(token);
			console.log("payload", payload)

			if (payload?.accountType === 'patient') {
				let userPost = await axios.get(
					`${DBURL}/patient/${payload.username}/Q&A`,
					{
						headers: { Authorization: `Bearer ${token}` }
					}
				);

				setpost(userPost.data);
				console.log("userPost.data", userPost.data);
				return userPost.data
			}
			if (payload?.accountType === 'physician') {
				let userPost = await axios.get(
					`${DBURL}/physician/${payload.username}/Q&A`,
					{
						headers: { Authorization: `Bearer ${token}` }
					}
				);

				setpost(userPost.data);
				console.log("userPost.data", userPost.data);
				return userPost.data
			}
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		fetchUserpost();
	}, []);


	return (
		<Stack direction="column" >
			<Navbar />
			<Box sx={{
				mt: 8,
				height: "250px",
				background: "#112731",
				backgroundImage: 'url("https://images.pexels.com/photos/3652097/pexels-photo-3652097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
				backgroundSize: '100%',
				backgroundRepeat: 'no-repeat',
				objectFit: 'cover',
				backgroundPosition: 'center',
				backgroundBlendMode: 'overlay'
			}}
			>
				<Stack sx={{ height: "100%" }} alignItems="center" justifyContent="center">
					<Title
						variant={{ xs: "h3", sm: "h2", md: "h1" }}
						sx={{ letterSpacing: "0.02em", mb: 1, color: "white" }}
					>
						Questions
					</Title>

					<Breadcrumbs aria-label="breadcrumb">
						<Link
							href="/"
							underline="hover"
							sx={{
								display: 'flex',
								alignItems: 'center'
							}}
							color="white"

						>
							<HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
							Home
						</Link>
						<Link
							href="/QACategories"
							underline="hover"
							sx={{
								display: 'flex',
								alignItems: 'center'
							}}
							color="white"

						>
							<ContactSupportOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
							Category
						</Link>
						<Typography
							sx={{ display: 'flex', alignItems: 'center', textDecoration: "underline" }}
							color="#67ABCB"
						>
							<PanoramaFishEyeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
							Questions
						</Typography>
					</Breadcrumbs>

				</Stack>
			</Box>
			<Box sx={{ width: "100%", bgcolor: "#F2F8FF", height: "100%", position: "relative" }} py={11}>
				<Stack direction="column" spacing={4} alignItems="center" justifyContent="center" sx={{ height: "100%" }} >
					<AuthPatient>
						<Q fetchUserpost={fetchUserpost} setpost={setpost} />
					</AuthPatient>

					{post?.map(singlePost => (
						<Post data={singlePost} key={singlePost.id} fetchUserpost={fetchUserpost} setpost={setpost} />

					))}

				</Stack >

			</Box >
			<Footer />
		</Stack >
	);
}
export default QASection