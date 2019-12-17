import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput, Alert} from 'react-native';
import Course from './Course';

export default class Home extends Component {

  constructor(props){
    super(props);

    this.state = {
      title: 'Code Pool App',
      data: 'Code Pool',
      course: ''
    }
  }

  static navigationOptions = {
    title: 'Codepool App'
  };

  // open drawer tab
  _openDrawer = () => {
    this.props.navigation.openDrawer();
  }

  _onTextChanged = (event) => {
    this.setState({ data: event.nativeEvent.text } );
  }

  _onPress = () => {
    let courses = [
      {id: 1, courseName: 'Rreact Native'},
      {id: 2, courseName: 'Javascript'}
    ];

    this.setState({ course: courses} );
    alert(`${this.state.course}`);
  }

  _isChanged = (value, index) => {
    Alert.alert(
      'Course',
      `${index} - ${value}`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Home Page {this.state.data}!</Text>

        <TextInput
          style={{height: 100, width: 200}}
          placeholder="Input data!"
          onChange= {this._onTextChanged}
        />

        {/* <Button
          title="About" 
          onPress={() => navigate('About', {data: this.state.data})} /> */}

        <Button
          title="About" 
          onPress={() => this._openDrawer()} />
        
        <Course course={this.state.course} onChange={this._isChanged}></Course>
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