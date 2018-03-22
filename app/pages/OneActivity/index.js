import React, { Component } from 'react';
import { ScrollView, AppState, View, Dimensions, StyleSheet, Text, Image, TouchableOpacity, ListView, TouchableHighlight, DeviceEventEmitter, NetInfo, NativeModules,FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import List from '../../components/List';
import styles from './style';
import IconBlock from '../../components/IconBlock';

const { width, height } = Dimensions.get('window');
const DATA = [
    {
        id:1,
        name:'司徒光',
        ava:'https://avatars3.githubusercontent.com/u/7374042?s=96&v=4',
    },
    {
        id:2,
        name:'上官静',
        ava:'https://avatars0.githubusercontent.com/u/14359427?s=96&v=4',
    },
];
const DATA_COMMIT = [
    {
        id:1,
        name:'公孙离',
        des:'我也不知道说什么了',
        ava:'https://avatars0.githubusercontent.com/u/124156?s=96&v=4',
        time:'2018-3-15 23:32:12',
    },
    {
        id:2,
        name:'青岩井',
        des:'我也不知道说什么了',
        ava:'https://avatars1.githubusercontent.com/u/3919206?s=96&v=4',
        time:'2018-3-15 23:32:12',
    }
]
class Mine extends Component {

    static navigationOptions = ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-person" size={30} color={tintColor} />
        ),
    });

    constructor(props){
        super(props);
        this.state={
            dataSource:new ListView.DataSource({
                rowHasChanged:(row1,row2)=>row1!==row2,
            }),
            dataSourceCommit:new ListView.DataSource({
                rowHasChanged:(row1,row2)=>row1!==row2,
            }),
        }
    }

    componentDidMount() {
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(DATA),
            dataSourceCommit:this.state.dataSourceCommit.cloneWithRows(DATA_COMMIT),
        });
    }

    renderItem = (item) => {
        const { navigate } = this.props.navigation;
        return (
            <IconBlock
                content={item.name}
                contentSize={14}
                height={80}
                width={80}
                ava={item.ava}
                onPress={() => navigate('OneCommunity')}
            />
        );
    }

    renderCommit = (item) => {
        return (
            <View style={styles.commit}>
                <View style={styles.commitHeader}>
                    <Image
                        resizeMode='stretch'
                        style={{ width: 40, height: 40, }}
                        source={{uri:item.ava}}
                    />
                </View>
                <View style={styles.commitMessage}>
                    <View>
                        <Text style={styles.commitName}>
                            {item.name}
                        </Text>
                        <Text style={styles.commitWord}>
                            {item.des}
                        </Text>
                    </View>
                    <View style={{}}>
                        <Text style={styles.commitTime}>
                            {item.time}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Image
                            style={{width:width,height:200,}}
                            resizeMode = 'cover'
                            source={require('../../images/back.png')}
                        />
                        <View style={styles.headerText}>
                            <View>
                                <Text style={styles.activityName}>日常哈啤</Text>
                                <Text style={styles.activityTip}>腾骧楼422</Text>
                                <Text style={styles.activityTip}>2018-3-15 21:38:00</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.section,{flexDirection:'row'}]}>
                        <View style={styles.btnBlock}>
                            <View style={{paddingHorizontal:10,paddingVertical:5,backgroundColor:'#477aac',borderRadius:4,}}>
                                <Text style={{fontSize:14,color:'#fff'}}>我要关注</Text>
                            </View>
                        </View>
                        <View style={styles.btnBlock}>
                            <View style={{paddingHorizontal:10,paddingVertical:5,backgroundColor:'#477aac',borderRadius:4,}}>
                                <Text style={{fontSize:14,color:'#fff'}}>我要参与</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <View style={styles.titleBlock}>
                            <Text style={styles.title}>举办者</Text>
                        </View>
                        <View style={[{flexDirection:'row',alignItems:'center'}]}>
                            <View style={styles.orgHeader}>
                                <Image
                                    resizeMode='stretch'
                                    style={{ width: 40, height: 40, }}
                                    source={{uri:'https://avatars1.githubusercontent.com/u/2621619?s=96&v=4'}}
                                />
                            </View>
                            <Text style={styles.orgName}>光华园</Text>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <View style={styles.titleBlock}>
                            <Text style={styles.title}>标签</Text>
                        </View>
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
                    </View>
                    <View style={styles.section}>
                        <View style={styles.titleBlock}>
                            <Text style={styles.title}>活动简介</Text>
                        </View>
                        <Text>    假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介，假装我是简介。</Text>
                    </View>
                    <View style={styles.section}>
                        <View style={styles.titleBlock}>
                            <Text style={styles.title}>他们已参与</Text>
                        </View>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this.renderItem}
                            horizontal
                        />
                    </View>
                    <View style={styles.section}>
                        <View style={styles.titleBlock}>
                            <Text style={styles.title}>评论</Text>
                        </View>
                        <ListView
                            dataSource={this.state.dataSourceCommit}
                            renderRow={this.renderCommit}
                        />
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
)(Mine)