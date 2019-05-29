import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
// import { AppLoading, Asset, Font, Icon } from 'expo';
import * as firebase from 'firebase';

import { FIREBASE_API_KEY, FIREBASE_APP_ID } from 'react-native-dotenv';
import AppNavigator from './navigation/AppNavigator';

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: 'accountabuddy-134b8.firebaseapp.com',
  databaseURL: 'https://accountabuddy-134b8.firebaseio.com',
  projectId: 'accountabuddy-134b8',
  storageBucket: 'accountabuddy-134b8.appspot.com',
  messagingSenderId: '888670357488',
  appId: FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
