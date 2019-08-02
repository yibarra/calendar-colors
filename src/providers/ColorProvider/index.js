import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

import newColor from './Helper';

/**
 * Theme Context
 */
const ColorContext = createContext({
  color: '',
  setNewColor: () => {},
});

/**
 * Color Provider
 * 
 * @param {*} props 
 */
const ColorProvider = (props) => {
  // color
  const [ color, setColor ] = useState(newColor());
  
  // Set New Color
  const setNewColor = () => {
    setColor(newColor());

    return color;
  }

  // return
  return (
    <ColorContext.Provider value={
      { color: color, setNewColor: setNewColor }
    }>
      {props.children}
    </ColorContext.Provider>
  );
}

ColorProvider.propTypes = {
  any: PropTypes.any,
}

export { ColorContext, ColorProvider };
export default ColorProvider;