import React from 'react';
import PropTypes from 'prop-types';

import './footer.scss';

//Footer
const Footer = () => {
  // render
  return (
    <footer className="footer">
      <div className="footer--info">
        <p className="copy">
          <i className="material-icons">copyright</i>

          <a className="to" href="tomail()">
            <span className="mail">yeissonibarra@gmail.com</span>
          </a>
        </p>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  any: PropTypes.any,
}

export default Footer;