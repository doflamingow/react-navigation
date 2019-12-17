import React, {Component} from 'react';
import {StyleSheet,Text, Picker, View} from 'react-native';
import TextBox from './Textbox';

export default class Clases extends Component {

  constructor(props){
    super(props);

    this.state = {
      className: '',
      selectedProvince: null,
      provinsi: [
        {pid: 1, provinsi: 'DKI'},
        {pid: 2, provinsi: 'Jabar'},
        {pid: 3, provinsi: 'Jateng'},
        {pid: 4, provinsi: 'DIY'} 
      ],
      city: CITY,
      provinceName: '',
      kota: []
    }
  }

  // Navigation Option
  static navigationOptions = {
    title: 'Class'
  };

  // On Change method for className
  _onChanged = (value) =>{
    this.setState({className: value})
  }

  // On Value Changen For Profice
  _onValueChanged = (province, index) => {

    // ------------ isue set state of city ------------------------

    // const cities = this.state.city.find((city)=>{ return city.pid==province});

    // ------------ isue set state of city ------------------------

    this.setState({selectedProvince: province});
    // const {onChange} = this.props;

    // if(onChange && typeof onChange ==='function'){
    //   if(course, index){
    //     onChange(course, index);
    //   }
    // }
  }


  // find city method
  _findCity(id){
    const cities = this.state.city.find((city)=>{ return city.pid==id});
    return cities.cities;
  }


  render() {

    // get city on page rendered
    let cityOfProfince;
    if (this.state.selectedProvince) {
      cityOfProfince = this._findCity(this.state.selectedProvince);
    }

    // maping city to Picker
    const provinces = this.state.provinsi.map((item, index)=>{
      return <Picker.Item key={item.pid} label={item.provinsi} value={item.pid} />
    });

    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}> Province {this.state.kota}!</Text>

      {/* ------------------------- Combo Box ------------------------------------ */}

        <Picker
          selectedValue={this.state.selectedProvince}
          style={{height: 50, width: 200}}
          onValueChange={(itemValue, itemIndex) => this._onValueChanged(itemValue, itemIndex)}>

          <Picker.Item label="Select Province" value="" />

          { provinces }
        
        </Picker>

         {/* ------------------------- Child Component ------------------------------------ */}
        <TextBox province={this.state.selectedProvince} cities={cityOfProfince} onPress={this._onChanged}></TextBox>

      </View>
    );
  }
}

// data of city
const CITY = [
  {
    pid: 1, 
    cities: [
      {cid: 1, city: 'JakSel'},
      {cid: 2, city: 'JaKbar'},
      {cid: 3, city: 'JaKPus'}
    ] 
  },
  {
    pid: 2, 
    cities: [
      {cid: 1, city: 'Bogor'},
      {cid: 2, city: 'Bandung'},
      {cid: 3, city: 'Depok'}
    ] 
  },
  {
    pid: 3, 
    cities: [
      {cid: 1, city: 'Semarang'},
      {cid: 2, city: 'Solo'},
      {cid: 3, city: 'Cilacap'}
    ] 
  },
  {
    pid: 4, 
    cities: [
      {cid: 1, city: 'Yogya'},
      {cid: 2, city: 'Bantul'},
      {cid: 3, city: 'Sleman'}
    ] 
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'brown'
  },
  textStyle: {
    fontSize: 25,
    marginBottom: 50
  },
  buttonStyle: {
    flex: 1
  }
});
