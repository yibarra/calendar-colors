import React from 'react';
import PropTypes from 'prop-types';

import dateFns from "date-fns";
import { useTranslation } from 'react-i18next';

import './calendar-header.scss';

/**
 * Calendar Header
 * 
 * @param {*} props 
 */
const CalendarHeader = props => {
  // translate
  const { t } = useTranslation();

  // on month name
  const onMonthName = (type) => {
    const month = type === 'next' ? dateFns.addMonths(props.currentMonth, 1) : dateFns.subMonths(props.currentMonth, 1);
    
    return t(dateFns.format(month, 'MMMM'));
  };

  // get today date
  const getTodayDate = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;

    const yyyy = today.getFullYear();

    if (dd < 10) { dd = '0' + dd }
    if (mm < 10) { mm = '0' + mm }

    today = yyyy + '-' + mm + '-' + dd;
    return today;
  };

  // get year ago
  const getYearAgo = () => {
    let lastYear = new Date(Date.now());
    let dd = lastYear.getDate();
    let mm = lastYear.getMonth() + 1;

    const yyyy = lastYear.getFullYear(getTodayDate) - 1;

    if (dd < 10) { dd = '0' + dd }
    if (mm < 10) { mm = '0' + mm }

    lastYear = yyyy;     
    return lastYear;
  };

  // view prev month
  const viewPrevMonth = () => {
    const monthPrev = parseInt(dateFns.format(new Date(), 'M'));
    const monthSelect = parseInt(dateFns.format(props.currentMonth, 'M'));
    const yearPrev = parseInt(getYearAgo());
    const yearSelect = parseInt(dateFns.format(props.currentMonth, 'YYYY'));
    const currentYear = parseInt(dateFns.format(new Date(), 'YYYY'));

    if (currentYear === yearSelect) {
      if (monthPrev < monthSelect) {
        return false;
      }

      return true;
    } else if (currentYear >= yearPrev) {
      return false;
    } 

    return true;
  };
 
  // render
  return (
    <div className="calendar--header">
      <div className="calendar--header--content">
        <button className="btn-line prev" onClick={() => 
          props.onPrevNext('prev')} data-remove={viewPrevMonth()}>{onMonthName('prev')}</button>

        <p className="calendar--header--info">
          <span className="month">{t(dateFns.format(props.currentMonth, 'MMMM'))}</span>
          <span className="year">{dateFns.format(props.currentMonth, 'YYYY')}</span>
        </p>

        <button className="btn-line next" onClick={() => 
          props.onPrevNext('next')}>{onMonthName('next')}</button>
      </div>
    </div>
  );
}

CalendarHeader.propTypes = {
  currentMonth: PropTypes.object,
  onPrevNext: PropTypes.func.isRequired,
}

export default CalendarHeader;