import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './theme.scss';

// Theme
const Theme = props => {
  // theme ref
  const themeRef = useRef(null);

  // update CSS Variables
  const updateCSSVariables = (element, propsCSS) => {
    if (propsCSS instanceof Object) {
      Object.entries(propsCSS).forEach(([prop, value]) => {
        element.current.style.setProperty(prop, value);
      });
    }
  };

  // use effect
  useEffect(() => {
    updateCSSVariables(themeRef, props.theme);
  }, [props.theme]);

  // render
  return (
    <div className="theme" ref={themeRef}>
      {props.children}
    </div>
  );
};

Theme.propTypes = {
  any: PropTypes.any,
}

export default Theme;