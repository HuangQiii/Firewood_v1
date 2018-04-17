import React, { Component } from 'react';
import { ScrollView, View, Dimensions, Text, Image, TouchableOpacity, ListView} from 'react-native';
import { connect } from 'react-redux';
import styles from './style';

const { width } = Dimensions.get('window');
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
                    </View>
                </View>
            </View>
        );
    }

    render() {
        return (
            <ScrollView>
                <View style={{ height: 50, width: width, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('NewActivity')}
                    >
                        <View style={{ paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#477aac', borderRadius: 4, }}>
                            <Text style={{ fontSize: 14, color: '#fff' }}>新建活动</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderItem}
                />
            </ScrollView>
        );
    }
}

export default connect()(Activity)
