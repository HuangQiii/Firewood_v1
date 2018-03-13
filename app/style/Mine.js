import { StyleSheet,Dimensions } from 'react-native';

const {width,height} = Dimensions.get('window');

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        flexDirection: 'column',
    },
    header: {
        paddingHorizontal: 20,
        paddingVertical:15,
        flexDirection:'row',
    },
    text: {
        flex:1,
        justifyContent:'flex-end',
    },
    userName: {
        fontSize:18,
        color:'#000',
        marginBottom:15,
    },
    email: {
        fontSize:12,
        color:'grey',
    },
    head:{
        width:60,
        height:60,
        borderRadius:30,
        overflow:'hidden',
        // backgroundColor:'red',
        alignSelf:'flex-end',
    },
    placeholder:{
        marginHorizontal:20,
        borderTopWidth:1,
        borderTopColor:'#eee',
        paddingVertical:15,
        backgroundColor:'#FFF',
        flexDirection:'row',
    },
    placeholderIcon:{
        justifyContent:'center',
        alignItems:'center',
        marginRight:20,
    },
    split:{
        height:20,
        backgroundColor:'#eee',
    },
    mainMine:{
        paddingHorizontal:20,
        paddingVertical:15,
    },
    title: {
        fontSize:18,
        color:'#000',
        marginBottom:15,
    },
    more: {
        fontSize:14,
        color:'grey',
    },
    mainMineArea: {
        flexDirection:'row',
        justifyContent:'space-between',
    },
    mainMineBlock:{
        width:(width-60)/3,
        height:100,
        borderRadius:10,
        backgroundColor:'#eee',
        padding:10,
        flexDirection:'row'
    },
    mainMineBlockText:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    mainMineBlockIcon:{
        width:50,
        height:80,
        alignItems:'center',
        justifyContent:'center'
    },
    list:{
        paddingHorizontal:20,
        // paddingVertical:15,
    },
    popular:{
        paddingHorizontal:20,
        paddingVertical:15,
    },
    card:{
        width:140,
        height:100,
        borderRadius:10,
        backgroundColor:'#eee',
        flexDirection:'row',
        padding:10,
        marginRight:10,
    },
    cardText:{
        flex:1,
        justifyContent:'space-between',
    },
    cardHead:{
        width:20,
        height:20,
        borderRadius:10,
        overflow:'hidden',
        // backgroundColor:'red',
        alignSelf:'flex-end',
    }

});

export default styles;