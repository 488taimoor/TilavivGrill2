import React, { Component } from 'react';
import { View, Button, StyleSheet, AsyncStorage } from "react-native";
import {withNavigation} from 'react-navigation';
import {DrawerActions} from 'react-navigation-drawer';
class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome to the app!',
    };
  
    render() {
      return (
        <View style={styles.container}>
        <Button title="DrawerButton" onPress={()=>this.props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
          
          <Button title="Show me more of the app" onPress={this._showMoreApp}/>
          <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
        </View>
      );
    }
  
    _showMoreApp = () => {
      this.props.navigation.navigate('Other');
    };
  
    _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
    };
  }

  export default withNavigation(HomeScreen)

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });