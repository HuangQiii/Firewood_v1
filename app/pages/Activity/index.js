import React, { Component } from 'react';
import { View, Text, DeviceEventEmitter } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import styles from './style';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import ActivityAll from './ActivityAll';

const DATA = [
    {
        id: 1,
        name: '光华园',
        org: '光华园',
        des: '我们要在哪里哪里举办什么什么了，丰厚奖品等你来拿，具体链接请戳。。。',
        time: '2018.3.11 14:00',
    },
    {
        id: 2,
        name: '十佳歌手',
        org: '恩恩恩',
        des: '我们要在哪里哪里举办什么什么了，丰厚奖品等你来拿，具体链接请戳。。。',
        time: '2018.3.11 14:00',
    },
    {
        id: 3,
        name: '舞动青春',
        org: '恩恩恩',
        des: '我们要在哪里哪里举办什么什么了，丰厚奖品等你来拿，具体链接请戳。。。',
        time: '2018.3.11 14:00',
    }
];
class Activity extends Component {
    static navigationOptions = ({ navigation }) => ({
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
        // const { navigate, state } = this.props.navigation;
        // const type = state.params && state.params.type || 0;
        setTimeout(() => this.scrollableTabView.goToPage(num), 0);
    }

    render() {
        const { navigate, state } = this.props.navigation;
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

export default connect(
    (state) => ({
    }),
    (dispatch) => ({
    })
)(Activity)
