import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/Button';
var dismissKeyboard = require('dismissKeyboard');
import styles from './style';

let feedbackText;
export default class ThirdPage extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: '回复',
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
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => this._onTouchStart()} style={{ flex: 1 }}>
          <View style={styles.trendsBorder}>
            <View style={styles.trends}>
              <View style={styles.trendsMiddle}>
                <View style={styles.trendsHead}>
                  <Image
                    resizeMode='stretch'
                    style={{ width: 50, height: 50, }}
                    source={{ uri: 'https://avatars2.githubusercontent.com/u/5773264?s=96&v=4' }}
                  />
                </View>
                <Text style={styles.trendsTime}>5min</Text>
              </View>
              <View style={styles.trendsRight}>
                <View style={styles.trendsTitleBlock}>
                  <Text style={styles.trendsTitleLink}>
                    {'森林音乐社'}
                  </Text>
                </View>
                <Text
                  style={styles.trendsDes}
                >
                  {'最原始的歌声，给最可爱的你最原始的歌声，给最可爱的你最原始的歌声，给最可爱的你最原始的歌声，给最可爱的你最原始的歌声，给最可爱的你最原始的歌声，给最可爱的你最原始的歌声，给最可爱的你最原始的歌声，给最可爱的你'}
                </Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>

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