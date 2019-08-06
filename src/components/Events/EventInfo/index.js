import React from 'react';
import PropTypes from 'prop-types';

import EventAttributes from '../EventAttributes';

import './event-info.scss';

/**
 * Event List Info
 * 
 * @param {*} props 
 */
const EvenInfo = props => {
  // return
  return (
    <div className="event--item--info">
      {props.item.country && <p className="country">
        <i className="material-icons">location_on</i>
        <span className="text">{props.item.country}</span>
      </p>}

      <p className="title">
        <span className="date">{props.formatTitle(props.item.date)}</span>
        <span className="name">{props.item.name}</span>
        <span className="address">{props.item.address}</span>
      </p>

      <EventAttributes formatHour={props.formatHour} item={props.item} />

      <p className="description">{props.item.description}</p>
    </div>
  )
}

EvenInfo.propTypes = {
  item: PropTypes.object,
  formatHour: PropTypes.func.isRequired,
  formatTitle: PropTypes.func.isRequired,
}

export default EvenInfo;