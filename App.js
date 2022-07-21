import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Profile from './src/components/profile/Profile';

const App = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Icon style={{ fontSize: 16, color: '#000', fontWeight: '400' }} name="left" size={20} />
				<Text style={{ fontSize: 16, color: '#000', fontWeight: '400' }}>SIGN IN</Text>
			</View>
			<StatusBar backgroundColor="#fff" barStyle="dark-content" hidden={false}></StatusBar>
			<Profile />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		margin: 16
	},
	header: {
		position: 'absolute',
		top: 0,
		left: 0,
		display: 'flex',
		flexDirection: 'row'
	}
});

export default App;
