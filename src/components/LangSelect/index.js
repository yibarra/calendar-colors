import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Translation } from 'react-i18next';

import './lang-select.scss';

/**
 * Lang Select
 *
 * @class LangSelect
 * @extends {Component}
 */
class LangSelect extends Component {
  /**
   * get languages
   *
   * @param {*} i18n
   * @returns
   * @memberof LangSelect
   */
  getLanguages(i18n) {
    if (i18n instanceof Object === false || !i18n) return false;

    if (Array.isArray(i18n.languages)) {
      const orderLanguages = i18n.languages.sort();

      return orderLanguages.map((item, index) =>
        <li className="lang-select--item" key={index}>
          <button className="lang" data-active={i18n.language === item} onClick={() => i18n.changeLanguage(item)}>{item}</button>
        </li>);
    }

    return false;
  }

  /**
   * render
   *
   * @returns
   * @memberof LangSelect
   */
  render() {
    return (
      <div className="lang-select">
        <span className="lang-select--icon">
          <i className="material-icons">language</i>
        </span>

        <Translation>
          { (t, { i18n }) => <ul className="lang-select--list">{this.getLanguages(i18n)}</ul> }
        </Translation>
      </div>
    )
  }
}

LangSelect.propTypes = {
  any: PropTypes.any,
}

export default LangSelect;