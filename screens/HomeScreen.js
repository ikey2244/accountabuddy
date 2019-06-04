import React from 'react';
import { StyleSheet } from 'react-native';
import { CalendarList } from 'react-native-calendars';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <CalendarList
        // Enable horizontal scrolling, default = false
        horizontal
        // Enable paging on horizontal, default = false
        pagingEnabled
        // Set custom calendarWidth.
        calendarWidth={320}
      />
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
