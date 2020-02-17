import React, {Component, Fragment} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import validator from 'validator';
import { Fonts } from '../utils/Fonts';
export default class InputMask extends Component {
  state = {
    // text: this.props.value,
    displayText: 'none',
  };
  // * handleText Function Start

  handleText = text => {
    const reg = /[+][\d]-[\d]{3}-[\d]{3}-[\d]{4}$/;
    const validateText = reg.test(text);

    if (validateText) {
      this.setState({
        displayText: 'none',
      });
      this.props.onChange(text, (textFlag = false));
    } else if (validator.isEmpty(text)) {
      this.setState({
        displayText: 'none',
      });
      this.props.onChange(text, (textFlag = true));
    } else {
      this.setState({
        displayText: 'flex',
      });

      this.props.onChange(text, (textFlag = true));
    }
  };
  render() {
    const {
      inputValue,
      error,
      required,
      flag,
      placeholder,
      secureTextEntry,
      autoCapitalize,
      keyboardType,
      inputTextColor = '#000',
      textHelper,
      textHelperStyle,
      inputContainerStyle,
      inputStyle,
      inputStyleDisabled,
      errorColor,
      maxLength,
      minLength,
      textDisplay = 'flex',
      errorMsg,
      star,
      disabled = false,
    } = this.props;
    // alert(flag)
    const {
      containerStyle,
      inputStyle1,
      errorStyle,
      inputNameStyle,
      inputNameStyleDisabled,
    } = styles;
    return (
      <Fragment>
        <View
          style={[
            containerStyle,
            inputContainerStyle,
            {borderBottomColor: errorColor},
          ]}>
          <Text
            style={[
              disabled ? inputNameStyleDisabled : inputNameStyle,
              {opacity: textDisplay === 'flex' ? 1 : 0},
            ]}>
            {placeholder}
            <Text style={{color: disabled ? '#9b9b9b' : 'red'}}>{star}</Text>
          </Text>
          <TextInputMask
            type={'custom'}
            options={{
              mask: '+9-999-999-9999',
            }}
            value={inputValue}

            onChangeText={text => this.handleText(text)}
            style={[
              inputStyle1,
              {color: inputTextColor},
              disabled ? inputStyleDisabled : inputStyle,
            ]}
          />
        </View>
        <Text
          style={[
            errorStyle,
            {display: required && flag ? 'flex' : this.state.displayText},
            textHelperStyle,
          ]}>
          {required && inputValue == '' ? error : textHelper}
        </Text>
        <Text style={[errorStyle]}>{flag ? errorMsg : ''}</Text>
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
      borderColor: 'black',
      // borderRadius: 50,
      // paddingHorizontal: 10
    },
    inputNameStyle: {
      fontFamily: Fonts.EncodeSansRegular,
      fontSize: 12,
      color: '#000',
    },
    inputNameStyleDisabled: {
      fontFamily: Fonts.EncodeSansRegular,
      fontSize: 12,
      color: '#9b9b9b',
    },
    inputStyle1: {
      fontFamily: Fonts.EncodeSansRegular,
      color: '#9B9B9B',
      fontSize: 14,
      // height: 40,
      // flex: 1,
      width: '100%',
      // borderWidth: 1,
      paddingHorizontal: 0,
      paddingVertical: 0,
      marginTop: 4,
    },
    errorStyle: {
      fontFamily: Fonts.EncodeSansRegular,
      color: '#FF0000',
      fontSize: 10,
      marginTop: 4,
      // display: 'none',
    },
  });