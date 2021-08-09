import React from 'react';
import { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Menu from './Sources/Menu';


const routes = createStackNavigator(
{
	Menu: {
		screen: Menu,
		navigationOptions: {
			headerShown: false,
		}
	}
},
{
	initialRouteName: 'Menu'
});

const AppContainer = createAppContainer(routes);

class App extends Component {
	render () {
		return (
			<AppContainer/>
		);
	}
}

export default App;
