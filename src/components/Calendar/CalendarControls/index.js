import React from 'react';
import PropTypes from 'prop-types';

import dateFns from 'date-fns';
import { useTranslation } from 'react-i18next';

import './calendar-controls.scss';

/**
 * Calendar Controls
 * 
 * @param {*} props 
 */
const CalendarControls = props => {
  // translate
  const { t } = useTranslation();

  // on today
  const onToday = () => {
    props.setCurrentMonth(dateFns.parse(new Date(Date.now())));
    props.onDateClick(dateFns.parse(new Date(Date.now())));
  };
  
  // return
  return (
    <div className="calendar--controls">
      <div className="calendar--controls--content">
        <button className="btn prev" onClick={() => onToday()}>{t('today')}</button>
      </div>
    </div>
  )
}

CalendarControls.propTypes = {
  currentMonth: PropTypes.object,
  onDateClick: PropTypes.func.isRequired,
  setCurrentMonth: PropTypes.func.isRequired,
}

export default CalendarControls;