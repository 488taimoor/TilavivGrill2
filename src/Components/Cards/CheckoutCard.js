import React, { Fragment } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Colors from "../../utils/Colors";
import Button2 from "../Buttons/Button2";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function CheckoutCard(props) {
  const {
    contentContainerStyle,
    leftPortionStyle,
    leftMainStyle,
    rightPortionStyle,
    orderTotalStyle,
    innerContainerStyle,
    viewStyle1,
    prodStyle,
    qtyContainerStyle,
    qtyStyle,
    priceStyle,
    rightContainerStyle,
    priceContainerStyle,
    stateContainerStyle,
    stateStyle,
    tipStyle,
    stateTextStyle,
    percentTextStyle,
    dollarStyle,
    dollarTextStyle,
    couponContainerStyle,
    couponStyle,
    couponTextStyle,
    iconContainerStyle,
    offTextStyle,
    orderTextStyle
  } = styles;
  return (
    <Fragment>
      <View style={contentContainerStyle}>
        <View style={leftPortionStyle}>
          {/*map start */}
          <View style={leftMainStyle}>
            <View style={viewStyle1}>
              <Text style={prodStyle}>Beef Ribeye Steak</Text>
            </View>
            <View style={rightContainerStyle}>
              <View style={qtyContainerStyle}>
                <Text style={qtyStyle}>1</Text>
              </View>
              <View style={priceContainerStyle}>
                <Text style={priceStyle}>$14.95</Text>
              </View>
            </View>
          </View>
          <View style={leftMainStyle}>
            <View style={viewStyle1}>
              <Text style={prodStyle}>Beef Ribeye Steak</Text>
            </View>
            <View style={rightContainerStyle}>
              <View style={qtyContainerStyle}>
                <Text style={qtyStyle}>1</Text>
              </View>
              <View style={priceContainerStyle}>
                <Text style={priceStyle}>$14.95</Text>
              </View>
            </View>
          </View>
          <View style={leftMainStyle}>
            <View style={viewStyle1}>
              <Text style={prodStyle}>Beef Ribeye Steak</Text>
            </View>
            <View style={rightContainerStyle}>
              <View style={qtyContainerStyle}>
                <Text style={qtyStyle}>1</Text>
              </View>
              <View style={priceContainerStyle}>
                <Text style={priceStyle}>$14.95</Text>
              </View>
            </View>
          </View>
          {/* map end */}
        </View>
        <View style={rightPortionStyle}>
          <Text style={orderTotalStyle}>$10.95</Text>
        </View>
      </View>
      <View style={stateContainerStyle}>
        <View style={stateStyle}>
          <Text style={stateTextStyle}>State Application Taxes</Text>
          <Text style={percentTextStyle}>7.5%</Text>
        </View>
        <View style={dollarStyle}>
          <Text style={dollarTextStyle}>+ $0.00</Text>
        </View>
      </View>
      <View style={stateContainerStyle}>
        <View style={stateStyle}>
          <Text style={stateTextStyle}>Delivery Fee )Fee within 5 Miles</Text>
        </View>
        <View style={dollarStyle}>
          <Text style={dollarTextStyle}>+ $0.00</Text>
        </View>
      </View>
      <View style={stateContainerStyle}>
        <View style={stateStyle}>
          <Text style={stateTextStyle}>Order Subtotal</Text>
        </View>
        <View style={dollarStyle}>
          <Text style={dollarTextStyle}>$10.95</Text>
        </View>
      </View>
      <View style={stateContainerStyle}>
        <View style={tipStyle}>
          <Text style={stateTextStyle}>
            Tip (Optional) Automated Suggestion
          </Text>
        </View>
        <View style={dollarStyle}>
          <Text style={dollarTextStyle}>$ Tip</Text>
        </View>
      </View>
      <TouchableOpacity style={couponContainerStyle} onPress={props.onPress}>
        <View style={couponStyle}>
          <Text style={couponTextStyle}>SELECT A COUPON</Text>
        </View>
        <View style={iconContainerStyle}>
          <Text style={offTextStyle}>10% Off First Time</Text>
          <Icon name="chevron-right" size={22} color={Colors.iconColor} />
        </View>
      </TouchableOpacity>
      <View style={stateContainerStyle}>
        <View style={tipStyle}>
          <Text style={stateTextStyle}>
            Get a 10% off your first app ordering
          </Text>
        </View>
        <View style={dollarStyle}>
          <Text style={orderTextStyle}>$1.10</Text>
        </View>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: Colors.borderColor,
    borderTopWidth: 0
    // backgroundColor: "gold"
  },
  leftPortionStyle: {
    // backgroundColor: "skyblue",
    flex: 3,
    borderRightWidth: 0.5,
    borderRightColor: Colors.borderColor
  },
  leftMainStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 5
  },
  rightPortionStyle: {
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "pink",
    flex: 0.97
    // height: "100%"
  },
  viewStyle1: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "pink",
    flex: 1.5
  },
  prodStyle: {},
  rightContainerStyle: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around"
    // backgroundColor: "grey"
  },
  qtyContainerStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  qtyStyle: {},
  priceContainerStyle: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1.3
  },
  priceStyle: {},
  stateContainerStyle: {
    // backgroundColor: "pink",
    flexDirection: "row",
    alignItems: "center",
    // height: "100%",
    borderWidth: 0.5,
    borderColor: Colors.borderColor,
    borderTopWidth: 0
  },
  stateStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    flex: 3,
    borderRightWidth: 0.5,
    borderRightColor: Colors.borderColor
  },
  tipStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    flex: 3
    // borderRightWidth: 0.5,
    // borderRightColor: Colors.borderColor
  },
  dollarStyle: {
    // backgroundColor: "gold",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  couponContainerStyle: {
    // backgroundColor: "pink",
    flexDirection: "row",
    alignItems: "center",
    // height: "100%",
    borderWidth: 0.5,
    borderColor: Colors.borderColor,
    borderTopWidth: 0,
    padding: 5
  },
  couponStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1
  },
  iconContainerStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  offTextStyle: {
    marginRight: 5,
    color: Colors.successColor
  },
  orderTextStyle: {
    color: Colors.successColor
  }
});
