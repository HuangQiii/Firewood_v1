import React, { Component } from 'react';
import { ScrollView, AppState, View, Dimensions, StyleSheet, Text, Image, TouchableOpacity, ListView, TouchableHighlight, DeviceEventEmitter, NetInfo, NativeModules,FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import styles from './style';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import IconBlock from '../../../components/IconBlock';

let CONNECT_BOOL;
const { width, height } = Dimensions.get('window');
const DATA = [
    {
        id:1,
        name:'光华园',
        des:'学生门户网站',
        ava:'https://avatars3.githubusercontent.com/u/13383310?s=96&v=4',
    },
];
class CommunityAll extends Component {

    constructor(props){
        super(props);
        this.state={
            dataSource:new ListView.DataSource({
                rowHasChanged:(row1,row2)=>row1!==row2,
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
                            <Text style={styles.orgButtonWord}>管理</Text>
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
