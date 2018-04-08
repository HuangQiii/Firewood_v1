import React, { Component } from 'react';
import { ScrollView, View, Dimensions, Text, Image, TouchableOpacity, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import List from '../../components/List';
import styles from './style';
import IconBlock from '../../components/IconBlock';

const { width, height } = Dimensions.get('window');

const DATA = [
    {
        id: 1,
        org: '光华园',
        des: '我们要在哪里哪里举办什么什么了，丰厚奖品等你来拿，具体链接请戳。。。',
        time: '2018.3.11 14:00',
        ava: 'https://avatars2.githubusercontent.com/u/10620750?s=96&v=4',
        shareAva: 'https://avatars2.githubusercontent.com/u/14921202?s=96&v=4',
        shareTitle: '影像大赛',
        shareTime: '2011.3.3 15：30',
    },
    {
        id: 2,
        org: '光华园',
        des: 'PPT培训',
        time: '2018.3.11 14:00',
        ava: 'https://avatars2.githubusercontent.com/u/10620750?s=96&v=4',
        shareAva: 'https://avatars0.githubusercontent.com/u/2833137?s=96&v=4',
        shareTitle: 'PPT讲座',
        shareTime: '2011.3.3 15：30',
    },
];

class OneOrg extends Component {

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
        }
    }

    componentDidMount() {
        this.setState({
            dataSourceCommit: this.state.dataSourceCommit.cloneWithRows(DATA),
        });
    }

    renderCommit = (item) => {
        return (
            <View style={styles.trends}>
                <View style={styles.trendsHead}>
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
                                    source={{ uri: 'https://avatars2.githubusercontent.com/u/10620750?s=96&v=4' }}
                                />
                            </View>
                            <View style={styles.headerText}>
                                <Text style={styles.headerName}>光华园</Text>
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
                                    <Text style={styles.trendsLabelWord}>唯一学生门户网站</Text>
                                </View>
                                <View style={styles.trendsLabelWrapper}>
                                    <Text style={styles.trendsLabelWord}>最受热爱</Text>
                                </View>
                                <View style={styles.trendsLabelWrapper}>
                                    <Text style={styles.trendsLabelWord}>活跃</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.section}>
                            <View style={styles.titleBlock}>
                                <Text style={styles.title}>活动简介</Text>
                            </View>
                            <Text>        西班牙有一位乡绅，酷爱骑士小说，终日捧读，手不释卷，最后读昏了头脑，竟异想天开，要去做一名游侠骑士，锄强扶弱，行侠丈义，闯荡天下。他说服村上一位农夫做他的侍从，乘马持予，踏上冒险之途。他屡战屡败，屡败屡战，坚持自己的理想，直到一命归西。</Text>
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
                    <View style={styles.bottomToolbarButton}>
                        <Text>申请加入</Text>
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
)(OneOrg)
