import React, { Component, Fragment } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import validator from "validator";
import { Fonts } from "../utils/Fonts";

class InputPassword extends Component {
  state = {
    displayText: "none",
    secureText: true
  };

  handlePassword = text => {
    // const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    // const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_])(?=.{8,})/;
    const reg = /^(?=.*[a-z\d !@#\$%\^&\*])(?=.{8,})/;
    const validatePassword = reg.test(text);

    if (validatePassword) {
      this.setState({
        displayText: "none"
      });
      this.props.onChange(text, (textFlag = false));
    } else if (text === "") {
      this.setState({
        displayText: "none"
      });
      this.props.onChange(text, (textFlag = true));
    } else {
      this.setState({
        displayText: "flex"
      });

      this.props.onChange(text, (textFlag = true));
    }
  };

  // * handlePassword Function End

  render() {
    const {
      inputValue,
      error,
      required,
      flag,
      placeholder,
      inputTextColor,
      textHelper,
      textHelperStyle,
      inputContainerStyle,
      inputStyle,
      errorColor = "#000",
      star
    } = this.props;

    const { secureText } = this.state;

    const { containerStyle, inputStyle1, errorStyle, inputNameStyle } = styles;

    return (
      <Fragment>
        <View style={[containerStyle, inputContainerStyle]}>
          <Text style={[inputNameStyle, { color: errorColor }]}>
            {placeholder}
            <Text style={{ color: "red" }}>{star}</Text>
          </Text>

          <TextInput
            style={[inputStyle1, { color: inputTextColor }, inputStyle]}
            secureTextEntry={secureText}
            // placeholder={placeholder}
            placeholderTextColor="#B4B4B4"
            autoCorrect={false}
            value={inputValue}
            onChangeText={text => this.handlePassword(text)}
          />
        </View>
        <Text
          style={[
            errorStyle,
            { display: required && flag ? "flex" : this.state.displayText },
            textHelperStyle
          ]}
        >
          {required && inputValue == "" ? error : textHelper}
        </Text>
      </Fragment>
    );
  }
}
const styles = StyleSheet.create({
  containerStyle: {
    // height: 40,
    // flex: 1,
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: 'center',
    borderBottomWidth: 1,
    // borderWidth: 1,
    borderColor: "black"
    // borderRadius: 50,
    // paddingHorizontal: 10
  },
  inputNameStyle: {
    fontFamily: Fonts.EncodeSansRegular,
    fontSize: 12,
    color: "#000"
  },
  inputStyle1: {
    fontFamily: Fonts.EncodeSansRegular,
    color: "#9B9B9B",
    fontSize: 14,
    // height: 40,
    // flex: 1,
    width: "100%",
    // borderWidth: 1,
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginTop: 4
  },
  errorStyle: {
    fontFamily: Fonts.EncodeSansRegular,
    color: "#FF0000",
    fontSize: 10,
    marginTop: 4
    // display: 'none',
  }
});
export default InputPassword;
