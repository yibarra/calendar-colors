import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import dateFns from "date-fns";
import { useTranslation } from 'react-i18next';

/**
 * Slider Control Date
 * 
 * @param {*} props 
 */
const SliderControlDate = props => {
  // translate
  const { t } = useTranslation();

  // check day
  const checkDay = type => {
    const item = props.items[props.getItem(type)];

    if (item instanceof Object) {
      return <Fragment>
          <span className="day">{dateFns.format(item.date, 'D')}</span>
          <span className="month">{t(dateFns.format(item.date, 'MMM'))}</span>
        </Fragment>;
    }
  };

  // return
  return (
    <div
      className={`control ${props.type}`}
      data-disable={props.type === 'prev' ? props.current === 0 : props.current === (props.length - 1)}>
      <div className="date">{checkDay(props.type)}</div>
      
      <button
        className={`btn ${props.type}`}
        onClick={() => props.onNextPrev(props.type)}>{t(props.type)}</button>
    </div>
  )
};

SliderControlDate.propTypes = {
  current: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  onNextPrev: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
}

export default SliderControlDate;