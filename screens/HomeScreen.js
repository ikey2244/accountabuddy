import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import firebase from 'firebase';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    if (firebase.auth().currentUser === null) {
      this.props.navigation.navigate('Login');
    }
  }

  logOut = () => {
    const user = firebase.auth().currentUser;

    user
      .delete()
      .then(() => {
        this.props.navigation.navigate('Login');
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.logOut} title="Log Out" color="#841584" />
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
