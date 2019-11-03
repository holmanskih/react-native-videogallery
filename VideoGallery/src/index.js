import React from 'react';
import { Provider, connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import HomeScreen from './features/home';
import VideoScreen from './features/video_screen';
import { HOME_SCREEN, VIDEO_SCREEN, ROOT_TAB_BAR } from './navigation/screen_names';
import appStore from './myStore';
import TabIcon from './components/tab_icon';

const mapStateToProps = state => ({
  state: state.navigation,
});

const ReduxRouter = connect(mapStateToProps)(Router);

const App = () => {
  return (
    <Provider store={appStore}>
      <ReduxRouter>
        <Scene key='root' hideNavBar>
          <Scene
            key={ROOT_TAB_BAR}
            tabs={true}
          >
            <Scene
              key={HOME_SCREEN}
              component={HomeScreen}
              initial={true}
              icon={TabIcon}
            />
            <Scene
              key={VIDEO_SCREEN}
              component={VideoScreen}
            />
          </Scene>
        </Scene>
      </ReduxRouter>
    </Provider >
  )
};

export default App;