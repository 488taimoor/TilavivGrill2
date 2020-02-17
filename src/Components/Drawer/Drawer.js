import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import { withNavigation } from "react-navigation";
import { DrawerActions } from "react-navigation-drawer";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import Colors from "../../utils/Colors";
import FontSize from "../../utils/FontSize";
import { database } from "react-native-firebase";

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: 0 };
  }

  getId = selectedIndex => {
    this.setState({ selectedIndex });
  };
  render() {
    const data = [
      { name: "home", text: "Home", target: "Home" },
      // { name: "mobile-alt", text: "About Us" },
      { name: "store-alt", text: "Store Info", target: "StoreInformation" },
      { name: "map-marked-alt", text: "Locations", target: "Home" },
      { name: "book-open", text: "Order History", target: "OrderHistory" },
      { name: "heart", text: "Favorites", target: "Favorites" },
      {
        name: "exclamation-circle",
        text: "Notifications",
        target: "NotificationPage"
      },
      // { name: "shopping-cart", text: "View Cart" },
      // { name: "facebook-f", text: "Share on Facebook" },
      // { name: "twitter", text: "Share on Twitter" },
      { name: "user-alt", text: "Support", target: "AppSupport" },
      { name: "sign-out-alt", text: "Log In / Log Out", target: "Account" }
    ];
    const {
      containerStyle,
      headingStyle,
      textStyle1,
      btnContainerStyle,
      viewStyle,
      iconContainerStyle,
      textContainerStyle
    } = styles;
    const { selectedIndex } = this.state;
    return (
      <SafeAreaView>
        <Text style={[FontSize.semiBoldFontSize, headingStyle]}>
          Tel Aviv Grill
        </Text>
        {data.map((res, index) => {
          return (
            <TouchableOpacity
              key={res.name}
              style={[
                btnContainerStyle,
                {
                  backgroundColor:
                    selectedIndex === index
                      ? Colors.buttonColor.buttonPrimaryColor
                      : Colors.secondaryColor
                }
              ]}
              onPress={() => {
                this.props.navigation.navigate(res.target);
                this.props.navigation.dispatch(DrawerActions.closeDrawer());
                this.getId(index);
              }}
            >
              <View style={iconContainerStyle}>
                <FontAwesome
                  name={res.name}
                  size={16}
                  color={
                    selectedIndex === index
                      ? Colors.secondaryColor
                      : Colors.primaryColor
                  }
                />
              </View>
              <View style={textContainerStyle}>
                <Text
                  style={[
                    FontSize.cardFontSize,
                    textStyle1,
                    {
                      color:
                        selectedIndex === index
                          ? Colors.secondaryColor
                          : Colors.primaryColor
                    }
                  ]}
                >
                  {res.text}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    height: 60,
    width: 60,
    borderWidth: 1,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  },
  containerStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: '#014f99',
    marginTop: 40,
    paddingVertical: 10,
    marginBottom: 20
  },
  headingStyle: {
    color: Colors.primaryColor,
    // backgroundColor: "gold",
    paddingVertical: 16,
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 1,
    paddingLeft: 16
  },
  textStyle1: {
    color: Colors.primaryColor
  },
  btnContainerStyle: {
    flexDirection: "row",
    paddingVertical: 14,
    paddingLeft: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColor,
    alignItems: "center"
  },
  iconContainerStyle: {
    // backgroundColor: "aqua",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textContainerStyle: {
    // backgroundColor: "pink",
    flex: 4
  }
});

export default withNavigation(Drawer);
