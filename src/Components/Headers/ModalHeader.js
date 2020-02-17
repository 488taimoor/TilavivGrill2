import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    StatusBar


} from "react-native";
import { Fonts } from "../utils/Fonts";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class ModalHeader extends Component {

    render() {
        const {
            iconContainerStyle,
            shadowStyle,
            viewStyle1,
            iconContainerStyle1,
            iconStyle1,
            textStyle1,
            iconContainerStyle2,
            textStyle2,
        } = styles;

        const { backgroundColor = "white", iconName1 = "clear", iconSize1 = 22, iconColor1 = '#007AFF', btnText = "Create", btnTextColor = '#007AFF', iconHandler1, iconHandler2, title = "Page Title", titleColor = '#000' } = this.props;



        return (

            <SafeAreaView style={[iconContainerStyle, { backgroundColor }]}>
                <StatusBar backgroundColor={backgroundColor} barStyle='dark-content' />
                <View style={[viewStyle1, { backgroundColor }]}>
                    <TouchableOpacity onPress={iconHandler1} style={iconContainerStyle1}>
                        <Icon style={iconStyle1} name={iconName1} size={iconSize1} color={iconColor1} />
                    </TouchableOpacity>
                    <Text style={[textStyle1, { color: titleColor }]}>{title}</Text>
                    <TouchableOpacity onPress={iconHandler2} style={iconContainerStyle2}>
                        <Text style={[textStyle2, { color: btnTextColor }]}>{btnText}</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

function elevationShadowStyle(elevation) {
    return {
        elevation,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0.5 * elevation },
        shadowOpacity: 0.3,
        shadowRadius: 0.8 * elevation
    };
}

const styles = StyleSheet.create({
    iconContainerStyle: {
        zIndex: 1,
        borderBottomWidth:0.5,
        borderColor:'#909090'
        // elevation: 4,
        // shadowColor: '#000000',
        // shadowOffset: {
        //     width: 0,
        //     height: 2
        // },
        // shadowRadius: 3.2,
        // shadowOpacity: 0.3,
        // ...elevationShadowStyle(4),
    },
    // !  or seprate the styles for shadow.
    // shadowStyle: elevationShadowStyle(4),
    //!
    viewStyle1: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 16,
    },
    iconContainerStyle1: {
        // borderWidth:1,
    },
    iconStyle1: {
        // color: "#000000",
        // fontSize: 28,
        // fontSize: 30,
        // borderWidth:1,
        // paddingVertical: 0,
    },
    textStyle1: {
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 16,
        color: "#000000",
        // borderColor: '#000000',
        // borderWidth: 1,
        // paddingVertical: 0
    },
    iconContainerStyle2: {
        // borderWidth:1,
        // marginHorizontal: 10,
    },
    textStyle2: {
        fontFamily: Fonts.EncodeSansRegular,
        fontSize: 16,
        color: '#000'
    },
});

