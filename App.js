import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, HeaderBackButton } from 'react-navigation-stack';


import { Button, ThemeProvider, Header, Card, ListItem , Icon} from 'react-native-elements';
// home
import {HomeScreen} from './screens/home';
import {HotelScreen} from './screens/hotel';
import {DetalleScreen} from './screens/detalle';


const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Hotel: HotelScreen,
    Detalle: DetalleScreen
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
  

      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: 'orange',
      headerTitleStyle: {
        fontWeight: 'bold',
        color:'black'
      },
    },
    headerMode: 'screen',
    cardStyle: { backgroundColor: '#E6E6E6' },
  }
);



const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <AppContainer />;
  }
}
