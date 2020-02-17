import React, { Component } from "react";
import { Text, StyleSheet, View, Switch, SafeAreaView } from "react-native";
import Colors from "../../utils/Colors";
import FontSize from "../../utils/FontSize";

export default class CouponsCard extends Component {
  state = {
    switchFlag: false
  };

  switchHandler = () => {
    this.setState({ switchFlag: !this.state.switchFlag });
  };
  render() {
    const { switchFlag } = this.state;
    const {
      containerStyle,
      textStyle1,
      viewStyle1,
      textStyle2,
      viewStyle2,
      textStyle3,
      textStyle4
    } = styles;
    return (
      <View style={containerStyle}>
        <Text style={[FontSize.semiBoldFontSize, textStyle1]}>
          10% Off First Time
        </Text>
        <View style={viewStyle1}>
          <Text style={[FontSize.semiBoldCouponFontSize, textStyle2]}>
            Get a 10% off your first app ordering
          </Text>
          <Switch value={switchFlag} onValueChange={this.switchHandler} />
        </View>
        <View style={viewStyle2}>
          <Text style={[FontSize.cardFontSize, textStyle3]}>
            COUPON CODE: 10 Off
          </Text>
          <Text style={textStyle4}>EXPIRES: 2/2/2020</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: Colors.secondaryColor,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColor,
    paddingVertical: 10
  },
  viewStyle1: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  viewStyle2: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});
