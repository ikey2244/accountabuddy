import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import firebase from 'firebase';

export default class LoadingScreen extends Component {
  componentDidMount() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    console.log(firebase);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.navigation.navigate('LoadingScreen');
      } else {
        this.props.navigation.navigate('Home');
      }
    });
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
