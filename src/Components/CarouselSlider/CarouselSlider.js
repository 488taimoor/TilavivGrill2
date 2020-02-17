import React, { useRef, useState, useEffect, useContext } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";
// import image1 from "../../../assets/images/image1.jpg";
import Icon from "react-native-vector-icons/MaterialIcons";
import Colors from "../../utils/Colors";
import { StoreSettingsContext } from "../../Contexts/StoreSettingsContext";
import { withNavigation } from "react-navigation";
import { DrawerActions } from "react-navigation-drawer";
const { width, height } = Dimensions.get("window");

const CarouselSlider = props => {
  const scrollRef = useRef();
  const [selectedIndex, setSeletedIndex] = useState(0);

  const { storeSettings, storeSettingsDispatch } = useContext(
    StoreSettingsContext
  );
  const images = storeSettings.data.appTheme.carouselUrl;
  useEffect(() => {
    setInterval(() => {
      setSeletedIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
  }, []);

  useEffect(() => {
    scrollRef.current.scrollTo({
      animated: true,
      y: 0,
      x: width * selectedIndex
    });
  }, [selectedIndex]);

  const seletedIndexHandler = event => {
    // width of the viewSize
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    //get Current position of the scrollview
    const contentOffset = event.nativeEvent.contentOffset.x;

    const selectedIndex = Math.floor(contentOffset / viewSize);
    setSeletedIndex(selectedIndex);
  };
  const {
    containerStyle,
    imageStyle,
    circleViewStyle,
    whiteCircleStyle,
    iconContainerStyle
  } = styles;

  // console.log(
  //   "storeSettings..........",
  //   storeSettings.data.appTheme.carouselUrl
  // );
  return (
    <View style={containerStyle}>
      <ScrollView
        horizontal
        pagingEnabled
        onMomentumScrollEnd={seletedIndexHandler}
        ref={scrollRef}
      >
        {images.map(image => (
          <Image key={image} source={{ uri: image }} style={imageStyle} />
        ))}
      </ScrollView>
      <View style={circleViewStyle}>
        {images.map((image, index) => (
          <View
            key={image}
            style={[
              whiteCircleStyle,
              { opacity: index === selectedIndex ? 0.5 : 1 }
            ]}
          ></View>
        ))}
      </View>
      <TouchableOpacity
        style={iconContainerStyle}
        onPress={() =>
          //props.navigation.dispatch(DrawerActions.toggleDrawer())
          props.navigation.dispatch(DrawerActions.openDrawer())
        }
      >
        <Icon name="menu" size={30} color={Colors.secondaryColor} />
      </TouchableOpacity>
    </View>
  );
};
export default withNavigation(CarouselSlider);
const styles = StyleSheet.create({
  containerStyle: {
    height: 140,
    width: "100%",
    backgroundColor: Colors.secondaryColor
  },
  imageStyle: {
    height: "100%",
    width: width
  },
  circleViewStyle: {
    position: "absolute",
    bottom: 15,
    height: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  whiteCircleStyle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    backgroundColor: "#fff"
  },
  iconContainerStyle: {
    position: "absolute",
    top: 16,
    left: 16
  }
});

// import React, { Component, createRef } from "react";
// import {
//   Text,
//   StyleSheet,
//   View,
//   ScrollView,
//   Dimensions,
//   Image,
//   TouchableOpacity
// } from "react-native";
// import image1 from "../../../assets/images/image1.jpg";
// import image2 from "../../../assets/images/image2.jpg";
// import image3 from "../../../assets/images/image3.jpg";
// import image4 from "../../../assets/images/image4.jpg";
// import image5 from "../../../assets/images/image5.jpg";
// import Icon from "react-native-vector-icons/MaterialIcons";
// import Colors from "../../utils/Colors";
// import { withNavigation } from "react-navigation";
// import { DrawerActions } from "react-navigation-drawer";
// const { width, height } = Dimensions.get("window");

// const images = [image1, image2, image3, image4, image5];
// class CarouselSlider extends Component {
//   scrollRef = createRef();
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedIndex: 0
//     };
//   }

// componentDidMount = () => {
//   setInterval(() => {
//     this.setState(
//       prev => ({
//         selectedIndex:
//           prev.selectedIndex === images.length - 1
//             ? 0
//             : prev.selectedIndex + 1
//       }),
//       () => {
//         this.scrollRef.current.scrollTo({
//           animated: true,
//           y: 0,
//           x: width * this.state.selectedIndex
//         });
//       }
//     );
//   }, 3000);
// };

//   setSeletedIndex = event => {
//     // width of the viewSize
//     const viewSize = event.nativeEvent.layoutMeasurement.width;
//     //get Current position of the scrollview
//     const contentOffset = event.nativeEvent.contentOffset.x;

//     const selectedIndex = Math.floor(contentOffset / viewSize);
//     this.setState({
//       selectedIndex
//     });
//   };
//   render() {
//     const { selectedIndex } = this.state;
//     const {
//       containerStyle,
//       imageStyle,
//       circleViewStyle,
//       whiteCircleStyle,
//       iconContainerStyle
//     } = styles;
//     return (
//       <View style={containerStyle}>
//         <ScrollView
//           horizontal
//           pagingEnabled
//           onMomentumScrollEnd={this.setSeletedIndex}
//           ref={this.scrollRef}
//         >
//           {images.map(image => (
//             <Image key={image} source={image} style={imageStyle} />
//           ))}
//         </ScrollView>
//         <View style={circleViewStyle}>
//           {images.map((image, index) => (
//             <View
//               key={image}
//               style={[
//                 whiteCircleStyle,
//                 { opacity: index === selectedIndex ? 0.5 : 1 }
//               ]}
//             ></View>
//           ))}
//         </View>
//         <TouchableOpacity
//           style={iconContainerStyle}
//           onPress={() =>
//             // this.props.navigation.dispatch(DrawerActions.toggleDrawer())
//             this.props.navigation.dispatch(DrawerActions.openDrawer())
//           }
//         >
//           <Icon name="menu" size={30} color={Colors.secondaryColor} />
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }
// export default withNavigation(CarouselSlider);
// const styles = StyleSheet.create({
//   containerStyle: {
//     height: 140,
//     width: "100%",
//     backgroundColor: Colors.secondaryColor
//   },
//   imageStyle: {
//     height: "100%",
//     width: width
//   },
//   circleViewStyle: {
//     position: "absolute",
//     bottom: 15,
//     height: 10,
//     width: "100%",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   whiteCircleStyle: {
//     width: 6,
//     height: 6,
//     borderRadius: 3,
//     margin: 5,
//     backgroundColor: "#fff"
//   },
//   iconContainerStyle: {
//     position: "absolute",
//     top: 16,
//     left: 16
//   }
// });
