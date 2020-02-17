import React, { Component, Fragment } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  FlatList,
  TouchableHighlight,
  SafeAreaView
} from "react-native";
import { Fonts } from "../../utils/Fonts";
import Icon from "react-native-vector-icons/MaterialIcons";
import Colors from "../../utils/Colors";
import FontSize from "../../utils/FontSize";

export default class DropDownList extends Component {
  state = {
    modalVisible: false,
    selectedValue: "Default Value",
    selectedIndex: null
  };

  modalHandler = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  selectedValueHandler = (selectedValue, selectedIndex) => {
    this.setState({ selectedValue, selectedIndex });
    this.props.onChangeText(selectedValue, selectedIndex);
    this.modalHandler();
  };

  render() {
    const {
      data = [
        { name: "Tariq Ali" },
        { name: "Shahid Ghafoor" },
        { name: "Jafeel" },
        { name: "Sabir Khan" },
        { name: "Muzaffar Iqbal" },
        { name: "Taimoor Khan" },
        { name: "Usman Iqbal" },
        { name: "Hamza Saeed Khan" }
      ],
      title = "title",
      containerStyle,
      errorMsg,
      flag,
      inputValue,
      inputStyle,
      inputStyleDisabled,
      star,
      disabled = false
    } = this.props;

    const {
      pickerContainerStyle,
      containerStyle1,
      textStyle1,
      headingStyle,
      modalContainerStyle,
      dataContainerStyle,
      modalHeaderStyle,
      modalHeadingStyle,
      textStyle2,
      flatListContainerStyle,
      fieldStyle,
      errorStyle,
      headingStyleDisabled
    } = styles;
    return (
      <Fragment>
        <View style={[containerStyle1, containerStyle]}>
          <Text
            style={[
              FontSize.semiBoldFontSize,
              ,
              disabled ? headingStyleDisabled : headingStyle
            ]}
          >
            {title}
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
          <TouchableOpacity
            disabled={disabled}
            style={[
              pickerContainerStyle,
              disabled ? inputStyleDisabled : inputStyle
            ]}
            onPress={() => this.modalHandler()}
          >
            <Text
              style={[
                FontSize.loactionCardFontSize,
                textStyle1,
                {
                  color:
                    inputValue === ""
                      ? Colors.inputColor.placeholderTextColor
                      : Colors.primaryColor
                }
              ]}
            >
              {inputValue}
            </Text>
            <Icon
              name="keyboard-arrow-down"
              size={20}
              color={
                disabled
                  ? Colors.inputColor.placeholderTextColor
                  : Colors.primaryColor
              }
            />
          </TouchableOpacity>
          <Text style={[errorStyle, { display: flag ? "flex" : "none" }]}>
            {errorMsg}
          </Text>
        </View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}
        >
          <View style={modalContainerStyle}>
            <SafeAreaView style={dataContainerStyle}>
              <View style={modalHeaderStyle}>
                <Text style={modalHeadingStyle}>{title}</Text>
                <TouchableOpacity onPress={this.modalHandler}>
                  <Icon name="clear" size={20} color={Colors.primaryColor} />
                </TouchableOpacity>
              </View>

              <View style={flatListContainerStyle}>
                <FlatList
                  style={{ width: "100%" }}
                  data={data}
                  renderItem={({ item, index }) => (
                    <TouchableHighlight
                      style={fieldStyle}
                      onPress={() =>
                        this.selectedValueHandler(item.name, index)
                      }
                    >
                      <Text
                        style={[
                          FontSize.loactionCardFontSize,
                          textStyle2,
                          {
                            color:
                              index == this.state.selectedIndex
                                ? "#2C4BFC"
                                : "#909090"
                          }
                        ]}
                      >
                        {item.name}
                      </Text>
                    </TouchableHighlight>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
            </SafeAreaView>
          </View>
        </Modal>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle1: {
    marginTop: 16
  },
  headingStyle: {
    color: Colors.primaryColor
  },
  headingStyleDisabled: {
    color: Colors.inputColor.placeholderTextColor
  },
  pickerContainerStyle: {
    marginTop: 4,
    borderWidth: 1,
    borderColor: "#000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 4
  },
  textStyle1: {
    color: Colors.inputColor.placeholderTextColor
  },
  modalContainerStyle: {
    padding: 20,
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  dataContainerStyle: {
    // flex: 1,
    // padding: 20,
    backgroundColor: "white",
    width: "100%",
    height: "50%",
    borderRadius: 10
  },
  modalHeaderStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    padding: 16
  },
  modalHeadingStyle: {
    fontFamily: Fonts.EncodeSansSemiBold,
    color: Colors.primaryColor,
    fontSize: 16
  },
  flatListContainerStyle: {
    flex: 1,
    // alignItems: 'center',
    // borderWidth: 1,
    paddingVertical: 20
  },
  textStyle2: {
    color: Colors.primaryColor
    // textAlign: 'center'
  },
  fieldStyle: {
    borderBottomWidth: 0.5,
    padding: 16
  },
  errorStyle: {
    color: "red",
    fontSize: 12,
    fontFamily: Fonts.EncodeSansRegular,
    marginTop: 5
  }
});
