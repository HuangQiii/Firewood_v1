import { StyleSheet, Dimensions } from 'react-native';
import { PALETTA, SIZE } from '../../style/Common';

const { width } = Dimensions.get('window');

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PALETTA.LIGHT_BG,
    },
    header: {
        width: width,
        height: 200,
        position: 'relative',
    },
    iconBlock: {
        width: width,
        position: 'absolute',
        left: 0,
        top: 0,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    headerText: {
        width: width,
        position: 'absolute',
        left: 0,
        bottom: 0,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    section: {
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    titleBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    title: {
        fontSize: SIZE.VITAL_NAV_TITLE,
        color: PALETTA.VITAL_TITLE,
    },
    trendsLabel: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 3,
    },
    trendsLabelWrapper: {
        paddingHorizontal: 5,
        paddingVertical: 3,
        backgroundColor: PALETTA.LOGHT_SPLIT_BG,
        borderRadius: 4,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    trendsLabelWord: {
        fontSize: SIZE.LIGHT_TIP,
        color: PALETTA.VITAL_TITLE,
    },
    input: {
        borderColor: 'transparent',
        borderWidth: 1,
        paddingVertical: 0,
    },
});

export default styles;