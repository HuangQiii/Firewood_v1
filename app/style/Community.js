import { StyleSheet,Dimensions } from 'react-native';

const {width,height} = Dimensions.get('window');

var styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FFF',
      flexDirection: 'column',
    },
    interstCom: {
      paddingHorizontal:20,
      paddingVertical:15,
    },
    title: {
        fontSize:18,
        color:'#000',
        marginBottom:15,
    },
    card: {
      padding:10,
      marginBottom:10,
      backgroundColor:'#eee',
      borderRadius:10,
      flexDirection:'row',
      height:100,
    },
    cardHead:{
      width:40,
      height:40,
      borderRadius:20,
      overflow:'hidden',
      // alignSelf:'center',
    },
    cardText:{
      flex:1,
      paddingLeft:10,
      justifyContent:'space-between',
    },
});

export default styles;