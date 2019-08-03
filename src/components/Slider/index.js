import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SliderControls from './SliderControls';

import './slider.scss';

// slider
const Slider = props => {
  // direction
  const [ direction, setDirection ] = useState('next');
  // current
  const [ current, setCurrent ] = useState(0);

  // callback
  const callback = current => {
    if (typeof props.callback === 'function') {
      props.callback(current);
    }
  };

  // set current direaction
  const setCurrentDirection = index => {
    if (Number.isInteger(index) === false) return false;

    setDirection(index > current ? 'next' : 'prev');
    setCurrent(index);
    callback(index);
  }

  // items childs
  const itemsChilds = React.Children.map(props.children, (child, index) => {
    return <li className="slider--item" data-active={current === index} key={index}>{child}</li>
  });

  // render
  return (
    <div className="slider" data-direction={direction} data-current={current}>
      <ul className="slider--container">
        {itemsChilds}
      </ul>

      <SliderControls
        current={current}
        items={props.items}
        type={props.type}
        setCurrent={setCurrentDirection}
        length={props.items.length} />
    </div>
  )
};

Slider.propTypes = {
  any: PropTypes.any,
  callback: PropTypes.func,
  type: PropTypes.number,
}

export default Slider;