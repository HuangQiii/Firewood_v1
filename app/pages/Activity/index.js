import React, { Component } from 'react';
import { ScrollView, View, Dimensions, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import styles from './style';
import ScrollableTabView, {ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import ActivityAll from './ActivityAll';

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
class Activity extends Component {
    static navigationOptions = ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-pricetag" size={30} color={tintColor} />
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
                    <View tabLabel='猜你喜欢'>
                        <ActivityAll
                            navigation={this.props.navigation}
                        />
                    </View>
                    <View tabLabel='最热活动'>
                        <ActivityAll
                            navigation={this.props.navigation}
                        />
                    </View>
                    <View tabLabel='最新活动'>
                        <ActivityAll
                            navigation={this.props.navigation}
                        />
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
