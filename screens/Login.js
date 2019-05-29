import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Facebook } from 'expo';
import firebase from 'firebase';

export default class Login extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user !== null) {
        this.props.navigation.navigate('Home');
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
      const credential = firebase.auth.FacebookAuthProvider.credential(token);
      firebase
        .auth()
        .signInWithCredential(credential)
        .catch(error => {
          console.log(error);
        });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.logIn}
          title="Login"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
});
