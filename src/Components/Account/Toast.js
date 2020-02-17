import React, { Component } from "react";

import {
  StyleSheet,
  View,
  Modal,
  Text,
  Button,
  Platform,
  Animated
} from "react-native";

// import PropTypes from 'prop-types';

export default class Toast extends Component {
  constructor() {
    super();

    this.animateOpacityValue = new Animated.Value(0);

    this.state = {
      ShowToast: false
    };

    this.ToastMessage = "";
  }

  componentWillUnmount() {
    this.timerID && clearTimeout(this.timerID);
  }

  ShowToastFunction(message = "Custom React Native Toast", duration = 4000) {
    this.ToastMessage = message;

    this.setState({ ShowToast: true }, () => {
      Animated.timing(this.animateOpacityValue, {
        toValue: 1,
        duration: 500
      }).start(this.HideToastFunction(duration));
    });
  }

  HideToastFunction = duration => {
    this.timerID = setTimeout(() => {
      Animated.timing(this.animateOpacityValue, {
        toValue: 0,
        duration: 500
      }).start(() => {
        this.setState({ ShowToast: false });
        clearTimeout(this.timerID);
      });
    }, duration);
  };

  render() {
    if (this.state.ShowToast) {
      return (
        <Animated.View
          style={[
            styles.animatedToastView,
            {
              opacity: this.animateOpacityValue,
              top: this.props.position == "top" ? "10%" : "80%",
              backgroundColor: this.props.backgroundColor
            }
          ]}
        >
          <Text
            numberOfLines={1}
            style={[styles.ToastBoxInsideText, { color: this.props.textColor }]}
          >
            {this.ToastMessage}
          </Text>
        </Animated.View>
      );
    } else {
      return null;
    }
  }
}

// export default class Toast extends Component {
//   Default_Toast_Bottom = () => {
//     this.refs.defaultToastBottom.ShowToastFunction(
//       "Default Toast Bottom Message."
//     );
//   };

//   Default_Toast_Top = () => {
//     this.refs.defaultToastTop.ShowToastFunction("Default Toast Top Message.");
//   };

//   Default_Toast_Bottom_With_Different_Color = () => {
//     this.refs.defaultToastBottomWithDifferentColor.ShowToastFunction(
//       "Default Toast Bottom Message With Different Color."
//     );
//   };

//   Default_Toast_Top_With_Different_Color = () => {
//     this.refs.defaultToastTopWithDifferentColor.ShowToastFunction(
//       "Default Toast Top Message With Different Color."
//     );
//   };

//   render() {
//     return (
//       <View style={styles.MainContainer}>
//         <View style={{ marginBottom: 12 }}>
//           <Button
//             onPress={this.Default_Toast_Bottom}
//             title="Click Here To Show Default Toast Bottom Message"
//           />
//         </View>

//         <View style={{ marginBottom: 12 }}>
//           <Button
//             onPress={this.Default_Toast_Top}
//             title="Click Here To Show Default Toast Top Message"
//           />
//         </View>

//         <View style={{ marginBottom: 12 }}>
//           <Button
//             onPress={this.Default_Toast_Bottom_With_Different_Color}
//             title="Click Here To Show Default Toast Bottom Message With Different Color"
//           />
//         </View>

//         <View style={{ marginBottom: 12 }}>
//           <Button
//             onPress={this.Default_Toast_Top_With_Different_Color}
//             title="Click Here To Show Default Toast Top Message With Different Color"
//           />
//         </View>

//         <CustomToast ref="defaultToastBottom" position="bottom" />
//         <CustomToast ref="defaultToastTop" position="top" />
//         <CustomToast
//           ref="defaultToastBottomWithDifferentColor"
//           backgroundColor="#4CAF50"
//           position="bottom"
//         />
//         <CustomToast
//           ref="defaultToastTopWithDifferentColor"
//           backgroundColor="#E91E63"
//           position="top"
//         />
//       </View>
//     );
//   }
// }

// CustomToast.propTypes = {
//   backgroundColor: PropTypes.string,
//   position: PropTypes.oneOf([
//      'top',
//      'bottom'
//   ]),
//   textColor: PropTypes.string
// };

Toast.defaultProps = {
  backgroundColor: "#666666",
  textColor: "#fff"
  // position: PropTypes.oneOf(["top", "bottom"])
};
// CustomToast.defaultProps = {
//   backgroundColor: "#666666",
//   textColor: "#fff",
//   // position: PropTypes.oneOf(["top", "bottom"])
// };

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: Platform.OS == "ios" ? 20 : 0,
    margin: 10
  },

  animatedToastView: {
    marginHorizontal: 30,
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 25,
    zIndex: 9999,
    position: "absolute",
    justifyContent: "center"
  },

  ToastBoxInsideText: {
    fontSize: 15,
    alignSelf: "stretch",
    textAlign: "center"
  }
});
