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
    head:{
        width:50,
        height:50,
        overflow:'hidden',
        alignSelf:'flex-end',
    },
    title: {
        fontSize:SIZE.NORMAL_CONTENT,
        color:PALETTA.VITAL_TITLE,
    },
    list:{
        paddingHorizontal:20,
        backgroundColor:'#fff',
    },
});

export default styles;