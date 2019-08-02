import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Theme Context
const ThemeContext = createContext({
  theme: null,
  themes: {},
});

// Theme Provider
const ThemeProvider = props => {
  // theme
  const [ theme, setTheme ] = useState({
    '--background-color': '#91E1CB',
    '--text-color': '#91E1CB',
  });

  // set theme color
  const setThemeColor = color => {
    if (color) {
      const theme = {
        '--background-color': color,
        '--text-color': color,
      };

      setTheme(theme);
    }
  }

  // render
  return (
    <ThemeContext.Provider value={
      { theme, setThemeColor }
    }>
      {props.children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  any: PropTypes.any,
}

export { ThemeContext, ThemeProvider };
export default ThemeProvider;