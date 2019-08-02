import React from 'react';
import PropTypes from 'prop-types';

import './calendar-event-info.scss';

/**
 * Calendar Event Info
 * 
 * @param {*} props 
 */
const CalendarEventInfo = props => {
  // return
  return (
    <li className="events--item" date-empty={props.empty.toString()} key={props.index}>
      <p className="event">
        <span className="name">{props.name}</span>
        <span className="address">{props.address}</span>
        <span className="description">{props.description}</span>
        <span className="hour">{props.date}</span>
        
        {props.site &&
          <a className="site" href={props.site} target="_blank" rel="noopener noreferrer">{props.site}</a>}
      </p>
    </li>
  )
}

CalendarEventInfo.propTypes = {
  address: PropTypes.string,
  date: PropTypes.string,
  name: PropTypes.string,
  index: PropTypes.number,
  empty: PropTypes.bool.isRequired,
  site: PropTypes.string,
}

export default CalendarEventInfo;