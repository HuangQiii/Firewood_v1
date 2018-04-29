import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import styles from './style';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import System from './System';

class Information extends Component {

    static navigationOptions = () => ({
        title: '消息中心',
    });

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollableTabView
                    initialPage={0}
                    renderTabBar={() => (
                        <ScrollableTabBar
                            tabStyle={{ paddingBottom: 0, borderBottomWidth: 0, }}
                            textStyle={{ fontSize: 12 }}
                        />
                    )}
                    tabBarBackgroundColor="#fff"
                    tabBarUnderlineStyle={{ backgroundColor: '#fab614', height: 0 }}
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
                    <View tabLabel='组织信息'>
                        <System
                            navigation={this.props.navigation}
                        />
                    </View>
                </ScrollableTabView>
            </View>
        );
    }
}

export default connect()(Information)
