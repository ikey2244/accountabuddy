import React from 'react';
import { ActivityIndicator, StyleSheet, StatusBar, View } from 'react-native';
import firebase from 'firebase';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const { navigate } = this.props.navigation;
    await firebase.auth().onAuthStateChanged(user => {
      if (user) {
        navigate('Home');
      } else {
        navigate('Login');
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
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
