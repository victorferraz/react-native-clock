import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Moment from 'moment';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {timeNow: this.timeNow()};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.timeNow}>{this.state.timeNow}</Text>
      </View>
    );
  }
  componentDidMount(){
    setInterval(() => {
      this.setState({
        timeNow: this.timeNow(),
      });
    }, 30);
  }
  timeNow() {
    return Moment().format('H:mm:ss');
  }
}

const styles = StyleSheet.create({
  timeNow: {
    textShadowColor: '#0AAFE6',
    textShadowOffset: {
      width: 0,
      height: 0
    },
    textShadowRadius: 10,
    fontSize: 70,
    color: '#daf6ff'
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
