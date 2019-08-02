import React from 'react';
import PropTypes from 'prop-types';

import dateFns from 'date-fns';

import CalendarEvents from '../CalendarEvents';

import './calendar-day.scss';

/**
 * Calendar Day
 * 
 * @param {*} props 
 */
const CalendarDay = props => {
  // formatted date
  const formattedDate = day => {
    return dateFns.format(day, "D");
  }

  // on element
  const onElement = () => {
    const day = parseInt(dateFns.format(props.day, 'D'));
    const now = parseInt(dateFns.format(new Date(), 'D'));
    const difference = dateFns.differenceInCalendarDays(props.day, new Date());

    if (day < now && difference < 0) {
      return "disabled-d";
    } else if (!dateFns.isSameMonth(props.day, props.monthStart)) {
      return "disabled";
    } else if (dateFns.isSameDay(props.day, props.selectedDate)) {
      return "selected";
    } else if (dateFns.differenceInCalendarDays(props.day, props.currentMonth) === 0) {
      return "active";
    }

    return "";
  };

  // on check top
  const checkTop = () => {
    const check = props.weekCount === 2;

    if (check && dateFns.isWeekend(props.day)) {
      if (props.index === 5 && (formattedDate(props.day) - 7) <= 0) {
        return true;
      }
    }

    return false;
  };

  // return
  return (
    <div
      className={`calendar--day ${onElement()}`}
      data-index={props.index}
      data-full={props.fullDay}
      data-today={dateFns.isToday(props.day)}
      data-weekend={dateFns.isWeekend(props.day)}
      data-line-top={checkTop()}>
      <button className="dummy"
        onClick={() => props.onDateClick(dateFns.parse(props.day), true)}
        disabled={Array.isArray(props.events) && props.events.length < 1}></button>

      <p className="day">
        <span className="number">{formattedDate(props.day)}</span>
      </p>

      <CalendarEvents events={props.events} />
    </div>
  )
};

CalendarDay.propTypes = {
  day: PropTypes.object,
  events: PropTypes.array,
  index: PropTypes.number,
  fullDay: PropTypes.object,
  weekCount: PropTypes.number,
}

export default CalendarDay;