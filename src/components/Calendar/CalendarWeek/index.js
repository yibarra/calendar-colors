import React from 'react';
import PropTypes from 'prop-types';

import dateFns from "date-fns";

import CalendarControls from '../CalendarControls';
import CalendarDay from '../CalendarDay';

import './calendar-week.scss';

// CalendarWeek
const CalendarWeek = (props) => {
  // find date
  const findDate = date => {
    if (date) {
      const format = 'YYYY/MM/DD';
      const day = dateFns.format(date, format);
      const days = [];

      if (Array.isArray(props.events) && props.events.length > 0) {
        for (let item of props.events) {
          const dayEvent = dateFns.format(dateFns.parse(item.date), format);

          if (day === dayEvent) {
            days.push(item);
          }
        }

        return days;
      }
    }
  };

  // render week
  const renderWeek = () => {
    const monthStart = dateFns.startOfMonth(props.currentMonth, { weekStartsOn: 1 });
    const monthEnd = dateFns.endOfMonth(monthStart, { weekStartsOn: 1 });
    const startDate = dateFns.startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = dateFns.endOfWeek(monthEnd, { weekStartsOn: 1 });

    const rows = [];

    let days = [];
    let day = startDate;
    let weekCount = 0;

    while (day <= endDate || weekCount < 5) {
      weekCount = weekCount + 1;

      for (let i = 0; i < 7; i++) {
        const events = findDate(day);

        days.push(<CalendarDay
          fullDay={props.fullDay}
          onDateClick={props.onDateClick}
          day={day}
          key={i}
          index={i}
          events={events}
          monthStart={monthStart}
          currentMonth={props.currentMonth}
          selectedDate={props.selectedDate}
          weekCount={weekCount} />);

        day = dateFns.addDays(day, 1);
      }

      rows.push(<div className="calendar--week" key={day} data-index={weekCount}>{days}</div>);
      
      days = [];
    }

    return rows;
  };

  // render
  return (
    <div className="calendar--body">
      <CalendarControls
        currentMonth={props.currentMonth}
        onDateClick={props.onDateClick}
        setCurrentMonth={props.setCurrentMonth} />
      
      <div className="calendar--month">{renderWeek()}</div>
    </div>
  );
}

CalendarWeek.propTypes = {
  items: PropTypes.any,
  currentMonth: PropTypes.object,
  onDateClick: PropTypes.func.isRequired,
  setCurrentMonth: PropTypes.func.isRequired,
}

export default CalendarWeek;