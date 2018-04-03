import React, { Component } from 'react';
import { ScrollView, View, Dimensions, Text, Image, TouchableOpacity, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import styles from './style';

const { width, height } = Dimensions.get('window');
const DATA_NEWEST = [
    {
        id: 1,
        name: '影像大赛',
        org: '光华园',
        des: '经世楼A412',
        time: '2018.3.11 14:00',
        url: 'https://avatars0.githubusercontent.com/u/12101536?s=96&v=4',
    },
    {
        id: 2,
        name: '十佳歌手',
        org: '恩恩恩',
        des: '800人厅',
        time: '2018.3.11 14:00',
        url: 'https://avatars0.githubusercontent.com/u/10183022?s=96&v=4',
    },
    {
        id: 3,
        name: '舞动青春',
        org: '恩恩恩',
        des: '800人厅',
        time: '2018.3.11 14:00',
        url: 'https://avatars2.githubusercontent.com/u/8085?s=96&v=4',
    }
];
const DATA_POPULAR = [
    {
        id: 1,
        name: '科技节',
        org: '经济信息工程学院',
        des: '经世楼A412',
        time: '2018.3.11 14:00',
        url: 'https://avatars0.githubusercontent.com/u/23534644?s=96&v=4',
    },
    {
        id: 2,
        name: '荧光夜跑',
        org: '我也不知道谁办的',
        des: '学超前',
        time: '2018.3.11 14:00',
        url: 'https://avatars2.githubusercontent.com/u/24823891?s=96&v=4',
    },
    {
        id: 3,
        name: '运动会',
        org: '体育办',
        des: '体育场',
        time: '2018.3.11 14:00',
        url: 'https://avatars2.githubusercontent.com/u/227909?s=96&v=4',
    }
];

class Home extends Component {
    static navigationOptions = ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-home" size={30} color={tintColor} />
        ),
    });

    constructor(props) {
        super(props);
        this.state = {
            dataSourceNew: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            dataSourcePopular: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            })
        }
    }

    componentDidMount() {
        this.getListViewData();
    }

    getListViewData() {
        this.setState({
            dataSourceNew: this.state.dataSourceNew.cloneWithRows(DATA_NEWEST),
            dataSourcePopular: this.state.dataSourcePopular.cloneWithRows(DATA_POPULAR),
        });
    }

    renderItem = (item) => {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('OneActivity')}
            >
                <View style={styles.card}>
                    <View style={styles.cardTitleBlock}>
                        <Text style={styles.cardTitle}>
                            {item.name}
                        </Text>
                    </View>
                    <View style={styles.cardMessage}>
                        <View>
                            <Text style={styles.cardWord}>
                                {item.des}
                            </Text>
                            <Text style={styles.cardWord}>
                                {item.time}
                            </Text>
                        </View>
                        <View style={styles.cardHead}>
                            <Image
                                resizeMode='stretch'
                                style={{ width: 20, height: 20, }}
                                source={{ uri: item.url }}
                            />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={styles.headerTitle}>
                            <Text style={styles.headerTime}>
                                3月11日,星期日
                            </Text>
                            <Text style={styles.headerLogo}>
                                柴火
                            </Text>
                        </View>
                        <View style={styles.headerHead}>
                            <TouchableOpacity
                                onPress={() => navigate('Mine')}
                            >
                                <Image
                                    resizeMode='stretch'
                                    style={{ width: 50, height: 50, }}
                                    source={{ uri: 'https://avatars2.githubusercontent.com/u/12504344?s=96&v=4' }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.banner}>
                        <Image
                            style={{ width: width, height: 200, }}
                            resizeMode='cover'
                            source={require('../../images/banner.png')}
                        />
                    </View>
                    <View style={styles.section}>
                        <View style={styles.titleBlock}>
                            <Text style={styles.title}>我的</Text>
                        </View>
                        <View style={styles.mine}>
                            <TouchableOpacity
                                onPress={() => navigate('Attention')}
                            >
                                <View style={[styles.mineBlock, styles.myAttention]}>
                                    <View style={styles.mineText}>
                                        <Text style={{ fontSize: 18, color: '#fff' }}>我的关注</Text>
                                        <Text style={{ fontSize: 12, marginTop: 5, color: '#fff' }}>15 个活动</Text>
                                    </View>
                                    <View style={styles.mineIcon}>
                                        <Icon
                                            name={'md-star-outline'}
                                            size={50}
                                            color={'#fff'}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => navigate('Join')}
                            >
                                <View style={[styles.mineBlock, styles.myJoin]}>
                                    <View style={styles.mineText}>
                                        <Text style={{ fontSize: 18, color: '#fff' }}>我的参与</Text>
                                        <Text style={{ fontSize: 12, marginTop: 5, color: '#fff' }}>15 个活动</Text>
                                    </View>
                                    <View style={styles.mineIcon}>
                                        <Icon
                                            name={'md-text'}
                                            size={50}
                                            color={'#fff'}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <View style={styles.titleBlock}>
                            <Text style={styles.title}>最新活动</Text>
                            <TouchableOpacity
                                onPress={() => navigate('Activity')}
                            >
                                <Text style={styles.more}>全部</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <ListView
                                dataSource={this.state.dataSourceNew}
                                renderRow={this.renderItem}
                                horizontal
                            />
                        </View>
                    </View>
                    <View style={styles.section}>
                        <View style={styles.titleBlock}>
                            <Text style={styles.title}>最热活动</Text>
                            <TouchableOpacity
                                onPress={() => navigate('Activity')}
                            >
                                <Text style={styles.more}>全部</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <ListView
                                dataSource={this.state.dataSourcePopular}
                                renderRow={this.renderItem}
                                horizontal
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

