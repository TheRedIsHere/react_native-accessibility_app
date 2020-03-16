import React from 'react';
import {Text, View, Button} from "react-native";

const HomeScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
			<Button
				title="Go to Details"
				onPress={() => navigation.navigate('MealDetailScreen')}
			/>
		</View>
	);
};

export default HomeScreen;