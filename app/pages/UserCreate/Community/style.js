import { StyleSheet,Dimensions } from 'react-native';
import { PALETTA, SIZE } from '../../../style/Common';

const {width,height} = Dimensions.get('window');

var styles = StyleSheet.create({
  orgWrapper:{
    paddingVertical:15,
    backgroundColor:'#fff',
    marginTop:15,
  },
  orgList:{
    paddingHorizontal:20,
    flexDirection:'row',
    alignItems:'center',
    borderLeftWidth:5,
    borderLeftColor:PALETTA.NORMAL_888,
  },
  orgHeader:{
    width:40,
    height:40,
    borderRadius:20,
    overflow:'hidden',
    marginRight:20,
  },
  orgSection:{
    flex:1,
    justifyContent:'center',
  },
  orgName:{
    fontSize:SIZE.NORMAL_CONTENT,
    color:PALETTA.VITAL_TITLE,
  },
  orgDes:{
    fontSize:SIZE.LIGHT_TIP,
    color:PALETTA.NORMAL_888,
  },
  orgBehavior:{
    width:40,
  },
  orgButton:{
    paddingHorizontal:3,
    paddingVertical:2,
    backgroundColor:PALETTA.VITAL_LINK,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:4,
  },
  orgButtonWord:{
    fontSize:SIZE.LIGHT_TIP,
    color:'#fff',
  }
});

export default styles;