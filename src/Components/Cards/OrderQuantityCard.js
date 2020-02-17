import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity
} from "react-native";
import colors from "../../utils/Colors";
import fontSize from "../../utils/FontSize";
import Icon from "react-native-vector-icons/MaterialIcons";
export default function OrderQunatityCard(props) {
  const { qtycontainerStyle, btnContainerStyle, btnStyle1, btnStyle2 } = styles;
  return (
    <SafeAreaView>
      <View style={qtycontainerStyle}>
        <Text style={[fontSize.cardFontSize]}>Qty:</Text>
        <View style={btnContainerStyle}>
          <TouchableOpacity style={btnStyle1}>
            <Icon name="remove" size={18} color={colors.primaryColor} />
          </TouchableOpacity>
          <TouchableOpacity style={btnStyle2}>
            <Icon name="add" size={18} color={colors.primaryColor} />
          </TouchableOpacity>
        </View>
        <Text style={[fontSize.cardFontSize]}>1</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  qtycontainerStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: colors.secondaryColor
  },
  btnContainerStyle: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 4
  },
  btnStyle1: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRightWidth: 0.5
  },
  btnStyle2: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderLeftWidth: 0.5
  }
});
