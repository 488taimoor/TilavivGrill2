import React from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import colors from "../../utils/Colors";
import fontSize from "../../utils/FontSize";
export default function SummaryCard(props) {
  const {
    containerStyle,
    headerTextStyle,
    listContainerStyle,
    listStyle,
    prodStyle,
    priceStyle,
    totalContainerStyle,
    totalStyle,
    totalPriceStyle
  } = styles;
  return (
    <SafeAreaView>
      <View style={[containerStyle]}>
        <Text style={[fontSize.cardFontSize, headerTextStyle]}>
          Chicken Breast Steak
        </Text>
        <View style={listContainerStyle}>
          <View style={listStyle}>
            <Text style={[fontSize.loactionCardFontSize, prodStyle]}>pita</Text>

            <Text style={[fontSize.loactionCardFontSize, priceStyle]}>
              + $0.00
            </Text>
          </View>
        </View>
        <View style={totalContainerStyle}>
          <Text style={[fontSize.loactionCardFontSize, totalStyle]}>
            Item Total
          </Text>

          <Text style={[fontSize.loactionCardFontSize, totalPriceStyle]}>
            $10.95
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: colors.secondaryColor,
    padding: 16,
    marginBottom: 50
  },
  headerTextStyle: { color: colors.primaryColor },
  listContainerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
    paddingVertical: 10
  },
  listStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5
  },
  prodStyle: { color: colors.primaryColor },
  priceStyle: { color: colors.primaryColor },

  totalContainerStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16
  },
  totalStyle: { color: colors.primaryColor },
  totalPriceStyle: { color: colors.primaryColor }
});
