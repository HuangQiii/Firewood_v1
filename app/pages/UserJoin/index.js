import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import styles from './style';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import Community from './Community';
import Activity from './Activity';

class UserJoin extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: '我的参与',
    });

    constructor(props) {
        super(props);
        this.state = {
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
                            tabStyle={{ paddingBottom: 0, borderBottomWidth: 0, }}
                            textStyle={{ fontSize: 12 }}
                        />
                    )}
                    tabBarBackgroundColor="#fff"
                    tabBarUnderlineStyle={{ backgroundColor: '#fab614', height: 0 }}
                    tabBarActiveTextColor="#fab614"
                    tabBarInactiveTextColor="#999"
                >
                    <View tabLabel='活动'>
                        <Activity
                            navigation={this.props.navigation}
                        />
                    </View>
                    <View tabLabel='组织'>
                        <Community
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
)(UserJoin)
