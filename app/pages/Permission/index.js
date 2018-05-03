import React, { Component } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import styles from './style';

const DATA = [
    {
        id: 1,
        name: '人员接纳',
        des: '我是说明说明',
        ava: 'https://avatars3.githubusercontent.com/u/13383310?s=96&v=4',
    },
    {
        id: 2,
        name: '人员清退',
        des: '我是说明说明',
        ava: 'https://avatars3.githubusercontent.com/u/13383310?s=96&v=4',
    },
    {
        id: 3,
        name: '授权管理',
        des: '我是说明说明',
        ava: 'https://avatars3.githubusercontent.com/u/13383310?s=96&v=4',
    },
    {
        id: 1,
        name: '发布活动',
        des: '我是说明说明',
        ava: 'https://avatars3.githubusercontent.com/u/13383310?s=96&v=4',
    },
    {
        id: 2,
        name: '以组织名义回复',
        des: '我是说明说明',
        ava: 'https://avatars3.githubusercontent.com/u/13383310?s=96&v=4',
    },
    {
        id: 3,
        name: '处理组织信息',
        des: '我是说明说明',
        ava: 'https://avatars3.githubusercontent.com/u/13383310?s=96&v=4',
    },
];
class Permission extends Component {

    static navigationOptions = ({ navigation }) => ({
    title: '授权',
    headerRight: (
      <Icon.Button
        name="md-checkmark"
        color={'#000'}
        backgroundColor="transparent"
        underlayColor="transparent"
        activeOpacity={0.8}
        onPress={() => {
          navigation.state.params.handleCheck();
        }}
      />
    )
  });

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
        console.log(item.des.split('/'));
        return (
            <View style={styles.orgWrapper}>
                <View style={styles.orgList}>
                    {/*<View style={styles.orgHeader}>
                        <Image
                            resizeMode='stretch'
                            style={{ width: 40, height: 40, }}
                            source={{ uri: item.ava }}
                        />
                    </View>*/}
                    <View style={styles.orgSection}>
                        <Text style={styles.orgName}>
                            {item.name}
                        </Text>
                        {
                            item.des.split('/').map(permission => (
                                <Text style={styles.orgDes}>
                                    {permission}
                                </Text>
                            ))
                        }
                    </View>
                    <View style={styles.orgBehavior}>
                        <TouchableOpacity
                            onPress={() => alert('修改')}
                        >
                            <Icon name="md-checkmark" size={25} />
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

export default connect()(Permission)
