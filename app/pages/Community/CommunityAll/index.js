import React, { Component } from 'react';
import { ScrollView, View, Dimensions, Text, Image, TouchableOpacity, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import styles from './style';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import IconBlock from '../../../components/IconBlock';

const { width, height } = Dimensions.get('window');
const DATA = [
    {
        id:1,
        name:'光华园',
        des:'学生门户网站',
        ava:'https://avatars3.githubusercontent.com/u/13383310?s=96&v=4',
    },
    {
        id:2,
        name:'校团委',
        des:'嗯我也不知道说什么',
        ava:'https://avatars2.githubusercontent.com/u/4129662?s=96&v=4',
    },
    {
        id:3,
        name:'舞动青春',
        des:'这好像是个活动',
        ava:'https://avatars1.githubusercontent.com/u/8046480?s=96&v=4',
    }
];
class CommunityAll extends Component {
    constructor(props){
        super(props);
        this.state={
            dataSource:new ListView.DataSource({
                rowHasChanged:(row1,row2) => row1!==row2,
            })
        }
    }

    componentDidMount() {
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(DATA),
        });
    }

    renderItem = (item) => {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('OneCommunity')}
            >
            <View style={styles.orgWrapper}>
                <View style={styles.orgList}>
                    <View style={styles.orgHeader}>
                        <Image
                            resizeMode='stretch'
                            style={{ width: 40, height: 40, }}
                            source={{uri:item.ava}}
                        />
                    </View>
                    <View style={styles.orgSection}>
                        <Text style={styles.orgName}>
                            {item.name}
                        </Text>
                         <Text style={styles.orgDes}>
                            {item.des}
                        </Text>
                    </View>
                    <View style={styles.orgBehavior}>
                        <View style={styles.orgButton}>
                            <Text style={styles.orgButtonWord}>关注</Text>
                        </View>
                    </View>
                </View>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <ScrollView>
                <View style={{paddingHorizontal:20}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderItem}
                />
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
)(CommunityAll)
