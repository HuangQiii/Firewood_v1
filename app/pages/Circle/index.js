import React, { Component } from 'react';
import { ScrollView, AppState, View, Dimensions, StyleSheet, Text, Image, TouchableOpacity, ListView, TouchableHighlight, DeviceEventEmitter, NetInfo, NativeModules,FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import styles from './style';
import ScrollableTabView, {ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import IconBlock from '../../components/IconBlock';

const { width, height } = Dimensions.get('window');
const DATA = [
    {
        id:1,
        org:'光华园',
        des:'我们要在哪里哪里举办什么什么了，丰厚奖品等你来拿，具体链接请戳。。。',
        time:'2018.3.11 14:00',
        ava:'https://avatars1.githubusercontent.com/u/19502297?s=96&v=4',
        shareAva:'https://avatars2.githubusercontent.com/u/14921202?s=96&v=4',
        shareTitle:'影像大赛',
        shareTime:'2011.3.3 15：30',
    },
    {
        id:2,
        org:'GLOBAL软件部落',
        des:'PPT培训',
        time:'2018.3.11 14:00',
        ava:'https://avatars3.githubusercontent.com/u/4016839?s=96&v=4',
        shareAva:'https://avatars0.githubusercontent.com/u/2833137?s=96&v=4',
        shareTitle:'PPT讲座',
        shareTime:'2011.3.3 15：30',
    },
];

class Home extends Component {

    static navigationOptions = ({ navigation }) => ({
        title:'朋友圈',
    });

    constructor(props){
        super(props);
        this.state={
            dataSource:new ListView.DataSource({
                rowHasChanged:(row1,row2)=>row1!==row2,
            }),
        }
    }

    componentDidMount() {
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(DATA),
        });
    }

    renderItem = (item) => {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.trends}>
                <View style={styles.trendsHead}>
                    <Image
                        resizeMode='stretch'
                        style={{ width: 40, height: 40, }}
                        source={{ uri: item.ava }}
                    />
                </View>
                <View style={styles.trendsRight}>
                    <View style={styles.trendsTitleBlock}>
                        <Text style={styles.trendsTitleLink}>
                            {item.org}
                        </Text>
                        <Text style={styles.trendsTitleNormal}>
                            分享活动
                            </Text>
                    </View>
                    <Text style={styles.trendsTime}>
                        {item.time}
                    </Text>
                    <Text style={styles.trendsDes}>
                        {item.des}
                    </Text>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('OneActivity')}
                    >
                        <View style={styles.trendsShare}>
                            <View>
                                <Image
                                    resizeMode='stretch'
                                    style={{ width: 40, height: 40, marginRight: 10, }}
                                    source={{ uri: item.shareAva }}
                                />
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={styles.trendsShareTitle}>{item.shareTitle}</Text>
                                <Text style={styles.trendsShareTip}>{item.shareTime}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.trendsToolBlock}>
                        <View style={styles.trendToolLi}>
                            <Icon name="md-text" size={15} />
                            <Text style={styles.trendsTool}>
                                0
                            </Text>
                        </View>
                        <View style={styles.trendToolLi}>
                            <Icon name="md-thumbs-up" size={15} />
                            <Text style={styles.trendsTool}>
                                0
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <View>
                    <View style={styles.section}>
                        <View>
                            <ListView
                                dataSource={this.state.dataSource}
                                renderRow={this.renderItem}
                            />
                        </View>
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
)(Home)
