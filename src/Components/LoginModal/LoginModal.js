import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  SafeAreaView,
  AsyncStorage
} from "react-native";

import Colors from "../../utils/Colors";
import Button2 from "../Buttons/Button2";
import CustomInput from "../InputFields/CustomInput";
import FontSize from "../../utils/FontSize";
import { ApiServer } from "../../server/ApiService";
export default class LoginModal extends Component {
  state = {
    email: "",
    emailFlag: false,
    emailRequired: false,
    password: "",
    passwordFlag: false,
    passwordRequired: false
  };

  emailHandler = (email, emailFlag) => {
    this.setState({ email, emailFlag, emailRequire: false });
  };

  passwordHandler = (password, passwordFlag) => {
    this.setState({ password, passwordFlag, passwordRequire: false });
  };
  loginBtnHandler = () => {
    if (this.state.email === "" || this.state.emailFlag) {
      this.setState({ emailFlag: true, emailRequired: true });
    } else if (this.state.password === "" || this.state.passwordFlag) {
      this.setState({ passwordFlag: true, passwordRequired: true });
    } else {
      let api = "auth/local";
      let method = "POST";
      let data = { password: this.state.password, email: this.state.email };
      ApiServer.GetData(api, data, method)
        .then(result => {
          console.log("this is result in login moidal", result);

          AsyncStorage.setItem("userToken", JSON.stringify(result.data.token))
            // AsyncStorage.setItem("userToken", result.data.token)
            .then(res => {
              console.log("asynStorage Response: ", res);
            })
            .catch(err => {
              console.log("asyncStorage Error: ", err);
            });
        })
        .catch(err => {
          console.log("this is error", err);
        });
      this.props.loginHandler();
    }
  };
  render() {
    const { modalVisible, modalHandler } = this.props;
    const {
      email,
      emailFlag,
      emailRequired,
      password,
      passwordFlag,
      passwordRequired
    } = this.state;
    const {
      modalContainerStyle,
      boxContainerStyle,
      containerStyle,
      touchContainerStyle,
      loginStyle,
      touchStyle,
      buttonStyle3,
      tochbtnStyle1,
      tochbtnStyle2,
      buttonContainerStyle
    } = styles;
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          this.modalHandler();
        }}
      >
        <View style={modalContainerStyle}>
          <SafeAreaView style={boxContainerStyle}>
            <View style={containerStyle}>
              <Text style={[FontSize.semiBoldFontSize, loginStyle]}>
                Log In
              </Text>
              <CustomInput
                inputContainerStyle={{ marginTop: 10, paddingHorizontal: 16 }}
                regEx={/^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+[.][a-zA-Z]{2,3}$/}
                inputValue={email}
                keyboardType="email-address"
                flag={emailFlag}
                required={emailRequired}
                placeholder="Email:"
                textHelper="Enter Valid Email"
                error="Field Required"
                onChange={this.emailHandler}
                textHelperStyle={{ paddingHorizontal: 16 }}
              />
              <CustomInput
                inputContainerStyle={{ marginTop: 10, paddingHorizontal: 16 }}
                // regEx={/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_])(?=.{8,})/}
                regEx={/^.*/}
                inputValue={password}
                flag={passwordFlag}
                required={passwordRequired}
                secureTextEntry={true}
                placeholder="Password:"
                textHelper="Enter Valid Password"
                error="Field Required"
                onChange={this.passwordHandler}
                textHelperStyle={{ paddingHorizontal: 16 }}
              />
              <View style={touchContainerStyle}>
                <TouchableOpacity>
                  <Text style={[FontSize.cardFontSize, touchStyle]}>
                    Create an Account
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={[FontSize.cardFontSize, touchStyle]}>
                    Forgot Password
                  </Text>
                </TouchableOpacity>
              </View>
              <Button2
                iconName="facebook-square"
                iconColor="#2C4BFC"
                btnColor="none"
                buttonStyle={buttonStyle3}
                buttonTextStyle={{ color: Colors.primaryColor }}
              />
              <View style={buttonContainerStyle}>
                <TouchableOpacity
                  style={tochbtnStyle1}
                  onPress={this.loginBtnHandler}
                >
                  <Text style={[FontSize.cardFontSize, touchStyle]}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tochbtnStyle2} onPress={modalHandler}>
                  <Text style={[FontSize.cardFontSize, touchStyle]}>
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalContainerStyle: {
    // padding: 20,
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  boxContainerStyle: {
    // borderWidth: 1,
    flex: 1,
    // width: "100%"
    // backgroundColor: Colors.borderColor,
    justifyContent: "center",
    alignItems: "center"
  },
  containerStyle: {
    // flex: 1,
    paddingTop: 20,
    backgroundColor: Colors.secondaryColor,
    // height: 300,
    width: 300,
    borderRadius: 14,
    overflow: "hidden"
  },
  touchContainerStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16
    // borderBottomWidth: 0.5,
    // borderBottomColor: Colors.borderColor
  },
  loginStyle: {
    textAlign: "center"
  },
  touchStyle: {
    color: Colors.checkBoxColor
  },
  buttonStyle3: {
    borderRadius: 0,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: Colors.borderColor
    // paddingVertical: 5
  },
  buttonContainerStyle: {
    // backgroundColor: "skyblue",
    flexDirection: "row"
  },
  tochbtnStyle1: {
    // backgroundColor: "pink",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRightWidth: 0.5,
    borderRightColor: Colors.borderColor
  },
  tochbtnStyle2: {
    // backgroundColor: "pink",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderLeftWidth: 0.5,
    borderLeftColor: Colors.borderColor
  }
});
