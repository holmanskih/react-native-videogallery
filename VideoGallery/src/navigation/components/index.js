import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import { HOME_SCREEN, VIDEO_SCREEN } from '../screen_names';
import HomeScreen from '../../features/home';
import VideoScreen from '../../features/video_screen';

const AppNavigator = Actions.create(
	<Scene key='root'>
		<Scene key={HOME_SCREEN} component={HomeScreen} initial={true} />
		<Scene key={VIDEO_SCREEN} component={VideoScreen} />
	</Scene>
);

export default AppNavigator;

