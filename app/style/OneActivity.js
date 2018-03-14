import { StyleSheet,Dimensions } from 'react-native';

const {width,height} = Dimensions.get('window');

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        flexDirection: 'column',
    },
    header: {
        width:width,
        height:200,
        position:'relative',
    },
    headerText:{
        width:width,
        height:75,
        position:'absolute',
        left:0,
        bottom:0,
    },
    section: {
        paddingHorizontal:20,
        paddingVertical:15,
    },
    text: {
        flexDirection:'row',
    },
    title: {
        fontSize:18,
        color:'#000',
    },
    body: {
        marginTop:15,
    },
    card: {
      padding:10,
      marginBottom:10,
    //   backgroundColor:'#eee',
    //   borderRadius:10,
      flexDirection:'row',
      height:80,
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