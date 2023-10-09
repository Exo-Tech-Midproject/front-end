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


const Appointment = () => {
	const [currentEvents, setCurrentEvents] = useState([]);

	const handleDateClick = (selected) => {
		const title = prompt("Please enter event description");
		const calendarApi = selected.view.calendar;
		calendarApi.unselect();

		if (title) {
			calendarApi.addEvent({
				id: `${selected.dateStr}-${title}`,
				title,
				start: selected.startStr,
				end: selected.endStr,
				allDay: selected.allDay,
			});
		}
	};

	const handleEventClick = (selected) => {
		if (
			window.confirm(
				`Are you sure you want to delete the event '${selected.event.title}'`
			)
		) {
			selected.event.remove();
		}
	};

	const formatDate = (date) => {
		return new Intl.DateTimeFormat("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
		}).format(date);
	};

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
						style={{ borderBottom: '1px solid #000', textAlign: "center" }}
					> Events </Typography>
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
									secondary={
										<Typography> {formatDate(event.start)} </Typography>
									}
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
						eventsSet={(events) => setCurrentEvents(events)}
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
		</Box>
	);
};

export default Appointment;
