import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Fonts } from '../utils/Fonts'
import Icon from 'react-native-vector-icons/FontAwesome5';
const Button1 = (props) => {
    const { onPress, iconName1 = "user-alt", iconName2 = "arrow-right", iconSize1 = 18, iconSize2 = 18, iconColor1 = 'white', iconColor2 = "white", children = "Update profile", btnColor = '#2C4BFC', disable = false, buttonStyle, buttonTextStyle } = props
    const { buttonStyle1, textStyle } = styles;

    return (
        <TouchableOpacity disabled={disable} onPress={onPress} style={[buttonStyle1, { backgroundColor: disable ? 'grey' : btnColor }, buttonStyle]}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <Icon name={iconName1} size={iconSize1} color={iconColor1} />
                {/* <View><Icon name="map-marker-alt" size={18} color="white" /></View> */}
                <Text style={[textStyle, buttonTextStyle]}>
                    {children}
                </Text>
            </View>
            <Icon name={iconName2} size={iconSize2} color={iconColor2} />
        </TouchableOpacity>
    );
};


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
    buttonStyle1: {
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 16,
        paddingHorizontal: 24,
        // borderWidth: 2,
        // borderColor: "#fff",
        // height: 40,
        ...elevationShadowStyle(2),
    },
    textStyle: {
        fontFamily: Fonts.EncodeSansMedium,
        color: "#FFF",
        fontSize: 16,
        marginLeft: 12
    }
});

export default Button1;

// {/* <Button1 buttonStyle={buttonStyle} buttonTextStyle={buttonTextStyle} iconName1="map-marker-alt" iconColor1='#FF8000' iconColor2="#FF8000">
//     Nearest To Me
// </Button1> */}

// {/* <Button1/> */}

// buttonStyle: {
//     backgroundColor: 'transparent',
//     borderWidth: 1,
//     borderColor: '#FF8000',
//   },
//   buttonTextStyle: {
//     color: "#FF8000",
//   },