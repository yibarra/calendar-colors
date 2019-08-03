import React from 'react';
import PropTypes from 'prop-types';

import './event-attributes.scss';

/**
 * Event list attributes
 * 
 * @param {*} props 
 */
const EventAttributes = props => {
  // return
  return (
    <ul className="attributes">
      <li className="attributes--item">
        <span className="label">Hora</span>
        <span className="value">{props.formatHour(props.item.date)}</span>
      </li>

      {Array.isArray(props.item.attributes) && props.item.attributes.map((item, index) =>
        <li className="attributes--item" key={index}>
          <span className="label">{item.label}</span>
          <span className="value">{item.value}</span>
        </li>)}
    </ul>
  )
};

EventAttributes.propTypes = {
  items: PropTypes.object,
  formatHour: PropTypes.func.isRequired,
}

export default EventAttributes;