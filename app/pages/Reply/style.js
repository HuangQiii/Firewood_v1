import { StyleSheet, Dimensions } from 'react-native';
import { PALETTA, SIZE } from '../../style/Common';

const { width, height } = Dimensions.get('window');

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PALETTA.LIGHT_BG,
    flexDirection: 'column',
  },
  trendsBorder: {
    borderBottomWidth: 1,
    borderBottomColor: PALETTA.LOGHT_SPLIT,
  },
  trends: {
    paddingVertical: 15,
    flexDirection: 'row',
  },
  trendsMiddle: {
    marginHorizontal: 15,
    width: 50,
  },
  trendsHead: {
    width: 50,
    height: 50,
    borderRadius: 6,
    marginBottom: 15,
    overflow: 'hidden',
  },
  trendsRight: {
    flex: 1,
    marginHorizontal: 15,
  },
  trendsTitleBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trendsTitleLink: {
    fontSize: SIZE.NORMAL_TITLE,
    color: PALETTA.VITAL_LINK,
  },
  trendsTime: {
    fontSize: SIZE.LIGHT_TIME,
    color: PALETTA.NORMAL_b2,
  },
  trendsDes: {
    fontSize: SIZE.LIGHT_TIME,
    color: PALETTA.VITAL_TITLE,
    marginTop: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    padding: 15,
    backgroundColor: '#F2F2F2',
    textAlignVertical: 'top'
  }
});

export default styles;