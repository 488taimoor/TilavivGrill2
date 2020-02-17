import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Colors from "../../utils/Colors";
import Button2 from "../Buttons/Button2";

export default function ShopingCartCard() {
  const {
    containerStyle,
    contentContainerStyle,
    innerContainerStyle,
    viewStyle1,
    imageContainerStyle,
    imageStyle,
    prodStyle,
    qtyContainerStyle,
    qtyBorderStyle,
    qtyStyle,
    priceStyle,
    rightContainerStyle,
    priceContainerStyle,
    orderContainerStyle,
    orderPriceStyle,
    orderStyle,
    listContainerStyle,
    prodContainerStyle,
    listProdStyle,
    listPriceStyle,
    buttonStyle
  } = styles;
  return (
    <View style={innerContainerStyle}>
      <View style={contentContainerStyle}>
        <View style={viewStyle1}>
          <View style={imageContainerStyle}>
            <Image
              style={imageStyle}
              source={require("../../../assets/images/image1.jpg")}
            />
          </View>
          <Text style={prodStyle}>Beef Ribeye Steak</Text>
        </View>
        <View style={rightContainerStyle}>
          <View style={qtyContainerStyle}>
            <View style={qtyBorderStyle}>
              <Text style={qtyStyle}>1</Text>
            </View>
          </View>
          <View style={priceContainerStyle}>
            <Text style={priceStyle}>$14.95</Text>
          </View>
        </View>
      </View>
      <View style={orderContainerStyle}>
        <Text style={orderStyle}>Order Details</Text>
        <Text style={orderPriceStyle}>$14.95/ea.</Text>
      </View>
      <View style={listContainerStyle}>
        <View style={prodContainerStyle}>
          <Text style={listProdStyle}>Pita</Text>
          <Text style={listPriceStyle}>+ $0.00/ea.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    // backgroundColor: "gold",
    // paddingHorizontal: 16
  },
  innerContainerStyle: {
    // borderBottomWidth: 1,
    // borderBottomColor: Colors.borderColor,
    paddingVertical: 5,
    marginTop: 5
  },
  contentContainerStyle: {
    flexDirection: "row",
    alignItems: "center"
  },
  viewStyle1: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "pink",
    flex: 2
  },
  imageContainerStyle: {
    // backgroundColor: "aqua",
    height: 70,
    width: 90
  },
  imageStyle: {
    height: "100%",
    width: "100%"
  },
  prodStyle: {
    marginLeft: 5
  },
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
  qtyBorderStyle: {
    // borderColor: Colors.borderColor,
    height: 24,
    width: 24,
    // borderWidth: 1,
    // borderRadius: 3,
    alignItems: "center",
    justifyContent: "center"
  },
  qtyStyle: {},
  priceContainerStyle: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  priceStyle: {},
  orderContainerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColor,
    paddingVertical: 5
  },
  listContainerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColor,
    paddingVertical: 10
  },
  prodContainerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5
  },
  buttonStyle: {
    borderRadius: 0,
    paddingVertical: 5,
    paddingHorizontal: 0,
    width: "40%",
    alignSelf: "flex-end",
    marginTop: 5
  }
});
