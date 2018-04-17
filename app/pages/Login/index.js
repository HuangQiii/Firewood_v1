import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';
import { PALETTA } from '../../style/Common';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.logo}
            source={require('../../images/fire.png')}
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

        <TouchableOpacity
          onPress={() => navigate('Main')}
        >
          <View style={styles.button}>
            <Icon name="md-arrow-forward" size={30} color={PALETTA.NORMAL_888} />
          </View>
        </TouchableOpacity>
      </View >
    );
  }
}