import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar
} from "react-native";
import { Fonts } from "../../utils/Fonts";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class TitleHeaderWithoutIcon extends Component {
  render() {
    //   alert(width)
    const {
      iconContainerStyle,
      shadowStyle,
      iconContainerStyle1,
      backIconStyle,
      iconStyle1,
      textStyle1,
      pageTitleStyle
    } = styles;

    const {
      backgroundColor = "white",
      iconName1 = "navigate-before",
      iconSize1 = 34,
      iconColor1 = "#007AFF",
      iconHandler1,
      title = "Title",
      pageTitle = "pageTitle",
      titleColor = "#007AFF"
    } = this.props;

    return (
      <SafeAreaView style={[iconContainerStyle, { backgroundColor }]}>
        <StatusBar backgroundColor={backgroundColor} barStyle="dark-content" />
        <View style={[iconContainerStyle1, { backgroundColor }]}>
          <TouchableOpacity onPress={iconHandler1} style={[backIconStyle]}>
            <Icon
              style={iconStyle1}
              name={iconName1}
              size={iconSize1}
              color={iconColor1}
            />
            <Text style={[textStyle1, { color: titleColor }]}>
              {title.length > 7 ? title.substring(0, 7) + "..." : title}
            </Text>
          </TouchableOpacity>
          <Text style={pageTitleStyle}>
            {pageTitle.length > 20
              ? pageTitle.substring(0, 20) + "..."
              : pageTitle}
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

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
  iconContainerStyle: {
    zIndex: 1,
    backgroundColor: "gold"
    // borderWidth:1,
    // ...elevationShadowStyle(4),
  },
  // !  or seprate the styles for shadow.
  // shadowStyle: elevationShadowStyle(4),
  //!
  iconContainerStyle1: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "gold",
    paddingHorizontal: 16,
    paddingVertical: 16
    // paddingLeft: 6
  },
  viewStyle1: {
    // borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  backIconStyle: {
    position: "absolute",
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
    // borderWidth: 1,
    // marginRight: 32,
  },
  iconStyle1: {
    // color: "#000000",
    // fontSize: 28,
    // fontSize: 24,
    // borderWidth:1,
    // paddingVertical: 0,
  },
  textStyle1: {
    fontFamily: Fonts.EncodeSansRegular,
    fontSize: 16,
    color: "#000000"
    // borderColor: '#000000',
    // borderWidth: 1,
    // paddingVertical: 0
  },
  pageTitleStyle: {
    fontFamily: Fonts.EncodeSansSemiBold,
    fontSize: 14,
    color: "#000"
    // borderWidth: 1,
    // flex:1
    // alignSelf: 'center'
  }
});
