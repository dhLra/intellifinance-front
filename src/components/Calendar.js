import React from "react";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

const Calendar = () => {
    return (
        <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            weekends={false}
            events={[
                { title: 'Total Gasto 25$', date: '2022-08-01' },
                { title: 'Total Gasto 30$', date: '2022-08-02' }
            ]} 
            dateClick={handleDateClick}/>
    )
}

const handleDateClick = (arg) => { // bind with an arrow function
    alert(arg.dateStr)
  }

export default Calendar;