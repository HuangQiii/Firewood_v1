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
    },
    {
        id: 2,
        name: '人员清退',
        des: '我是说明说明',
    },
    {
        id: 3,
        name: '授权管理',
        des: '我是说明说明',
    },
    {
        id: 4,
        name: '发布活动',
        des: '我是说明说明',
    },
    {
        id: 5,
        name: '以组织名义回复',
        des: '我是说明说明',
    },
    {
        id: 6,
        name: '处理组织信息',
        des: '我是说明说明',
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
            }),
            selected: [1],
            role: [],
        }
    }

    componentDidMount() {
        this.initData();
        this.props.navigation.setParams({ handleCheck: this.onActionSelected });
    }

    onActionSelected = () => {
        alert(this.state.selected);
    }

    initData() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(DATA),
        });
    }

    renderItem(item) {
        const index = this.state.selected.indexOf(item.id);
        const isSelected = index !== -1;
        return (
            <View style={styles.orgWrapper}>
                <TouchableOpacity
                    onPress={() => {
                        if (isSelected) {
                            const selected = this.state.selected.slice();
                            selected.splice(index, 1);
                            this.setState({
                                selected,
                            });
                        } else {
                            const selected = this.state.selected.slice();
                            selected.push(item.id);
                            this.setState({
                                selected,
                            });
                        }
                    }}
                >
                    <View style={[styles.orgList, isSelected ? styles.orgListSelected : '']}>
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
                            {
                                isSelected && <Icon name="md-checkmark" size={25} />
                            }
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
            <ScrollView>
                <View style={{ paddingHorizontal: 20 }}>
                    <View style={{ paddingVertical: 15, flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={styles.title}>给该角色授权</Text>
                    </View>
                    <View style={styles.orgWrapper}>
                        <View style={styles.orgList}>
                            <View style={styles.orgHeader}>
                                <Image
                                    resizeMode='stretch'
                                    style={{ width: 40, height: 40, }}
                                    source={{ uri: 'https://avatars3.githubusercontent.com/u/13383310?s=96&v=4' }}
                                />
                            </View>
                            <View style={styles.orgSection}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('OneUser')}
                                >
                                    <Text style={styles.orgName}>
                                        {'user1'}
                                    </Text>
                                    <Text style={styles.orgDes}>
                                        {'user'}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.trendsLabel}>
                        {
                            this.state.roles.map((role,i) => (
                                <Text>{role}</Text>
                            ))
                        }
                    </View>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderItem.bind(this)}
                    />
                </View>
            </ScrollView>
        );
    }
}

export default connect()(Permission)
