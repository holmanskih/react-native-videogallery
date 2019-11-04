import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { VIDEO_SCREEN } from '../../navigation/screen_names';
import { HEADER_TINT_COLOR, HEADER_BACKGROUND_COLOR } from '../../styles';
import Video from 'react-native-video';

class VideoScreen extends React.Component {
	static navigationOptions = {
		title: VIDEO_SCREEN,
	};

	constructor(props) {
		super(props);

	}

	fetchApiData = () => {

	}

	render() {
		const { username, videoUrl } = this.props;
		console.log('video screen props', username);

		return (
			<View style={styles.layout}>
				<Text>Video Screen {username}</Text>
				<Text>{videoUrl}</Text>
				<Video source={{ uri: videoUrl }}   // Can be a URL or a local file.
					ref={(ref) => {
						this.player = ref
					}}                                      // Store reference
					onBuffer={this.onBuffer}                // Callback when remote video is buffering
					onError={this.videoError}               // Callback when video cannot be loaded
					fullscreen={true}
					resizeMode="contain"
					controls={true}

					style={styles.backgroundVideo}
				/>
			</View>
		)
	}
};

export default VideoScreen;

var styles = StyleSheet.create({
	layout: {
		backgroundColor: 'black',
		// width: '100%',
		// height: '100%',
		flex: 1,
		justifyContent: "center"
	},

	backgroundVideo: {
		// backgroundColor: 'red',
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		// width: '100%',
		// height: '100%',
	},
});