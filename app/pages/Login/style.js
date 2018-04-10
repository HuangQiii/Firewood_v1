import { StyleSheet,Dimensions } from 'react-native';
import { PALETTA, SIZE } from '../../style/Common';

const {width,height} = Dimensions.get('window');

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PALETTA.LIGHT_BG,
        justifyContent:'center',
        alignItems:'center',
    },
    logo:{
      width:90,
      height:90,
    },
    input:{
      width: width - 70,
      marginTop: 250,
      borderColor: 'transparent',
      borderWidth: 1,
      borderBottomColor:PALETTA.LOGHT_SPLIT,
    },
    button: {
      width:50,
      height:50,
      borderRadius:25,
      borderWidth:2,
      borderColor:PALETTA.NORMAL_888,
      justifyContent:'center',
      alignItems:'center',
      marginTop:50,
    },
});

export default styles;