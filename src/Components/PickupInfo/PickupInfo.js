import React, { Component, Fragment } from "react";
import { Text, StyleSheet, View } from "react-native";
import TitleHeader from "../Headers/TitleHeader";
import FontSize from "../../utils/FontSize";
import CustomInput from "../InputFields/CustomInput";
import DropDownList from "../InputFields/DropDownList";
import { ScrollView } from "react-native-gesture-handler";
import MultiLinesTextInput from "../InputFields/MultiLinesTextInput";
import { withNavigation } from "react-navigation";
import Colors from "../../utils/Colors";
import Button2 from "../Buttons/Button2";
import NavigationBar from "../NavigationBar/NavigationBar";
class PickupInfo extends Component {
  state = {
    name: "",
    nameFlag: false,
    nameRequired: false,
    address: "",
    addressFlag: false,
    addressRequired: false,
    city: "",
    cityFlag: false,
    cityRequired: false,
    state: "",
    stateFlag: false,
    stateRequired: false,
    phone: "",
    phoneFlag: false,
    phoneRequired: false,
    apt: "",
    aptFlag: false,
    aptRequired: false,
    zip: "",
    zipFlag: false,
    zipRequired: false,
    msg: ""
  };
  nameHandler = (name, nameFlag) => {
    this.setState({ name, nameFlag, nameRequire: false });
  };
  addressHandler = (address, addressFlag) => {
    this.setState({ address, addressFlag, addressRequire: false });
  };
  cityHandler = (city, cityFlag) => {
    this.setState({ city, cityFlag, cityRequire: false });
  };
  stateHandler = (state, stateFlag) => {
    this.setState({ state, stateFlag, stateRequire: false });
  };
  phoneHandler = (phone, phoneFlag) => {
    this.setState({ phone, phoneFlag, phoneRequire: false });
  };
  aptHandler = (apt, aptFlag) => {
    this.setState({ apt, aptFlag, aptRequire: false });
  };
  zipHandler = (zip, zipFlag) => {
    this.setState({ zip, zipFlag, zipRequire: false });
  };
  msgHandler = msg => {
    this.setState({ msg });
  };

  render() {
    const {
      headerTextStyle,
      containerStyle,
      contentContainerStyle,
      buttonStyle,
      buttonTextStyle,
      descStyle
    } = styles;
    const {
      name,
      nameFlag,
      nameRequired,
      address,
      addressFlag,
      addressRequired,
      city,
      cityFlag,
      cityRequired,
      state,
      stateFlag,
      stateRequired,
      phone,
      phoneFlag,
      phoneRequired,
      apt,
      aptFlag,
      aptRequired,
      zip,
      zipFlag,
      zipRequired,
      msg
    } = this.state;
    return (
      <Fragment>
        <TitleHeader
          iconHandler1={() => {
            this.props.navigation.goBack();
          }}
          title="Cart"
          pageTitle="Pickup Info"
          iconName2="near-me"
          iconColor2={Colors.checkBoxColor}
        />
        <ScrollView
          containerStyle={containerStyle}
          contentContainerStyle={contentContainerStyle}
        >
          <Text style={[FontSize.semiBoldFontSize, headerTextStyle]}>
            Delivery Information
          </Text>
          <CustomInput
            // inputContainerStyle={{}}
            regEx={/^[a-zA-Z]*$/}
            inputValue={name}
            flag={nameFlag}
            required={nameRequired}
            placeholder="Name:"
            textHelper="Enter Valid UserName"
            error="Field Required"
            onChange={this.nameHandler}
          />
          <CustomInput
            inputContainerStyle={{ marginTop: 20 }}
            regEx={/^[a-zA-Z0-9 .#,-]*$/}
            inputValue={address}
            flag={addressFlag}
            required={addressRequired}
            placeholder="Address:"
            textHelper="Enter Valid Address"
            error="Field Required"
            onChange={this.addressHandler}
          />
          <CustomInput
            inputContainerStyle={{ marginTop: 20 }}
            regEx={/^[a-zA-Z ]*$/}
            inputValue={city}
            flag={cityFlag}
            required={cityRequired}
            placeholder="City:"
            textHelper="Enter Valid City"
            error="Field Required"
            onChange={this.cityHandler}
          />
          <CustomInput
            inputContainerStyle={{ marginTop: 20 }}
            regEx={/^[a-zA-Z ]*$/}
            inputValue={state}
            flag={stateFlag}
            required={stateRequired}
            placeholder="State:"
            textHelper="Enter Valid State"
            error="Field Required"
            onChange={this.stateHandler}
          />
          <CustomInput
            inputContainerStyle={{ marginTop: 20 }}
            regEx={/^[0-9]*$/}
            inputValue={phone}
            flag={phoneFlag}
            required={phoneRequired}
            placeholder="Phone #:"
            textHelper="Enter Valid Phone"
            error="Field Required"
            onChange={this.phoneHandler}
          />
          <CustomInput
            inputContainerStyle={{ marginTop: 20 }}
            regEx={/^[0-9]*$/}
            inputValue={apt}
            flag={aptFlag}
            required={aptRequired}
            placeholder="Apt #:"
            textHelper="Enter Valid Apt"
            error="Field Required"
            onChange={this.aptHandler}
          />
          <CustomInput
            inputContainerStyle={{ marginTop: 20 }}
            regEx={/^[a-zA-z0-9]*$/}
            inputValue={zip}
            flag={zipFlag}
            required={zipRequired}
            placeholder="Zip Code:"
            textHelper="Enter Valid Zip Code"
            error="Field Required"
            onChange={this.zipHandler}
          />
          <MultiLinesTextInput
            title="Memo:"
            inputValue={msg}
            onChange={this.msgHandler}
          />
          <Button2
            onPress={() => this.props.navigation.navigate("Checkout")}
            btnColor={colors.buttonColor.buttonPrimaryColor}
            iconDisplay="none"
            buttonStyle={buttonStyle}
            buttonTextStyle={[FontSize.semiBoldFontSize, buttonTextStyle]}
          >
            PROCEED TO CHECK OUT
          </Button2>
        </ScrollView>
        <NavigationBar />
      </Fragment>
    );
  }
}
export default withNavigation(PickupInfo);

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
    color: colors.secondaryColor
  },
  descStyle: {
    marginTop: 30
  }
});
