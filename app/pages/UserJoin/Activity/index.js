import React, { Component } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import styles from './style';

const DATA = [
    {
        id: 1,
        org: '光华园',
        ava: 'https://avatars3.githubusercontent.com/u/6759417?s=96&v=4',
        name: '影像大赛',
        time: '2018.3.11 14:00',
        place: '经世楼A422',
        des: '我们要在哪里哪里举办什么什么了，丰厚奖品等你来拿，具体链接请戳。。。',
        orgAva: 'https://avatars3.githubusercontent.com/u/3192087?s=96&v=4',
    },
    {
        id: 2,
        org: '森林音乐社',
        ava: 'https://avatars2.githubusercontent.com/u/5773264?s=96&v=4',
        name: '草坪音乐节',
        time: '2018.3.11 14:00',
        place: '情人坡',
        des: '最原始的歌声，给最可爱的你',
        orgAva: 'https://avatars2.githubusercontent.com/u/25194050?s=96&v=4',
    },
    {
        id: 3,
        org: '忘了什么组织',
        ava: 'https://avatars0.githubusercontent.com/u/131524?s=96&v=4',
        name: '十佳歌手',
        time: '2018.3.11 14:00',
        place: '经世楼A422',
        des: '听歌了听歌了',
        orgAva: 'https://avatars2.githubusercontent.com/u/1007353?s=96&v=4',
    },
    {
        id: 4,
        org: '经济信息工程学院',
        ava: 'https://avatars2.githubusercontent.com/u/25238911?s=96&v=4',
        name: '科技节',
        time: '2018.3.11 14:00',
        place: '经世楼F101',
        des: 'Hello，world',
        orgAva: 'https://avatars2.githubusercontent.com/u/993323?s=96&v=4',
    },
];

class Activity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            })
        }
    }

    componentDidMount() {
        this.initData();
    }

    initData() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(DATA),
        });
    }

    renderItem = (item) => {
        return (
            <View style={styles.trendsBorder}>
                <View style={styles.trends}>
                    <View style={styles.trendsLeft}>
                        <View style={styles.trendsHead}>
                            <Image
                                resizeMode='stretch'
                                style={{ width: 80, height: 80, }}
                                source={{ uri: item.ava }}
                            />
                        </View>
                        <View style={styles.trendsOrg}>
                            <View style={styles.trendsOrgHead}>
                                <Image
                                    resizeMode='stretch'
                                    style={{ width: 20, height: 20, }}
                                    source={{ uri: item.orgAva }}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text
                                    style={styles.trendsOrgName}
                                    numberOfLines={3}
                                >
                                    {item.org}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.trendsRight}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('OneActivity')}
                        >
                            <View style={styles.trendsTitleBlock}>
                                <Text style={styles.trendsTitleLink}>
                                    {item.name}
                                </Text>
                            </View>
                            <Text style={styles.trendsPlace}>
                                {item.place}
                            </Text>
                            <Text style={styles.trendsTime}>
                                {item.time}
                            </Text>
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
                            <Text style={styles.trendsDes}>
                                {item.des}
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.trendsToolBlock}>
                            <TouchableOpacity
                                onPress={() => alert('eye')}
                            >
                                <View style={styles.trendToolLi}>
                                    <Icon name="md-eye" size={15} />
                                    <Text style={styles.trendsTool}>
                                        88
                                </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => alert('share')}
                            >
                                <View style={styles.trendToolLi}>
                                    <Icon name="md-share" size={15} />
                                    <Text style={styles.trendsTool}>
                                        88
                                </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    render() {
        return (
            <ScrollView>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderItem}
                />
            </ScrollView>
        );
    }
}

export default connect()(Activity)
