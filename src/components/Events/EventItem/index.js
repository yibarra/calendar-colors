import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import dateFns from "date-fns";
import { useTranslation } from 'react-i18next';

import EventInfo from '../EventInfo';

import './event-item.scss';

/**
 * Event List Item
 * 
 * @param {*} props 
 */
const EvenItem = props => {
  // translate
  const { t } = useTranslation();

  // forma title
  const formatTitle = date => {
    const day = dateFns.format(date, 'D');
    const month = dateFns.format(date, 'MMM');

    return <Fragment>
      <span className="day">{day}</span>
      <span className="month">{t(month)}</span>
    </Fragment>;
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