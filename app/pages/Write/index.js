import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/Button';
var dismissKeyboard = require('dismissKeyboard');

let feedbackText;
export default class ThirdPage extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: '留言',
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
    feedbackText = '';
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
        {/*<TouchableWithoutFeedback onPress={() => this._onTouchStart()} style={{ flex: 1 }}>
                    <View style={styles.center}>
                        <View style={[styles.logo, { backgroundColor: '#454B55', alignItems: 'center', justifyContent: 'center' }]}>
                            <Text style={{ fontSize: 28, color: '#FFF' }}>Q</Text>
                        </View>
                        <Text style={styles.title}>Qyellow</Text>
                        <Text style={styles.version}>v1.0.0</Text>
                        <Text style={styles.subtitle}>Qyellow</Text>
                    </View>
                </TouchableWithoutFeedback>*/}

        <TextInput
          ref={(ref) => {
            this.textInput = ref;
          }}
          style={styles.textInput}
          placeholder="在此处留言！"
          placeholderTextColor="#aaaaaa"
          underlineColorAndroid="transparent"
          numberOfLines={20}
          multiline
          autoFocus={this.state.autoFocus}
          onChangeText={(text) => {
            feedbackText = text;
          }}
          value={this.state.inputText}
        />
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  center: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 110,
    height: 110,
    marginTop: 30
  },
  version: {
    fontSize: 16,
    textAlign: 'center',
    color: '#aaaaaa',
    marginTop: 5
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginTop: 10
  },
  subtitle: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: 10
  },
  disclaimerContent: {
    flexDirection: 'column'
  },
  disclaimer: {
    fontSize: 14,
    textAlign: 'center'
  },
  bottomContainer: {
    alignItems: 'center'
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    padding: 15,
    backgroundColor: '#F2F2F2',
    textAlignVertical: 'top'
  }
});