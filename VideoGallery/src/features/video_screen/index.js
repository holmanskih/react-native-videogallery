import React from 'react';
import { View, Text } from 'react-native';
import { VIDEO_SCREEN } from '../../navigation/screen_names';

class VideoScreen extends React.Component {
	static navigationOptions = {
		title: VIDEO_SCREEN
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