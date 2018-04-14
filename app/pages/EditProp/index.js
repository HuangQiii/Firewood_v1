import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/Button';
var dismissKeyboard = require('dismissKeyboard');
import { PALETTA, SIZE } from '../../style/Common';

let feedbackText = '';
export default class ThirdPage extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `更改${navigation.state.params.title}`,
    headerRight: (
      <Icon.Button
        name="md-checkmark"
        color={'#000'}
        backgroundColor="transparent"
        underlayColor="transparent"
        activeOpacity={0.8}
        onPress={() => {
          navigation.state.params.handleCheck();
        }}
      />
    )
  });

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ handleCheck: this.onActionSelected });
    console.log(this.props.navigation);
    const {prop, value, placeholder} = this.props.navigation.state.params;
    this.setState({
      value,
      prop,
      placeholder
    });
  }

  onActionSelected = () => {
    alert(this.state.value);
  };

  _onTouchStart() {
    dismissKeyboard();
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={this.state.placeholder}
          placeholderTextColor={PALETTA.NORMAL_888}
          underlineColorAndroid='transparent'
          caretHidden
          onChangeText={(text) => this.setState({value:text})}
          value={this.state.value}
        />
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingHorizontal:20,
    paddingVertical:15,
  },
  input:{
    borderColor: 'transparent',
    borderWidth: 1,
    borderBottomColor:PALETTA.LOGHT_SPLIT,
  },
});