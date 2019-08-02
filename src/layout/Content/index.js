import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import ColorProvider from '../../providers/ColorProvider';
import { MainContext } from '../../providers/MainProvider';
import { ThemeContext } from '../../providers/ThemeProvider';

import Calendar from './../../components/Calendar';
import Footer from './../Footer';
import Header from './../Header';

import './content.scss';
import CalendarProvider from '../../providers/CalendarProvider';

// Content
const Content = () => {
  // type
  const [ typeView, setTypeView ] = useState(1);

  // main context
  const mainContext = useContext(MainContext);

  // theme context
  const themeContext = useContext(ThemeContext);

  // on bg color
  const onBgColor = color => {
    themeContext.setThemeColor(color);
  };

  //render
  return (
    <div className="content">
      <Header />
      
      <CalendarProvider>
        <ColorProvider>
          <Calendar
            items={mainContext.items}
            onBgColor={onBgColor} 
            setTypeView={setTypeView}
            typeView={typeView} />
        </ColorProvider>
      </CalendarProvider>

      <Footer />
    </div>
  )
};

Content.propTypes = {
  any: PropTypes.any,
}

export default Content;
