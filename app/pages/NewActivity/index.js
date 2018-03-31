import React, { Component } from 'react';
import { ScrollView, AppState, View, Dimensions, StyleSheet, Text, Image, TouchableOpacity, ListView, TouchableHighlight, DeviceEventEmitter, NetInfo, NativeModules,FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import styles from './style';
import IconBlock from '../../components/IconBlock';

const { width, height } = Dimensions.get('window');

class Mine extends Component {

    static navigationOptions = ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-person" size={30} color={tintColor} />
        ),
    });

    constructor(props){
        super(props);
        this.state={
        }
    }

    componentDidMount() {
        this.setState({
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={{flex:1}}>
                    <ScrollView>
                        <View style={styles.header}>
                            <Image
                                style={{width:width,height:200,}}
                                resizeMode = 'cover'
                                source={require('../../images/back.png')}
                            />
                            <View style={styles.headerText}>
                                <View>
                                    <Text style={styles.activityName}>编辑活动名</Text>
                                    <Text style={styles.activityTip}>编辑活动地点</Text>
                                    <Text style={styles.activityTip}>编辑活动时间</Text>
                                </View>
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
                            <Text>    编辑活动简介。</Text>
                        </View>
                    </ScrollView>
                </View>
                
            </View>
        );
    }
}

export default connect(
    (state) => ({
    }),
    (dispatch) => ({
    })
)(Mine)
