import React from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import firebase from 'firebase';
import AwesomeButtonBlue from 'react-native-really-awesome-button/src/themes/blue';

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
        behavior: 'web',
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
      <View style={styles.container}>
        <AwesomeButtonBlue stretch onPress={this.logIn}>
          Login
        </AwesomeButtonBlue>
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
    padding: '15%',
  },
});
