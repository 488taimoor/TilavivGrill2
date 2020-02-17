import React, { Component, Fragment } from "react";
import { Text, StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import TitleHeaderWithoutIcon from "../Headers/TitleHeaderWithoutIcon";
import Colors from "../../utils/Colors";
import OrderHistoryCard from "../Cards/OrderHistoryCard";
import Button2 from "../Buttons/Button2";
import CarouselSlider from "../CarouselSlider/CarouselSlider";
import { withNavigation } from "react-navigation";

class OrderHistory extends Component {
  render() {
    const {
      historyStyle,
      itemStyle,
      qtyStyle,
      priceStyle,
      headerStyle,
      rightContainerStyle,
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
        <CarouselSlider />
        <Text style={historyStyle}>Order History</Text>
        <View style={headerStyle}>
          <Text style={itemStyle}>Order# 12345</Text>
          <View style={rightContainerStyle}>
            <View style={qtyContainerStyle}>
              <Text style={qtyStyle}>10/27/2019 V</Text>
            </View>
          </View>
        </View>
        <SafeAreaView style={safeStyle}>
          <ScrollView
            style={scrollStyle}
            contentContainerStyle={contentContainerStyle}
          >
            <OrderHistoryCard />
          </ScrollView>
          <View style={bottomStyle}>
            <View style={orderContainerStyle}>
              <Text style={orderStyle}>Order Total:</Text>
              <Text style={orderPriceStyle}>$36.23</Text>
            </View>
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}
export default withNavigation(OrderHistory);
const styles = StyleSheet.create({
  historyStyle: {
    backgroundColor: Colors.tagBackgroundColor,
    textAlign: "center",
    paddingVertical: 10
  },
  headerStyle: {
    flexDirection: "row",
    paddingHorizontal: 16,
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 1,
    paddingVertical: 5,
    backgroundColor: Colors.secondaryColor,
    alignItems: "center",
    justifyContent: "space-between"
  },
  itemStyle: {
    // backgroundColor: "gold",
    flex: 2
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
    flex: 1,
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
    padding: 16
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
