import React, { Component } from 'react';
import { ScrollView, View, Dimensions, Text, Image, TouchableOpacity, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import styles from './style';
import IconBlock from '../../components/IconBlock';

const { width, height } = Dimensions.get('window');
const DATA = [
    {
        id: 1,
        name: '司徒光',
        ava: 'https://avatars3.githubusercontent.com/u/7374042?s=96&v=4',
    },
    {
        id: 2,
        name: '上官静',
        ava: 'https://avatars0.githubusercontent.com/u/14359427?s=96&v=4',
    },
    {
        id: -1,
        org: '',
        ava: ''
    }
];
const DATA_COMMIT = [
    {
        id: 1,
        name: '公孙离',
        des: '我也不知道说什么了',
        ava: 'https://avatars0.githubusercontent.com/u/124156?s=96&v=4',
        time: '2018-3-15 23:32:12',
    },
    {
        id: 2,
        name: '青岩井',
        des: '我也不知道说什么了',
        ava: 'https://avatars1.githubusercontent.com/u/3919206?s=96&v=4',
        time: '2018-3-15 23:32:12',
    }
]

class OneActivity extends Component {

    static navigationOptions = ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-person" size={30} color={tintColor} />
        ),
    });

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            dataSourceCommit: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
        }
    }

    componentDidMount() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(DATA.slice(0, 5)),
            dataSourceCommit: this.state.dataSourceCommit.cloneWithRows(DATA_COMMIT),
        });
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
                onPress={() => navigate('OneUser')}
            />
        );
    }

    renderCommit = (item) => {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.commit}>
                <TouchableOpacity
                    onPress={() => navigate('OneUser')}
                >
                    <View style={styles.commitHeader}>
                        <Image
                            resizeMode='stretch'
                            style={{ width: 40, height: 40, }}
                            source={{ uri: item.ava }}
                        />
                    </View>
                </TouchableOpacity>
                <View style={styles.commitMessage}>
                    <View>
                        <Text style={styles.commitName}>
                            {item.name}
                        </Text>
                        <Text style={styles.commitWord}>
                            {item.des}
                        </Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={styles.commitTime}>
                            {item.time}
                        </Text>
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
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <ScrollView>
                        <View style={styles.header}>
                            <Image
                                style={{ width: width, height: 200, }}
                                resizeMode='cover'
                                source={require('../../images/back.png')}
                            />
                            <View style={styles.headerText}>
                                <View>
                                    <Text style={styles.activityName}>ES modules</Text>
                                    <Text style={styles.activityTip}>腾骧楼422</Text>
                                    <Text style={styles.activityTip}>2018-3-15 21:38:00</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.section}>
                            <View style={styles.titleBlock}>
                                <Text style={styles.title}>举办者</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => navigate('OneCommunity')}
                            >
                                <View style={[{ flexDirection: 'row', alignItems: 'center' }]}>
                                    <View style={styles.orgHeader}>
                                        <Image
                                            resizeMode='stretch'
                                            style={{ width: 40, height: 40, }}
                                            source={{ uri: 'https://avatars1.githubusercontent.com/u/2621619?s=96&v=4' }}
                                        />
                                    </View>
                                    <Text style={styles.orgName}>光华园</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.section}>
                            <View style={styles.titleBlock}>
                                <Text style={styles.title}>标签</Text>
                            </View>
                            <View style={styles.trendsLabel}>
                                <View style={styles.trendsLabelWrapper}>
                                    <Text style={styles.trendsLabelWord}>第二课堂学分</Text>
                                </View>
                                <View style={styles.trendsLabelWrapper}>
                                    <Text style={styles.trendsLabelWord}>奖金</Text>
                                </View>
                                <View style={styles.trendsLabelWrapper}>
                                    <Text style={styles.trendsLabelWord}>证书</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.section}>
                            <View style={styles.titleBlock}>
                                <Text style={styles.title}>活动简介</Text>
                            </View>
                            <Text>    ES modules bring an official, standardized module system to JavaScript. It took a while to get here, though — nearly 10 years of standardization work.
But the wait is almost over. With the release of Firefox 60 in May (currently in beta), all major browsers will support ES modules, and the Node modules working group is currently working on adding ES module support to Node.js. And ES module integration for WebAssembly is underway as well.
Many JavaScript developers know that ES modules have been controversial. But few actually understand how ES modules work.Let’s take a look at what problem ES modules solve and how they are different from modules in other module systems.</Text>
                        </View>
                        <View style={styles.section}>
                            <View style={styles.titleBlock}>
                                <Text style={styles.title}>他们已参与</Text>
                            </View>
                            <ListView
                                dataSource={this.state.dataSource}
                                renderRow={this.renderItem}
                                horizontal
                            />
                        </View>
                        <View style={styles.section}>
                            <View style={styles.titleBlock}>
                                <Text style={styles.title}>评论</Text>
                                <TouchableOpacity
                                    onPress={() => navigate('Write')}
                                >
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Icon name="md-create" size={15} />
                                        <Text style={styles.more}>我要留言</Text>
                                    </View>
                                </TouchableOpacity>
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
                    <View style={styles.bottomToolbarButton}>
                        <Text>参与</Text>
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
)(OneActivity)
