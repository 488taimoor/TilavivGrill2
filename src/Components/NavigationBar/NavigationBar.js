import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Platform,
  Text
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Colors from "../../utils/Colors";
import { withNavigation } from "react-navigation";
class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: null };
  }

  getId = selectedIndex => {
    this.setState({ selectedIndex });
  };
  render() {
    const { containerStyle, footerCli, btnStyle, textStyle } = styles;
    const data = [
      { name: "file-alt", text: "Menu", target: "MainPage" },
      { name: "shopping-cart", text: "Cart", target: "ShoppingCart" },
      { name: "dollar-sign", text: "Rewards", target: "Rewards" },
      { name: "percent", text: "Coupons", target: "CouponPage" },
      { name: "map-marked-alt", text: "Locations", target: "Home" }
    ];
    const { selectedIndex } = this.state;
    return (
      <SafeAreaView style={containerStyle}>
        <View style={footerCli}>
          {data.map((res, index) => (
            <TouchableOpacity
              key={res.name}
              style={btnStyle}
              onPress={() => {
                this.props.navigation.navigate(res.target);
                this.getId(index);
              }}
            >
              <Icon
                name={res.name}
                size={16}
                color={
                  selectedIndex === index
                    ? Colors.buttonColor.buttonPrimaryColor
                    : Colors.primaryColor
                }
              />
              <Text
                style={[
                  textStyle,
                  {
                    color:
                      selectedIndex === index
                        ? Colors.buttonColor.buttonPrimaryColor
                        : Colors.primaryColor
                  }
                ]}
              >
                {res.text}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    );
  }
}

function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: "black",
    shadowOffset: { width: 0, height: -0.5 * elevation },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * elevation
  };
}

const styles = StyleSheet.create({
  containerStyle: {
    zIndex: 1,
    backgroundColor: "#fff",
    borderTopColor: Colors.borderColor,
    borderTopWidth: 0.5
    // ...elevationShadowStyle(2)
  },
  Image: {
    width: 48,
    height: 48
  },
  ImageIOS: {
    width: 48,
    height: 48
  },
  footerCli: {
    // ...Platform.select({
    //     ios: {
    //         flex: 0.1
    //     },
    //     android: {
    //         height: 60
    //     }
    // }),
    // height: 60,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    // elevation: 2,
    // shadowColor: "grey",
    // shadowOffset: { x: 0, y: -2 },
    // shadowRadius: 4,
    // shadowOpacity: 0.2,
    width: "100%"
  },
  fabContainerStyle: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#FF0034"
  },
  btnStyle: { alignItems: "center", justifyContent: "center" },
  textStyle: {
    marginTop: 5,
    fontSize: 10
  }
});

export default withNavigation(NavigationBar);
