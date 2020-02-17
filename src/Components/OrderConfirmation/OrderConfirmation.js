import React, { Component, Fragment } from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import CarouselSlider from "../CarouselSlider/CarouselSlider";
import colors from "../../utils/Colors";
import Button2 from "../Buttons/Button2";
import fontSize from "../../utils/FontSize";
import { withNavigation } from "react-navigation";
class OrderConfirmation extends Component {
  render() {
    const {
      containerStyle,
      textStyle1,
      textStyle2,
      textStyle3,
      textStyle4,
      addressContainerStyle,
      textStyle5,
      textStyle6,
      totalContainerStyle,
      textStyle7,
      textStyle8,
      paymentContainerStyle,
      textStyle9,
      textStyle10,
      buttonStyle,
      buttonTextStyle
    } = styles;
    return (
      <Fragment>
        <CarouselSlider />
        <SafeAreaView style={containerStyle}>
          <Text style={[fontSize.boldFontSize, textStyle1]}>
            CONGRATULATIONS!
          </Text>
          <Text style={[fontSize.mediumFontSize, textStyle2]}>
            REWARDS AMOUNT EARNED: $5.00
          </Text>
          <Text style={[fontSize.regularFontSize, textStyle3]}>
            Order # 12345
          </Text>
          <Text style={[fontSize.regularFontSize, textStyle4]}>
            Your Order Is On The Way
          </Text>
          <View style={addressContainerStyle}>
            <Text style={[fontSize.regularFontSize, textStyle5]}>
              Delivery Address:
            </Text>
            <Text style={[fontSize.regularSmallFontSize, textStyle6]}>
              12345 Cavalier Ln. Cleveland , OH 45213
            </Text>
          </View>
          <View style={totalContainerStyle}>
            <Text style={[fontSize.regularFontSize, textStyle7]}>Total:</Text>
            <Text style={[fontSize.regularFontSize, textStyle8]}>$120.75</Text>
          </View>
          <View style={paymentContainerStyle}>
            <Text style={[fontSize.regularFontSize, textStyle9]}>
              Payment Method:
            </Text>
            <Text style={[fontSize.regularFontSize, textStyle10]}>AMEX</Text>
          </View>
        </SafeAreaView>
        <Button2
          onPress={() => {
            this.props.navigation.navigate("MainPage");
          }}
          btnColor={colors.buttonColor.buttonPrimaryColor}
          iconDisplay="none"
          buttonStyle={buttonStyle}
          buttonTextStyle={buttonTextStyle}
        >
          BACK TO MENU
        </Button2>
      </Fragment>
    );
  }
}
export default withNavigation(OrderConfirmation);
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: colors.secondaryColor,
    padding: 16
  },
  textStyle1: { color: colors.checkBoxColor, textAlign: "center" },
  textStyle2: {
    color: colors.successColor,
    textAlign: "center",
    marginTop: 10
  },
  textStyle3: {
    color: colors.primaryColor,
    textAlign: "center",
    marginTop: 10
  },
  textStyle4: {
    color: colors.primaryColor,
    textAlign: "center",
    fontStyle: "italic",
    marginTop: 10
  },
  textStyle6: {
    paddingLeft: 20
  },
  addressContainerStyle: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.borderColor,
    paddingVertical: 16,
    marginVertical: 16
  },
  totalContainerStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  paymentContainerStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  buttonStyle: { borderRadius: 0, margin: 16 },
  buttonTextStyle: {
    color: colors.secondaryColor
  },
  textStyle10: {
    marginTop: 10
  }
});
