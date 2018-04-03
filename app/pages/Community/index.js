import React, { Component } from 'react';
import { ScrollView, View, Dimensions, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import styles from './style';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import CommunityAll from './CommunityAll';
import CommunityAttention from './CommunityAttention';

const { width, height } = Dimensions.get('window');

class Community extends Component {
    static navigationOptions = ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-people" size={30} color={tintColor} />
        ),
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
                            tabStyle={{ paddingBottom: 0, flex: 1, borderBottom: 0, }}
                            textStyle={{ fontSize: 12 }}
                        />
                    )}
                    tabBarBackgroundColor="#fff"
                    tabBarUnderlineStyle={{ backgroundColor: '#fab614', height: 0 }}
                    tabBarActiveTextColor="#fab614"
                    tabBarInactiveTextColor="#999"
                >
                    <View tabLabel='我感兴趣的组织'>
                        <CommunityAttention
                            navigation={this.props.navigation}
                        />
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
)(Community)
