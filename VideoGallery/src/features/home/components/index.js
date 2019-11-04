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
		headerTintColor: HEADER_TINT_COLOR,
		headerStyle: {
			backgroundColor: HEADER_BACKGROUND_COLOR,
		},
	};

	constructor(props) {
		super(props);

		this.state = {
			shortVideoListApiData: [],
		};
	};

	componentDidMount = () => {
		this.fetchApiData();
	};

	fetchApiData = async () => {
		const response = await Axios.get(API_URL, {
			headers: { "Authorization": PRIVATE_ACCESS_KEY }
		});

		this.setState({ shortVideoListApiData: response.data.videos });
	};

	render() {
		return (
			<View>
				<FlatList
					numColumns={1}
					data={this.state.shortVideoListApiData}
					keyExtractor={(item, index) => index}
					renderItem={({ item }) => (
						<TouchableOpacity
							activeOpacity={0.5}
							style={homeScreenStyles.touchableVideoWrapper}
							onPress={() => {
								Actions.VideoScreen({videoData: 'videoData'});
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
											{item.duration} min
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