import React, { Component } from 'react';
import { ScrollView, AppState, View, Dimensions, StyleSheet, Text, Image, TouchableOpacity, ListView, TouchableHighlight, DeviceEventEmitter, NetInfo, NativeModules,FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import List from '../components/List';
import styles from '../style/OneActivity';
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
                        <Image
                            style={{width:width,height:200,}}
                            resizeMode = 'cover'
                            source={require('../images/back.png')}
                        />
                        <View style={styles.headerText}>
                            <Text>我是活动名</Text>
                            <Text>我是活动地点</Text>
                            <Text>我是活动时间</Text>
                        </View>
                    </View>
                    <View style={styles.section}>
                        
                    </View>
                    <View style={styles.section}>
                        <View style={styles.text}>
                            <Text style={styles.title}>标签</Text>
                        </View>
                        <View style={styles.body}>
                            <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                                <View style={{paddingHorizontal:5,paddingVertical:3,backgroundColor:'#000',borderRadius:5,marginHorizontal:5,}}>
                                    <Text style={{fontSize:12,color:'#fff'}}>标签</Text>
                                </View>
                                <View style={{paddingHorizontal:5,paddingVertical:3,backgroundColor:'#000',borderRadius:5,marginHorizontal:5,}}>
                                    <Text style={{fontSize:12,color:'#fff'}}>标签</Text>
                                </View>
                                <View style={{paddingHorizontal:5,paddingVertical:3,backgroundColor:'#000',borderRadius:5,marginHorizontal:5,}}>
                                    <Text style={{fontSize:12,color:'#fff'}}>标签</Text>
                                </View>
                                <View style={{paddingHorizontal:5,paddingVertical:3,backgroundColor:'#000',borderRadius:5,marginHorizontal:5,}}>
                                    <Text style={{fontSize:12,color:'#fff'}}>标签</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <View style={styles.text}>
                            <Text style={styles.title}>活动简介</Text>
                        </View>
                        <View style={styles.body}>
                            <Text>    假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介。</Text>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <View style={styles.text}>
                            <Text style={styles.title}>他们已参与</Text>
                        </View>
                        <View style={styles.body}>
                            <ScrollView horizontal={true}>
                                    <IconBlock
                                        content={'光华园'}
                                        contentSize={12}
                                        height={80}
                                        width={80}
                                    />
                                    <IconBlock
                                        content={'党宣'}
                                        contentSize={12}
                                        height={80}
                                        width={80}
                                    />
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <View style={styles.text}>
                            <Text style={styles.title}>评论</Text>
                        </View>
                        <View style={styles.body}>
                            <View style={styles.card}>
                                <View style={styles.cardHead}>
                                    <Image
                                        resizeMode='stretch'
                                        style={{ width: 40, height: 40, }}
                                        source={{uri:'http://img.zcool.cn/community/04f92b57a1f38f0000012e7e0180f0.jpg@80w_80h_1c_1e_1o_100sh.jpg'}}
                                    />
                                </View>
                                <View style={styles.cardText}>
                                    <View>
                                        <Text style={{fontSize:16,color:'#000'}}>
                                            用户名
                                        </Text>
                                        <Text style={{fontSize:14,color:'gray'}}>
                                            留言
                                        </Text>
                                    </View>
                                    <View style={{}}>
                                        <Text style={{fontSize:10,color:'grey'}}>
                                            时间吧
                                        </Text>
                                    </View>
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
