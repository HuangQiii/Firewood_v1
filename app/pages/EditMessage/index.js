import React, { Component } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import List from '../../components/List';
import styles from './style';

class EditMessage extends Component {

    static navigationOptions = () => ({
        title: '修改个人信息',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-person" size={30} color={tintColor} />
        ),
    });

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={styles.wrap}>
                            <View style={styles.text}>
                                <Text style={styles.title}>头像</Text>
                            </View>
                            <View style={styles.head}>
                                <Image
                                    resizeMode='stretch'
                                    style={{ width: 50, height: 50, }}
                                    source={{ uri: 'https://avatars2.githubusercontent.com/u/12504344?s=96&v=4' }}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.list}>
                        <List
                            iconSize={20}
                            text={'昵称'}
                            listHeight={55}
                            content={'Qyellow'}
                            onPress={() => {
                                navigate('EditProp', 
                                    { 
                                        prop: 'pickName',
                                        value: 'Qyellow',
                                        title: '昵称' ,
                                        placeholder: '请输入昵称',
                                    })
                                }
                            }
                        />
                        <List
                            iconSize={20}
                            text={'真实姓名'}
                            listHeight={55}
                            onPress={() => {
                                navigate('EditProp', 
                                    { 
                                        prop: 'realName',
                                        value: '',
                                        title: '真实姓名' ,
                                        placeholder: '请输入真实姓名',
                                    })
                                }
                            }
                        />
                        <List
                            iconSize={20}
                            text={'邮箱'}
                            listHeight={55}
                            onPress={() => {
                                navigate('EditProp', 
                                    { 
                                        prop: 'email',
                                        value: '',
                                        title: '邮箱' ,
                                        placeholder: '请输入邮箱',
                                    })
                                }
                            }
                        />
                        <List
                            iconSize={20}
                            text={'性别'}
                            listHeight={55}
                            onPress={() => {
                                navigate('EditProp', 
                                    { 
                                        prop: 'sex',
                                        value: '',
                                        title: '性别' ,
                                        placeholder: '请输入性别',
                                    })
                                }
                            }
                        />
                        <List
                            iconSize={20}
                            text={'专业'}
                            listHeight={55}
                            borderBottom={false}
                            onPress={() => {
                                navigate('EditProp', 
                                    { 
                                        prop: 'emmmm',
                                        value: '',
                                        title: '专业' ,
                                        placeholder: '请输入专业',
                                    })
                                }
                            }
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default connect()(EditMessage)
