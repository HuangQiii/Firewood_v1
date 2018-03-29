import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';
import { PALETTA, SIZE } from '../../style/Common';

const { width, height } = Dimensions.get('window');

export default class Login extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `登录`,
  });

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.logo}
            // resizeMode='cover'
            source={require('../../images/logo.png')}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder={'手机号'}
            placeholderTextColor={PALETTA.NORMAL_888}
            underlineColorAndroid='transparent'
            caretHidden
          />
        </View>

        <TouchableOpacity>
          <View style={styles.button}>
            <Icon name="md-arrow-forward" size={30} color={'#fff'} />
          </View>
        </TouchableOpacity>
      </View >
    );
  }
}