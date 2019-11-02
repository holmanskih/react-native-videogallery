import React from 'react';
import { Provider, connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import HomeScreen from './features/home';
import VideoScreen from './features/video_screen';
import { HOME_SCREEN, VIDEO_SCREEN } from './navigation/screen_names';
import appStore from './myStore';

const mapStateToProps = state => ({
  state: state.navigation,
})
const ReduxRouter = connect(mapStateToProps)(Router);

const App = () => {
  return (
    <Provider store={appStore}>
      <ReduxRouter>
        <Scene key='root'>
          <Scene key={HOME_SCREEN} component={HomeScreen} initial={true} />
          <Scene key={VIDEO_SCREEN} component={VideoScreen} />
        </Scene>
      </ReduxRouter>
    </Provider>
  )
};

export default App;
