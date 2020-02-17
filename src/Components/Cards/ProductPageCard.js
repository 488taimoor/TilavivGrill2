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
import fontSize from '../../utils/FontSize'
import Icon from "react-native-vector-icons/MaterialIcons";
import { Fonts } from "../../utils/Fonts";
export default function ProductPageCard(props) {
  const {
    productName = "A La Chicken Breast",
    productPrice = "$6.95",
    onPress,
    img = require("../../../assets/images/icon2.png")
  } = props;

  const {
    containerStyle,
    viewStyle1,
    imageContainerStyle,
    imageStyle,
    productNameStyle,
    viewStyle2,
    productPriceStyle
  } = styles;
  return (
    <SafeAreaView>
      <TouchableOpacity style={containerStyle} onPress={onPress}>
        <View style={viewStyle1}>
          <View style={imageContainerStyle}>
            <Image source={img} style={imageStyle} />
          </View>
          <Text style={[fontSize.cardFontSize,productNameStyle]}>{productName}</Text>
        </View>
        <View style={viewStyle2}>
          <Text style={[fontSize.cardFontSize,productPriceStyle]}>{productPrice}</Text>
          <Icon
            name="keyboard-arrow-right"
            size={22}
            color={colors.iconColor}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: colors.secondaryColor,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  viewStyle1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
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
  productNameStyle: {
    color: colors.primaryColor,
    marginLeft: 10
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
