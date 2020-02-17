import React, { Component, Fragment, useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import FontSize from "../../utils/FontSize";
import CustomInput from "../InputFields/CustomInput";
import { ScrollView } from "react-native-gesture-handler";
import Colors from "../../utils/Colors";
import Button2 from "../Buttons/Button2";
import CarouselSlider from "../CarouselSlider/CarouselSlider";
import { withNavigation } from "react-navigation";
import LoginModal from "../LoginModal/LoginModal";
import { ApiServer } from "../../server/ApiService";

const Account = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [signup, setSignup] = useState({
    name: "",
    nameFlag: false,
    nameRequired: false,
    // phone: "",
    // phoneFlag: false,
    // phoneRequired: false,
    email: "",
    emailFlag: false,
    emailRequired: false,
    password: "",
    passwordFlag: false,
    passwordRequired: false,
    storeID: "",
    storeIDFlag: false,
    storeIDRequired: false
  });

  const modalHandler = () => {
    setModalVisible(!modalVisible);
  };
  const nameHandler = (name, nameFlag) => {
    setSignup({
      ...signup,
      name,
      nameFlag,
      nameRequired: false
    });
  };
  // lastNameHandler = (lastName, lastNameFlag) => {
  //   this.setState({ lastName, lastNameFlag, lastNameRequire: false });
  // };
  // phoneHandler = (phone, phoneFlag) => {
  //   this.setState({ phone, phoneFlag, phoneRequire: false });
  // };
  const emailHandler = (email, emailFlag) => {
    setSignup({ ...signup, email, emailFlag, emailRequired: false });
  };
  const passwordHandler = (password, passwordFlag) => {
    setSignup({ ...signup, password, passwordFlag, passwordRequire: false });
  };
  const storeIDHandler = (storeID, storeIDFlag) => {
    setSignup({ ...signup, storeID, storeIDFlag, storeIDRequire: false });
  };
  const signUpHandler = () => {
    if (signup.name === "" || signup.nameFlag) {
      setSignup({ ...signup, nameFlag: true, nameRequired: true });
    } else if (signup.email === "" || signup.emailFlag) {
      setSignup({ ...signup, emailFlag: true, emailRequired: true });
    } else if (signup.password === "" || signup.passwordFlag) {
      setSignup({ ...signup, passwordFlag: true, passwordRequired: true });
    } else if (signup.storeID === "" || signup.storeIDFlag) {
      setSignup({ ...signup, storeIDFlag: true, storeIDRequired: true });
    } else {
      let api = "api/users/";
      let method = "POST";
      let data = {
        name: signup.name,
        email: signup.email,
        password: signup.password,
        userFromWhichApp: signup.storeID
      };
      ApiServer.GetData(api, data, method)
        .then(result => {
          console.log("this is result in SignUp", result);
        })
        .catch(err => {
          console.log("this is error", err);
        });

      setSignup({
        ...signup,
        name: "",
        nameFlag: false,
        nameRequired: false,
        email: "",
        emailFlag: false,
        emailRequired: false,
        password: "",
        passwordFlag: false,
        passwordRequired: false,
        storeID: "",
        storeIDFlag: false,
        storeIDRequired: false
      });
    }
  };
  const {
    headerTextStyle,
    containerStyle,
    contentContainerStyle,
    buttonStyle,
    buttonTextStyle,
    descStyle,
    loginStyle
  } = styles;

  const {
    name,
    nameFlag,
    nameRequired,
    storeID,
    storeIDFlag,
    storeIDRequired,
    email,
    emailFlag,
    emailRequired,
    password,
    passwordFlag,
    passwordRequired
  } = signup;
  return (
    <Fragment>
      <CarouselSlider />
      <ScrollView
        containerStyle={containerStyle}
        contentContainerStyle={contentContainerStyle}
      >
        <Text style={[FontSize.boldFontSize, headerTextStyle]}>Sign Up</Text>
        <CustomInput
          // inputContainerStyle={{}}
          regEx={/^[a-zA-Z0-9 ]*$/}
          inputValue={name}
          flag={nameFlag}
          required={nameRequired}
          placeholder="Name:"
          textHelper="Enter Valid Name"
          error="Field Required"
          onChange={nameHandler}
        />

        {/* <CustomInput
          inputContainerStyle={{ marginTop: 20 }}
          regEx={/^[0-9]*$/}
          inputValue={phone}
          flag={phoneFlag}
          required={phoneRequired}
          placeholder="Phone:"
          textHelper="Enter Valid Phone"
          error="Field Required"
          onChange={this.phoneHandler}
        /> */}
        <CustomInput
          inputContainerStyle={{ marginTop: 20 }}
          regEx={/^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+[.][a-zA-Z]{2,3}$/}
          inputValue={email}
          flag={emailFlag}
          required={emailRequired}
          placeholder="Email:"
          textHelper="Enter Valid Email"
          error="Field Required"
          onChange={emailHandler}
        />
        <CustomInput
          inputContainerStyle={{ marginTop: 20 }}
          regEx={/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_])(?=.{8,})/}
          inputValue={password}
          flag={passwordFlag}
          required={passwordRequired}
          secureTextEntry={true}
          placeholder="Password:"
          textHelper="Enter Valid Password"
          error="Field Required"
          onChange={passwordHandler}
        />
        <CustomInput
          inputContainerStyle={{ marginTop: 20 }}
          regEx={/^[a-zA-Z0-9]*$/}
          inputValue={storeID}
          flag={storeIDFlag}
          required={storeIDRequired}
          placeholder="Store ID:"
          textHelper="Enter Valid Store ID"
          error="Field Required"
          onChange={storeIDHandler}
        />

        <Button2
          onPress={signUpHandler}
          btnColor={colors.buttonColor.buttonPrimaryColor}
          iconDisplay="none"
          buttonStyle={buttonStyle}
          buttonTextStyle={[FontSize.semiBoldFontSize, buttonTextStyle]}
        >
          SIGN UP
        </Button2>
        <Text style={[loginStyle]}>Already have an account?</Text>
        <Button2
          onPress={modalHandler}
          btnColor={colors.buttonColor.buttonPrimaryColor}
          iconDisplay="none"
          buttonStyle={buttonStyle}
          buttonTextStyle={[FontSize.semiBoldFontSize, buttonTextStyle]}
        >
          LOGIN
        </Button2>
      </ScrollView>
      <LoginModal
        loginHandler={() => {
          props.navigation.navigate("Home");
          modalHandler();
        }}
        modalHandler={modalHandler}
        modalVisible={modalVisible}
      />
    </Fragment>
  );
};

export default withNavigation(Account);
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
  },
  loginStyle: {
    marginTop: 10,
    textAlign: "center",
    color: Colors.primaryColor
  }
});
// An email has been sent to the provided email with further instructions.
