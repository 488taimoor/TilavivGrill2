import React, { Component, Fragment } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import validator from "validator";
import { Fonts } from "../utils/Fonts";
import FontSize from "../../utils/FontSize";
import { Colors } from "react-native/Libraries/NewAppScreen";
class InputEmail extends Component {
  state = {
    // text: this.props.value,
    displayText: "none"
  };

  // * handleText Function Start

  handleEmail = text => {
    const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+[.][a-zA-Z]{2,3}$/;
    const validateEmail = reg.test(text);

    if (validateEmail) {
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

  // * handleText Function End

  render() {
    // console.log('firstname:', this.props.value)
    // console.log('firstname1:', this.state.text)
    const {
      inputValue,
      error,
      required,
      flag,
      placeholder,
      secureTextEntry,
      autoCapitalize,
      inputTextColor = Colors.primaryColor,
      textHelper,
      placeholderTextColor = Colors.inputColor.placeholderTextColor,
      textHelperStyle,
      inputContainerStyle,
      inputStyle,
      errorColor = "#000",
      star
    } = this.props;

    const { containerStyle, inputStyle1, errorStyle, inputNameStyle } = styles;

    return (
      <Fragment>
        <View
          style={[
            containerStyle,
            inputContainerStyle,
            { borderBottomColor: errorColor }
          ]}
        >
          <Text
            style={[
              FontSize.semiBoldFontSize,
              inputNameStyle,
              { color: errorColor }
            ]}
          >
            {placeholder}
            <Text style={{ color: "red" }}>{star}</Text>
          </Text>

          <TextInput
            style={[
              FontSize.loactionCardFontSize,
              inputStyle1,
              { color: inputTextColor },
              inputStyle
            ]}
            keyboardType="email-address"
            autoCapitalize={autoCapitalize}
            secureTextEntry={secureTextEntry}
            // placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            placeholderTextColor="#B4B4B4"
            autoCorrect={false}
            value={inputValue}
            onChangeText={text => this.handleEmail(text)}
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
    color: Colors.primaryColor
  },
  inputStyle1: {
    // height: 40,
    // flex: 1,
    width: "100%",
    // borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 4,
    borderWidth: 1,
    borderRadius: 4
  },
  errorStyle: {
    fontFamily: Fonts.EncodeSansRegular,
    color: "#FF0000",
    fontSize: 10,
    marginTop: 4
    // display: 'none',
  }
});

export default InputEmail;
