import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { useTranslation } from 'react-i18next';

import { CalendarContext } from '../../providers/CalendarProvider';

import './view-type.scss';

/**
 * Events Header
 * 
 * @param {*} props 
 */
const ViewType = props => {
  // translate
  const { t } = useTranslation();
  // calendar context
  const calendarContext = useContext(CalendarContext);

  // return
  return (
    <div className="view-type">
      <div className="wrapper">
        <button
          className="btn"
          data-active={props.typeView === 1}
          onClick={() => props.onTypeView(1)}>
            <span>{t('calendar')}</span>
        </button>

        <button
          className="btn"
          data-active={props.typeView === 2}
          onClick={() => props.onTypeView(2)} 
          disabled={Array.isArray(calendarContext.items) && !calendarContext.items.length}>
            <span>{t('list')}</span>
        </button>
      </div>
    </div>
  )
};

ViewType.propTypes = {
  typeView: PropTypes.number,
  onTypeView: PropTypes.func.isRequired,
}

export default ViewType;