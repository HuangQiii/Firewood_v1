import { StyleSheet,Dimensions } from 'react-native';
import { PALETTA, SIZE } from '../../../style/Common';

const {width,height} = Dimensions.get('window');

var styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: PALETTA.LIGHT_BG,
      flexDirection: 'column',
    },
    trendsBorder:{
      borderBottomWidth:1,
      borderBottomColor:PALETTA.LOGHT_SPLIT,
    },
    trends: {
      paddingHorizontal:20,
      paddingVertical:15,
      flexDirection:'row',
    },
    trendsLeft:{
      width:80,
    },
    trendsHead:{
      width:80,
      height:80,
      borderRadius:4,
      overflow:'hidden',
    },
    trendsOrgHead:{
      width:20,
      height:20,
      borderRadius:10,
      overflow:'hidden',
      marginRight:3,
    },
    trendsOrgName:{
      fontSize:SIZE.LIGHT_TIME,
      color:PALETTA.NORMAL_888,
    },
    trendsOrg:{
      flexDirection:'row',
      marginTop:5,
      alignItems:'center',
    },
    trendsRight:{
      flex:1,
      paddingLeft:15,
    },
    trendsTitleBlock:{
      flexDirection:'row',
      alignItems:'center',
    },
    trendsTitleLink: {
      fontSize:SIZE.NORMAL_TITLE,
      color:PALETTA.VITAL_LINK,
    },
    trendsTime:{
      fontSize:SIZE.LIGHT_TIME,
      color:PALETTA.NORMAL_b2,
      // marginTop:3,
    },
    trendsPlace:{
      fontSize:SIZE.LIGHT_TIME,
      color:PALETTA.NORMAL_b2,
      marginTop:3,
    },
    trendsLabel:{
      flexDirection:'row',
      flexWrap:'wrap',
      marginVertical:3,
    },
    trendsLabelWrapper:{
      paddingHorizontal:3,
      paddingVertical:1,
      backgroundColor:PALETTA.LOGHT_SPLIT_BG,
      borderRadius:4,
      marginRight:5,
      alignItems:'center',
      justifyContent:'center',
    },
    trendsLabelWord:{
      fontSize:SIZE.LIGHT_SMALL_TIP,
      color:PALETTA.VITAL_TITLE,
    },
    trendsDes:{
      fontSize:SIZE.NORMAL_CONTENT,
      color:PALETTA.VITAL_TITLE,
      marginTop:5,
    },
    trendsShare:{
      flexDirection:'row',
      marginTop:5,
      backgroundColor:PALETTA.LOGHT_SPLIT_BG,
      padding:5,
    },
    trendsShareTitle:{
      fontSize:SIZE.LIGHT_TIP,
      color:PALETTA.VITAL_TITLE,
    },
    trendsShareTip:{
      fontSize:SIZE.LIGHT_SMALL_TIP,
      color:PALETTA.NORMAL_b2,
    },
    trendsToolBlock:{
      flexDirection:'row',
      marginTop:5,
      justifyContent:'flex-end',
    },
    trendToolLi: {
      flexDirection:'row',
      marginLeft:15,
      alignItems:'center',
    },
    trendsTool:{
      fontSize:SIZE.LIGHT_TIP,
      color:PALETTA.NORMAL_666,
      marginLeft:5,
    },
});

export default styles;