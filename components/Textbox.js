import React, {Component} from 'react';
import {Button,Text, Picker, TextInput, View} from 'react-native';

export default class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      className: '',
      selectedCity: null
    }
  }

  _handlePressed = (value) => {
    const {onChangeText} = this.props;

    if(onChangeText && typeof onChangeText ==='function'){
      if(value){
        onChangeText(value);
      }
    }
  }

  // on change method for selected city
  _onValueChanged = (city, index) => {

    this.setState({selectedCity: city});

  }

  render() {

    // maping city to Picker
    let listCities;
    if (this.props.province) {

      listCities = this.props.cities.map((item, index)=>{
        return <Picker.Item key={item.cid} label={item.city} value={item.cid} />
      });
    } 

    return (
      <View style={{padding: 10}}>

          {/* <Text> {JSON.stringify(this.state.provCity)} Class!</Text> */}
        {/* <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(data) => this.setState({data})}
        /> */}

        {/* <Button
          title="Click"
          onPress={() => this._handlePressed(this.state.data)}/> */}


        {/* --------- combobox on child Component */}

        <Picker
          selectedValue={this.state.selectedCity}
          style={{height: 50, width: 200}}
          onValueChange={(itemValue, itemIndex) => this._onValueChanged(itemValue, itemIndex)}>

          { listCities }
        
        </Picker>

      </View>
    );
  }
}
