import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Permission extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentDidMount() {
  }

  get content() {
    if (this.props.permission) {
      return (
        <View>
          {this.props.children}
        </View>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <View>
        {this.content}
      </View>
    );
  }
}