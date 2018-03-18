import { StyleSheet,Dimensions } from 'react-native';
import { PALETTA, SIZE } from '../../style/Common';

const {width,height} = Dimensions.get('window');

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PALETTA.LIGHT_BG,
        flexDirection: 'column',
    },
    header: {
        paddingHorizontal: 20,
        paddingVertical:15,
        flexDirection:'row',
    },
    headerTitle: {
        flex:1,
    },
    headerTime: {
        fontSize:SIZE.NORMAL_CONTENT,
        color:PALETTA.NORMAL_888,
    },
    headerLogo: {
        fontSize:28,
        color:PALETTA.VITAL_TITLE,
    },
    headerHead:{
        width:50,
        height:50,
        borderRadius:25,
        overflow:'hidden',
        alignSelf:'flex-end',
    },
    banner:{
        height: 200,
    },
    section:{
        paddingHorizontal:20,
        paddingVertical:15,
    },
    titleBlock:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:15,
    },
    title: {
        fontSize:SIZE.VITAL_NAV_TITLE,
        color:PALETTA.VITAL_TITLE,
    },
    more: {
        fontSize:SIZE.LIGHT_TIP,
        color:PALETTA.NORMAL_999,
    },
    mine: {
        flexDirection:'row',
        justifyContent:'space-between',
    },
    mineBlock:{
        width:(width-50)/2,
        // height:100,
        borderRadius:4,
        padding:10,
        flexDirection:'row'
    },
    myAttention: {
        backgroundColor: PALETTA.EXTRA_9,
    },
    myJoin:{
        backgroundColor: PALETTA.EXTRA_10,
    },
    mineText:{
        flex:1,
        justifyContent:'center',
    },
    mineIcon:{
        width:50,
        height:50,
        alignItems:'center',
        justifyContent:'center'
    },
    card:{
        width:140,
        height:100,
        borderRadius:4,
        backgroundColor:PALETTA.LOGHT_SPLIT_BG,
        // flexDirection:'row',
        padding:10,
        marginRight:10,
    },
    cardTitleBlock:{
        flex:1,
    },
    cardTitle:{
        fontSize:SIZE.VITAL_MARKED_TITLE,
        color:PALETTA.NORMAL_666,
    },
    cardMessage:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    cardText:{
        flex:1,
        justifyContent:'space-between',
    },
    cardWord:{
        fontSize:SIZE.LIGHT_TIP,
        color:PALETTA.NORMAL_999,
    },
    cardHead:{
        width:20,
        height:20,
        borderRadius:10,
        overflow:'hidden',
        alignSelf:'flex-end',
    }
});

export default styles;
