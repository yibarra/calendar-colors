import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import CalendarProvider from '../../providers/CalendarProvider';
import ColorProvider from '../../providers/ColorProvider';
import { MainContext } from '../../providers/MainProvider';
import { ThemeContext } from '../../providers/ThemeProvider';

import Calendar from './../../components/Calendar';
import Events from './../../components/Events';
import Footer from './../Footer';
import Header from './../Header';

import './content.scss';

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

  // first mobile
  const checkView = () => {
    if (window.innerWidth <= 640) {
      setTypeView(2);
    }
  };

  // user
  useEffect(() => {
    checkView();
  }, [typeView]);

  //render
  return (
    <CalendarProvider>
      <ColorProvider>
        <div className="content">
          <Header typeView={typeView} onTypeView={setTypeView} />
          
          {typeView === 2 &&
            <Events
              items={mainContext.items} />}

          {typeView === 1 &&
            <Calendar
              items={mainContext.items}
              onBgColor={onBgColor} 
              setTypeView={setTypeView}
              typeView={typeView} />}
          <Footer />
        </div>
      </ColorProvider>
    </CalendarProvider>
  )
};

Content.propTypes = {
  any: PropTypes.any,
}

export default Content;
