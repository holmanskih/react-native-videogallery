import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import { HOME_SCREEN, VIDEO_SCREEN } from '../screen_names';
import HomeScreen from '../../features/home/components';
import VideoScreen from '../../features/video_screen';
import TabIcon from '../../components/tab_icon';

const AppNavigator = Actions.create(
	<Scene key='root' hideNavBar tabs={true}>
		<Scene
			key={HOME_SCREEN}
			component={HomeScreen}
			initial={true}
			icon={TabIcon}
			iconName='name'
			title='title'
		/>
		<Scene
			key={VIDEO_SCREEN}
			wrap={false}
			component={VideoScreen}
		/>
	</Scene >
);

export default AppNavigator;

