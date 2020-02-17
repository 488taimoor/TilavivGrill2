import React, { Component, Fragment } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import FontSize from "../../utils/FontSize";
import { ScrollView } from "react-native-gesture-handler";
import Colors from "../../utils/Colors";
import Button2 from "../Buttons/Button2";
import CarouselSlider from "../CarouselSlider/CarouselSlider";
import TitleHeaderWithoutIcon from "../Headers/TitleHeaderWithoutIcon";
import CustomInput from "../InputFields/CustomInput";
import { withNavigation } from "react-navigation";
class RewardsBalance extends Component {
  state = {
    amount: "",
    amountFlag: false,
    amountRequired: false
  };

  amountHanlder = (amount, amountFlag) => {
    this.setState({ amount, amountFlag, amountRequired: false });
  };
  render() {
    const { amount, amountFlag, amountRequired } = this.state;
    const {
      headerTextStyle,
      containerStyle,
      contentContainerStyle,
      buttonStyle,
      buttonTextStyle,
      descStyle,
      viewStyle,
      imageContainerStyle,
      imageStyle,
      textStyle
    } = styles;
    return (
      <Fragment>
        <CarouselSlider />
        <TitleHeaderWithoutIcon
          iconHandler1={() => {
            // this.props.navigation.goBack();
            this.props.navigation.navigate("Rewards");
          }}
          pageTitle="Your Rewards Balance"
          title="Back"
        />
        <ScrollView
          containerStyle={containerStyle}
          contentContainerStyle={contentContainerStyle}
        >
          {/* <Text style={[FontSize.boldFontSize, headerTextStyle]}>Rewards</Text> */}

          <View style={viewStyle}>
            <View style={imageContainerStyle}>
              <Image
                style={imageStyle}
                source={require("../../../assets/images/image1.jpg")}
              />
            </View>
            <Text style={[FontSize.boldFontSize, textStyle]}>$100.00</Text>
          </View>
          <CustomInput
            inputContainerStyle={{ marginTop: 40 }}
            regEx={/^[0-9]*$/}
            placeholder="Rewards Amount To Apply"
            inputValue={amount}
            flag={amountFlag}
            required={amountRequired}
            textHelper="Only numbers"
            error="Field Required"
            onChange={this.amountHanlder}
          />
          <Button2
            btnColor={Colors.buttonColor.buttonSuccessColor}
            iconDisplay="none"
            buttonStyle={buttonStyle}
            buttonTextStyle={[FontSize.semiBoldFontSize, buttonTextStyle]}
          >
            APPLY AMOUNT
          </Button2>
          <Text style={[FontSize.cardFontSize, descStyle]}>
            Rewards dollars are calculated from overall amount spent from
            previous orders over a specific amount and accumulate over time.
            Your acctual amount can only be used to purchases items from this
            application only nad cannot be used or with anyother offer.
          </Text>
        </ScrollView>
      </Fragment>
    );
  }
}
export default withNavigation(RewardsBalance);
const styles = StyleSheet.create({
  headerTextStyle: {
    backgroundColor: Colors.secondaryColor,
    textAlign: "center",
    paddingBottom: 16
  },
  containerStyle: {
    flex: 1
  },
  contentContainerStyle: {
    padding: 16,
    backgroundColor: Colors.secondaryColor
  },
  textStyle: {
    color: Colors.checkBoxColor
  },
  buttonStyle: { borderRadius: 0, marginTop: 20 },
  buttonTextStyle: {
    color: Colors.secondaryColor
  },
  descStyle: {
    marginTop: 30
  },
  viewStyle: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  imageContainerStyle: {
    height: 120,
    width: 120
  },
  imageStyle: {
    height: "100%",
    width: "100%"
  }
});
