import { StyleSheet,Dimensions } from 'react-native';
import { PALETTA, SIZE } from './Common';

const {width,height} = Dimensions.get('window');

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PALETTA.LIGHT_BG,
    },
    header: {
        width:width,
        height:200,
        position:'relative',
    },
    headerText:{
        width:width,
        position:'absolute',
        left:0,
        bottom:0,
        paddingHorizontal:20,
        paddingVertical:15,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    activityName:{
        fontSize:24,
        color:'#fff',
        marginBottom:10,
    },
    activityTip:{
        fontSize:SIZE.LIGHT_TIP,
        color:'#fff',
    },
    section: {
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
    body: {
        marginTop:15,
    },
    orgHeader:{
        width:40,
        height:40,
        marginRight:20,
        borderRadius:20,
        overflow:'hidden',
    },
    orgName:{
        fontSize:SIZE.NORMAL_CONTENT,
        color:PALETTA.VITAL_TITLE,
    },
    trendsLabel:{
      flexDirection:'row',
      flexWrap:'wrap',
      marginVertical:3,
    },
    trendsLabelWrapper:{
      paddingHorizontal:5,
      paddingVertical:3,
      backgroundColor:PALETTA.LOGHT_SPLIT_BG,
      borderRadius:4,
      marginRight:5,
      alignItems:'center',
      justifyContent:'center',
    },
    trendsLabelWord:{
      fontSize:SIZE.LIGHT_TIP,
      color:PALETTA.VITAL_TITLE,
    },
    
    commit: {
        padding:10,
        marginBottom:10,
        flexDirection:'row',
        height:80,
    },
    commitHeader:{
        width:40,
        height:40,
        borderRadius:20,
        overflow:'hidden',
    },
    commitMessage:{
        flex:1,
        paddingLeft:10,
        justifyContent:'space-between',
    },
    commitName:{
        fontSize:SIZE.NORMAL_TITLE,
        color:PALETTA.VITAL_LINK,
    },
    commitWord:{
        fontSize:SIZE.NORMAL_CONTENT,
        color:PALETTA.VITAL_TITLE,
    },
    commitTime:{
        fontSize:SIZE.LIGHT_TIME,
        color:PALETTA.NORMAL_b2,
    },
    btnBlock: {
        flex:1,
        height:40,
        justifyContent:'center',
        alignItems:'center',
    }
});

export default styles;