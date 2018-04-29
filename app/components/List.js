import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { ViewPropTypes, View, Text, StyleSheet, TouchableHighlight, ActivityIndicator } from 'react-native';

const propTypes = {
    leftIconName: PropTypes.string,
    iconSize: PropTypes.number,
    leftIconColor: PropTypes.string,
    rightIconColor:PropTypes.string,
    text: PropTypes.string,
    content: PropTypes.string,
    textSize: PropTypes.number,
    textColor: PropTypes.string,
    rightIconName: PropTypes.string,
    borderBottom:PropTypes.bool,
    listHeight: PropTypes.number,
    overlayMarginTop: PropTypes.number,
    bgColor: PropTypes.string,
    hightLight: PropTypes.bool,
    activeOpacity: PropTypes.number,
    underlayColor: PropTypes.string,
    onPress: PropTypes.func,
    disable: PropTypes.bool,
    downloading: PropTypes.bool,
};

const List = ({
  leftIconName, iconSize, rightIconColor, leftIconColor, text, content, textSize, textColor, rightIconName, borderBottom, listHeight, overlayMarginTop, bgColor, hightLight, activeOpacity, underlayColor, onPress, disable, downloading
}) => (
        <View>
            {
                disable &&
                <View style={[style.list, { marginTop: overlayMarginTop, height: listHeight, backgroundColor: bgColor }]}>
                    {
                        leftIconName != '' &&
                        <View style={style.listIcon}>
                            <Icon name={leftIconName} size={iconSize} color={leftIconColor} />
                        </View>
                    }

                    <View style={style.listContent}>
                        <View>
                            <Text style={{ fontSize: textSize, color: textColor }}>{text}</Text>
                        </View>
                        <View style={{ alignItems: 'center', width: 23, flexDirection: 'row' }}>
                            {
                                rightIconName != '' &&
                                <Icon name={rightIconName} size={iconSize} color={rightIconColor} />
                            }
                            {
                                downloading &&
                                <ActivityIndicator
                                    animating={true}
                                    size="small"
                                    color={'#3F51B5'}
                                />
                            }
                        </View>
                    </View>
                </View>
            }
            {
                !disable &&
                < TouchableHighlight
                    underlayColor={underlayColor}
                    activeOpacity={activeOpacity}
                    onPress={onPress}
                >
                    <View style={[style.list, { marginTop: overlayMarginTop, height: listHeight, backgroundColor: bgColor },borderBottom ? {borderBottomWidth:1,borderBottomColor:'rgba(0, 0, 0, 0.1)',} : {}]}>
                        {
                            leftIconName != '' &&
                            <View style={style.listIcon}>
                                <Icon name={leftIconName} size={iconSize} color={leftIconColor} />
                            </View>
                        }

                        <View style={style.listContent}>
                            <View style={{flexDirection:'row',flex:1,justifyContent:'space-between'}}>
                                <Text style={{ fontSize: textSize, color: textColor }}>{text}</Text>
                                {
                                    content != '' &&
                                    <Text style={{fontSize:12,color:'#888'}}>{content}</Text>
                                }
                            </View>
                            <View style={{ alignItems: 'center', width: 23, flexDirection: 'row' }}>
                                {
                                    rightIconName != '' &&
                                    <Icon name={rightIconName} size={iconSize} color={rightIconColor} />
                                }
                                {
                                    downloading &&
                                    <ActivityIndicator
                                        animating={true}
                                        size="small"
                                        color={'#3F51B5'}
                                    />
                                }
                            </View>
                        </View>
                    </View>
                </TouchableHighlight >
            }
        </View>
    );

List.propTypes = propTypes;

List.defaultProps = {
    iconSize: 14,
    leftIconColor: '#333',
    rightIconColor: '#b2b2b2',
    textSize: 14,
    textColor: '#333',
    content:'',
    leftIconName: '',
    rightIconName: '',
    borderBottom:true,
    listHeight: 38,
    overlayMarginTop: 0,
    hightLight: false,
    activeOpacity: 0.65,
    underlayColor: '#F3F3F3',
    onPress() { },
    disable: false,
    downloading: false
};

var style = StyleSheet.create({
    list: {
        paddingLeft: 17,
        flexDirection: 'row',
    },
    listIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 16
    },
    listContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default List;