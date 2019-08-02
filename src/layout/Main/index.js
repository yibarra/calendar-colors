import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import Content from '../Content';
import Theme from '../../components/Theme';

import MainProvider from '../../providers/MainProvider';
import { ThemeProvider, ThemeContext } from '../../providers/ThemeProvider';

import './../../styles/main.scss';

/**
 * Main
 */
const Main = props => {
  /**
   * render
   */
  return (
    <Suspense fallback="loading...">
      <MainProvider>
        <ThemeProvider {...props}>
          <ThemeContext.Consumer>
            {(context) =>
              <Theme {...context}>
                <Content {...props} />
              </Theme>
            }
          </ThemeContext.Consumer>
        </ThemeProvider>
      </MainProvider>
    </Suspense>
  )
};

Main.propTypes = {
  any: PropTypes.any,
}

export default Main;
