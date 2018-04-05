import React, { Component } from 'react';
import { ScrollView, View, Dimensions, Text, Image, TouchableOpacity, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import styles from './style';
import IconBlock from '../../../components/IconBlock';

const { width, height } = Dimensions.get('window');
const DATA = [
    {
        id: 1,
        org: '光华园',
        des: '我们要在哪里哪里举办什么什么了，丰厚奖品等你来拿，具体链接请戳。。。',
        time: '2018.3.11 14:00',
        ava: 'https://avatars1.githubusercontent.com/u/19502297?s=96&v=4',
        shareAva: 'https://avatars2.githubusercontent.com/u/14921202?s=96&v=4',
        shareTitle: '影像大赛',
        shareTime: '2011.3.3 15：30',
    },
    {
        id: 2,
        org: 'GLOBAL软件部落',
        des: 'PPT培训',
        time: '2018.3.11 14:00',
        ava: 'https://avatars3.githubusercontent.com/u/4016839?s=96&v=4',
        shareAva: 'https://avatars0.githubusercontent.com/u/2833137?s=96&v=4',
        shareTitle: 'PPT讲座',
        shareTime: '2011.3.3 15：30',
    },
];
const DATA_COMMUNITY = [
    {
        id: 1,
        org: '光华园',
        ava: 'https://avatars1.githubusercontent.com/u/19502297?s=96&v=4',
    },
    {
        id: 2,
        org: '党宣',
        ava: 'https://avatars3.githubusercontent.com/u/5959286?s=96&v=4',
    },
    {
        id: -1,
        org:'',
        ava:''
    }
];
class CommunityAttention extends Component {
    static navigationOptions = ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-people" size={30} color={tintColor} />
        ),
    });

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            dataSourceCommunity: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            })
        }
    }

    componentDidMount() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(DATA.slice(0,5)),
            dataSourceCommunity: this.state.dataSourceCommunity.cloneWithRows(DATA_COMMUNITY),
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

    renderCommunity = (item) => {
        const { navigate } = this.props.navigation;
        let icon = item.id === -1 ? 'ios-more' : '';
        return (
            <IconBlock
                content={item.org}
                contentSize={14}
                height={80}
                width={80}
                icon={icon}
                ava={item.ava}
                onPress={() => {
                    if(item.id === -1){
                        navigate('Attention')
                    }else{
                        navigate('OneCommunity')
                    }
                }}
            />
        );
    }

    render() {
        return (
            <ScrollView>
                <View>
                    <View style={styles.section}>
                        <View style={styles.titleBlock}>
                            <Text style={styles.title}>
                                我关注的组织
                            </Text>
                        </View>
                        <ListView
                            dataSource={this.state.dataSourceCommunity}
                            renderRow={this.renderCommunity}
                            horizontal
                        />
                    </View>
                    <View style={styles.section}>
                        <View style={styles.titleBlock}>
                            <Text style={styles.title}>
                                最新动态
                            </Text>
                        </View>
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
)(CommunityAttention)
