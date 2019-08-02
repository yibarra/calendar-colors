import React, { createContext } from 'react';
import PropTypes from 'prop-types';

import firebase from 'firebase/app';
import 'firebase/firestore';
import { FirestoreProvider, FirestoreCollection } from '@react-firebase/firestore';
import { config } from '../../config';

/**
 * MainContext
 */
const MainContext = createContext({
  items: []
});

/**
 * Main Provider
 *
 * @class MainProvider
 * @extends {Component}
 */
const MainProvider = props => {
  // render
  return (
    <FirestoreProvider firebase={firebase} {...config}>
      <FirestoreCollection path="events/" orderByValue={"created_on"}>
        {({ value }) => {
          return <MainContext.Provider
            value={{
              items: value,
            }}>
            {props.children}
          </MainContext.Provider>;
        }}
      </FirestoreCollection>
    </FirestoreProvider>
  )
}

MainProvider.propTypes = {
  any: PropTypes.any,
}

export { MainProvider, MainContext };
export default MainProvider;