import React from 'react';
import PropTypes from 'prop-types';

import LangSelect from '../../components/LangSelect';

import './header.scss';

/**
 * Header
 */
const Header = () => {
  // render
  return (
    <header className="header">
      <LangSelect />
    </header>
  );
};

Header.propTypes = {
  any: PropTypes.any,
}

export default Header;