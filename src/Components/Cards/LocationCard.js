import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity
} from "react-native";
import colors from "../../utils/Colors";
import fontSize from "../../utils/FontSize";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Fonts } from "../../utils/Fonts";
export default function LocationCard(props) {
  const {
    locationName = "Tel Aviv Fish Grill - Tarzana",
    address = "19014 Ventura Blvd Tarzana, CA 91356",
    onPress,
    img = require("../../../assets/images/icon2.png"),
    iconDisplay = true,
    imageUrl = ""
  } = props;

  const {
    containerStyle,
    viewStyle1,
    imageContainerStyle,
    imageStyle,
    locationNameStyle,
    viewStyle2,
    addressStyle,
    productPriceStyle,
    mainContainerStyle
  } = styles;
  return (
    <SafeAreaView>
      <TouchableOpacity style={mainContainerStyle} onPress={onPress}>
        <Text style={[fontSize.locationCardFontSize, locationNameStyle]}>
          {locationName}
        </Text>
        <View style={containerStyle}>
          <View style={viewStyle1}>
            <View style={imageContainerStyle}>
              {imageUrl === "" ? (
                <Icon name="room" size={30} color="#000" />
              ) : (
                <Image source={{ uri: `${imageUrl}` }} style={imageStyle} />
              )}
            </View>
            <Text style={[fontSize.locationCardFontSize, addressStyle]}>
              {address}
            </Text>
          </View>
          <View style={[viewStyle2, { opacity: iconDisplay ? 1 : 0 }]}>
            <Icon name="check" size={24} color={colors.successColor} />
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainerStyle: {
    backgroundColor: colors.secondaryColor,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
    padding: 16
  },
  containerStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  viewStyle1: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: 'gold',
    flex: 1
  },
  imageContainerStyle: {
    height: 60,
    width: 60,
    borderRadius: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1
  },
  imageStyle: {
    height: "100%",
    width: "100%"
  },
  locationNameStyle: {
    color: colors.primaryColor,
    marginBottom: 5
  },
  addressStyle: {
    color: colors.primaryColor,
    marginLeft: 10,
    alignSelf: "flex-end",
    // backgroundColor: 'red',
    width: "50%"
  },
  viewStyle2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },

  productPriceStyle: {
    color: colors.textColor,
    marginRight: 5
  }
});
