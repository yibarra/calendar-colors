import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import dateFns from "date-fns";

import { CalendarContext } from './../../providers/CalendarProvider';
import { ColorContext } from '../../providers/ColorProvider';

import CalendarDays from './CalendarDays';
import CalendarHeader from './CalendarHeader';
import CalendarWeek from './CalendarWeek';

import './calendar.scss';

// Calendar
const Calendar = props => {
  // calendar context
  const calendarContext = useContext(CalendarContext);
  // color context
  const colorContext = useContext(ColorContext);

  // on date click
  const onDateClick = day => {
    calendarContext.selectedDateFresh(day, CalendarContext.items);
  };

  // on prev next
  const onPrevNext = type => {
    props.onBgColor(colorContext.setNewColor());

    if (type === 'next') {
      calendarContext.setCurrentDate(dateFns.addMonths(calendarContext.currentDate, 1));
    } else {
      calendarContext.setCurrentDate(dateFns.subMonths(calendarContext.currentDate, 1));
    }
  };

  // return
  return (
    <div className="calendar">
      <CalendarHeader
        dateFormat={'MMMM YYYY'}
        currentMonth={calendarContext.currentDate}
        onPrevNext={onPrevNext} />

      <CalendarDays
        currentMonth={calendarContext.currentDate} />

      <CalendarWeek
        currentMonth={calendarContext.currentDate}
        events={props.items}
        items={calendarContext.items}
        onDateClick={onDateClick}
        selectedDate={calendarContext.selectedDate}
        setCurrentMonth={calendarContext.setCurrentDate}
        setSelectedDate={calendarContext.setSelectedDate} />
    </div>
  );
};

Calendar.propTypes = {
  items: PropTypes.any,
  typeView: PropTypes.number,
  setTypeView: PropTypes.func,
}

export default Calendar;
