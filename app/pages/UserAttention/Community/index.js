import React, { Component } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, ListView } from 'react-native';
import { connect } from 'react-redux';
import styles from './style';

const DATA = [
    {
        id: 1,
        name: '光华园',
        des: '学生门户网站',
        ava: 'https://avatars3.githubusercontent.com/u/13383310?s=96&v=4',
    },
    {
        id: 2,
        name: '校团委',
        des: '嗯我也不知道说什么',
        ava: 'https://avatars2.githubusercontent.com/u/4129662?s=96&v=4',
    },
    {
        id: 3,
        name: '舞动青春',
        des: '这好像是个活动',
        ava: 'https://avatars1.githubusercontent.com/u/8046480?s=96&v=4',
    }
];
class Community extends Component {
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
            <View style={styles.orgWrapper}>
                <View style={styles.orgList}>
                    <View style={styles.orgHeader}>
                        <Image
                            resizeMode='stretch'
                            style={{ width: 40, height: 40, }}
                            source={{ uri: item.ava }}
                        />
                    </View>
                    <View style={styles.orgSection}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('OneCommunity')}
                        >
                            <Text style={styles.orgName}>
                                {item.name}
                            </Text>
                            <Text style={styles.orgDes}>
                                {item.des}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.orgBehavior}>
                        <TouchableOpacity
                            onPress={() => alert('关注')}
                        >
                            <View style={styles.orgButton}>
                                <Text style={styles.orgButtonWord}>关注</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    render() {
        return (
            <ScrollView>
                <View style={{ paddingHorizontal: 20 }}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderItem}
                    />
                </View>
            </ScrollView>
        );
    }
}

export default connect()(Community)
