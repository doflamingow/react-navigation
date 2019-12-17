import React, {Component} from 'react';
import {signIn} from './Auth';
import {StyleSheet,Text, Button, TextInput, View, Image} from 'react-native';

export default class login extends Component {

  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      message: ''
    }
  }

  // Navigation Option
  static navigationOptions = {
    header: null
  };

  // login process
  _onPressButton = (username, password) => {
    const login = signIn(username, password);
    
    if (login) {
      this.props.navigation.navigate('App');
    } else {
      this.setState({message: 'Username or password not valid'});      
    }
  }



  render() {

    return (
      <View style={styles.body}>

        <View  style={styles.container}>
          <Text style={styles.heading1}>Code Pool</Text>
          <Image
          style={styles.loginImage}
          source={require('./../../assets/ghost.png')}/>
          <Text style={{color: '#fff'}}>Please Login</Text>
        </View>

        <View style={styles.formLogin}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Username</Text>
          
            <TextInput 
            style={styles.input}
            placeholderTextColor="#ed2124"
            placeholder="Username"
            onChangeText={(username)=> this.setState({username})}/>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Password</Text>
          
            <TextInput 
            style={styles.input}
            placeholderTextColor="#ed2124" 
            placeholder="Password"
            onChangeText={(password)=> this.setState({password})}/>
          </View>

          <View style={styles.container}>
            <Button 
            style={styles.buttonRounded} 
            title="Login"
            onPress={() => this._onPressButton(this.state.username, this.state.password)}/>
          </View>

          <Text>{this.state.username}</Text>
          <Text>{this.state.message}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bc2d2f',
  },
  container: {
    alignItems: 'center'
  },
  heading1: {
    fontSize: 30,
    margin: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
  formLogin: {
    flex: 1, 
    flexDirection: 'column',
    margin: 30
  },
  formGroup: {flexDirection: 'row', paddingBottom: 20},
  label: {
    fontSize: 18,
    color: '#fff',
    width: 100,
    margin: 10
  },
  input: {
    backgroundColor: '#870d0f', 
    borderRadius: 8,
    padding: 10,
    width: 200,
    color: '#fff'
  },
  buttonRounded: {
    borderRadius: 5,
    padding: 10,
    width: 100,
    height: 80
  },
  loginImage: {
    width: 100,
    height: 100
  }
});
