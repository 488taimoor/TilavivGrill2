import React, { Component, Fragment } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Modal,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import TitleHeaderWithoutIcon from "../Headers/TitleHeaderWithoutIcon";
import Colors from "../../utils/Colors";
import ShopingCartCard from "../Cards/ShopingCartCard";
import Button2 from "../Buttons/Button2";
import { withNavigation } from "react-navigation";
import NavigationBar from "../NavigationBar/NavigationBar";
import CustomInput from "../InputFields/CustomInput";
import FontSize from "../../utils/FontSize";
import LoginModal from "../LoginModal/LoginModal";

class ShoppingCart extends Component {
  state = {
    modalVisible: false,
    userToken: ""
  };

  UNSAFE_componentWillMount() {
    AsyncStorage.getItem("userToken")
      .then(res => {
        if (res !== null) {
          // We have data!!
          console.log("Get AsyncStorage Response in Shopping Cart: ", res);
          this.setState({ userToken: res });
        } else {
          console.log(
            "Get AsyncStorage Response in Shopping Cart: ",
            JSON.parse(res)
          );
          this.setState({ userToken: res });
        }
      })
      .catch(err => {
        console.log("Get AsyncStorage Error in Shopping Cart: ", err);
      });
  }

  modalHandler = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };
  render() {
    const { modalVisible, userToken } = this.state;
    const {
      itemStyle,
      qtyStyle,
      priceStyle,
      headerStyle,
      rightContainerStyle,
      qtyContainerStyle,
      priceContainerStyle,
      safeStyle,
      scrollStyle,
      contentContainerStyle,
      orderContainerStyle,
      orderStyle,
      orderPriceStyle,
      feeStyle,
      btnContainerStyle,
      buttonStyle1,
      buttonStyle2,
      bottomStyle
    } = styles;
    return (
      <Fragment>
        <TitleHeaderWithoutIcon
          pageTitle="Cart"
          iconHandler1={() => {
            this.props.navigation.goBack();
          }}
        />
        <View style={headerStyle}>
          <Text style={itemStyle}>ITEMS</Text>
          <View style={rightContainerStyle}>
            <View style={qtyContainerStyle}>
              <Text style={qtyStyle}>QTY</Text>
            </View>
            <View style={priceContainerStyle}>
              <Text style={priceStyle}>PRICE</Text>
            </View>
          </View>
        </View>
        <SafeAreaView style={safeStyle}>
          <ScrollView
            style={scrollStyle}
            contentContainerStyle={contentContainerStyle}
          >
            <ShopingCartCard />
            <ShopingCartCard />
            <ShopingCartCard />
            <ShopingCartCard />
            <ShopingCartCard />
          </ScrollView>
          <View style={bottomStyle}>
            <View style={orderContainerStyle}>
              <Text style={orderStyle}>Pita</Text>
              <Text style={orderPriceStyle}>+ $0.00/ea.</Text>
            </View>
            <Text style={feeStyle}>Tax and Delivery Fee</Text>
            <View style={btnContainerStyle}>
              <Button2
                iconDisplay="none"
                btnColor={Colors.buttonColor.buttonErrorColor}
                buttonStyle={buttonStyle1}
              >
                CANCEL
              </Button2>
              <Button2
                iconDisplay="none"
                btnColor={Colors.buttonColor.buttonPrimaryColor}
                buttonStyle={buttonStyle2}
                // onPress={() => {
                //   this.props.navigation.navigate("Checkout");
                // }}
                onPress={
                  userToken === "" ||
                  userToken === null ||
                  userToken === undefined
                    ? // userToken === false
                      this.modalHandler
                    : () => {
                        this.props.navigation.navigate("PickupInfo");
                      }
                }
              >
                CHECKOUT
              </Button2>
            </View>
          </View>
        </SafeAreaView>
        {/* modal start */}
        <LoginModal
          loginHandler={() => {
            this.props.navigation.navigate("PickupInfo");
            this.modalHandler();
          }}
          modalHandler={this.modalHandler}
          modalVisible={modalVisible}
        />
        <NavigationBar />
      </Fragment>
    );
  }
}
export default withNavigation(ShoppingCart);
const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: "row",
    paddingHorizontal: 16,
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 1,
    paddingVertical: 5,
    backgroundColor: Colors.secondaryColor,
    alignItems: "center",
    justifyContent: "space-between"
  },
  itemStyle: {
    // backgroundColor: "gold",
    flex: 2
  },
  rightContainerStyle: {
    flexDirection: "row",
    flex: 1,
    // backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "space-around"
  },
  qtyContainerStyle: {
    // backgroundColor: "pink",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  qtyStyle: {},
  priceContainerStyle: {
    // backgroundColor: "aqua",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  priceStyle: {},
  safeStyle: {
    flex: 1,
    backgroundColor: Colors.secondaryColor
  },
  scrollStyle: {
    flex: 1
    // backgroundColor: "pink"
  },
  contentContainerStyle: {
    padding: 16
  },
  bottomStyle: {
    paddingVertical: 10,
    paddingHorizontal: 16
  },
  orderContainerStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  feeStyle: {
    // paddingHorizontal: 16
  },
  btnContainerStyle: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 5
    // paddingHorizontal: 16
  },
  buttonStyle1: {
    borderRadius: 0,
    paddingVertical: 5
  },
  buttonStyle2: {
    borderRadius: 0,
    paddingVertical: 5
  }
});
