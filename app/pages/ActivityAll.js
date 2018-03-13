import React, { Component } from 'react';
import { ScrollView, AppState, View, Dimensions, StyleSheet, Text, Image, TouchableOpacity, ListView, TouchableHighlight, DeviceEventEmitter, NetInfo, NativeModules,FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import styles from '../style/ActivityAll';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import IconBlock from '../components/IconBlock';

let CONNECT_BOOL;
const { width, height } = Dimensions.get('window');
const DATA = [
    {
        id:1,
        name:'光华园',
        org:'党委宣传部直属，西南财经大学唯一学生门户网站',
        des:'我们要在哪里哪里举办什么什么了，丰厚奖品等你来拿，具体链接请戳。。。',
        time:'2000人关注',
    },
    {
        id:2,
        name:'校团委',
        org:'校团委校团委校团委校团委校团委校团委校团委',
        des:'我们要在哪里哪里举办什么什么了，丰厚奖品等你来拿，具体链接请戳。。。',
        time:'2000人关注',
    },
    {
        id:3,
        name:'舞动青春',
        org:'恩恩恩',
        des:'我们要在哪里哪里举办什么什么了，丰厚奖品等你来拿，具体链接请戳。。。',
        time:'2018.3.11 14:00',
    }
];
class ActivityAll extends Component {

    constructor(props){
        super(props);
        this.state={
            dataSource:new ListView.DataSource({
                rowHasChanged:(row1,row2)=>row1!==row2,
            })
        }
    }

    componentDidMount() {
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(DATA),
        });
    }

    renderItem = (item) => {
        return (
            <View style={styles.card}>
                <View style={styles.cardHead}>
                    <Image
                        resizeMode='stretch'
                        style={{ width: 60, height: 60, marginBottom:10,}}
                        source={{uri:'http://img.zcool.cn/community/04f92b57a1f38f0000012e7e0180f0.jpg@80w_80h_1c_1e_1o_100sh.jpg'}}
                    />
                    <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                        <View style={{paddingHorizontal:3,paddingVertical:1,backgroundColor:'#000',borderRadius:5,marginHorizontal:1,marginVertical:3,}}>
                            <Text style={{fontSize:10,color:'#fff'}}>标签</Text>
                        </View>
                        <View style={{paddingHorizontal:3,paddingVertical:1,backgroundColor:'#000',borderRadius:5,marginHorizontal:1,marginVertical:3,}}>
                            <Text style={{fontSize:10,color:'#fff'}}>标签</Text>
                        </View>
                        <View style={{paddingHorizontal:3,paddingVertical:1,backgroundColor:'#000',borderRadius:5,marginHorizontal:1,marginVertical:3,}}>
                            <Text style={{fontSize:10,color:'#fff'}}>标签</Text>
                        </View>
                        <View style={{paddingHorizontal:3,paddingVertical:1,backgroundColor:'#000',borderRadius:5,marginHorizontal:1,marginVertical:3,}}>
                            <Text style={{fontSize:10,color:'#fff'}}>标签</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.cardText}>
                    <View>
                        <Text style={{fontSize:16,color:'#000',marginBottom:10,}}>
                            {item.name}
                        </Text>
                        <Text style={{fontSize:12,color:'gray'}}>
                            经世楼A308
                        </Text>
                        <Text style={{fontSize:12,color:'gray'}}>
                            2018-3-13 15：30
                        </Text>
                        <Text style={{fontSize:14,color:'gray',marginTop:10,}}>
                            {item.org}
                        </Text>
                    </View>
                    <View style={{alignItems:'flex-end'}}>
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:12,color:'grey',marginRight:5,}}>
                                {item.time}
                            </Text>
                            <Icon name="md-eye" size={20} color={'#000'} />
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View>
                <View style={styles.interstCom}>
                    <View>
                        <Text style={styles.title}>
                            所有活动
                        </Text>
                    </View>
                    <View>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this.renderItem}
                        />
                    </View>
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
)(ActivityAll)
