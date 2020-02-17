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
export default function AddOnsCard(props) {
  const { check = false, onPress } = props;

  const {
    containerStyle,
    viewStyle,
    checkBoxStyle,
    priceStyle,
    textStyle
  } = styles;
  return (
    <SafeAreaView>
      <TouchableOpacity style={containerStyle} onPress={onPress}>
        <View style={viewStyle}>
          <View style={checkBoxStyle}>
            <Icon
              name={check ? "check" : null}
              size={16}
              color={colors.checkBoxColor}
            />
          </View>
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
  checkBoxStyle: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.borderColor,
    alignItems: "center",
    justifyContent: "center"
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
