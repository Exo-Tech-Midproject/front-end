import { useRef, useEffect } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function ProfileCalendar({ containerRef }) {
    const calendarRef = useRef(null);

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
            events={[
                { title: 'event 1', date: '2023-10-01' },
                { title: 'event 2', date: '2023-10-02' }
            ]}
            ref={calendarRef}
        />
    );
}
