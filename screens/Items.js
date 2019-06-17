import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const items = [
  {
    name: 'Did you workout today?',
  },
  {
    name: 'Did you eat out today?',
  },
  {
    name: 'Did you fap today?',
  },
  {
    name: 'Take out trash',
  },
];

export default class Items extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        {items.map((item, index) => (
          <View key={index}>
            <Text>{item.name}</Text>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
