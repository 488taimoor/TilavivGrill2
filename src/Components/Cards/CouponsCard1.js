import React, { Component } from "react";
import { Text, StyleSheet, View, Switch, SafeAreaView } from "react-native";
import Colors from "../../utils/Colors";
import FontSize from "../../utils/FontSize";

export default class CouponsCard1 extends Component {
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
        <View style={viewStyle1}>
          <Text style={[FontSize.semiBoldFontSize, textStyle2]}>20% OFF</Text>
          <Switch value={switchFlag} onValueChange={this.switchHandler} />
        </View>
        <Text style={[FontSize.semiBoldCouponFontSize, textStyle1]}>
          ANY ORDER OF $50 AND UP
        </Text>
        <Text style={textStyle4}>EXPIRES: 12/22/2017</Text>
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
  },
  textStyle2: {
    color: Colors.errorColor
  },
  textStyle1: {
    marginTop: 10
  },
  textStyle4: {
    marginTop: 10,
    textAlign: "right"
  }
});
