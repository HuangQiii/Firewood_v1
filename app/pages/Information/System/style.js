import { StyleSheet, Dimensions } from 'react-native';
import { PALETTA, SIZE } from '../../../style/Common';

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
  trendsLeft: {
    width: 40,
    height: 50,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trendsSign: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: PALETTA.VITAL_THEME,
    marginBottom: 5,
  },
  trendsMiddle: {
    width: 50,
  },
  trendsHead: {
    width: 50,
    height: 50,
    borderRadius: 6,
    overflow: 'hidden',
  },
  trendsRight: {
    flex: 1,
    marginHorizontal: 15,
    height: 50,
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
});

export default styles;