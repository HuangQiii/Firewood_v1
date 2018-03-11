'use strict';
import { ScrollView, AppState, View, Dimensions, StyleSheet, Text, Image, TouchableOpacity, ListView, TouchableHighlight, DeviceEventEmitter, NetInfo, NativeModules } from 'react-native';

import * as types from '../constants/HomeTypes';

const initialState = {
    userHeadImage: 'https://pic4.zhimg.com/v2-292a49c4ca7046333ec6e529c6485dbf_xl.jpg',
    userName: '',
    userEmail: '',
    organizationShow: false,
    currentOrganization: '',
    dataOrgSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 }),
    currentProject: '',
    dataLatestOpenSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => true }),
    list: '',
    dataListSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => true }),
    downloading: [],
    loading: true,

    dataSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => true }),
    loading1: true
}

export default function Home(state = initialState, action) {
    switch (action.type) {
        case types.GET_USER_MESSAGE:
            return {
                ...state,
                userHeadImage: 'https://pic4.zhimg.com/v2-292a49c4ca7046333ec6e529c6485dbf_xl.jpg',
                userName: '小勾兑',
                userEmail: 'qihuang@ghy.cn',
            }
        case types.GET_BUNDLES:
            return {
                ...state,
                loading: false,
                dataListSource: state.dataListSource.cloneWithRows(action.bundles),
            }
        case types.GET_LATEST_OPEN:
            return {
                ...state,
                loading: false,
                dataLatestOpenSource: state.dataLatestOpenSource.cloneWithRows(action.latest),
            }
        case types.GET_CURRENT:
            return {
                ...state,
                currentOrganization: 'HELLO',
                currentProject: ''
            }
        case types.GET_ORGANIZATIONS:
            return {
                ...state,
                dataOrgSource: state.dataOrgSource.cloneWithRows(action.organizations),
            }
        case types.SELECT_PROJECT_NEW:
            return {
                ...state,
                currentProject: action.project,
                dataLatestOpenSource: state.dataLatestOpenSource.cloneWithRows(action.latest),
            }
        case types.SELECT_PROJECT_FIRST:
            return {
                ...state,
                currentProject: action.project,
            }
        case types.SELECT_PROJECT_REST:
            return {
                ...state,
                currentProject: action.project,
                dataLatestOpenSource: state.dataLatestOpenSource.cloneWithRows(action.latest),
            }
        case types.CHANGE_ORG_SHOW:
            return {
                ...state,
                organizationShow: !state.organizationShow
            }
        case types.SELECT_ORGANIZATION:
            return {
                ...state,
                organizationShow: !state.organizationShow,
                currentOrganization: action.organization,
                currentProject: {}
            }
        case types.SELECT_LIST_DOWNLOADING:
            let arr = state.downloading.concat();
            arr.push(action.list.name);
            return {
                ...state,
                list: action.list.name,
                downloading: arr
            }
        case types.REMOVE_LIST_DOWNLOADING:
            let arr1 = state.downloading.concat();
            arr1.splice(arr1.indexOf(action.list.name), 1);
            return {
                ...state,
                downloading: arr1,
                list: ''
            }
        case types.GET_PROJECTS_ING:
            return {
                ...state,
            }
        case types.GET_PROJECTS_Success:
            return {
                ...state,
                loading1: false,
                dataSource: state.dataSource.cloneWithRows(action.projects),
            }
        default:
            return state;
    }
}
