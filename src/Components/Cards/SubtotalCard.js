import React from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import colors from "../../utils/Colors";
import fontSize from "../../utils/FontSize";
import Button2 from "../Buttons/Button2";
export default function SubtotalCard(props) {
  const { containerStyle } = styles;
  return (
    <SafeAreaView>
      <View style={containerStyle}>
        <Text style={[fontSize.loactionCardFontSize]}>Subtotal:</Text>
        <Text style={[fontSize.loactionCardFontSize]}>$10.95</Text>
        <Button2
          onPress={props.onPress}
          btnColor={colors.buttonColor.buttonSuccessColor}
          iconDisplay="none"
          buttonStyle={{ borderRadius: 0 }}
        >
          ADD TO CART
        </Button2>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10
  }
});
