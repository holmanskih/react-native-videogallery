import React from 'react';
import Axios from 'axios';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { HOME_SCREEN } from '../../../navigation/screen_names';
import { HEADER_TINT_COLOR, HEADER_BACKGROUND_COLOR } from '../../../styles';
import { PRIVATE_ACCESS_KEY, API_URL } from '../../../api/constants';
import FastImage from 'react-native-fast-image';
import homeScreenStyles from './styles';
import { Actions } from 'react-native-router-flux';

class HomeScreen extends React.Component {
	static navigationOptions = {
		title: HOME_SCREEN,
	};

	constructor(props) {
		super(props);

		this.state = {
			videoListApiData: [],
		};
	};

	componentDidMount = () => {
		this.fetchApiData();
	};

	fetchApiData = async () => {
		const response = await Axios.get(API_URL, {
			headers: { "Authorization": PRIVATE_ACCESS_KEY }
		});

		this.setState({ videoListApiData: response.data.videos });
		console.log(this.state.videoListApiData[0])
	};

	render() {
		return (
			<View style={{backgroundColor: '#fff'}}>
				<FlatList
					numColumns={1}
					data={this.state.videoListApiData}
					keyExtractor={(item, index) => index}
					renderItem={({ item }) => (
						<TouchableOpacity
							activeOpacity={0.5}
							style={homeScreenStyles.touchableVideoWrapper}
							onPress={() => {
								Actions.VideoScreen({
									username: item.user.name,
									videoUrl: item.video_files[3].link
								});
							}}
						>
							<View style={{ marginBottom: 20 }}>
								<View>
									<FastImage
										source={{
											uri: item.image,
										}}
										style={homeScreenStyles.imageStyle}
									/>
								</View>
								<View style={homeScreenStyles.descriptionWrapper}>
									<View style={{ width: '80%' }}>
										<Text style={homeScreenStyles.videoDescription}>
											Added by {item.user.name}
										</Text>
									</View>
									<View style={{ width: '20%' }}>
										<Text style={[
											homeScreenStyles.videoDescription,
											homeScreenStyles.durationDescription
										]}>
											{item.duration} sec
											</Text>
									</View>
								</View>
							</View>
						</TouchableOpacity>
					)}
				/>
			</View>
		)
	}
};

export default HomeScreen;