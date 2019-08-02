import React from 'react';
import PropTypes from 'prop-types';

import dateFns from "date-fns";

import CalendarEventInfo from './CalendarEventInfo';

import './calendar-events.scss';

/**
 * Calendar Events
 * 
 * @param {*} props 
 */
const CalendarEvents = props => {
  // format date
  const formatDate = (date) => {
    const format = 'HH:mm.a';

    return dateFns.format(date, format);
  };

  // return
  return (
    <div className="calendar--event">
      {Array.isArray(props.events) && <ul className="events">
          {props.events.map((event, index) =>
            <CalendarEventInfo key={index} {...event} date={formatDate(event.date)} empty={false} />
          )}

          {!props.events.length && <CalendarEventInfo empty={true} />}
        </ul>}

      {Array.isArray(props.events) && props.events.length > 1 &&   
        <span className="more">
          <i className="material-icons">more_horiz</i>
        </span>}
    </div>
  );
};

CalendarEvents.propTypes = {
  events: PropTypes.array,
}

export default CalendarEvents;