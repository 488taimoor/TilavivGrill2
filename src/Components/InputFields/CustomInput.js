import React, { Component, Fragment } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Fonts } from "../../utils/Fonts";
import FontSize from "../../utils/FontSize";
import Colors from "../../utils/Colors";
class CustomInput extends Component {
  state = {
    // text: this.props.value,
    displayText: "none"
  };

  // * handleText Function Start

  handleText = text => {
    // /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+[.][a-zA-Z]{2,3}$/  // Email Regular Expression
    // /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/; Good Password Regular Expression
    // /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_])(?=.{8,})/; // Strong Password Regular Expression
    // /^(?=.*[a-z\d !@#\$%\^&\*])(?=.{8,})/; // Normal Password Regular Expression
    const reg = this.props.regEx;
    const validateText = reg.test(text);

    if (validateText) {
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
      placeholder = "placeholder",
      secureTextEntry,
      autoCapitalize="none",
      keyboardType,
      inputTextColor = Colors.primaryColor,
      placeholderTextColor = Colors.inputColor.placeholderTextColor,
      textHelper,
      textHelperStyle,
      inputContainerStyle,
      inputStyle,
      inputStyleDisabled,
      errorColor,
      maxLength,
      minLength,
      textDisplay = "flex",
      star,
      disabled = false
    } = this.props;
    // alert(flag)
    const {
      containerStyle,
      inputStyle1,
      errorStyle,
      inputNameStyle,
      inputNameStyleDisabled
    } = styles;

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
              disabled ? inputNameStyleDisabled : inputNameStyle,
              { opacity: textDisplay === "flex" ? 1 : 0 }
            ]}
          >
            {placeholder}
            <Text
              style={{
                color: disabled
                  ? Colors.inputColor.placeholderTextColor
                  : Colors.inputColor.inputErrorColor
              }}
            >
              {star}
            </Text>
          </Text>

          <TextInput
            style={[
              FontSize.loactionCardFontSize,
              inputStyle1,
              { color: inputTextColor },
              disabled ? inputStyleDisabled : inputStyle
            ]}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
            secureTextEntry={secureTextEntry}
            // placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            autoCorrect={false}
            value={inputValue}
            maxLength={maxLength}
            minLength={minLength}
            editable={disabled ? false : true}
            onChangeText={text => this.handleText(text)}
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
    // borderBottomWidth: 1,
    // borderWidth: 1,
    borderColor: "black"
    // borderRadius: 50,
    // paddingHorizontal: 10
  },
  inputNameStyle: {
    color: Colors.primaryColor
  },
  inputNameStyleDisabled: {
    color: Colors.inputColor.placeholderTextColor
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

export default CustomInput;
