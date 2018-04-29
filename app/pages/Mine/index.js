import React, { Component } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import List from '../../components/List';
import styles from './style';
import { PALETTA } from '../../style/Common';

class Mine extends Component {
    static navigationOptions = () => ({
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-person" size={30} color={tintColor} />
        ),
    });

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={() => navigate('EditMessage')}
                    >
                        <View style={styles.header}>
                            <View style={styles.text}>
                                <View style={{}}>
                                    <Text style={styles.userName}>
                                        张胤东小哥哥
                                    </Text>
                                </View>
                                <View style={{}}>
                                    <Text style={styles.email}>
                                        yindong.zhang@ghy.cn
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.head}>
                                <Image
                                    resizeMode='stretch'
                                    style={{ width: 50, height: 50, }}
                                    source={{ uri: 'https://avatars2.githubusercontent.com/u/12504344?s=96&v=4' }}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.org}>
                        <View style={styles.orgIcon}>
                            <Icon name="md-people" size={30} color={PALETTA.NORMAL_666} />
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('NewOrg')}
                            >
                                <Icon name="md-add" size={20} style={{marginTop:20}} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1 }}>
                            <View style={styles.orgList}>
                                <View style={{ justifyContent: 'center' }}>
                                    <Text style={styles.orgTitle}>我的组织</Text>
                                    <Text style={styles.orgContent}>光华园</Text>
                                </View>
                                <View style={styles.orgSetting}>
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate('OrgManager')}
                                    >
                                        <Icon name="md-settings" size={20} />
                                    </TouchableOpacity>

                                </View>
                            </View>
                            <View style={[styles.orgList, { marginTop: 15, }]}>
                                <View style={{ justifyContent: 'center' }}>
                                    <Text style={styles.orgContent}>Global软件部落</Text>
                                </View>
                                <View style={styles.orgSetting}>
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate('OrgManager')}
                                    >
                                        <Icon name="md-settings" size={20} />
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <View style={styles.titleBlock}>
                            <Text style={styles.title}>我的柴火</Text>
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
                                </View>
                            </TouchableOpacity>
                            {/*<TouchableOpacity
                                onPress={() => navigate('New')}
                            >
                                <View style={[styles.mineBlock, styles.myCreate]}>
                                    <View style={styles.mineText}>
                                        <Text style={{ fontSize: 18, color: '#fff' }}>我的创建</Text>
                                        <Text style={{ fontSize: 12, marginTop: 5, color: '#fff' }}>15 个活动</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>*/}
                        </View>
                    </View>
                    <View style={styles.list}>
                        <List
                            leftIconName={'md-paper-plane'}
                            iconSize={20}
                            text={'消息中心'}
                            listHeight={55}
                            rightIconName={'ios-arrow-forward'}
                            onPress={() => navigate('Information')}
                        />
                        <List
                            leftIconName={'md-share'}
                            iconSize={20}
                            text={'朋友圈'}
                            listHeight={55}
                            rightIconName={'ios-arrow-forward'}
                            borderBottom={false}
                            onPress={() => navigate('Circle')}
                        />
                    </View>
                    <View style={styles.list}>
                        <List
                            leftIconName={'md-mail'}
                            iconSize={20}
                            text={'联系我们'}
                            listHeight={55}
                            rightIconName={'ios-arrow-forward'}
                        />
                        <List
                            leftIconName={'md-paper'}
                            iconSize={20}
                            text={'版本信息'}
                            listHeight={55}
                            rightIconName={'ios-arrow-forward'}
                            borderBottom={false}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default connect()(Mine)
