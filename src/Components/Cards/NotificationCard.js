import React from "react";

import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import colors from "../../utils/Colors";
import fontSize from "../../utils/FontSize";
function NotificationCard() {
  const { containerStyle, textStyle1, textStyle2, textStyle3 } = styles;
  return (
    <TouchableOpacity style={containerStyle}>
      <Text style={[fontSize.mediumFontSize, textStyle1]}>
        FREE COOKIE FRIDAY!
      </Text>
      <Text style={[fontSize.mediumFontSize, textStyle2]}>
        W/ PURCHASE OF ANY 2 ENTREES
      </Text>
      <Text style={textStyle3}>Expire: 05/05/2020</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  containerStyle: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor
  },
  textStyle1: {
    color: colors.errorColor
  },
  textStyle2: {
    marginTop: 10,
    color: colors.primaryColor
  },
  textStyle3: {
    marginTop: 5,
    color: colors.primaryColor,
    textAlign: "right"
  }
});
export default NotificationCard;
