import React, {
    Component
} from 'react';
import { NativeModules } from 'react-native';
import {
    Text,
    View,
    Image,
    Dimensions,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';

var ImagePicker = NativeModules.ImageCropPicker;
const { height, width } = Dimensions.get('window');
export default class Head extends Component {

    constructor() {
        super();
        this.state = {
            image: null,
        };
    }

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
            return <Image style={{ width: 250, height: 250, borderRadius: 250, }} source={image} />
        } else {
            return <Image style={{ width: 250, height: 250, borderRadius: 250, }} source={require('./1.jpg')} />
        }
    }

    render() {
        return (
            <View style={{ height: height, }}>
                <View style={{ width: width, height: height * 0.6, justifyContent: 'center', alignItems: 'center', }}>
                    {/*<Image
                        style={{ width: 250, height: 250, borderRadius: 250, }}
                        source={require('../images/1.jpg')}
                    />*/}
                    {this.state.image ? this._renderImage(this.state.image) : this._renderImage('default')}
                </View>
                <View style={styles.WelcomeBottom}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableHighlight
                            onPress={() => this.pickSingle(true, true)}
                            style={[styles.Save, { backgroundColor: '#f2f2f2', }]}
                        >
                            <Text style={styles.Name}>从本地打开</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => this.pickSingleWithCamera(true)}
                            style={[styles.Save, { backgroundColor: '#f2f2f2', marginLeft: 5, }]}
                        >
                            <Text style={styles.Name}>拍照</Text>
                        </TouchableHighlight>
                    </View>
                    <TouchableHighlight style={[styles.Save, { backgroundColor: '#1384D5', }]}>
                        <Text style={{ fontSize: 16, color: '#FFFFFF', }}>Save</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    WelcomeBottom: {
        flex: 1,
        height: height * 0.4,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    Name: {
        fontSize: 12,
        textAlign: 'center',
    },
    Save: {
        height: 40,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#EDEDED',
        borderWidth: 1,
        borderRadius: 4,

        marginBottom: 4,
        marginTop: 20,
    },
    Copyright: {
        fontSize: 10,
        textAlign: 'center',
        marginTop: 5,
    },
});