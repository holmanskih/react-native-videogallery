import React from 'react';
import { View, Text } from 'react-native';
import { tabIconStyles } from './styles';

const TabIcon = title => {
	return (
		<View style={tabIconStyles.layout}>
			<Text style={tabIconStyles.baseText}>{title}</Text>
		</View>
	);
}

export default TabIcon;