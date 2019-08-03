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
  // now
  const now = dateFns.parse(new Date());

  // translate
  const { t } = useTranslation();

  // disabled today
  const disableButton = () => {
    return (now.getMonth() + 1) === parseInt(dateFns.format(props.currentMonth, 'MM'));
  }

  // on today
  const onToday = () => {
    props.setCurrentMonth(now);
    props.onDateClick(now);
  };
  
  // return
  return (
    <div className="calendar--controls">
      <div className="calendar--controls--content">
        <button
          className="btn prev"
          onClick={() => onToday()}
          data-disabled={disableButton()}>{t('today')}</button>
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