import React, { Component } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import styles from './style';

const DATA = [
    {
        id: 1,
        name: '人员接纳',
        des: '人员接纳/人员清退/授权管理/发布活动/以组织名义回复/处理组织信息',
        ava: 'https://avatars3.githubusercontent.com/u/13383310?s=96&v=4',
    },
    {
        id: 2,
        name: '人员清退',
        des: '人员接纳/人员清退/授权管理/以组织名义回复/处理组织信息',
        ava: 'https://avatars3.githubusercontent.com/u/13383310?s=96&v=4',
    },
    {
        id: 3,
        name: '以组织名义回复',
        des: '人员接纳/人员清退/以组织名义回复',
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
            }),
            selected: [1],
            roles: [{
                id: 1,
                name: '管理员',
            }],
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
                        <Text style={styles.orgDes}>
                            {item.des}
                        </Text>
                    </View>
                    {/*<View style={styles.orgBehavior}>
                        <TouchableOpacity
                            onPress={() => alert('删除')}
                        >
                            <Icon name="md-close" size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => alert('修改')}
                        >
                            <Icon name="md-settings" size={25} style={{ marginTop: 20 }} />
                        </TouchableOpacity>
                    </View>*/}
                </View>
            </View>
        );
    }

    render() {
        return (
            <ScrollView>
                <View style={{ paddingHorizontal: 20 }}>
                    <View style={{ paddingVertical: 15, flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={styles.title}>已有权限</Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('AddRole')}
                        >
                        <Icon name="md-add" size={20} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 20 }}>
                        {
                            this.state.roles.map((role,i) => (
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('AddRole', { id: role.id })}
                                >
                                    <Text style={{ backgroundColor: '#477aac', color: '#fff', borderRadius: 5, paddingHorizontal: 10, }}>
                                        {role.name}
                                    </Text>
                                </TouchableOpacity>
                            ))
                        }
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

export default connect()(Permission)
