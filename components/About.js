import React, {Component} from 'react';
import {StyleSheet,Text, View} from 'react-native';

export default class About extends Component {

  constructor(props){
    super(props);
  }

  static navigationOptions = {
    title: 'About'
  };

  render() {

    const {params} = this.props.navigation.state;

    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>About {params.data}!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 25,
    marginBottom: 50
  },
  buttonStyle: {
    flex: 1
  }
});