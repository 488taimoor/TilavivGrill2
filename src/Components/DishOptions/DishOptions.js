import React, { Component, Fragment } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Image
} from "react-native";
import TitleHeader from "../Headers/TitleHeader";
import colors from "../../utils/Colors";
import fontSize from "../../utils/FontSize";
import DishOptionCard from "../Cards/DishOptionCard";
import AddOnsCard from "../Cards/AddOnsCard";
import SummaryCard from "../Cards/SummaryCard";
import SubtotalCard from "../Cards/SubtotalCard";
import OrderQunatityCard from "../Cards/OrderQuantityCard";
import { withNavigation } from "react-navigation";
import NavigationBar from "../NavigationBar/NavigationBar";
import Colors from "../../utils/Colors";
class DishOptions extends Component {
  render() {
    const { textStyle, imageContainerStyle, imageStyle, descStyle } = styles;
    const {
      desc = "Chicken Breast Steak avaiable in Pita Bread. Latta (wrap). French Baguette and Plate."
    } = this.props;
    return (
      <Fragment>
        <TitleHeader
          title="Entrees"
          iconHandler1={() => {
            this.props.navigation.goBack();
          }}
          iconName2="shopping-cart"
          iconColor2={Colors.primaryColor}
          backgroundColor={colors.headerColor.headerBackgroungColor}
          pageTitle="Chicken Breast Steak"
        />
        <SafeAreaView
          style={{ flex: 1, backgroundColor: colors.secondaryColor }}
        >
          <ScrollView
            style={{
              flex: 1,
              backgroundColor: colors.secondaryColor
            }}
          >
            <View style={imageContainerStyle}>
              <Image
                style={imageStyle}
                source={require("../../../assets/images/image1.jpg")}
              />
            </View>
            <Text style={descStyle}>{desc}</Text>
            <Text style={[fontSize.cardFontSize, textStyle]}>Dish Options</Text>
            <DishOptionCard />
            <Text style={[fontSize.cardFontSize, textStyle]}>Adds Ons</Text>
            <AddOnsCard />
            <Text style={[fontSize.cardFontSize, textStyle]}>
              Order Quantity
            </Text>
            <OrderQunatityCard />
            <Text style={[fontSize.cardFontSize, textStyle]}>Item Summary</Text>
            <SummaryCard />
          </ScrollView>
          <SubtotalCard
            onPress={() => {
              this.props.navigation.navigate("ShoppingCart");
            }}
          />
        </SafeAreaView>
        <NavigationBar />
      </Fragment>
    );
  }
}
export default withNavigation(DishOptions);
const styles = StyleSheet.create({
  textStyle: {
    color: colors.primaryColor,
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
    textAlign: "center",
    backgroundColor: colors.tagBackgroundColor
  },
  imageContainerStyle: {
    height: 200,
    alignItems: "center",
    justifyContent: "center"
  },
  imageStyle: {
    height: "100%",
    width: "100%"
  },
  descStyle: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: colors.secondaryColor
  }
});
