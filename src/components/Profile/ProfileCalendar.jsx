import { useRef, useEffect } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import jwtDecode from 'jwt-decode';
import cookie from 'react-cookies'
export default function ProfileCalendar({ containerRef, appointmentsInfo }) {
    let token = cookie.load('auth')
    let payload = token ? jwtDecode(token) : ''

    let suitableDatesArr = appointmentsInfo?.map(element => ({ title: payload?.accountType === 'physician' ? element.patientUsername.toUpperCase() : "Dr." + element.physicianUsername.toUpperCase(), date: new Date(element.date).toISOString().slice(0, 10) }))
    console.log(payload, token)
    const calendarRef = useRef(null);
    console.log(suitableDatesArr)
    useEffect(() => {
        if (containerRef.current === null || calendarRef.current === null) {
            return;
        }
        const calendarApi = calendarRef.current.getApi();

        const resizeObserver = new ResizeObserver(() => calendarApi.updateSize());
        resizeObserver.observe(containerRef.current);

        return () => resizeObserver.disconnect();
    }, [calendarRef, containerRef]);

    return (
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            height="100%"
            headerToolbar={{
                left: "prev",
                center: "title",
                right: "next",
            }}
            events={suitableDatesArr}
            ref={calendarRef}
        />
    );
}
