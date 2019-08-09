import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './select.css';

/**
 * Select
 * 
 * @class Select
 * @extends {Component}
 */
class Select extends Component {
  /**
   * constructor
   * @param {*} props 
   */
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      open: false,
      value: '',
    };
  }

  /**
   * component did mount
   *
   * @memberof Select
   */
  componentDidMount() {
    this.element = ReactDOM.findDOMNode(this);
    
    this.handlerClickOut();

    if (this.props.value) {
      this.setState({
        value: this.props.value,
      });
    }
  }

  /**
   * component did update
   *
   * @param {*} props
   * @memberof Select
   */
  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({
        value: this.props.value,
      });
    }
  }

  /**
   * change value text
   *
   * @param {*} select
   * @memberof Select
   */
  changeValue(select) {
    this.setState({
      text: select.selectedOptions[0].text,
      value: select.value,
    });
  }

  /**
   * close all selects
   * 
   * @memberof Select
   */
  closeAllSelects() {
    const selects = document.querySelectorAll('.select--component');

    selects.forEach((select) => {
      select.classList.remove('active');
    });
  }

  /**
   * find option index
   * 
   * @param {any} nodeList 
   * @param {any} value 
   * @returns 
   * @memberof Toogle
   */
  findOption(nodeList, value) {
    if (nodeList instanceof Object) {
      let index = null;

      nodeList.forEach((item, key) => {
        if (item.value === value) {
          index = key;
        }
      });

      return index;
    }

    return false;
  }

  /**
   * select option
   * 
   * @param {any} event 
   * @memberof Toogle
   */
  selectOption(event) {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();

    const value = event.currentTarget.getAttribute('data-option');

    if (value) {
      const select = ReactDOM.findDOMNode(this.element.querySelector('select'));

      if (select instanceof Object) {
        const option = this.findOption(select.childNodes, value);
        const virtualChangeEvent = new Event('change', { bubbles: true });

        select.children[option].selected = 'selected';
        select.dispatchEvent(virtualChangeEvent);

        this.changeValue(select);
        this.openOption();
      }
    }
  }

  /**
   * open options
   * 
   * @memberof Toogle
   */
  openOption() {
    this.setState({
      open: !this.state.open,
    });

    if (this.state.open === false) {
      this.closeAllSelects();
      this.handlerClickOutRemove();
    } else if (this.state.open === true) {
      this.handlerClickOut();
    }
  }

  /**
   * handler click out
   *
   * @memberof Select
   */
  handlerClickOut() {
    document.body.addEventListener('click', (event) => {
      const position = this.element.getBoundingClientRect();
      const heightOptions = ReactDOM.findDOMNode(this.element.querySelector('.select--content'));

      if (heightOptions instanceof Object) {
        const heightSelect = heightOptions.getBoundingClientRect().height + 50;

        if (event.clientX < position.left || event.clientX > (position.left + position.width) ||
          event.clientY < position.top || event.clientY > (position.top + heightSelect)) {
          this.setState({
            open: false,
          });

          this.handlerClickOutRemove();
        }
      }
    });
  }

  /**
   * remove handler
   *
   * @memberof Select
   */
  handlerClickOutRemove() {
    document.body.removeEventListener('click', () => {}, false);
  }

  /**
   * render
   * 
   * @return JSX
   */
  render() {
    return (
      <div className={`select--component ${this.state.open === true ? `active` : ``}`}>
        <p className="select--selected" onClick={() => this.openOption()}>
          <span className="text label-x" data-active={this.state.text !== '' ? true : false}>
            {this.props.required === true && this.state.text === '' && <span>*</span>}
            {this.props.text}
          </span>
          <span className="text">{this.state.text}</span>
          <span className="icon icon-arrow-left"></span>
        </p>
        
        <ul className="select--content">
          {this.props.values.map((option, index) => {
            return <li className="select--item" key={index} data-disabled={this.state.value === option.value ? 'false' : 'true'}>
              <p className="text" onClick={(event) => this.selectOption(event)} data-option={option.value}>{option.display_name}</p>
            </li>;
          })}
        </ul>

        <select name={this.props.name} onChange={this.props.onToggle} required={this.props.required}>
          <option value=''>- select -</option>
          {this.props.values.map((option, index) => 
            <option key={index} value={option.value}>{option.display_name}</option>)}
        </select>
      </div>
    );
  }
}

Select.propTypes = {
  required: PropTypes.bool.isRequired,
  onToggle: PropTypes.func,
  values: PropTypes.any.isRequired,
  value: PropTypes.string,
  text: PropTypes.string,
};

export default Select;