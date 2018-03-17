import React, { Component } from 'react';
import { ScrollView, AppState, View, Dimensions, StyleSheet, Text, Image, TouchableOpacity, ListView, TouchableHighlight, DeviceEventEmitter, NetInfo, NativeModules,FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import styles from '../style/Community';
import ScrollableTabView, {ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import IconBlock from '../components/IconBlock';
import CommunityAll from './CommunityAll';

let CONNECT_BOOL;
const { width, height } = Dimensions.get('window');
const DATA = [
    {
        id:1,
        name:'光华园',
        org:'光华园',
        des:'我们要在哪里哪里举办什么什么了，丰厚奖品等你来拿，具体链接请戳。。。',
        time:'2018.3.11 14:00',
    },
    {
        id:2,
        name:'十佳歌手',
        org:'恩恩恩',
        des:'我们要在哪里哪里举办什么什么了，丰厚奖品等你来拿，具体链接请戳。。。',
        time:'2018.3.11 14:00',
    },
    {
        id:3,
        name:'舞动青春',
        org:'恩恩恩',
        des:'我们要在哪里哪里举办什么什么了，丰厚奖品等你来拿，具体链接请戳。。。',
        time:'2018.3.11 14:00',
    }
];
class Home extends Component {

    static navigationOptions = ({ navigation }) => ({
        // title: '',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-people" size={30} color={tintColor} />
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
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(DATA),
        });
    }

    renderItem = (item) => {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('OneActivity')}
            >
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
                                {item.name}
                            </Text>
                            <Text style={{fontSize:14,color:'gray'}}>
                                {item.des}
                            </Text>
                        </View>
                        <View style={{alignItems:'flex-end'}}>
                            <Text style={{fontSize:12,color:'grey'}}>
                                {item.time}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ScrollableTabView
                    initialPage={0}
                    renderTabBar={() => (
                        <ScrollableTabBar
                            tabStyle={{paddingBottom: 0,flex:1}}
                            textStyle={{fontSize: 16}}
                        />
                    )}
                    tabBarBackgroundColor="#fcfcfc"
                    tabBarUnderlineStyle={{backgroundColor: '#3e9ce9',height: 2}}
                    tabBarActiveTextColor="#3e9ce9"
                    tabBarInactiveTextColor="#aaaaaa"
                    >
                    <View tabLabel='我感兴趣的组织'>
                        <View>
                        <View style={styles.interstCom}>
                            <View>
                                <Text style={styles.title}>
                                    我关注的组织
                                </Text>
                            </View>
                            <ScrollView horizontal={true}>
                                <IconBlock
                                    content={'光华园'}
                                    contentSize={12}
                                    height={80}
                                    width={80}
                                    onPress={() => navigate('OneCommunity')}
                                />
                                <IconBlock
                                    content={'党宣'}
                                    contentSize={12}
                                    height={80}
                                    width={80}
                                    onPress={() => navigate('OneCommunity')}
                                />
                            </ScrollView>
                        </View>
                        <View style={styles.interstCom}>
                            <View>
                                <Text style={styles.title}>
                                    最新动态
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
                    </View>
                    <View tabLabel='全部组织'>
                        <CommunityAll 
                            navigation={this.props.navigation}
                        />
                    </View>
                </ScrollableTabView>
            </View>
        );
    }
}

export default connect(
    (state) => ({
        
    }),
    (dispatch) => ({
        
    })
)(Home)
