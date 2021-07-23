import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
export default class HomeScreen extends React.Component{
  goToSubmitScreen = () =>{
    this.props.navigation.navigate('SubmitScreen')
  }
  render(){
    return(
      <View>
        
      </View>
    )
  }
}