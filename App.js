import * as React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import AppHeader from './components/appHeader';
import HomeScreen from './screens/homeScreen';
import SubmitScreen from './screens/submitScreen';
import {createAppContainer, createSwitchNavigator}from 'react-navigation';
export default class App extends React.Component{

  render(){
    return(
      <View>
      <AppHeader/>
      <AppContainer/>
      </View>
    )
  }
  

}
var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  SubmitScreen:SubmitScreen,
  
})

const AppContainer = createAppContainer(AppNavigator)


