import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import AuthLoadingScreen from "../../AuthLoadingScreen";
import SignInScreen from "../Components/SignInScreen";
import HomeScreen from "../Components/HomeScreen";
import Drawer from "../Components/Drawer/Drawer";
import { Dimensions } from "react-native";
import Locations from "../Components/Locations/Locations";
import MainPage from "../Components/MainPage/MainPage";
import OrderHistory from "../Components/OrderHistory/OrderHistory";
import NavigationBar from "../Components/NavigationBar/NavigationBar";
import ShoppingCart from "../Components/ShopingCart/ShopingCart";
import Rewards from "../Components/Rewards/Rewards";
import RewardsBalance from "../Components/RewardsBalance/RewardsBalance";
import CouponPage from "../Components/CouponPage/CouponPage";
import AppSupport from "../Components/AppSupport/AppSupport";
import NotificationPage from "../Components/NotificationPage/NotificationPage";
import Account from "../Components/Account/Account";
import ProductsPage from "../Components/ProductsPage/ProductsPage";
import DishOptions from "../Components/DishOptions/DishOptions";
import Checkout from "../Components/Checkout/Checkout";
import OrderConfirmation from "../Components/OrderConfirmation/OrderConfirmation";
import PickupInfo from "../Components/PickupInfo/PickupInfo";
import StoreInformation from "../Components/StoreInformation/StoreInformation";
// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

// const AppStack = createStackNavigator({ Home: HomeScreen });
// const AuthStack = createStackNavigator({ SignIn:SignInScreen });

// const Navigation = createAppContainer(
//   createSwitchNavigator(
//     {
//       AuthLoading: AuthLoadingScreen,
//       App: AppStack,
//       Auth: AuthStack,
//     },
//     {
//       initialRouterName: 'AuthLoading',
//     }
//   )
// );
const { width } = Dimensions.get("window");


const DrawerNavigation = createDrawerNavigator(
  {
    Home: {
      screen: Locations,
      navigationOptions: { headerShown: false }
    },
    MainPage: {
      screen: MainPage,
      navigationOptions: { headerShown: false }
    },
    OrderHistory: {
      screen: OrderHistory,
      navigationOptions: { headerShown: false }
    },
    Rewards: {
      screen: Rewards,
      navigationOptions: { headerShown: false }
    },
    RewardsBalance: {
      screen: RewardsBalance,
      navigationOptions: { headerShown: false }
    },
    AppSupport: {
      screen: AppSupport,
      navigationOptions: { headerShown: false }
    },
    NotificationPage: {
      screen: NotificationPage,
      navigationOptions: { headerShown: false }
    },
    Account: {
      screen: Account,
      navigationOptions: { headerShown: false }
    },
    OrderConfirmation: {
      screen: OrderConfirmation,
      navigationOptions: { headerShown: false }
    },
    StoreInformation: {
      screen: StoreInformation,
      navigationOptions: { headerShown: false }
    }
  },
  {
    // drawerWidth: 250,
    drawerWidth: width / 2 + width / 6,
    drawerPosition: "Left",
    contentComponent: Drawer,
    overlayColor: 1,
    initialRouteName: "Home"
  }
);
const Navigation = createStackNavigator(
  {
    ShoppingCart: {
      screen: ShoppingCart,
      navigationOptions: { headerShown: false }
    },

    PickupInfo: {
      screen: PickupInfo,
      navigationOptions: { headerShown: false }
    },
    CouponPage: {
      screen: CouponPage,
      navigationOptions: { headerShown: false }
    },
    ProductsPage: {
      screen: ProductsPage,
      navigationOptions: { headerShown: false }
    },
    DishOptions: {
      screen: DishOptions,
      navigationOptions: { headerShown: false }
    },
    Checkout: {
      screen: Checkout,
      navigationOptions: { headerShown: false }
    },
    AuthLoading: {
      screen: AuthLoadingScreen,
      navigationOptions: { headerShown: false }
    },
    HomeDraw: {
      screen: DrawerNavigation,
      navigationOptions: { headerShown: false }
    }
  },
  {
    initialRouteName: "HomeDraw"
  }
);
// const Navigation = createStackNavigator(
//   {
//     AuthLoading: {
//       screen: AuthLoadingScreen,
//       navigationOptions: { headerShown: false }
//     },
//     Home: {
//       screen: DrawerNavigation,
//       navigationOptions: { headerShown: false }
//     }
//   },
//   { initialRouteName: "AuthLoading" }
// );

// const Navigation = createAppContainer(
//   createSwitchNavigator(
//     {
//       AuthLoading: {
//         screen: AuthLoadingScreen,
//         navigationOptions: { headerShown: false }
//       },
//       App: SingIn,
//       Auth: SignUp
//     },
//     {
//       initialRouteName: "AuthLoading"
//     }
//   )
// );
export default createAppContainer(Navigation);
