import React, { Component } from 'react';
import { ScrollView, AppState, View, Dimensions, StyleSheet, Text, Image, TouchableOpacity, ListView, TouchableHighlight, DeviceEventEmitter, NetInfo, NativeModules,FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import List from '../components/List';
import styles from '../style/OneUser';
import IconBlock from '../components/IconBlock';

let CONNECT_BOOL;
const { width, height } = Dimensions.get('window');

class Mine extends Component {

    static navigationOptions = ({ navigation }) => ({
        // title: '',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-person" size={30} color={tintColor} />
        ),
    });

    constructor(props){
        super(props);
        this.state={
        }
    }

    componentDidMount() {
        NetInfo.isConnected.addEventListener(
            'connectionChange',
            (isConnected) => { this.handleIsConnectedChange(isConnected) }
        );
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('connectionChange', this.handleIsConnectedChange);
    }

    handleIsConnectedChange(isConnected) {
        if (CONNECT_BOOL === false && isConnected === true) {
            console.log('网络发生变化了，当前为' + isConnected);
        }
        CONNECT_BOOL = isConnected;
    }

    handleAppStateChange(appState) {
        if (appState != 'active') {
            console.log('应用处于后台状态')
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={{width:80,height:80,borderRadius:40,overflow:'hidden'}}>
                            <Image
                                style={{width:80,height:80,}}
                                resizeMode = 'cover'
                                source={require('../images/back.png')}
                            />
                        </View>
                        <View style={styles.headerText}>
                            <Text style={{fontSize:24,color:'#fff',marginBottom:10}}>张胤东</Text>
                        </View>
                    </View>
                    <View style={[styles.section,{flexDirection:'row'}]}>
                        <View style={styles.btnBlock}>
                            <View style={{paddingHorizontal:10,paddingVertical:5,backgroundColor:'#000',borderRadius:5,}}>
                                <Text style={{fontSize:14,color:'#fff'}}>我要关注</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <View style={styles.text}>
                            <Text style={styles.title}>标签</Text>
                        </View>
                        <View style={styles.body}>
                            <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                                <View style={{paddingHorizontal:5,paddingVertical:3,backgroundColor:'#000',borderRadius:5,marginHorizontal:5,}}>
                                    <Text style={{fontSize:12,color:'#fff'}}>活动斩杀者</Text>
                                </View>
                                <View style={{paddingHorizontal:5,paddingVertical:3,backgroundColor:'#000',borderRadius:5,marginHorizontal:5,}}>
                                    <Text style={{fontSize:12,color:'#fff'}}>柴火贡献者</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <View style={styles.text}>
                            <Text style={styles.title}>个人简介</Text>
                        </View>
                        <View style={styles.body}>
                            <Text>    假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介。</Text>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <View style={styles.text}>
                            <Text style={styles.title}>动态</Text>
                        </View>
                        <View style={styles.body}>
                            <View style={styles.card}>
                                <View style={styles.cardHead}>
                                    <Text style={{fontSize:24,color:'#000'}}>
                                        3.16
                                    </Text>
                                </View>
                                <View style={styles.cardText}>
                                    <Text style={{fontSize:16,color:'#000'}}>
                                        参与 请回答，2018！ ，并获得 冠军 ，获得 西财水哥 称号！
                                    </Text>
                                    <Text style={{fontSize:10,color:'grey'}}>
                                        2018-3-15 23：26：00
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.card}>
                                <View style={styles.cardHead}>
                                    <Text style={{fontSize:24,color:'#000'}}>
                                        3.17
                                    </Text>
                                </View>
                                <View style={styles.cardText}>
                                    <Text style={{fontSize:16,color:'#000'}}>
                                        参与 科技节 ，并获得冠军
                                    </Text>
                                    <Text style={{fontSize:10,color:'grey'}}>
                                        2018-3-15 23：26：00
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default connect(
    (state) => ({
        
    }),
    (dispatch) => ({
        
    })
)(Mine)
