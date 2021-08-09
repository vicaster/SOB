import React from 'react';
import { View, StyleSheet } from 'react-native';

import NavBar from '../Components/NavBar';
import Rapport from '../Components/Rapport';
import Footer from '../Components/Footer';

class Menu extends React.Component {

	render()
	{
		return(
			<View style={{flex: 1}}>
				<NavBar />

				<Rapport />

				<Footer />
			</View>
		);
	}
}

const styles = StyleSheet.create({
    Background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#661300'
    }
  });

export default Menu
