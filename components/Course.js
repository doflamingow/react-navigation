import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, Picker} from 'react-native';

export default class Course extends Component {

  constructor(props){
    super(props);

    this.state = {
      language: []
    }
  }

  _onValueChanged = (course, index) => {
    const {onChange} = this.props;

    if(onChange && typeof onChange ==='function'){
      if(course, index){
        onChange(course, index);
      }
    }
  }

  render() {

    let listCourse = [];
    if (this.props.course) {
      listCourse = this.props.course.map((item, index)=>{
        return <Picker.Item key={item.id} label={item.courseName} value={item.courseName} />
      });
    }

    return (
      <View>
        {/* <TextInput placeholder="Course.." value={this.props.course} onChangeText={this._onValueChanged}></TextInput> */}

        <Picker
          selectedValue={this.state.language}
          style={{height: 50, width: 200}}
          onValueChange={(itemValue, itemIndex) => this._onValueChanged(itemValue, itemIndex)}>
          {/* <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" /> */}

          {listCourse}
        </Picker>

        <Text>Course Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    marginTop: 50
  }
});