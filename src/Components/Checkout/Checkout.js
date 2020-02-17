import React, { Component, Fragment } from "react";
import { Text, StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import TitleHeaderWithoutIcon from "../Headers/TitleHeaderWithoutIcon";
import Colors from "../../utils/Colors";
import CheckoutCard from "../Cards/CheckoutCard";
import Button2 from "../Buttons/Button2";
import { withNavigation } from "react-navigation";

class Checkout extends Component {
  render() {
    const {
      itemStyle,
      qtyStyle,
      priceStyle,
      headerStyle,
      rightContainerStyle,
      leftPortionStyle,
      rightPortionStyle,
      orderTotalStyle,
      qtyContainerStyle,
      priceContainerStyle,
      safeStyle,
      scrollStyle,
      contentContainerStyle,
      orderContainerStyle,
      orderStyle,
      orderPriceStyle,
      feeStyle,
      btnContainerStyle,
      buttonStyle1,
      buttonStyle2,
      bottomStyle
    } = styles;
    return (
      <Fragment>
        <TitleHeaderWithoutIcon
          pageTitle="Checkout"
          title="Delivery"
          iconHandler1={() => {
            this.props.navigation.goBack();
          }}
        />
        <View style={headerStyle}>
          <View style={leftPortionStyle}>
            <Text style={itemStyle}>ITEMS</Text>
            <View style={rightContainerStyle}>
              <View style={qtyContainerStyle}>
                <Text style={qtyStyle}>QTY</Text>
              </View>
              <View style={priceContainerStyle}>
                <Text style={priceStyle}>TOTAL</Text>
              </View>
            </View>
          </View>
          <View style={rightPortionStyle}>
            <Text style={orderTotalStyle}>Order Total</Text>
          </View>
        </View>
        <SafeAreaView style={safeStyle}>
          <ScrollView
            style={scrollStyle}
            contentContainerStyle={contentContainerStyle}
          >
            <CheckoutCard
              onPress={() => {
                this.props.navigation.navigate("CouponPage");
              }}
            />
          </ScrollView>
          <View style={bottomStyle}>
            <View style={orderContainerStyle}>
              <Text style={orderStyle}>Order Total:</Text>
              <Text style={orderPriceStyle}>$11.77</Text>
            </View>
            <View style={orderContainerStyle}>
              <Text style={orderStyle}>Earned Rewards</Text>
              <Text style={orderPriceStyle}>+ $2.00</Text>
            </View>
            <View style={btnContainerStyle}>
              <Button2
                iconDisplay="none"
                btnColor={Colors.buttonColor.buttonPrimaryColor}
                buttonStyle={buttonStyle1}
              >
                EDIT ORDER
              </Button2>
              <Button2
                onPress={() => {
                  this.props.navigation.navigate("OrderConfirmation");
                }}
                iconDisplay="none"
                btnColor={Colors.buttonColor.buttonSecondaryColor}
                buttonStyle={buttonStyle2}
              >
                PROCEED
              </Button2>
            </View>
          </View>
        </SafeAreaView>
        {/* <NavigationBar /> */}
      </Fragment>
    );
  }
}
export default withNavigation(Checkout);
const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: "row",
    borderColor: Colors.borderColor,
    borderWidth: 0.5,
    // paddingHorizontal: 16,
    // paddingVertical: 5,
    backgroundColor: Colors.secondaryColor,
    // backgroundColor: "gold",
    alignItems: "center"
    // justifyContent: "space-between"
  },
  leftPortionStyle: {
    // backgroundColor: "skyblue",
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
    borderRightColor: Colors.borderColor,
    borderRightWidth: 0.5,

    paddingHorizontal: 5,
    paddingVertical: 5
  },
  rightPortionStyle: {
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "pink",

    // paddingRight: 10,
    paddingVertical: 5,
    flex: 1
  },
  itemStyle: {
    // backgroundColor: "gold",
    flex: 1.5
  },
  rightContainerStyle: {
    flexDirection: "row",
    flex: 1,
    // backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "space-around"
  },
  qtyContainerStyle: {
    // backgroundColor: "pink",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  qtyStyle: {},
  priceContainerStyle: {
    // backgroundColor: "aqua",
    flex: 1.3,
    alignItems: "center",
    justifyContent: "center"
  },
  priceStyle: {},
  safeStyle: {
    flex: 1,
    backgroundColor: Colors.secondaryColor
  },
  scrollStyle: {
    flex: 1
    // backgroundColor: "pink"
  },
  contentContainerStyle: {
    // padding: 16
  },
  bottomStyle: {
    paddingVertical: 10,
    paddingHorizontal: 16
  },
  orderContainerStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  feeStyle: {
    // paddingHorizontal: 16
  },
  btnContainerStyle: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 5
    // paddingHorizontal: 16
  },
  buttonStyle1: {
    borderRadius: 0,
    paddingVertical: 5
  },
  buttonStyle2: {
    borderRadius: 0,
    paddingVertical: 5
  }
});
