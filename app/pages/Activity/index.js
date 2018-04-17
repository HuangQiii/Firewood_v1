import React, { Component } from 'react';
import { View, Text, DeviceEventEmitter } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import styles from './style';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import ActivityAll from './ActivityAll';

class Activity extends Component {
    static navigationOptions = () => ({
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-pricetag" size={30} color={tintColor} />
        ),
    });

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        DeviceEventEmitter.addListener(
            'change',
            (num) => { this.changeTo(num); }
        );
    }

    componentDidMount() {
    }

    changeTo(num) {
        setTimeout(() => this.scrollableTabView.goToPage(num), 0);
    }

    render() {
        const { state } = this.props.navigation;
        const type = state.params && state.params.type || 0;
        console.log(type);
        return (
            <View style={styles.container}>
                <ScrollableTabView
                    ref={(ref) => { this.scrollableTabView = ref; }}
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
                    <View tabLabel='猜你喜欢'>
                        <View><Text>like</Text></View>
                    </View>
                    <View tabLabel='最热活动'>
                        <View><Text>hot</Text></View>
                    </View>
                    <View tabLabel='最新活动'>
                        <View><Text>new</Text></View>
                    </View>
                    <View tabLabel='全部活动'>
                        <ActivityAll
                            navigation={this.props.navigation}
                        />
                    </View>
                </ScrollableTabView>
            </View>
        );
    }
}

export default connect()(Activity)
