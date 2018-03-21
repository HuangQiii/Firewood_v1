import React, { Component } from 'react';
import { ScrollView, AppState, View, Dimensions, StyleSheet, Text, Image, TouchableOpacity, ListView, TouchableHighlight, DeviceEventEmitter, NetInfo, NativeModules,FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import List from '../components/List';
import styles from '../style/OneCommunity';
import IconBlock from '../components/IconBlock';

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
                            <Text style={{fontSize:24,color:'#fff',marginBottom:10}}>光华园</Text>
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
                            <Text style={styles.title}>荣誉</Text>
                        </View>
                        <View style={styles.body}>
                            <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                                <View style={{paddingHorizontal:5,paddingVertical:3,backgroundColor:'#000',borderRadius:5,marginHorizontal:5,}}>
                                    <Text style={{fontSize:12,color:'#fff'}}>唯一学生门户网站</Text>
                                </View>
                                <View style={{paddingHorizontal:5,paddingVertical:3,backgroundColor:'#000',borderRadius:5,marginHorizontal:5,}}>
                                    <Text style={{fontSize:12,color:'#fff'}}>党宣直属</Text>
                                </View>
                                <View style={{paddingHorizontal:5,paddingVertical:3,backgroundColor:'#000',borderRadius:5,marginHorizontal:5,}}>
                                    <Text style={{fontSize:12,color:'#fff'}}>最受热爱</Text>
                                </View>
                                <View style={{paddingHorizontal:5,paddingVertical:3,backgroundColor:'#000',borderRadius:5,marginHorizontal:5,}}>
                                    <Text style={{fontSize:12,color:'#fff'}}>活跃</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <View style={styles.text}>
                            <Text style={styles.title}>组织简介</Text>
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
                                    <Image
                                        resizeMode='stretch'
                                        style={{ width: 40, height: 40, }}
                                        source={{uri:'http://img.zcool.cn/community/04f92b57a1f38f0000012e7e0180f0.jpg@80w_80h_1c_1e_1o_100sh.jpg'}}
                                    />
                                </View>
                                <View style={styles.cardText}>
                                    <View>
                                        <Text style={{fontSize:16,color:'#000'}}>
                                            张胤东
                                        </Text>
                                        <Text style={{fontSize:14,color:'gray'}}>
                                            可以干羞羞的事吗
                                        </Text>
                                    </View>
                                    <View style={{}}>
                                        <Text style={{fontSize:10,color:'grey'}}>
                                            2018-3-15 23：26：00
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
