import React from 'react';
import PropTypes from 'prop-types';

import dateFns from "date-fns";
import { useTranslation } from 'react-i18next';

import './calendar-days.scss';

/**
 * Calendar Days
 * 
 * @param {*} props 
 */
const CalendarDays = (props) => {
  // translate
  const { t } = useTranslation();

  // render days
  const renderDays = () => {
    const dateFormat = "dd";
    const days = [];

    const monthStart = dateFns.startOfMonth(props.currentMonth);
    const startDate = dateFns.startOfWeek(monthStart, { weekStartsOn: 1 });

    for (let i = 0; i < 7; i++) {
      const day = dateFns.format(dateFns.addDays(startDate, i), dateFormat);

      days.push(
        <div className={`day ${
          !dateFns.isSameMonth(day, monthStart)
            ? "disabled"
            : dateFns.isSameDay(day, props.selectedDate) ? "selected" : ""
        }`} key={i} onClick={() => props.onDateClick(day)}>
          {t(day)}
        </div>
      );
    }

    return <div className="calendar--days">{days}</div>;
  }

  // return
  return (
    <div className="calendar--header--days">
      {renderDays()}
    </div>
  );
}

CalendarDays.propTypes = {
  currentMonth: PropTypes.object,
  selectedDate: PropTypes.object,
  onDateClick: PropTypes.func,
}

export default CalendarDays;