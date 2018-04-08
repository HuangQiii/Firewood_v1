import React, { Component } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import styles from './style';
import IconBlock from '../../components/IconBlock';

const DATA_ORG = [
    {
        id: 1,
        name: '光华园',
        ava: 'https://avatars1.githubusercontent.com/u/6078720?s=96&v=4',
    },
    {
        id: 2,
        name: '森林音乐社',
        ava: 'https://avatars3.githubusercontent.com/u/17189275?s=96&v=4',
    },
    {
        id: -1,
        org: '',
        ava: ''
    }
];
const DATA = [
    {
        id: 1,
        org: '潘入杨',
        des: '。。。',
        time: '2018.3.11 14:00',
        ava: 'https://avatars2.githubusercontent.com/u/10620750?s=96&v=4',
        shareAva: 'https://avatars2.githubusercontent.com/u/14921202?s=96&v=4',
        shareTitle: '影像大赛',
        shareTime: '2011.3.3 15：30',
    },
    {
        id: 2,
        org: '潘入杨',
        des: '。。。',
        time: '2018.3.11 14:00',
        ava: 'https://avatars2.githubusercontent.com/u/10620750?s=96&v=4',
        shareAva: 'https://avatars0.githubusercontent.com/u/2833137?s=96&v=4',
        shareTitle: 'PPT讲座',
        shareTime: '2011.3.3 15：30',
    },
];

class OneUser extends Component {
    static navigationOptions = ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-person" size={30} color={tintColor} />
        ),
    });

    constructor(props) {
        super(props);
        this.state = {
            dataSourceCommit: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
        }
    }

    componentDidMount() {
        this.setState({
            dataSourceCommit: this.state.dataSourceCommit.cloneWithRows(DATA),
            dataSource: this.state.dataSource.cloneWithRows(DATA_ORG.slice(0,5)),
        });
    }

    renderCommit = (item) => {
        return (
            <View style={styles.trends}>
                <View style={styles.trendsHead}>
                    {/*<Image
                            resizeMode='stretch'
                            style={{ width: 40, height: 40, }}
                            source={{uri:item.ava}}
                        />*/}
                    <Text style={{ fontSize: 32 }}>22</Text>
                    <Text>3月</Text>
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

    renderItem = (item) => {
        const { navigate } = this.props.navigation;
        let icon = item.id === -1 ? 'ios-more' : '';
        return (
            <IconBlock
                content={item.name}
                contentSize={14}
                height={80}
                width={80}
                icon={icon}
                ava={item.ava}
                onPress={() => navigate('OneCommunity')}
            />
        );
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <ScrollView>
                        <View style={styles.header}>
                            <View style={{ width: 80, height: 80, borderRadius: 40, overflow: 'hidden' }}>
                                <Image
                                    style={{ width: 80, height: 80, }}
                                    resizeMode='cover'
                                    source={{ uri: 'https://avatars3.githubusercontent.com/u/36260787?s=96&v=4' }}
                                />
                            </View>
                            <View style={styles.headerText}>
                                <Text style={styles.headerName}>潘入杨</Text>
                            </View>
                        </View>
                        <View style={[styles.section, { justifyContent: 'center', alignItems: 'center' }]}>
                            <TouchableOpacity
                                onPress={() => navigate('Write')}
                            >
                                <View style={{ paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#477aac', borderRadius: 4, }}>
                                    <Text style={{ fontSize: 14, color: '#fff' }}>给他留言</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.section}>
                            <View style={styles.titleBlock}>
                                <Text style={styles.title}>标签</Text>
                            </View>
                            <View style={styles.trendsLabel}>
                                <View style={styles.trendsLabelWrapper}>
                                    <Text style={styles.trendsLabelWord}>活动终结者</Text>
                                </View>
                                <View style={styles.trendsLabelWrapper}>
                                    <Text style={styles.trendsLabelWord}>光华园开发部成员</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.section}>
                            <View style={styles.titleBlock}>
                                <Text style={styles.title}>活动简介</Text>
                            </View>
                            <Text>    潘入杨啊，就是那个潘入杨，嗯，字面意思。</Text>
                        </View>
                        <View style={styles.section}>
                            <View style={styles.titleBlock}>
                                <Text style={styles.title}>他的关注</Text>
                            </View>
                            <ListView
                                dataSource={this.state.dataSource}
                                renderRow={this.renderItem}
                                horizontal
                            />
                        </View>
                        <View style={styles.section}>
                            <View style={styles.titleBlock}>
                                <Text style={styles.title}>动态</Text>
                            </View>
                            <ListView
                                dataSource={this.state.dataSourceCommit}
                                renderRow={this.renderCommit}
                            />
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.bottomToolbar}>
                    <View style={styles.bottomToolbarButton}>
                        <Text>关注</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default connect(
    (state) => ({
    }),
    (dispatch) => ({
    })
)(OneUser)
