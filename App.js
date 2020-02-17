import React, { Component } from "react";
import { View, Text, AsyncStorage, Alert } from "react-native";
import firebase from "react-native-firebase";
import AuthContextProvider from "./src/Contexts/AuthContext";
import Navigation from "./src/Navigations/Navigation";
import TabNavigator from "./src/Navigations/TabNavigator";
import ProductsPage from "./src/Components/ProductsPage/ProductsPage";
import CarouselSlider from "./src/Components/CarouselSlider/CarouselSlider";
import Locations from "./src/Components/Locations/Locations";
import MainPage from "./src/Components/MainPage/MainPage";
import DishOptions from "./src/Components/DishOptions/DishOptions";
import OrderConfirmation from "./src/Components/OrderConfirmation/OrderConfirmation";
import NotificationPage from "./src/Components/NotificationPage/NotificationPage";
import AppSupport from "./src/Components/AppSupport/AppSupport";
import Account from "./src/Components/Account/Account";
import Rewards from "./src/Components/Rewards/Rewards";
import RewardsBalance from "./src/Components/RewardsBalance/RewardsBalance";
import CouponPage from "./src/Components/CouponPage/CouponPage";
import ShopingCart from "./src/Components/ShopingCart/ShopingCart";
import OrderHistory from "./src/Components/OrderHistory/OrderHistory";
import PickupInfo from "./src/Components/PickupInfo/PickupInfo";
import Checkout from "./src/Components/Checkout/Checkout";
import GMap from "./src/Components/GMap/GMap";
import LocationsContextProvider from "./src/Contexts/LocationsContext";
import MainPageContextProvider from "./src/Contexts/MainPageContext";
import StoreInformation from "./src/Components/StoreInformation/StoreInformation";
import StoreSettingsContextProvider from "./src/Contexts/StoreSettingsContext";
import ProductsContextProvider from "./src/Contexts/ProductsContext";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { signedIn: false };
  }

  // async getToken() {
  //   let fcmToken = await AsyncStorage.getItem("fcmToken");
  //   console.log("this is fcm token", fcmToken);

  //   if (!fcmToken) {
  //     fcmToken = await firebase.messaging().getToken();
  //     if (fcmToken) {
  //       console.log("this is fcm token", fcmToken);
  //       await AsyncStorage.setItem("fcmToken", fcmToken);
  //     }
  //   }
  // }

  // async checkPermission() {
  //   const enabled = await firebase.messaging().hasPermission();
  //   console.log("check permision", enabled);
  //   if (enabled) {
  //     this.getToken();
  //   } else {
  //     this.requestPermission();
  //   }
  // }

  // async requestPermission() {
  //   try {
  //     await firebase.messaging().requestPermission();
  //     this.getToken();
  //   } catch (error) {
  //     console.log("permission rejected");
  //   }
  // }

  // componentDidMount() {
  //   const channel = new firebase.notifications.Android.Channel(
  //     "insider",
  //     "insider channel",
  //     firebase.notifications.Android.Importance.Max
  //   );
  //   firebase.notifications().android.createChannel(channel);
  //   this.checkPermission();
  //   this.createNotificationListeners();
  // }

  // componentWillUnmount() {
  //   this.notificationListener();
  //   this.notificationOpenedListener();
  // }

  // async createNotificationListeners() {
  //   /*
  //    * Triggered when a particular notification has been received in foreground
  //    * */
  //   this.notificationListener = firebase
  //     .notifications()
  //     .onNotification(notification => {
  //       const { title, body } = notification;
  //       this.showAlert(title, body);
  //     });

  //   /*
  //    * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
  //    * */
  //   this.notificationOpenedListener = firebase
  //     .notifications()
  //     .onNotificationOpened(notificationOpen => {
  //       const { title, body } = notificationOpen.notification;
  //       this.showAlert(title, body);
  //     });

  //   /*
  //    * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
  //    * */
  //   const notificationOpen = await firebase
  //     .notifications()
  //     .getInitialNotification();
  //   if (notificationOpen) {
  //     const { title, body } = notificationOpen.notification;
  //     this.showAlert(title, body);
  //   }
  //   /*
  //    * Triggered for data only payload in foreground
  //    * */
  //   this.messageListener = firebase.messaging().onMessage(message => {
  //     //process data message
  //     console.log(JSON.stringify(message));
  //   });
  // }

  // showAlert(title, body) {
  //   Alert.alert(
  //     title,
  //     body,
  //     [{ text: "OK", onPress: () => console.log("OK Pressed") }],
  //     { cancelable: false }
  //   );
  // }

  setSignIn(state) {
    if (state) {
      // this.setState({
      //   signedIn: true
      // })
    } else {
      // this.setState({
      //   signedIn: false
      // })
    }
  }
  componentWillMount() {}

  render() {
    console.disableYellowBox = true;
    return (
      <StoreSettingsContextProvider>
        <AuthContextProvider>
          <LocationsContextProvider>
            <MainPageContextProvider>
              <ProductsContextProvider>
                <Navigation />
              </ProductsContextProvider>
            </MainPageContextProvider>
          </LocationsContextProvider>
        </AuthContextProvider>
      </StoreSettingsContextProvider>
      // <GMap />
      // <StoreInformation/>
      // <ProductsPage />
      // <Locations/>
      // <MainPage/>
      // <DishOptions />
      // <OrderConfirmation />
      // <NotificationPage />
      // <AppSupport />
      // <Account />
      // <Rewards />
      // <RewardsBalance />
      // <CouponPage />
      // <ShopingCart />
      // <OrderHistory />
      // <PickupInfo />
      // <CarouselSlider/>
      // <Checkout />
    );
  }
}

export default App;
