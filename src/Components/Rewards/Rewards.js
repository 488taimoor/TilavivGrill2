import React, { Component, Fragment } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import FontSize from "../../utils/FontSize";
import { ScrollView } from "react-native-gesture-handler";
import Colors from "../../utils/Colors";
import Button2 from "../Buttons/Button2";
import CarouselSlider from "../CarouselSlider/CarouselSlider";
import { withNavigation } from "react-navigation";
class Rewards extends Component {
  render() {
    const {
      headerTextStyle,
      containerStyle,
      contentContainerStyle,
      buttonStyle,
      buttonTextStyle,
      descStyle,
      viewStyle,
      imageContainerStyle,
      imageStyle
    } = styles;
    return (
      <Fragment>
        <CarouselSlider />
        <ScrollView
          containerStyle={containerStyle}
          contentContainerStyle={contentContainerStyle}
        >
          <Text style={[FontSize.boldFontSize, headerTextStyle]}>Rewards</Text>
          <View style={viewStyle}>
            <View style={imageContainerStyle}>
              <Image
                style={imageStyle}
                source={require("../../../assets/images/image1.jpg")}
              />
            </View>
          </View>
          <Button2
            onPress={() => {
              this.props.navigation.navigate("RewardsBalance");
            }}
            btnColor={Colors.buttonColor.buttonSuccessColor}
            iconDisplay="none"
            buttonStyle={buttonStyle}
            buttonTextStyle={[FontSize.semiBoldFontSize, buttonTextStyle]}
          >
            LOGIN
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
export default withNavigation(Rewards);
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
  buttonStyle: { borderRadius: 0, marginTop: 20 },
  buttonTextStyle: {
    color: Colors.secondaryColor
  },
  descStyle: {
    marginTop: 30
  },
  viewStyle: {
    backgroundColor: Colors.secondaryColor,
    alignItems: "center",
    justifyContent: "center"
  },
  imageContainerStyle: {
    height: 180,
    width: 140
  },
  imageStyle: {
    height: "100%",
    width: "100%"
  }
});
