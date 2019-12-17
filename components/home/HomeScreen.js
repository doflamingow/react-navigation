import React, {Component} from 'react';
import {isSignedIn, signOut} from './../auth/Auth';
import {StyleSheet,Text, Button, View} from 'react-native';

import axios from 'axios';

export default class HomeScreen extends Component {

  constructor(props){
    super(props);

    this.state = {
      customers: []
    }
  }

  // Navigation Option
  static navigationOptions = {
    title: 'Code Pool',
    headerRight: (
      <Button
        onPress={() => this._openDrawer()}
        title="Menu"
        color="#000"
      />
    ),
  };

  // open drawer tab
  _openDrawer = () => {
    this.props.navigation.openDrawer();
  }

  // handle check auth
  async _handleCheck() {
    const isLogedIn = await isSignedIn().catch((error)=>{return error});
    alert(isLogedIn);
  }

  async _handleRemove() {
    await signOut()
  }


  componentDidMount() {
    axios.get(`http://192.168.73.161:3000/api-v1/customers`)
      .then(res => {
        const response = res.data;
        
        this.setState({ customers:response.data });
      })
  }

  render() {    

    return (
      <View style={styles.container}>

        <Text style={styles.textStyle}>Home Page</Text>

        <Text style={styles.textStyle}>{JSON.stringify(this.state.customers)}</Text>

        <Button
        onPress={() => this._handleCheck()}
        title="Check Auth"/>

        <Button
        onPress={() => this._handleRemove()}
        title="Remove Auth"/>

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
