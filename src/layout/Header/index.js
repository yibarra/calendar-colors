import React from 'react';
import PropTypes from 'prop-types';

import LangSelect from '../../components/LangSelect';
import ViewType from '../../components/ViewType';

import './header.scss';

/**
 * Header
 */
const Header = props => {
  // render
  return (
    <header className="header">
      <ViewType {...props} />

      <LangSelect />
    </header>
  );
};

Header.propTypes = {
  any: PropTypes.any,
}

export default Header;