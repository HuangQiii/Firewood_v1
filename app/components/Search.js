import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentDidMount() {
  }

  handleChange = (value) => {
    this.setState({
      value,
    });
  }

  handleSearch = () => {
    // handle search with value
  }

  render() {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', }}>
        <TextInput
          style={{
            borderColor: 'transparent',
            borderWidth: 1,
            borderBottomColor:'#888',
            flex: 1,
          }}
          value={this.state.value}
          placeholder={'请输入关键字搜索'}
          placeholderTextColor={'#888'}
          caretHidden={false}
          onChangeText={this.handleChange}
          onSubmitEditing={this.handleSearch}
        />
        <TouchableOpacity
          onPress={() => {this.handleSearch()}}
        >
          <Icon name="md-search" size={20} color={'#888'} style={{ width: 20 }} />
        </TouchableOpacity>
      </View >
    );
  }
}