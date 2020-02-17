import React, { Component, Fragment } from "react";
import { Text, StyleSheet, View } from "react-native";
import TitleHeaderWithoutIcon from "../Headers/TitleHeaderWithoutIcon";
import FontSize from "../../utils/FontSize";
import CustomInput from "../InputFields/CustomInput";
import DropDownList from "../InputFields/DropDownList";
import { ScrollView } from "react-native-gesture-handler";
import MultiLinesTextInput from "../InputFields/MultiLinesTextInput";
import Colors from "../../utils/Colors";
import Button2 from "../Buttons/Button2";
import { withNavigation } from "react-navigation";
class AppSupport extends Component {
  state = {
    name: "",
    nameFlag: false,
    nameRequired: false,
    email: "",
    emailFlag: false,
    emailRequired: false,
    subject: "",
    subjectFlag: false,
    msg: ""
  };
  nameHandler = (name, nameFlag) => {
    this.setState({ name, nameFlag, nameRequire: false });
  };
  emailHandler = (email, emailFlag) => {
    this.setState({ email, emailFlag, emailRequire: false });
  };
  subjectHandler = subject => {
    this.setState({ subject });
  };
  msgHandler = msg => {
    this.setState({ msg });
  };

  render() {
    const {
      headerTextStyle,
      containerStyle,
      contentContainerStyle,
      buttonStyle,
      buttonTextStyle,
      descStyle
    } = styles;
    const {
      name,
      nameFlag,
      nameRequired,
      email,
      emailFlag,
      emailRequired,
      subject,
      subjectFlag,
      msg
    } = this.state;
    return (
      <Fragment>
        <TitleHeaderWithoutIcon
          iconHandler1={() => {
            this.props.navigation.goBack();
          }}
          title="Menu"
          pageTitle="Support"
        />
        <ScrollView
          containerStyle={containerStyle}
          contentContainerStyle={contentContainerStyle}
        >
          <Text style={[FontSize.boldFontSize, headerTextStyle]}>
            App Support
          </Text>
          <CustomInput
            // inputContainerStyle={{}}
            regEx={/^[a-zA-Z]*$/}
            inputValue={name}
            flag={nameFlag}
            required={nameRequired}
            placeholder="Name:"
            textHelper="Enter Valid UserName"
            error="Field Required"
            onChange={this.nameHandler}
          />
          <CustomInput
            inputContainerStyle={{ marginTop: 20 }}
            regEx={/^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+[.][a-zA-Z]{2,3}$/}
            inputValue={email}
            flag={emailFlag}
            required={emailRequired}
            placeholder="Email:"
            textHelper="Enter Valid Email"
            error="Field Required"
            onChange={this.emailHandler}
          />
          <DropDownList
            title="Subject:"
            onChangeText={this.subjectHandler}
            inputValue={subject}
            flag={subjectFlag}
            errorMsg="Field Required"
          />
          <MultiLinesTextInput
            title="Message:"
            inputValue={msg}
            onChange={this.msgHandler}
          />
          <Button2
            btnColor={colors.buttonColor.buttonPrimaryColor}
            iconDisplay="none"
            buttonStyle={buttonStyle}
            buttonTextStyle={[FontSize.semiBoldFontSize, buttonTextStyle]}
          >
            SEND
          </Button2>
          <Text style={[FontSize.cardFontSize, descStyle]}>
            *Please Note. This support email is for assistance, questions, or
            issues with the app itself. Do not email regard store information,
            or any other store related questions. For any inquiries regarding
            this restaurant, please contact the restaurant directly.*
          </Text>
        </ScrollView>
      </Fragment>
    );
  }
}
export default withNavigation(AppSupport);
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
  }
});
