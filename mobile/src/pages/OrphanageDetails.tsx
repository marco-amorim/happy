import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const OrphanageDetails = () => {
	const navigation = useNavigation();

	function handleNavigateBack() {
		navigation.navigate('OrphanagesMap');
	}

	return (
		<View style={styles.container}>
			<Text>OrphanageDetails</Text>
			<TouchableOpacity onPress={handleNavigateBack}>
				<Text>Click me!</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default OrphanageDetails;
