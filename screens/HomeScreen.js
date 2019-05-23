import React from 'react';
import ButtonComponent from '../components/ButtonComponent';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return <ButtonComponent active={true} />;
  }
}
