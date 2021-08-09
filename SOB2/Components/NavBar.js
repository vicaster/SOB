import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const NavBar = () => {
  
	return (
		<View style={{padding: 20}}>
			<View style={{flexDirection: 'row'}}>
				
				<View style={{flex: 1}}>
					<TouchableOpacity>
						<Text>Home</Text>
					</TouchableOpacity>
				</View>

				<View style={{flex: 1, alignItems: 'center'}}>
					<TouchableOpacity>
						<Text>Luis</Text>
					</TouchableOpacity>
				</View>
				
				<View style={{flex: 1, alignItems: 'flex-end'}}>
					<TouchableOpacity>
						<Text>Login</Text>
					</TouchableOpacity>
				</View>

			</View>
		</View>
	);
};

export default NavBar;

const styles = StyleSheet.create({});