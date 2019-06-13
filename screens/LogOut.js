import React, { Component } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import firebase from 'firebase';
import AwesomeButtonBlue from 'react-native-really-awesome-button/src/themes/blue';

export default class LogOut extends Component {
  logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        console.log('Success!');
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <AwesomeButtonBlue onPress={this.logOut}>Logout</AwesomeButtonBlue>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
});
