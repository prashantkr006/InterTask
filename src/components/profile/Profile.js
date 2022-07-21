import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Platform } from 'react-native';

const Profile = () => {
	const [data, setData] = useState({ name: '', email: '', dob: '', country: '', phone: '' });

	const handleChange = (name, value) => {
		setData({ ...data, [name]: value });
	};

	const showData = () => {
		if (data.phone.length < 10 || data.phone.length > 10 || data.name == '' || data.country == '' || data.dob == '' || data.email == '')
			alert('some data is invalid or missing!!!');
		else
			alert(`
		____Profile Details____\n
      Email : ${data.email}
      Name : ${data.name}
      dob : ${data.dob}
      country : ${data.country}
      Phone No : ${data.phone}
    `);
	};

	return (
		<View style={styles.container}>
			<View style={{ position: 'relative', top: -60, left: '25%' }}>
				<Image style={[{ position: 'absolute', width: 100, height: 100 }, styles.image]} source={require('../../../assets/profile.png')} />
				<View
					style={{
						position: 'relative',
						right: -70,
						bottom: -70,
						backgroundColor: '#fff',
						padding: 10,
						borderRadius: 50,
						shadowColor: '#000',
						shadowOffset: {
							width: 0,
							height: 2
						},
						shadowOpacity: 0.25,
						shadowRadius: 3.84,

						elevation: 5
					}}
				>
					<Icon name="edit" size={10}></Icon>
				</View>
			</View>

			<View style={{ marginTop: 50 }}>
				<View style={styles.userName}>
					<Text style={{ color: 'red', fontSize: 16, fontWeight: 'bold' }}>Samuel_Ceaser</Text>
				</View>
				<Text style={styles.title}>PERSONAL INFORMATION</Text>

				<TextInput style={styles.inputStyle} placeholder="Full name" onChangeText={(text) => handleChange('name', text)} value={data.name} />

				<TextInput
					textContentType="emailAddress"
					autoComplete="email"
					autoCapitalize="none"
					style={styles.inputStyle}
					placeholder="Email Address"
					onChangeText={(text) => handleChange('email', text)}
					value={data.email}
				/>

				<TextInput type="date" style={styles.inputStyle} placeholder="DOB" onChangeText={(text) => handleChange('dob', text)} value={data.dob} />

				<TextInput style={styles.inputStyle} placeholder="Country" onChangeText={(text) => handleChange('country', text)} value={data.country} />

				<TextInput
					keyboardType="number-pad"
					textContentType="telephoneNumber"
					style={styles.inputStyle}
					placeholder="Phone Number*"
					onChangeText={data.phone.length <= 10 ? (text) => handleChange('phone', text) : { showError }}
					value={data.phone}
				/>
				<TouchableOpacity style={styles.button} onPress={showData}>
					<Text style={{ color: '#fff' }}>NEXT</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#d5ccc8',
		justifyContent: 'center',
		alignItems: 'flex-start',
		padding: 20,
		borderRadius: 10
	},
	image: {
		borderRadius: 50
	},
	userName: {
		marginVertical: 10,
		width: 300,
		backgroundColor: '#fff',
		padding: 10,
		borderRadius: 4,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5
	},
	title: {
		fontSize: 16,
		color: '#000',
		fontWeight: '500'
	},
	inputStyle: {
		backgroundColor: '#fff',
		fontSize: 16,
		color: '#000',
		width: 300,
		borderRadius: 4,
		shadowOpacity: 0.6,
		marginTop: 10,
		marginBottom: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5
	},
	button: {
		backgroundColor: '#d90429',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: 300,
		padding: 16,
		marginTop: 10,
		borderRadius: 4
	}
});

export default Profile;
