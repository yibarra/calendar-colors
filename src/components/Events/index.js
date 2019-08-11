import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import dateFns from "date-fns";

import { CalendarContext } from '../../providers/CalendarProvider';
import { ColorContext } from '../../providers/ColorProvider';

import EventItem from './EventItem';
import Slider from '../Slider';

import './events.scss';

/**
 * Event List
 * 
 * @param {*} props 
 */
const Events = (props) => {
  // calendar context
  const calendarContext = useContext(CalendarContext);
  // color context
  const colorContext = useContext(ColorContext);

  // current
  const [ current, setCurrent ] = useState(0);

  // callback set current
  const callback = current => {
    if (Number.isInteger(current) === false) return false;

    const item = props.items[current];
    
    if (item instanceof Object) {
      const difference = Math.abs(dateFns.differenceInCalendarMonths(
        dateFns.parse(item.date), calendarContext.currentDate));

      if (difference > 0) {
        props.onBgColor(colorContext.setNewColor());
        setCurrent(current);

        calendarContext.setCurrentDate(dateFns.parse(item.date));
        calendarContext.selectedDateFresh(dateFns.parse(item.date), calendarContext);
      }
    }
  };

  // return
  return (
    <div className="event">
      <div className="wrapper">
        <div className="event--content">
          {Array.isArray(props.items) &&
            <Slider current={current} callback={callback} type={1} items={props.items}>
                {props.items.map((item, index) =>
                  <EventItem item={item} key={index} />
                )}
          </Slider>}
        </div>
      </div>
    </div>
  )
};

Events.propTypes = {
  any: PropTypes.any,
}

export default Events;