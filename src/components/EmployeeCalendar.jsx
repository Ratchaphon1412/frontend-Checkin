import React from 'react'
import PropType from 'prop-types'
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from 'moment';

function EmployeeCalendar({ markedDates }) {
  

  function tileClassName({ date }) {
    const dateString = date.toISOString().slice(0, 10);
   
  
    if (markedDates.includes(dateString)) {
      
      return "bg-sky-500 ";
    }
    // if (dateString === "2023-05-05") {
    //   return "bg-sky-500 ";
    // }
  }


    return (
      <div>
        <Calendar
          tileClassName={tileClassName}
          formatDay={(locale, date) => moment(date).format('D')}
          locale="th-TH"
          showNavigation={false}
          
        />
      </div>
    );
  }
  
EmployeeCalendar.propTypes = {
    markedDates: PropType.arrayOf(PropType.string).isRequired,
}

export default EmployeeCalendar;
  