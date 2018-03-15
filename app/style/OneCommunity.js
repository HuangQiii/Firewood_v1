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
        backgroundColor:'#000',
        alignItems:'center',
        justifyContent:'center',
    },
    headerText:{
        paddingHorizontal:20,
        paddingVertical:15,
        alignItems:'center',
        justifyContent:'center',
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
    btnBlock: {
        flex:1,
        height:40,
        justifyContent:'center',
        alignItems:'center',
    }
});

export default styles;