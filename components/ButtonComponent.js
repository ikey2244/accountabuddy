import React from 'react';
import { Text, Button, View } from 'react-native';
import Yay from './Yay';

export default class ButtonComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    };
  }

  toggle = () => {
    this.setState(({ clicked }) => ({ clicked: !clicked }));
  };

  render() {
    if (this.state.clicked) {
      return (
        <View>
          <Yay />
          <Text>Good Job!</Text>
          <Button
            onPress={this.toggle}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      );
    }
    return (
      <View>
        <Text>Did you workout today?</Text>
        <Button
          onPress={this.toggle}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
