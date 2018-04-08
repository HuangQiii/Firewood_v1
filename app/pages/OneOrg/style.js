import { StyleSheet, Dimensions } from 'react-native';
import { PALETTA, SIZE } from '../../style/Common';

const { width, height } = Dimensions.get('window');

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PALETTA.LIGHT_BG,
    },
    header: {
        width: width,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: PALETTA.LOGHT_SPLIT_BG,
    },
    headerText: {
        marginTop: 20,
    },
    headerName: {
        fontSize: 24,
        color: PALETTA.VITAL_TITLE,
    },
    activityName: {
        fontSize: 24,
        color: '#fff',
        marginBottom: 10,
    },
    activityTip: {
        fontSize: SIZE.LIGHT_TIP,
        color: '#fff',
    },
    section: {
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    titleBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    title: {
        fontSize: SIZE.VITAL_NAV_TITLE,
        color: PALETTA.VITAL_TITLE,
    },
    more: {
        fontSize: SIZE.LIGHT_TIP,
        color: PALETTA.NORMAL_999,
    },
    body: {
        marginTop: 15,
    },
    orgHeader: {
        width: 40,
        height: 40,
        marginRight: 20,
        borderRadius: 20,
        overflow: 'hidden',
    },
    orgName: {
        fontSize: SIZE.NORMAL_CONTENT,
        color: PALETTA.VITAL_TITLE,
    },
    trendsLabel: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 3,
    },
    trendsLabelWrapper: {
        paddingHorizontal: 5,
        paddingVertical: 3,
        backgroundColor: PALETTA.LOGHT_SPLIT_BG,
        borderRadius: 4,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    trendsLabelWord: {
        fontSize: SIZE.LIGHT_TIP,
        color: PALETTA.VITAL_TITLE,
    },

    commit: {
        padding: 10,
        marginBottom: 10,
        flexDirection: 'row',
        height: 80,
    },
    commitHeader: {
        width: 40,
        height: 40,
        borderRadius: 20,
        overflow: 'hidden',
    },
    commitMessage: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: 'space-between',
    },
    commitName: {
        fontSize: SIZE.NORMAL_TITLE,
        color: PALETTA.VITAL_LINK,
    },
    commitWord: {
        fontSize: SIZE.NORMAL_CONTENT,
        color: PALETTA.VITAL_TITLE,
    },
    commitTime: {
        fontSize: SIZE.LIGHT_TIME,
        color: PALETTA.NORMAL_b2,
    },
    btnBlock: {
        flex: 1,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    trends: {
        paddingVertical: 15,
        flexDirection: 'row',
    },
    trendsHead: {
        width: 60,
        //   height:40,
        //   borderRadius:20,
        //   overflow:'hidden',
        flexDirection: 'row',
    },
    trendsRight: {
        flex: 1,
        paddingLeft: 15,
    },
    trendsTitleBlock: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    trendsTitleLink: {
        fontSize: SIZE.NORMAL_TITLE,
        color: PALETTA.VITAL_LINK,
    },
    trendsTitleNormal: {
        fontSize: SIZE.NORMAL_TITLE,
        color: PALETTA.NORMAL_666,
        marginLeft: 3,
    },
    trendsTime: {
        fontSize: SIZE.LIGHT_TIME,
        color: PALETTA.NORMAL_b2,
        marginTop: 3,
    },
    trendsDes: {
        fontSize: SIZE.NORMAL_CONTENT,
        color: PALETTA.VITAL_TITLE,
        marginTop: 5,
    },
    trendsShare: {
        flexDirection: 'row',
        marginTop: 5,
        backgroundColor: PALETTA.LOGHT_SPLIT_BG,
        padding: 5,
    },
    trendsShareTitle: {
        fontSize: SIZE.LIGHT_TIP,
        color: PALETTA.VITAL_TITLE,
    },
    trendsShareTip: {
        fontSize: SIZE.LIGHT_SMALL_TIP,
        color: PALETTA.NORMAL_b2,
    },
    bottomToolbar: {
        height: 50,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: PALETTA.LOGHT_SPLIT,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    bottomToolbarButton: {
        width: width / 2,
        // justifyContent:'center',
        alignItems: 'center',
        borderLeftColor: PALETTA.LOGHT_SPLIT,
        borderLeftWidth: 1,
    },
    trendsToolBlock: {
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'flex-end',
    },
    trendToolLi: {
        flexDirection: 'row',
        marginLeft: 15,
        alignItems: 'center',
    },
    trendsTool: {
        fontSize: SIZE.LIGHT_TIP,
        color: PALETTA.NORMAL_666,
        marginLeft: 5,
    },
});

export default styles;