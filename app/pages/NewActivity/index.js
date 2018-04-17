import React, { Component } from 'react';
import { ScrollView, View, Dimensions, Text, TextInput, Image, TouchableOpacity, NativeModules, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import styles from './style';
var ImagePicker = NativeModules.ImageCropPicker;

const { width } = Dimensions.get('window');

class Mine extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: '新建活动',
        headerRight: (
            <Icon.Button
                name="md-checkmark"
                color={'#000'}
                backgroundColor="transparent"
                underlayColor="transparent"
                activeOpacity={0.8}
                onPress={() => {
                    navigation.state.params.handleSave();
                }}
            />
        )
    });

    constructor(props) {
        super(props);
        this.state = {
            icons: [],
            image: null,
            name:'',
            place:'',
            time:'',
            des:'',
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({ handleSave: this.onSave });
    }

    onSave = () => {
        alert(`${this.state.name} and ${this.state.place} and ${this.state.time} and ${this.state.des}`);
        console.log(this.state.icons)
        // dismissKeyboard();
    };

    pickSingle(cropit, circular = false) {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: cropit,
            cropperCircleOverlay: circular,
            compressImageMaxWidth: 640,
            compressImageMaxHeight: 480,
            compressImageQuality: 0.5,
            compressVideoPreset: 'MediumQuality',
        }).then(image => {
            console.log('received image', image);
            this.setState({
                image: { uri: image.path, width: image.width, height: image.height, mime: image.mime },
            });
        }).catch(e => {
            console.log(e);
            Alert.alert(e.message ? e.message : e);
        });
    }

    pickSingleWithCamera(cropping) {
        ImagePicker.openCamera({
            cropping: cropping,
            width: 500,
            height: 500,
        }).then(image => {
            console.log('received image', image);
            this.setState({
                image: { uri: image.path, width: image.width, height: image.height },
            });
        }).catch(e => alert(e));
    }

    _renderImage(image) {
        if (image != 'default') {
            return <Image style={{ width: width, height: 200, }} resizeMode='cover' source={image} />
        } else {
            return <Image style={{ width: width, height: 200, }} resizeMode='cover' source={require('../../images/back.png')} />
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <ScrollView>
                        <View style={styles.header}>
                            {this.state.image ? this._renderImage(this.state.image) : this._renderImage('default')}
                            <View style={styles.iconBlock}>
                                <TouchableOpacity
                                    onPress={() => this.pickSingle(true, true)}
                                >
                                    <Icon name="md-folder-open" size={25} color={'#fff'} style={{ marginRight: 20, }} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.pickSingleWithCamera(true)}
                                >
                                    <Icon name="md-camera" size={25} color={'#fff'} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.headerText}>
                                <TextInput
                                    style={styles.input}
                                    placeholder={'点击此处编辑活动名'}
                                    placeholderTextColor={'#fff'}
                                    underlineColorAndroid='transparent'
                                    caretHidden={false}
                                    maxLength={300}
                                    style={{ fontSize: 24, color: '#fff', }}
                                    onChangeText={(text) => this.setState({name:text})}
                                    value={this.state.name}
                                />
                                <TextInput
                                    style={[styles.input]}
                                    placeholder={'点击此处编辑活动地点'}
                                    placeholderTextColor={'#fff'}
                                    underlineColorAndroid='transparent'
                                    caretHidden={false}
                                    maxLength={300}
                                    style={{ color: '#fff', }}
                                    onChangeText={(text) => this.setState({place:text})}
                                    value={this.state.place}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder={'点击此处编辑活动时间'}
                                    placeholderTextColor={'#fff'}
                                    underlineColorAndroid='transparent'
                                    caretHidden={false}
                                    maxLength={300}
                                    style={{ color: '#fff', }}
                                    onChangeText={(text) => this.setState({time:text})}
                                    value={this.state.time}
                                />
                            </View>
                        </View>
                        <View style={styles.section}>
                            <View style={styles.titleBlock}>
                                <Text style={styles.title}>标签</Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        const arr = this.state.icons.slice();
                                        arr.push('标签');
                                        this.setState({ icons: arr });
                                    }}
                                >
                                    <Icon name="md-add" size={20} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.trendsLabel}>
                                {
                                    this.state.icons.map((icon,i) => (
                                        <TextInput
                                            style={[styles.input, styles.trendsLabelWrapper, styles.trendsLabelWord]}
                                            key={i}
                                            underlineColorAndroid='transparent'
                                            caretHidden={false}
                                            onChangeText={(text) => {
                                                const arr = this.state.icons.slice();
                                                arr[i] = text;
                                                this.setState({
                                                    icons: arr,
                                                });
                                            }}
                                            value={this.state.icons[i]}
                                        />
                                    ))
                                }
                            </View>
                        </View>
                        <View style={styles.section}>
                            <View style={styles.titleBlock}>
                                <Text style={styles.title}>活动简介</Text>
                            </View>
                            <TextInput
                                style={styles.input}
                                placeholder={'点击此处编辑活动内容'}
                                underlineColorAndroid='transparent'
                                multiline
                                caretHidden={false}
                                maxLength={300}
                                onChangeText={(text) => this.setState({des:text})}
                                value={this.state.des}
                            />
                        </View>
                    </ScrollView>
                </View>

            </View>
        );
    }
}

export default connect()(Mine)
