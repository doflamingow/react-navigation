import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

const USERNAME = "user";

const signIn = async (username, password) => {
  // try {
  //   let response = await fetch('http://192.168.73.161:3000/api-v1/customer/login', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       username: username,
  //       password: password
  //     })
  //   });

  //   let responseJson = await response.json();
  //   await AsyncStorage.setItem(USERNAME, responseJson.data.customerNumber);
  //   return new Promise((resolve, reject) => {
  //     resolve(true);
  //   });
  // } catch (error) {
  //   return false;
  // }
  const user = {
    username: username,
    password: password
  }

  let res = await axios.post(`http://192.168.73.161:3000/api-v1/customer/login`, user );
  

  if (res.data.status==='20') {    
    await AsyncStorage.setItem(USERNAME, res.data.customerNumber);
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  } else {
    return false;
  }

};

const signOut = async () => {
  await AsyncStorage.removeItem(USERNAME);
  return new Promise((resolve, reject) => {
    resolve();
  });
};

const isSignedIn = async () => {
  const user = await AsyncStorage.getItem(USERNAME);
  return new Promise((resolve, reject) => {
    resolve(user===null ? false : true);
  });
};

export {signIn, signOut, isSignedIn};