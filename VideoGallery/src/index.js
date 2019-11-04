import React from 'react';
import { Provider, connect } from 'react-redux';
import { Router } from 'react-native-router-flux';
import appStore from './myStore';
import AppNavigator from './navigation/components';

const ReduxRouter = connect()(Router);

const App = () => {
  return (
    <Provider store={appStore}>
      <ReduxRouter scenes={AppNavigator} />
    </Provider >
  )
};

export default App;