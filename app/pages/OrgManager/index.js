import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import styles from './style';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import Community from './Community';
import Activity from './Activity';
import Permission from './Permission';

class OrgManager extends Component {

    static navigationOptions = () => ({
        title: '组织管理',
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
                    <View tabLabel='活动管理'>
                        <Activity
                            navigation={this.props.navigation}
                        />
                    </View>
                    <View tabLabel='人员管理'>
                        <Community
                            navigation={this.props.navigation}
                        />
                    </View>
                    <View tabLabel='权限管理'>
                        <Permission
                            navigation={this.props.navigation}
                        />
                    </View>
                </ScrollableTabView>
            </View>
        );
    }
}

export default connect()(OrgManager)
