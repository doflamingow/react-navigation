import React, {Component} from 'react';
import {StyleSheet,Text, Picker, View} from 'react-native';

export default class Portfolio extends Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }

  // Navigation Option
  static navigationOptions = {
    title: 'Portfolio'
  };



  render() {

    return (
      <View style={styles.container}>

        <Text style={styles.textStyle}>Portfolio Page</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    // backgroundColor: 'brown'
  },
  textStyle: {
    fontSize: 25,
    marginBottom: 50
  },
  buttonStyle: {
    flex: 1
  }
});
