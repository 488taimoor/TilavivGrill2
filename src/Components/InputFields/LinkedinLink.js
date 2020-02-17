import React, { Component, Fragment } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
} from "react-native";
import validator from 'validator';
import { Fonts } from '../utils/Fonts';
class LinkedinLink extends Component {

    state = {
        // text: this.props.value,
        displayText: "none",
    }

    // * handleText Function Start

    handleLink = text => {

        const reg = /^https:\/\/[a-z]{2,3}\.linkedin\.com\/.*$/;
        // ^https:\/\/[a-z]{1,3}\.facebook\.com\/.*$
        const validateLinkedin = reg.test(text);

        if (validateLinkedin) {
            this.setState({
                displayText: "none",
            });
            this.props.onChange(text, textFlag = false)
        }
        else if (validator.isEmpty(text)) {
            this.setState({
                displayText: "none",
            });
            this.props.onChange(text, textFlag = true)
        }
        else {
            this.setState({
                displayText: "flex",
            });

            this.props.onChange(text, textFlag = true)
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
            autoCapitalize,
            inputTextColor,
            textHelper,
            textHelperStyle,
            inputContainerStyle,
            inputStyle,
            errorColor = '#000'
        } = this.props;

        const { containerStyle, inputStyle1, errorStyle, inputNameStyle } = styles;

        return (
            <Fragment>
                <View style={[containerStyle, inputContainerStyle, { borderBottomColor: errorColor }]}>
                    <Text style={[inputNameStyle, { color: errorColor }]}>{placeholder}</Text>

                    <TextInput
                        style={[inputStyle1, { color: inputTextColor }, inputStyle,]}
                        keyboardType='url'
                        autoCapitalize={autoCapitalize}
                        placeholder={placeholder}
                        placeholderTextColor="#B4B4B4"
                        autoCorrect={false}
                        value={inputValue}
                        onChangeText={text => this.handleLink(text)}
                    />

                </View>
                <Text
                    style={[errorStyle, { display: required && flag ? 'flex' : this.state.displayText }, textHelperStyle,]}
                >
                    {required && inputValue == '' ? error : textHelper}
                </Text>
            </Fragment>
        );
    };
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
        fontFamily: Fonts.EncodeSansMedium,
        fontSize: 10,
        color: '#000'
    },
    inputStyle1: {
        fontFamily: Fonts.EncodeSansRegular,
        color: "#9B9B9B",
        fontSize: 14,
        // height: 40,
        flex: 1,
        width: '100%',
        // borderWidth: 1,
        paddingHorizontal: 0,
        paddingVertical: 0,
        marginTop: 4,
    },
    errorStyle: {
        fontFamily: Fonts.EncodeSansRegular,
        color: "#FF0000",
        fontSize: 10,
        marginTop: 4
        // display: 'none',
    },
});

export default LinkedinLink;
