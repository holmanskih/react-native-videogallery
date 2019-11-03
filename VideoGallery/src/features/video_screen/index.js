import React from 'react';
import { View, Text } from 'react-native';
import { VIDEO_SCREEN } from '../../navigation/screen_names';
import { HEADER_TINT_COLOR, HEADER_BACKGROUND_COLOR } from '../../styles';

class VideoScreen extends React.Component {
	static navigationOptions = {
		title: VIDEO_SCREEN,
		headerTintColor: HEADER_TINT_COLOR,
		headerStyle: {
			backgroundColor: HEADER_BACKGROUND_COLOR,
		},
	};

	constructor(props) {
		super(props);

	}

	fetchApiData = () => {

	}

	render() {
		return (
			<View>
				<Text>Video Screen</Text>
			</View>
		)
	}
};

export default VideoScreen;