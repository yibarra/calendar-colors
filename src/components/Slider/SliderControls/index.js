import React from 'react';
import PropTypes from 'prop-types';

import SliderControlDate from './SliderControlDate';

import './slider-controls.scss';

/**
 * Slider Controls
 * 
 * @param {*} props 
 */
const SliderControls = (props) => {
  // get item
  const getItem = (type) => {
    let current;

    if (type === 'prev') {
      current = (props.current - 1) < 0 ? (props.length - 1) : (props.current - 1);
    } else if (type === 'next') {
      current = (props.current + 1) <= (props.length - 1) ? (props.current + 1) : 0;
    }

    return current;
  }

  // on next prev
  const onNextPrev = (type) => {
    const current = getItem(type);
    props.setCurrent(current);
  };

  // return
  return (
    <div className="slider--controls" data-type={props.type}>
      <div className="slider--controls--item" key={1}>
        <SliderControlDate {...props} type={'prev'} onNextPrev={onNextPrev} getItem={getItem} key={0} />
        <SliderControlDate {...props} type={'next'} onNextPrev={onNextPrev} getItem={getItem} key={1} />
      </div>
    </div>
  )
}

SliderControls.propTypes = {
  current: PropTypes.any,
  length: PropTypes.number,
  setCurrent: PropTypes.func.isRequired,
  type: PropTypes.number.isRequired,
}

export default SliderControls;
