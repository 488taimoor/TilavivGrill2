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

export default class TitleHeader extends Component {
  render() {
    const {
      iconContainerStyle,
      shadowStyle,
      iconContainerStyle1,
      viewStyle2,
      backIconStyle,
      iconStyle1,
      textStyle1,
      pageTitleStyle,
      crossIconStyle1,
      crossIconStyle2,
      iconStyle2
    } = styles;

    const {
      backgroundColor = "white",
      iconName1 = "navigate-before",
      iconName2 = "search",
      iconSize1 = 34,
      iconSize2 = 20,
      iconColor1 = "#007AFF",
      iconColor2,
      iconDisplay2,
      iconHandler1,
      iconHandler2,
      title = "Title",
      pageTitle = "Inverter_T34_Sonex",
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
          <TouchableOpacity
            onPress={iconHandler2}
            style={[crossIconStyle2, { display: iconDisplay2 }]}
          >
            <Icon
              style={iconStyle2}
              name={iconName2}
              size={iconSize2}
              color={iconColor2}
            />
          </TouchableOpacity>
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
  },
  viewStyle2: {
    // borderWidth: 1,
    flexDirection: "row"
  },
  crossIconStyle1: {
    // borderWidth:1,
    marginRight: 48,
    marginLeft: 24
  },
  crossIconStyle2: {
    position: "absolute",
    right: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
    // borderWidth: 1,
    // marginRight: 32,
  },
  iconStyle2: {
    // color: "#000000",
    // fontSize: 23,
    // fontSize: 24,
    // borderWidth: 1,
  }
});
