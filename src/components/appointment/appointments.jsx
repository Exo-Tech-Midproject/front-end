import { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Appointment = () => {
	const [currentEvents, setCurrentEvents] = useState([]);
	const [open, setOpen] = useState(false);
	const [eventDetails, setEventDetails] = useState({
		event: "",
		patientName: "",
		time: "",
	});
	const calendarRef = useRef(null);

	const handleDateClick = (selected) => {
		setOpen(true);
	};

	const handleModalClose = () => {
		setOpen(false);
	};

	const handleAddEvent = () => {
		const calendarApi = calendarRef.current.getApi();

		const { event, patientName, time } = eventDetails;

		if (event && time) {
			calendarApi.addEvent({
				title: event,
				start: time,
				extendedProps: {
					patientName,
				},
			});

			setOpen(false);
			setEventDetails({
				event: "",
				patientName: "",
				time: "",
			});
		}
	};

	const handleInputChange = (e) => {
		const { id, value } = e.target;
		setEventDetails({ ...eventDetails, [id]: value });
	};

	const formatDate = (date) => {
		return new Intl.DateTimeFormat("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
		}).format(date);
	};
	console.log(currentEvents)
	return (
		<Box m="20px">
			<Typography
				variant="h3"
				color={"#49659b"}
				fontWeight="bold"
				sx={{ padding: "0 0 30px 0", textAlign: "center", textDecoration: "underline" }}
			>
				Your Appointments
			</Typography>

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
					<List>
						{currentEvents.map((event) => (
							<ListItem
								key={event.id}
								sx={{
									backgroundColor: "#4cceac",
									margin: "10px 0",
									borderRadius: "2px",
								}}
							>
								<ListItemText
									primary={event.title}
									secondary={<Typography> {formatDate(event.start)} </Typography>}
								/>
							</ListItem>
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
						selectable={true}
						selectMirror={true}
						dayMaxEvents={true}
						select={handleDateClick}
						eventsSet={(events) => setCurrentEvents(events)}
						ref={calendarRef}
						initialEvents={[
							{
								id: "1",
								title: "Appointment at 2 PM",
								date: "2023-10-14",
							},
							{
								id: "2",
								title: "Appointment from 2 PM to 6 PM",
								date: "2023-10-28",
							},
						]}
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
					<Typography variant="h6" component="h2" gutterBottom>
						Add Event
					</Typography>
					<form>
						<TextField
							id="event"
							label="Event"
							fullWidth
							required
							value={eventDetails.event}
							onChange={handleInputChange}
						/>
						<TextField
							id="patientName"
							label="Patient Name"
							fullWidth
							value={eventDetails.patientName}
							onChange={handleInputChange}
						/>
						<TextField
							id="time"
							label="Time"
							fullWidth
							type="datetime-local"
							required
							value={eventDetails.time}
							onChange={handleInputChange}
						/>
						<Box sx={{ pt: 2 }}>
							<Button variant="contained" onClick={handleModalClose}>
								Cancel
							</Button>
							<Button variant="contained" onClick={handleAddEvent}>
								Add Event
							</Button>
						</Box>
					</form>
				</Box>
			</Modal>
		</Box>
	);
};

export default Appointment;
