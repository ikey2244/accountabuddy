import React from 'react';
import { Button, StyleSheet, AsyncStorage } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Facebook } from 'expo';
import firebase from 'firebase';

export default class Login extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user !== null) {
        this.props.navigation.navigate('LogOut');
      }
    });
  }

  logIn = async () => {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      '457353711677668',
      {
        permissions: ['public_profile'],
      }
    );
    if (type === 'success') {
      AsyncStorage.setItem('token', token);
      const credential = firebase.auth.FacebookAuthProvider.credential(token);
      firebase
        .auth()
        .signInWithCredential(credential)
        .then(() => {
          AsyncStorage.setItem('token', token);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Button
          onPress={this.logIn}
          title="Login"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </SafeAreaView>
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
