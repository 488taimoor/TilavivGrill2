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
export default function DishOptionCard(props) {
  const { check = false, onPress } = props;

  const {
    containerStyle,
    viewStyle,
    radioBtnStyle,
    priceStyle,
    textStyle
  } = styles;
  return (
    <SafeAreaView>
      <TouchableOpacity style={containerStyle} onPress={onPress}>
        <View style={viewStyle}>
          <View
            style={[
              radioBtnStyle,
              {
                borderColor: check
                  ? colors.radioButtonColor
                  : colors.borderColor,
                backgroundColor: check
                  ? colors.radioButtonColor
                  : colors.secondaryColor
              }
            ]}
          ></View>
          <Text style={[fontSize.cardFontSize, textStyle]}>Pita</Text>
        </View>
        <Text style={[fontSize.cardFontSize, priceStyle]}>+ $2.00</Text>
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
  viewStyle: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: 'gold',
    flex: 1
  },
  radioBtnStyle: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10
  },
  textStyle: {
    marginLeft: 10,
    color: colors.primaryColor
  },
  priceStyle: {
    color: colors.textColor,
    marginRight: 5
  }
});
