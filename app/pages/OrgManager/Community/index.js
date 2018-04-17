import React, { Component } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, ListView } from 'react-native';
import { connect } from 'react-redux';
import styles from './style';

const DATA = [
    {
        id: 1,
        name: '小明',
        des: '开发部',
        ava: 'https://avatars3.githubusercontent.com/u/13383310?s=96&v=4',
    },
];
class CommunityAll extends Component {

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
                            onPress={() => this.props.navigation.navigate('OneUser')}
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
                                <Text style={styles.orgButtonWord}>授权</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => alert('关注')}
                        >
                            <View style={styles.orgButton}>
                                <Text style={styles.orgButtonWord}>踢出</Text>
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
                    <View style={{ paddingVertical: 15, }}>
                        <Text style={styles.title}>申请列表</Text>
                    </View>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderItem}
                    />
                    <View style={{ paddingVertical: 15, }}>
                        <Text style={styles.title}>组织人员</Text>
                    </View>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderItem}
                    />
                </View>
            </ScrollView>
        );
    }
}

export default connect()(CommunityAll)
