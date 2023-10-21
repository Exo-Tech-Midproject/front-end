import React, { useState, useEffect } from 'react';
import { Stack, Box, Button, } from "@mui/material"
import Typography from '@mui/material/Typography';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';
import jwtDecode from "jwt-decode";
import cookie from 'react-cookies'
import AuthPatient from '../Auths/AuthPatient';
import AuthPhysician from '../Auths/AuthPhysician';
let DBURL = process.env.REACT_APP_BASE_URL

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));
export default function Post({ data, fetchUserpost, setpost }) {


	const [expanded, setExpanded] = useState(false);
	const [comment, setComment] = useState('');
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	// console.log("data.Comments", data.Comments)
	const [Comments, setComments] = useState([]);
	// console.log("CommentsCommentsComments", Comments)
	// add comments
	async function AddComment() {
		try {
			let token = cookie.load("auth");
			let payload = await jwtDecode(token);

			const newComment = {
				text: comment,
			};
			if (payload?.accountType === 'physician') {
				let response = await axios.post(
					`${DBURL}/physician/${payload.username}/Q&A/${data.id}/comments`,
					newComment,
					{
						headers: { Authorization: `Bearer ${token}` }
					}
				);
			}
			setComment("");
			// console.log("response", response);
			setComments(await fetchUserComments())

			setpost(await fetchUserpost())
			// console.log("newData", newData)



		} catch (err) {
			console.log(err);
		}
	}


	// get comments
	async function fetchUserComments() {
		try {
			let token = cookie.load("auth");
			let payload = await jwtDecode(token);



			let userComments = await axios.get(
				`${DBURL}/${payload.accountType}/${payload.username}/Q&A/${data.id}/comments`,
				{
					headers: { Authorization: `Bearer ${token}` }
				}
			);

			setComments(userComments.data);
			// console.log("userComments.data", userComments.data);
			return userComments.data
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		fetchUserComments();
	}, []);

	return (
		<>
			<Box sx={{
				width: "70%",
				height: "fit-content",
				backgroundColor: "white",
				boxShadow: "0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)",
				borderRadius: "17px 17px 27px 27px",
			}}>

				{/* questions */}

				<Box>
					<Typography sx={{
						width: "100%",
						height: "50px",
						position: "relative",
						display: "flex",
						alignItems: "center",
						paddingLeft: "20px",
						borderBottom: "1px solid #f1f1f1",
						fontWeight: 700,
						fontSize: "13px",
						color: "#47484b",
						"&:after": {
							content: "''",
							width: "8ch",
							height: "1px",
							position: "absolute",
							bottom: "-1px",
							backgroundColor: "#47484b",
						}
					}}>Qusetion</Typography>
				</Box>
				<Box p={3}>
					<Box>
						<Stack spacing={1} direction="row" alignItems="center" sx={{ width: "100%", }}>
							<AccountCircleOutlinedIcon sx={{ color: "black" }} />
							<Stack direction="column" spacing={0.4}>
								<Typography sx={{
									fontWeight: "700",
									fontSize: "12px",
									color: "#47484b",
								}}>{data?.craetedBy}</Typography>
								<Typography sx={{
									fontWeight: "600",
									fontSize: "10px",
									color: "#acaeb4",
								}}>{data?.createdAt}</Typography>
							</Stack>
						</Stack>
					</Box>
					<Box p={1}>
						<Typography sx={{
							fontSize: "12px",
							lineHeight: "16px",
							fontWeight: 600,
							color: "#5f6064",
						}}>{data?.description}</Typography>
					</Box>


					{/* comments */}
					<Stack direction="row" height="40px" width="100px" alignItems="center" justifyContent="center">
						<Typography sx={{
							fontSize: "12px",
							lineHeight: "16px",
							fontWeight: 600,
							color: "#5F6064",
						}}>Answers: </Typography>
						<ExpandMore
							expand={expanded}
							onClick={handleExpandClick}
							aria-expanded={expanded}
							aria-label="show more"

						>
							<ExpandMoreIcon sx={{ color: "#5F6064" }} />
						</ExpandMore>
					</Stack>
					<Collapse in={expanded} timeout="auto" unmountOnExit>
						{Comments?.Comments?.map((comment, index) => (
							<CardContent
								key={index}
								sx={{
									border: "1px solid",
									backgroundColor: "white",
									borderRadius: "17px 17px 27px 27px",
									border: "1px solid #f1f1f1",
									marginTop: "8px",
								}}
							>
								<Box>
									<Stack spacing={1} direction="row" alignItems="center" sx={{ width: "100%", py: 2 }}>
										<AccountCircleOutlinedIcon sx={{ color: "black" }} />
										<Stack direction="column" spacing={0.4}>
											<Typography sx={{
												fontWeight: "700",
												fontSize: "12px",
												color: "#47484B",
											}}>{comment?.author}</Typography>
											<Typography sx={{
												fontWeight: "600",
												fontSize: "10px",
												color: "#ACAEB4",
											}}>{comment?.createdAt}</Typography>
										</Stack>
									</Stack>
								</Box>
								<Box p={1}>
									<Typography sx={{
										fontSize: "12px",
										lineHeight: "16px",
										fontWeight: 600,
										color: "#5F6064",
									}}>
										{comment?.text}
									</Typography>
								</Box>
							</CardContent>
						))}
					</Collapse>

				</Box>

				{/* replay */}
				<AuthPatient >
					<Box sx={{
						width: "100%",
						height: "fit-content",
						backgroundColor: "#f1f1f1",
						padding: "8px",
					}}>
						<Box sx={{
							backgroundColor: "#ffffff",
							borderRadius: "8px 8px 21px 21px",
							padding: "8px",
						}}>
							<Box ><textarea style={{
								width: "100%",
								height: "40px",
								resize: "none",
								border: "0",
								borderRadius: "6px",
								padding: "12px 12px 10px 12px",
								fontSize: "13px",
								outline: "none",
								caretColor: "#0a84ff",
							}}
								value={comment} // Set the value of the textarea to the "question" state
								onChange={(e) => setComment(e.target.value)} // Update the "question" state
								placeholder='Reply'></textarea></Box>
							<Box>


								<Button sx={{
									width: "30px",
									height: "30px",
									backgroundColor: "#0a84ff",
									margin: "0 0 0 auto",
									"&:hover": {
										backgroundColor: "#026eda",
									}
								}} variant="contained"
									onClick={AddComment}>

									<ArrowUpwardIcon />
								</Button>

							</Box>
						</Box>

					</Box>
				</AuthPatient>
			</Box>
		</>
	)
}
