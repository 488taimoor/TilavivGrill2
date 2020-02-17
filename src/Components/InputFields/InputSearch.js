import React, { Component, Fragment } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

class InputSearch extends Component {
  state = {
    show: false
  };

  focusHandler = () => {
    this.setState({ show: !this.state.show }, () => {
      console.log("show: ", this.state.show);
    });
  };

  blurHandler = () => {
    this.setState({ show: !this.state.show }, () => {
      console.log("show: ", this.state.show);
    });
  };

  render() {
    // ! Destructure props...
    const {
      iconName = "search",
      iconSize,
      iconColor,
      inputValue,
      placeholder,
      placeholderTextColor = "#B4B4B4",
      inputTextColor,
      inputContainerStyle,
      iconStyle,
      inputStyle,
      onChange,
      onPress,
      containerStyle
    } = this.props;
    // !

    // ! Destructure styles...
    const {
      containerStyle1,
      inputStyle1,
      leftIconStyle,
      rightIconStyle
    } = styles;
    // !

    return (
      <Fragment>
        <View style={[{ flexDirection: "row" }, containerStyle]}>
          <View style={[containerStyle1, inputContainerStyle]}>
            <Icon
              style={[leftIconStyle, iconStyle]}
              name={iconName}
              size={iconSize}
              color={iconColor}
            />

            <TextInput
              style={[inputStyle1, { color: inputTextColor }, inputStyle]}
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              autoCorrect={false}
              value={inputValue}
              onFocus={this.focusHandler}
              onBlur={this.blurHandler}
              onChangeText={text => onChange(text)}
            />
          </View>
          <TouchableOpacity
            style={[
              rightIconStyle,
              {
                display: inputValue !== "" || this.state.show ? "flex" : "none"
              }
            ]}
            onPress={onPress}
          >
            <Icon name="clear" size={20} color="#007AFF" />
          </TouchableOpacity>
        </View>
      </Fragment>
    );
  }
}
const styles = StyleSheet.create({
  containerStyle1: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: "black"
  },
  inputStyle1: {
    color: "#000",
    fontSize: 14,
    flex: 1,
    width: "100%",
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  leftIconStyle: {
    paddingRight: 10,
    alignSelf: "center"
  },
  rightIconStyle: {
    paddingLeft: 10,
    alignSelf: "center"
  }
});

export default InputSearch;
