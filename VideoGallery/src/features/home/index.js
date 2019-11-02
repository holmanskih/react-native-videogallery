import React from 'react';
import {View, Text} from 'react-native';
import { HOME_SCREEN } from '../../navigation/screen_names';

class HomeScreen extends React.Component {
	static navigationOptions = {
		title: HOME_SCREEN
	};

	constructor(props) {
		super(props);

		this.state = {
			shortVideoListApiData: '',
		};
	}

	fetchApiData = () => {

	}

	render() {
		return (
			<View>
				<Text>Home Screen</Text>
			</View>
		)
	}
};

export default HomeScreen;