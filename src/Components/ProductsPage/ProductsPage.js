import React, { Component, Fragment } from "react";
import { Text, StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import TitleHeaderWithoutIcon from "../Headers/TitleHeaderWithoutIcon";
import colors from "../../utils/Colors";
import ProductPageCard from "../Cards/ProductPageCard";
import { withNavigation } from "react-navigation";
import NavigationBar from "../NavigationBar/NavigationBar";
class ProductsPage extends Component {
  render() {
    return (
      <Fragment>
        <TitleHeaderWithoutIcon
          title="Menu"
          pageTitle="A La Carte"
          iconHandler1={() => {
            // this.props.navigation.goBack();
            this.props.navigation.navigate("MainPage");
          }}
          backgroundColor={colors.headerColor.headerBackgroungColor}
        />
        <SafeAreaView
          style={{ flex: 1, backgroundColor: colors.secondaryColor }}
        >
          <ScrollView
            style={{ flex: 1, backgroundColor: colors.secondaryColor }}
          >
            <ProductPageCard
              onPress={() => {
                this.props.navigation.navigate("DishOptions");
              }}
            />
            <ProductPageCard
              onPress={() => {
                this.props.navigation.navigate("DishOptions");
              }}
            />
            <ProductPageCard
              onPress={() => {
                this.props.navigation.navigate("DishOptions");
              }}
            />
          </ScrollView>
        </SafeAreaView>
        <NavigationBar />
      </Fragment>
    );
  }
}
export default withNavigation(ProductsPage);
const styles = StyleSheet.create({});
