import React, { Component, Fragment } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import CarouselSlider from "../CarouselSlider/CarouselSlider";
import NotificationCard from "../Cards/NotificationCard";
import colors from "../../utils/Colors";
import FontSize from "../../utils/FontSize";

export default class NotificationPage extends Component {
  render() {
    const { contentContainerStyle, textStyle1 } = styles;
    return (
      <Fragment>
        <CarouselSlider />
        <Text style={[FontSize.regularFontSize, textStyle1]}>
          Notifications
        </Text>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={contentContainerStyle}
        >
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
        </ScrollView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingBottom: 16
  },
  textStyle1: {
    color: colors.primaryColor,
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 1,
    paddingVertical: 5,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 10
  }
});
