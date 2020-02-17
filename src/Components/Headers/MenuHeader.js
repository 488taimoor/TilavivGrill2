import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity, SafeAreaView,
    StatusBar

} from "react-native";
import { Fonts } from "../utils/Fonts";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class MenuHeader extends Component {

    render() {
        const {
            iconContainerStyle,
            shadowStyle,
            iconContainerStyle1,
            viewStyle1,
            viewStyle2,
            textStyle1,
            crossIconStyle1,
            crossIconStyle2,
            iconStyle2,
            contentContainerStyle
        } = styles;

        const { backgroundColor = "white", titleColor, iconName1 = "menu", iconName2 = "notifications", iconSize1 = 34, iconSize2 = 20, iconColor1, iconColor2, iconDisplay1, iconDisplay2, iconHandler1, iconHandler2, title = "Page Title" } = this.props;



        return (

            <SafeAreaView style={[iconContainerStyle, { backgroundColor }]}>
                <StatusBar backgroundColor={backgroundColor} barStyle='dark-content' />

                <View style={[iconContainerStyle1, { backgroundColor }]}>
                    <TouchableOpacity onPress={iconHandler1} style={[crossIconStyle1, { display: iconDisplay1 }]}>
                        <Icon style={iconStyle2} name={iconName1} size={iconSize1} color={iconColor1} />
                    </TouchableOpacity>
                    <View style={contentContainerStyle}>
                        <View style={viewStyle1}>
                            <Text style={[textStyle1, { color: titleColor }]}>{title}</Text>
                        </View>
                        <View style={viewStyle2}>
                            <TouchableOpacity onPress={iconHandler2} style={[crossIconStyle2, { display: iconDisplay2 }]}>
                                <Icon style={iconStyle2} name={iconName2} size={iconSize2} color={iconColor2} />
                            </TouchableOpacity>
                        </View>
                    </View>
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
        // borderWidth:1,
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
    iconContainerStyle1: {
        // flexDirection: "row",
        // justifyContent: 'space-between',
        // alignItems: 'center',
        width: '100%',
        paddingHorizontal: 16,
        paddingBottom: 16,
        paddingTop: 10,
        // borderWidth: 1
    },
    contentContainerStyle: {
        // marginTop: 5,
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    viewStyle1: {
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backIconStyle: {
        // borderWidth:1,
        marginRight: 32,
    },
    iconStyle1: {
        // color: "#000000",
        // fontSize: 28,
        fontSize: 24,
        // borderWidth:1,
        // paddingVertical: 0,
    },
    textStyle1: {
        fontFamily: Fonts.EncodeSansBold,
        fontSize: 32,
        color: "#000000",
        // borderColor: '#000000',
        // borderWidth: 1,
        // paddingVertical: 0
    },
    viewStyle2: {
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    crossIconStyle1: {
        // borderWidth:1,
        marginLeft: -4,
        // marginRight: 46,
    },
    crossIconStyle2: {
        // borderWidth:1,
        // marginHorizontal: 10,
    },
    iconStyle2: {
        // color: "#000000",
        // fontSize: 23,
        // fontSize: 24,
        // borderWidth: 1,

    },
});

