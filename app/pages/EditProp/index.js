import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
var dismissKeyboard = require('dismissKeyboard');
import { PALETTA, SIZE } from '../../style/Common';

let feedbackText = '';
export default class ThirdPage extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: '更改信息',
    headerRight: (
      <Icon
        size={25}
        name="md-checkmark"
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
  }

  onActionSelected = () => {
    if (feedbackText === undefined || feedbackText.replace(/\s+/g, '') === '') {
      alert('请重新填写');
    } else {
      alert('提交成功');
      this.textInput.clear();
      dismissKeyboard();
    }
  };

  _onTouchStart() {
    dismissKeyboard();
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={'手机号'}
          placeholderTextColor={PALETTA.NORMAL_888}
          underlineColorAndroid='transparent'
          caretHidden
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
    // width: width - 70,
    borderColor: 'transparent',
    borderWidth: 1,
    borderBottomColor:PALETTA.LOGHT_SPLIT,
  },
});