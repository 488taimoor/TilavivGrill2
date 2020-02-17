import React, { Component } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { Fonts } from "../../utils/Fonts";
import Colors from "../../utils/Colors";
import FontSize from "../../utils/FontSize";

export default class MultiLinesTextInput extends Component {
  state = {
    value: ""
  };

  inputHanlder = value => {
    this.setState({ value });
    this.props.onChange(value);
  };

  render() {
    const {
      inputContainerStyle,
      inputStyle,
      maxLength = 300,
      title = "title",
      inputValue = ""
    } = this.props;
    const { containerStyle, inputStyle1, textStyle1, textStyle2 } = styles;
    return (
      <View style={[containerStyle, inputContainerStyle]}>
        <Text style={[FontSize.semiBoldFontSize, textStyle1]}>{title}</Text>
        <TextInput
          style={[FontSize.loactionCardFontSize, inputStyle1, inputStyle]}
          //   placeholder="Type here..."
          multiline={true}
          maxLength={maxLength}
          value={inputValue}
          onChangeText={value => this.inputHanlder(value)}
        />
        <Text style={textStyle2}>
          Max words {inputValue.length}/{maxLength}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    // borderWidth: 1,
    marginTop: 16
  },
  textStyle1: {
    color: Colors.primaryColor
  },
  inputStyle1: {
    marginTop: 4,
    borderWidth: 1,
    padding: 5,
    // paddingBottom: 10,
    color: Colors.primaryColor,
    height: 100,
    borderRadius: 4
  },
  textStyle2: {
    marginTop: 4,
    fontFamily: Fonts.EncodeSansRegular,
    fontSize: 10,
    color: "#909090",
    alignSelf: "flex-end"
  }
});
