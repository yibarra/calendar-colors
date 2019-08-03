import React from 'react';
import PropTypes from 'prop-types';

import dateFns from "date-fns";

import EventInfo from '../EventInfo';

import './event-item.scss';

/**
 * Event List Item
 * 
 * @param {*} props 
 */
const EvenItem = props => {
  // forma title
  const formatTitle = (date) => {
    return dateFns.format(date, 'D - MMMM');
  };

  // format hour
  const formatHour = (date) => {
    return dateFns.format(date, 'HH:mm');
  };

  // return
  return (
    <div className="event--item">
      <div className="event--item--image">
        <img className="img" alt={props.item.name} src={props.item.image} />
      </div>

      <EventInfo item={props.item} formatHour={formatHour} formatTitle={formatTitle} />
    </div>
  )
}

EvenItem.propTypes = {
  item: PropTypes.object,
}

export default EvenItem;