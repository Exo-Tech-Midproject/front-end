import React, { useEffect, useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Box from "@mui/material/Box";

import AuthPatient from '../Auths/AuthPatient';
import AuthPhysician from '../Auths/AuthPhysician';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./appointmentsHero.css";
import axios from 'axios';
import jwtDecode from "jwt-decode";
import cookie from 'react-cookies';
let DBURL = process.env.REACT_APP_BASE_URL;


export default function Appointment() {
	const [currentEvents, setCurrentEvents] = useState([]);
	const [open, setOpen] = useState(false);
	const [eventDetails, setEventDetails] = useState({
		event: "",
		patientName: "",
		date: "",
	});

	const calendarRef = useRef(null);

	function handleIsSelectable() {
		let token = cookie.load('auth');
		const payload = jwtDecode(token);

		if (payload?.accountType === 'physician') {
			return true;
		} else if (payload?.accountType === 'Patient') {
			return false;
		}
		return false;
	}

	const handleDateClick = (selectInfo) => {
		setEventDetails((prevState) => ({
			...prevState,
			date: selectInfo.startStr,
		}));
		setOpen(true);
	};

	const handleModalClose = () => {
		setOpen(false);
	};

	async function handleGetEvent() {
		let token = cookie.load('auth')
		const payload = await jwtDecode(token)
		try {
			if (payload?.accountType === 'physician') {
				let Events = await axios.get(
					`${DBURL}/physician/${payload.username}/appointments`,
					{
						headers: { Authorization: `Bearer ${token}` }
					})
				// console.log("Events.data => ", Events.data);
				return Events.data;
			} else if (payload?.accountType === 'patient') {
				let Events = await axios.get(
					`${DBURL}/patient/${payload.username}/appointments`,
					{
						headers: { Authorization: `Bearer ${token}` }
					})
				// console.log("Events.data => ", Events.data);
				return Events.data;
			}


		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		async function fetchEvents() {
			const eventsData = await handleGetEvent();

			if (eventsData) {
				setCurrentEvents(eventsData);
			}
		}

		fetchEvents();
	}, []);

	async function handleAddEvent() {
		try {

			const calendarApi = calendarRef.current.getApi();
			// console.log("calendarApi ", calendarApi);

			let { event, patientName, time } = eventDetails;
			let token = cookie.load('auth');
			const payload = await jwtDecode(token);

			// console.log("eventDetails ", eventDetails);
			if (payload?.accountType === 'physician') {
				let createdEvent = await axios.post(`${DBURL}/physician/${payload.username}/patients/${eventDetails.patientName}/appointments`, eventDetails, {
					headers: { Authorization: `Bearer ${token}` }
				});
				// console.log("createdEvent", createdEvent)
				const updatedEvents = [...currentEvents, createdEvent.data];
				setCurrentEvents(updatedEvents);
				setOpen(false);
				return createdEvent;
			}

			if (event && time) {
				const newEvent = {
					title: event,
					start: new Date(time),
					extendedProps: {
						patientName,
					},
				};
				calendarApi.addEvent(newEvent);

				const updatedEvents = [...currentEvents, newEvent]; // Update the current events with the newly created event
				setCurrentEvents(updatedEvents); // Update the currentEvents state

				setEventDetails({
					event: "",
					patientName: "",
					time: "",
				});
			}

		} catch (err) {
			console.log(err);
		}
	}

	const handleInputChange = (e) => {
		const { id, value } = e.target;
		setEventDetails({ ...eventDetails, [id]: value });
	};


	const formatDate = (date) => {
		return new Intl.DateTimeFormat("en-US", {
			year: "numeric",
			day: "numeric",
			month: "numeric",
		}).format(date);
	};

	const boxRef = useRef();

	const scrollToBox = () => {
		if (boxRef.current) {
			boxRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};


	const formattedEvents = currentEvents?.map(appointment => {
		const eventDate = new Date(appointment.date);
		// Format the date in the required format 'YYYY-MM-DD'
		const formattedDate = `${eventDate.getFullYear()}-${(eventDate.getMonth() + 1)
			.toString()
			.padStart(2, '0')}-${eventDate.getDate().toString().padStart(2, '0')}`;
		return {
			title: `Patient: ${appointment.patientUsername} -Doctor: ${appointment.physicianUsername}`,
			start: formattedDate,
		};
	});
	console.log("currentEvents", currentEvents)
	console.log('formattedEvents', formattedEvents)
	return (
		<>
			<Box
				sx={{
					margin: "2%",
					marginTop: '0'
				}}
			>
				<div role="presentation">
					<Breadcrumbs aria-label="breadcrumb">
						<Link
							underline="hover"
							sx={{
								display: 'flex',
								alignItems: 'center'
							}}
							color="#062942"
							href="/"
						>
							<HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
							Home
						</Link>
						<Link
							underline="hover"
							sx={{ display: 'flex', alignItems: 'center' }}
							color="#062942"
							href="/dashboard/Profile"
						>
							<WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
							Profile
						</Link>
						<Link
							underline="hover"
							sx={{ display: 'flex', alignItems: 'center', textDecoration: "none", }}
							color="#4070f4"
							href="/dashboard/appointment"
						>
							<GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
							Appointments
						</Link>
					</Breadcrumbs>
				</div>
			</Box>
			<div className="Appointmenthero">
				<div className="Appointmenthero-content">
					<h1 className="AppointmentH1">Book Your Appointment</h1>
					<p className="AppointmentP1 ">Professional and personalized care for your health</p>
					<a href="#scrollToBox" className="Appointmentbtn" onClick={scrollToBox}>Schedule</a>
				</div>
			</div>
			<Box m="20px" marginTop={10} ref={boxRef}>
				<Box
					display="flex"
					justifyContent="space-between"
					style={{
						borderRadius: "8px",
						boxShadow: "5px 5px 15px rgba(0, 0, 0, 5)",
					}}
				>
					<Box flex="1 1 20%" backgroundColor={"#2c3e50"} p="15px" borderRadius="4px">
						<Typography
							variant="h4"
							color={"#ffffff"}
							style={{ borderBottom: "1px solid #000", textAlign: "center" }}
						>
							Events
						</Typography>
						<List sx={{
							maxHeight: "70vh",
							overflow: "auto", // Add this line to enable a hidden scrollbar
							'&::-webkit-scrollbar': {
								width: '0.3em', // Width of the scrollbar
							},
							'&::-webkit-scrollbar-thumb': {
								backgroundColor: 'rgba(0, 0, 0, 0.2)', // Color of the scrollbar thumb
							},
						}}>
							{currentEvents.map((event) => (
								<>
									<AuthPhysician>
										<ListItem
											key={event.id}
											sx={{
												backgroundColor: "#4cceac",
												margin: "10px 0",
												borderRadius: "2px",
											}}
										>
											<ListItemText
												primary={event.patientUsername}
												secondary={<Typography> {new Date(event.date).toDateString()} </Typography>}
											/>
										</ListItem>
									</AuthPhysician>
									<AuthPatient>
										<ListItem
											key={event.id}
											sx={{
												backgroundColor: "#4cceac",
												margin: "10px 0",
												borderRadius: "2px",
											}}
										>
											<ListItemText
												primary={event.physicianUsername}
												secondary={<Typography> {new Date(event.date).toDateString()} </Typography>}
											/>
										</ListItem>
									</AuthPatient>
								</>
							))}
						</List>
					</Box>
					<Box flex="1 9 100%" ml="15px" sx={{ padding: "5px" }}>
						<FullCalendar
							height="80vh"
							plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
							headerToolbar={{
								left: "prev,next today",
								center: "title",
								right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
							}}
							initialView="dayGridMonth"
							editable={true}
							selectable={handleIsSelectable()}
							selectMirror={true}
							dayMaxEvents={true}
							select={handleDateClick}
							events={formattedEvents}
							// eventsSet={(events) => setCurrentEvents(events)}
							ref={calendarRef}
						// initialEvents={
						// 	[{ title: 'appointment 1', date: '2023-10-27' },
						// 	{ title: 'appointment 2', date: '2023-10-29' }]
						// }
						/>
					</Box>
				</Box>
				<Modal open={open} onClose={handleModalClose}>
					<Box
						sx={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							width: 400,
							bgcolor: "background.paper",
							boxShadow: 24,
							p: 4,
						}}
					>
						<Typography color='#1F485B' variant="h6" component="h2" gutterBottom>
							Add Event
						</Typography>
						<form
							sx={{
								display: 'flex',
								flexDirection: 'column',
								maxWidth: '300px',
								margin: '0 auto',
							}}
						>
							<TextField
								id="event"
								label="Event"
								fullWidth
								required
								value={eventDetails.event}
								onChange={handleInputChange}
								sx={{
									marginBottom: 2,
								}}
								InputLabelProps={{ sx: { color: '#1F485B' } }}
							/>
							<TextField
								id="patientName"
								label="Patient Name"
								fullWidth
								required
								value={eventDetails.patientName}
								onChange={handleInputChange}
								sx={{
									marginBottom: 2,
								}}
								InputLabelProps={{ sx: { color: '#1F485B' } }}
							/>
							{/* <TextField
								id="date"
								label="Time"
								fullWidth
								type="datetime-local"
								required
								value={eventDetails.date}
								onChange={handleInputChange}
								sx={{
									marginBottom: 2,
								}}
							/> */}
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
									marginTop: 2,
								}}
							>
								<Button
									variant="contained"
									onClick={handleModalClose}
									color="error"
								>
									Cancel
								</Button>
								<Button
									variant="contained"
									onClick={handleAddEvent}
									color="medical"
								>
									Add Event
								</Button>
							</Box>
						</form>
					</Box>
				</Modal>
			</Box>
		</>
	);
}
