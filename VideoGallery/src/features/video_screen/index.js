import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Video from 'react-native-video';

class VideoScreen extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {username, videoUrl} = this.props;
		return (
			<View style={styles.layout}>
				<Text>Video Screen {username}</Text>
				<Text>{videoUrl}</Text>
				{videoUrl && username ? (
					<Video source={{ uri: videoUrl }}
						ref={(ref) => {
							this.player = ref
						}}
						onBuffer={this.onBuffer}
						onError={this.videoError}
						fullscreen={true}
						resizeMode="contain"
						controls={true}

						style={styles.backgroundVideo}
					/>
				) : (
						<Text>Choose video to play</Text>
					)}
			</View>
		)
	}
};

export default VideoScreen;

var styles = StyleSheet.create({
	layout: {
		backgroundColor: 'black',
		flex: 1,
		justifyContent: "center"
	},

	backgroundVideo: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
});