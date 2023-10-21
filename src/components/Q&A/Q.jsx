import React, { useState } from 'react';
import { Box, Button } from "@mui/material";
import { Typography, Stack } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import axios from 'axios';
import jwtDecode from "jwt-decode";
import cookie from 'react-cookies';
let DBURL = process.env.REACT_APP_BASE_URL;
let token = cookie.load("auth");
let payload = await jwtDecode(token);
export default function Q({ fetchUserpost, setpost }) {
	const [question, setQuestion] = useState(''); // State to store the content from the textarea

	async function AddPost() {
		try {
			let token = cookie.load("auth");
			let payload = await jwtDecode(token);
			// console.log("payload", payload);

			if (payload?.accountType === 'patient') {
				// Create a new post object with the question content
				const newPost = {
					title: "",
					description: question,
				};

				let response = await axios.post(
					`${DBURL}/patient/${payload.username}/Q&A`,
					newPost,
					{
						headers: { Authorization: `Bearer ${token}` }
					}
				);

				setQuestion("");
				// console.log("response", response);
				setpost(await fetchUserpost())

			}
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<>
			<Box sx={{
				width: "80%",
				height: "fit-content",
				backgroundColor: "white",
				boxShadow: "0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)",
				borderRadius: "17px 17px 27px 27px",
			}}>
				<Box p={3}>
					<Box>
						<Stack spacing={1} direction="row" alignItems="center" sx={{ width: "100%", }}>
							<AccountCircleOutlinedIcon sx={{ color: "black" }} />
							<Stack direction="column" spacing={0.4}>
								<Typography sx={{
									fontWeight: "700",
									fontSize: "12px",
									color: "#47484b",
								}}>{payload.username}</Typography>
							</Stack>
						</Stack>
					</Box>

				</Box>
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
						<Box>
							<textarea
								style={{
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
								placeholder='Ask Question'
								value={question} // Set the value of the textarea to the "question" state
								onChange={(e) => setQuestion(e.target.value)} // Update the "question" state
							></textarea>
						</Box>
						<Box>
							<Button
								sx={{
									width: "30px",
									height: "30px",
									backgroundColor: "#0a84ff",
									margin: "0 0 0 auto",
									"&:hover": {
										backgroundColor: "#026eda",
									}
								}}
								variant="contained"
								onClick={AddPost}
							>
								SEND
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	)
}