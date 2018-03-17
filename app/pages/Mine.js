import React, { Component } from 'react';
import { ScrollView, AppState, View, Dimensions, StyleSheet, Text, Image, TouchableOpacity, ListView, TouchableHighlight, DeviceEventEmitter, NetInfo, NativeModules,FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import List from '../components/List';
import styles from '../style/Mine';

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
                    <View style={styles.text}>
                        <View style={{}}>
                            <Text style={styles.userName}>
                                张胤东小哥哥
                            </Text>
                        </View>
                        <View style={{}}>
                            <Text style={styles.email}>
                                yindong.zhang@ghy.cn
                            </Text>
                        </View>
                    </View>
                    <View style={styles.head}>
                        <Image
                            resizeMode='stretch'
                            style={{ width: 60, height: 60, }}
                            source={{uri:'http://img.zcool.cn/community/04f92b57a1f38f0000012e7e0180f0.jpg@80w_80h_1c_1e_1o_100sh.jpg'}}
                        />
                    </View>
                </View>
                <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('OneCommunity')}
                >
                    <View style={styles.placeholder}>
                        <View style={styles.placeholderIcon}>
                            <Icon name="md-people" size={30} color={'#000'} />
                        </View>
                        <View>
                            <Text>我的组织</Text>
                            <Text>光华园</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.split}></View>
                <View style={styles.mainMine}>
                    <View>
                        <Text style={styles.title}>我的柴火</Text>
                    </View>
                    <View style={styles.mainMineArea}>
                        <TouchableOpacity
                            onPress={()=>navigate('New')}
                        >
                            <View style={styles.mainMineBlock}>
                                <View style={styles.mainMineBlockText}>
                                    <Text style={{fontSize:18}}>我的创建</Text>
                                    <Text style={{fontSize:12,marginTop:20,}}>15 个活动</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>navigate('Attention')}
                        >
                            <View style={styles.mainMineBlock}>
                                <View style={styles.mainMineBlockText}>
                                    <Text style={{fontSize:18}}>我的关注</Text>
                                    <Text style={{fontSize:12,marginTop:20,}}>15 个活动</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>navigate('Join')}
                        >
                            <View style={styles.mainMineBlock}>
                                <View style={styles.mainMineBlockText}>
                                    <Text style={{fontSize:18}}>我的参与</Text>
                                    <Text style={{fontSize:12,marginTop:20,}}>15 个活动</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.split}></View>
                <View style={styles.list}>
                    <List
                        leftIconName={'md-settings'}
                        iconSize={20}
                        text={'我的消息'}
                        listHeight={55}
                        rightIconName={'ios-arrow-forward'}
                    />
                    <List
                        leftIconName={'md-paper-plane'}
                        iconSize={20}
                        text={'联系我们'}
                        listHeight={55}
                        rightIconName={'ios-arrow-forward'}
                    />
                    <List
                        leftIconName={'md-paper'}
                        iconSize={20}
                        text={'版本信息'}
                        listHeight={55}
                        rightIconName={'ios-arrow-forward'}
                    />
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
