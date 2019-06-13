import React from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
// import { Calendar } from 'react-native-calendars';
// import ButtonComponent from '../components/ButtonComponent';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import CountdownCircle from 'react-native-countdown-circle';
import Yay from '../components/Yay';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
    setTimeout(() => {
      this.setState({ modalVisible: false });
    }, 5000);
  }

  render() {
    const currentDate = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return (
      <View styles={styles.container}>
        <Text style={styles.headline}>{currentDate}</Text>
        <AwesomeButtonRick
          onPress={() => {
            this.setModalVisible(true);
          }}
          type="primary"
          stretch
        >
          Yeah!
        </AwesomeButtonRick>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View>
              <CountdownCircle
                seconds={5}
                radius={30}
                borderWidth={8}
                bgColor="#fff"
              />
              <Yay />
              <Text>Yay you did it!</Text>
            </View>
          </View>
        </Modal>
        {/* <Calendar
          // Specify style for calendar container element. Default = {}
          // Specify theme properties to override specific styles for calendar parts. Default = {}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#00adf5',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: 'orange',
            monthTextColor: 'blue',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headline: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 50,
    textAlign: 'center',
  },
});
