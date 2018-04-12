import React, { Component } from 'react';
import { ScrollView, AppState, View, Dimensions, StyleSheet, Text,TextInput, Image, TouchableOpacity, ListView, TouchableHighlight, DeviceEventEmitter, NetInfo, NativeModules,FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import styles from './style';
import IconBlock from '../../components/IconBlock';

const { width, height } = Dimensions.get('window');

class Mine extends Component {

    static navigationOptions = ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-person" size={30} color={tintColor} />
        ),
    });

    constructor(props){
        super(props);
        this.state={
            icons: [],
        }
    }

    componentDidMount() {
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={{flex:1}}>
                    <ScrollView>
                        <View style={styles.header}>
                            <Image
                                style={{width:width,height:200,}}
                                resizeMode = 'cover'
                                source={require('../../images/back.png')}
                            />
                            <View style={styles.headerText}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={'点击此处编辑活动名'}
                                        placeholderTextColor={'#fff'}
                                        underlineColorAndroid='transparent'
                                        caretHidden={false}
                                        maxLength={300}
                                        style={{fontSize:24,color:'#fff',}}
                                    />
                                    <TextInput
                                        style={[styles.input]}
                                        placeholder={'点击此处编辑活动地点'}
                                        placeholderTextColor={'#fff'}
                                        underlineColorAndroid='transparent'
                                        caretHidden={false}
                                        maxLength={300}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder={'点击此处编辑活动时间'}
                                        placeholderTextColor={'#fff'}
                                        underlineColorAndroid='transparent'
                                        caretHidden={false}
                                        maxLength={300}
                                    />
                            </View>
                        </View>
                        <View style={styles.section}>
                            <View style={styles.titleBlock}>
                                <Text style={styles.title}>标签</Text>
                                <TouchableOpacity
                                    onPress={()=>{
                                        const arr = this.state.icons.slice();
                                        arr.push('标签');
                                        this.setState({icons: arr});
                                    }}
                                >
                                    <Icon name="md-add" size={20} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.trendsLabel}>
                                {
                                    this.state.icons.map(icon => (
                                        <TextInput
                                            style={[styles.input,styles.trendsLabelWrapper,styles.trendsLabelWord]}
                                            defaultValue={icon}
                                            underlineColorAndroid='transparent'
                                            caretHidden={false}
                                        />
                                    ))
                                }
                            </View>
                        </View>
                        <View style={styles.section}>
                            <View style={styles.titleBlock}>
                                <Text style={styles.title}>活动简介</Text>
                            </View>
                            <TextInput
                                style={styles.input}
                                placeholder={'点击此处编辑活动内容'}
                                underlineColorAndroid='transparent'
                                multiline 
                                caretHidden={false}
                                maxLength={300}
                            />
                        </View>
                    </ScrollView>
                </View>
                
            </View>
        );
    }
}

export default connect(
    (state) => ({
    }),
    (dispatch) => ({
    })
)(Mine)
