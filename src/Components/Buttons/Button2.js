import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Fonts } from "../../utils/Fonts";
import Icon from "react-native-vector-icons/FontAwesome5";
const Button2 = props => {
  const {
    onPress,
    iconName = "facebook-f",
    iconDisplay = "flex",
    iconSize = 18,
    iconColor = "white",
    children = "Continue With Facebook",
    btnColor = "#2C4BFC",
    disable = false,
    buttonStyle,
    buttonTextStyle
  } = props;
  const { buttonStyle1, textStyle } = styles;

  return (
    <TouchableOpacity
      disabled={disable}
      onPress={onPress}
      style={[
        buttonStyle1,
        { backgroundColor: disable ? "grey" : btnColor },
        buttonStyle
      ]}
    >
      <Icon
        style={{ display: iconDisplay }}
        name={iconName}
        size={iconSize}
        color={iconColor}
      />
      <Text
        style={[
          textStyle,
          buttonTextStyle,
          { marginLeft: iconDisplay === "none" ? 0 : 24 }
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * elevation
  };
}

const styles = StyleSheet.create({
  buttonStyle1: {
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 16,
    paddingHorizontal: 24
    // borderWidth: 2,
    // borderColor: "#fff",
    // height: 40,
    // ...elevationShadowStyle(2),
  },
  textStyle: {
    fontFamily: Fonts.EncodeSansRegular,
    color: "#FFF",
    fontSize: 16,
    marginLeft: 24
  }
});

export default Button2;

// {/* <Button2 />
// <Button2 iconName="linkedin-in" btnColor='#007AFF'>
//     Continue With LinkedIn
// </Button2>  */}
