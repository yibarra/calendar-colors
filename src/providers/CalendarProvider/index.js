import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

import dateFns from "date-fns";

// Calendar Context
const CalendarContext = createContext({ 
  selectedDate: new Date(Date.now()),
  currentDateItems: () => {},
  selectedDateFresh: () => {},
  currentDate: null,
  setCurrentDate: () => {},
});

// Calendar Provider
const CalendarProvider = (props) => {
  // date
  const [ selectedDate, setSelectedDate ] = useState(new Date(Date.now()));

  // current date
  const [ currentDate, setCurrentDate ] = useState(new Date(Date.now()));

  // current item
  const [ currentDateItems, setCurrentDateItems ] = useState([]);

  // filter items
  const filterItems = items => {
    const filter = [];
    const today = new Date();

    if (Array.isArray(items)) {
      items.map(item => {
        if (dateFns.compareAsc(item.date, today) === 1) {
          filter.push(item);
        }

        return true;
      });

      return filter;
    }

    return false;
  }

  // selecte date fresh
  const selectedDateFresh = (date, items) => {
    setSelectedDate(date);

    const item = filterItems(items);
    setCurrentDateItems(item);
  };

  // return
  return (
    <CalendarContext.Provider value={
        {
          selectedDate,
          currentDateItems,
          selectedDateFresh,
          currentDate,
          setCurrentDate,
        }
      }>
      {props.children}
    </CalendarContext.Provider>
  )
}

CalendarProvider.propTypes = {
  any: PropTypes.any,
}

export { CalendarContext, CalendarProvider };
export default CalendarProvider;