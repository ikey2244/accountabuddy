import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import Confetti from 'react-native-confetti';

class Yay extends Component {
  componentDidMount() {
    if(this._confettiView) {
       this._confettiView.startConfetti();
    }
  }

  render() {
    return <View style={styles.container}>
      <Confetti ref={(node) => this._confettiView = node}/>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0
  }
});

export default Yay;