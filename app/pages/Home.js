import React, { Component } from 'react';
import { ScrollView, AppState, View, Dimensions, StyleSheet, Text, Image, TouchableOpacity, ListView, TouchableHighlight, DeviceEventEmitter, NetInfo, NativeModules,FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import styles from '../style/Home';

let CONNECT_BOOL;
const { width, height } = Dimensions.get('window');
const DATA = [
    {
        id:1,
        name:'影像大赛',
        org:'光华园',
        des:'经世楼A412',
        time:'2018.3.11 14:00',
    },
    {
        id:2,
        name:'十佳歌手',
        org:'恩恩恩',
        des:'800人厅',
        time:'2018.3.11 14:00',
    },
    {
        id:3,
        name:'舞动青春',
        org:'恩恩恩',
        des:'800人厅',
        time:'2018.3.11 14:00',
    }
];
class Home extends Component {

    static navigationOptions = ({ navigation }) => ({
        // title: '',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-home" size={30} color={tintColor} />
        ),
    });

    constructor(props){
        super(props);
        this.state={
            dataSource:new ListView.DataSource({
                rowHasChanged:(row1,row2)=>row1!==row2,
            })
        }
    }

    componentDidMount() {
        NetInfo.isConnected.addEventListener(
            'connectionChange',
            (isConnected) => { this.handleIsConnectedChange(isConnected) }
        );
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(DATA),
        });
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

    renderItem = (item) => {
        return (
            <View style={styles.card}>
                <View style={styles.cardText}>
                    <Text style={{fontSize:18,color:'#000'}}>
                        {item.name}
                    </Text>
                    <View>
                        <Text style={{fontSize:12,color:'gray'}}>
                            {item.des}
                        </Text>
                        <Text style={{fontSize:12,color:'grey'}}>
                            {item.time}
                        </Text>
                    </View>
                </View>
                <View style={styles.cardHead}>
                    <Image
                        resizeMode='stretch'
                        style={{ width: 20, height: 20, }}
                        source={{uri:'http://img.zcool.cn/community/04f92b57a1f38f0000012e7e0180f0.jpg@80w_80h_1c_1e_1o_100sh.jpg'}}
                    />
                </View>
            </View>
        );
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.text}>
                        <View style={{}}>
                            <Text style={styles.time}>
                                3月11日,星期日
                            </Text>
                        </View>
                        <View style={{}}>
                            <Text style={styles.logo}>
                                柴火
                            </Text>
                        </View>
                    </View>
                    <View style={styles.head}>
                        <Image
                            resizeMode='stretch'
                            style={{ width: 50, height: 50, }}
                            source={{uri:'http://img.zcool.cn/community/04f92b57a1f38f0000012e7e0180f0.jpg@80w_80h_1c_1e_1o_100sh.jpg'}}
                        />
                    </View>
                </View>
                <View style={styles.placeholder}>
                </View>
                <View style={styles.mainMine}>
                    <View>
                        <Text style={styles.title}>我的</Text>
                    </View>
                    <View style={styles.mainMineArea}>
                        <View style={styles.mainMineBlock}>
                            <View style={styles.mainMineBlockText}>
                                <Text style={{fontSize:18}}>我的关注</Text>
                                <Text style={{fontSize:12,marginTop:20,}}>15 个活动</Text>
                            </View>
                            <View style={styles.mainMineBlockIcon}>
                                <Icon
                                    name={'md-star-outline'}
                                    size={50}
                                />
                            </View>
                        </View>
                        <View style={styles.mainMineBlock}>
                            <View style={styles.mainMineBlockText}>
                                <Text style={{fontSize:18}}>我的参与</Text>
                                <Text style={{fontSize:12,marginTop:20,}}>15 个活动</Text>
                            </View>
                            <View style={styles.mainMineBlockIcon}>
                                <Icon
                                    name={'md-text'}
                                    size={50}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.new}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={styles.title}>最新活动</Text>
                        <Text style={styles.more}>全部</Text>
                    </View>
                    <View>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this.renderItem}
                            horizontal = {true}
                        />
                    </View>
                </View>
                <View style={styles.popular}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={styles.title}>最热活动</Text>
                        <Text style={styles.more}>全部</Text>
                    </View>
                    <View>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this.renderItem}
                            horizontal = {true}
                        />
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
)(Home)
