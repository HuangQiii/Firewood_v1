import React, { Component } from 'react';
import { ScrollView, AppState, View, Dimensions, StyleSheet, Text, Image, TouchableOpacity, ListView, TouchableHighlight, DeviceEventEmitter, NetInfo, NativeModules,FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import styles from './style';
import ScrollableTabView, {ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import System from './System';

const { width, height } = Dimensions.get('window');

class Home extends Component {

    static navigationOptions = ({ navigation }) => ({
        title:'消息中心',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-people" size={30} color={tintColor} />
        ),
    });

    constructor(props){
        super(props);
        this.state={
        }
    }

    componentDidMount() {
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ScrollableTabView
                    initialPage={0}
                    renderTabBar={() => (
                        <ScrollableTabBar
                            tabStyle={{paddingBottom: 0,borderBottom:0,}}
                            textStyle={{fontSize: 12}}
                        />
                    )}
                    tabBarBackgroundColor="#fff"
                    tabBarUnderlineStyle={{backgroundColor: '#fab614',height: 0}}
                    tabBarActiveTextColor="#fab614"
                    tabBarInactiveTextColor="#999"
                    >
                    <View tabLabel='系统信息'>
                        <System
                            navigation={this.props.navigation}
                        />
                    </View>
                    <View tabLabel='个人信息'>
                        <System 
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
