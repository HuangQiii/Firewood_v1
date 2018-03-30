import { StyleSheet,Dimensions } from 'react-native';
import { PALETTA, SIZE } from '../../style/Common';

const {width,height} = Dimensions.get('window');

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PALETTA.LIGHT_BG,
    },
    header: {
        paddingHorizontal: 20,
        flexDirection:'row',
        backgroundColor:'#fff',
        marginTop:20,
    },
    wrap:{
        flex:1,
        flexDirection:'row',
        paddingVertical:15,
        borderBottomWidth:1,
        borderBottomColor:'rgba(0, 0, 0, 0.1)',
        paddingHorizontal:15,
    },
    text: {
        flex:1,
        justifyContent:'center',
    },
    userName: {
        fontSize:18,
        color:PALETTA.VITAL_TITLE,
        marginBottom:15,
    },
    email: {
        fontSize:SIZE.LIGHT_TIP,
        color:PALETTA.NORMAL_999,
    },
    head:{
        width:50,
        height:50,
        overflow:'hidden',
        alignSelf:'flex-end',
    },
    org:{
        paddingHorizontal:20,
        borderTopWidth:1,
        borderTopColor:PALETTA.LOGHT_SPLIT,
        paddingVertical:15,
        backgroundColor:'#fff',
        flexDirection:'row',
    },
    orgIcon:{
        justifyContent:'center',
        alignItems:'center',
        marginRight:20,
    },
    orgTitle:{
        fontSize:SIZE.LIGHT_TIP,
        color:PALETTA.NORMAL_999,
    },
    orgContent:{
        fontSize:SIZE.NORMAL_CONTENT,
        color:PALETTA.VITAL_TITLE,
    },
    section:{
        paddingHorizontal:20,
        paddingVertical:15,
        marginTop:20,
        backgroundColor:'#fff',
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
        width:(width-60)/3,
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
    myCreate:{
        backgroundColor:PALETTA.EXTRA_4,
    },
    mineText:{
        flex:1,
        justifyContent:'center',
    },
    list:{
        paddingHorizontal:20,
        backgroundColor:'#fff',
    },
});

export default styles;