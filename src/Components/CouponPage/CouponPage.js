import React, { Component, Fragment } from "react";
import { Text, StyleSheet, View, ScrollView, SafeAreaView } from "react-native";
import TitleHeaderWithoutIcon from "../Headers/TitleHeaderWithoutIcon";
import Colors from "../../utils/Colors";
import InputSearch from "../InputFields/InputSearch";
import CouponsCard from "../Cards/CouponsCard";
import CouponsCard1 from "../Cards/CouponsCard1";
import { withNavigation } from "react-navigation";
import NavigationBar from "../NavigationBar/NavigationBar";

class CouponPage extends Component {
  state = {
    searchValue: ""
  };
  searchHandler = searchValue => {
    this.setState({ searchValue });
  };
  emptyHandler = () => {
    this.setState({ searchValue: "" });
  };
  render() {
    const {
      searchContainerStyle,
      inputContainerStyle,
      containerStyle,
      contentContainerStyle
    } = styles;
    const { searchValue } = this.state;
    return (
      <Fragment>
        <TitleHeaderWithoutIcon
          iconHandler1={() => {
            this.props.navigation.goBack();
          }}
          title="Checkout"
          pageTitle="Coupons"
          backgroundColor={Colors.secondaryColor}
        />
        <InputSearch
          iconName="search"
          iconSize={18}
          iconColor={colors.iconColor}
          placeholder="Search"
          inputTextColor={colors.primaryColor}
          inputValue={searchValue}
          onChange={this.searchHandler}
          onPress={this.emptyHandler}
          containerStyle={searchContainerStyle}
          inputContainerStyle={inputContainerStyle}
        />
        <SafeAreaView style={[containerStyle]}>
          <ScrollView
            style={[containerStyle]}
            contentContainerStyle={contentContainerStyle}
          >
            <CouponsCard />
            <CouponsCard1 />
          </ScrollView>
        </SafeAreaView>
        <NavigationBar />
      </Fragment>
    );
  }
}
export default withNavigation(CouponPage);
const styles = StyleSheet.create({
  searchContainerStyle: {
    paddingHorizontal: 16,
    // paddingVertical: 1,
    backgroundColor: colors.iconColor
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
    borderRadius: 5,
    padding: 5,
    marginVertical: 10,
    backgroundColor: colors.secondaryColor
    // marginHorizontal: 16,
  },
  containerStyle: {
    flex: 1,
    backgroundColor: Colors.secondaryColor
  },
  contentContainerStyle: {
    padding: 16
  }
});
