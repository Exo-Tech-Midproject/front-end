import { useState } from "react";
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
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";

const Appointment = () => {
	const [currentEvents, setCurrentEvents] = useState([]);
	const [openEventDialog, setOpenEventDialog] = useState(false);
	const [eventTitle, setEventTitle] = useState("");
	const [selectedDate, setSelectedDate] = useState(null);

	const formatDate = (date) => {
		return new Intl.DateTimeFormat("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
		}).format(date);
	};
	const handleDateClick = (selected) => {
		setSelectedDate(selected.date);
		setOpenEventDialog(true);
	};

	const handleEventDialogClose = () => {
		setOpenEventDialog(false);
		setEventTitle("");
		setSelectedDate(null);
	};


	const handleAddEvent = () => {
		if (eventTitle && selectedDate) {
			const newEvent = {
				id: `${selectedDate.toISOString()}-${eventTitle}`,
				title: eventTitle,
				start: selectedDate.toISOString(),
				end: selectedDate.toISOString(),
				allDay: true, // You can set this to false if you want to handle time-specific events.
			};
			setCurrentEvents([...currentEvents, newEvent]);
			handleEventDialogClose();
		}
	};

	const handleEventClick = (info) => {
		if (
			window.confirm(
				`Are you sure you want to delete the event '${info.event.title}'?`
			)
		) {
			setCurrentEvents(currentEvents.filter((event) => event.id !== info.event.id));
		}
	};

	return (
		<Box m="20px" marginTop={"30px"}>
			<Box
				display="flex"
				justifyContent="space-between"
				style={{
					borderRadius: "8px",
					boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.5)",
				}}
			>
				{/* Events SIDEBAR */}
				<Box
					flex="1 1 20%"
					backgroundColor={"#2c3e50"}
					p="15px"
					borderRadius="4px"
				>
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
									secondary={<Typography>{formatDate(event.start)}</Typography>}
								/>
							</ListItem>
						))}
					</List>
				</Box>

				{/* CALENDAR */}
				<Box flex="1 9 100%" ml="15px" sx={{ padding: "5px" }}>
					<FullCalendar
						height="80vh"
						plugins={[
							dayGridPlugin,
							timeGridPlugin,
							interactionPlugin,
							listPlugin,
						]}
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
						eventClick={handleEventClick}
						events={currentEvents} // Pass your events data here.
					/>
				</Box>
			</Box>

			{/* Add event dialog */}
			<Dialog open={openEventDialog} onClose={handleEventDialogClose}>
				<DialogTitle>Add Event Description</DialogTitle>
				<DialogContent>
					<TextField
						label="Event Description"
						variant="outlined"
						fullWidth
						value={eventTitle}
						onChange={(e) => setEventTitle(e.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleEventDialogClose} color="primary">
						Cancel
					</Button>
					<Button onClick={handleAddEvent} color="primary">
						Add Event
					</Button>
				</DialogActions>
			</Dialog>
		</Box>
	);
};

export default Appointment;
