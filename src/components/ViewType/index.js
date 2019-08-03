import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { CalendarContext } from '../../providers/CalendarProvider';

import './view-type.scss';

/**
 * Events Header
 * 
 * @param {*} props 
 */
const ViewType = props => {
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
            <i className="material-icons">date_range</i>
        </button>

        <button
          className="btn"
          data-active={props.typeView === 2}
          onClick={() => props.onTypeView(2)} 
          disabled={Array.isArray(calendarContext.items) && !calendarContext.items.length}>
            <i className="material-icons">event</i>
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