import React, { useEffect, useContext } from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View
} from "react-native";
import Loading from "./src/utils/Loading";
import Colors from "./src/utils/Colors";
import { ApiServer } from "./src/server/ApiService";
import { StoreSettingsContext } from "./src/Contexts/StoreSettingsContext";

const AuthLoadingScreen = props => {
  const { storeSettings, storeSettingsDispatch } = useContext(
    StoreSettingsContext
  );

  useEffect(() => {
    console.log("these are props ", this.props);
    getSettingsData();
  }, []);

  useEffect(() => {
    console.log("this is store Setting data", storeSettings);
  }, [storeSettings]);

  // Fetch the token from storage then navigate to our appropriate place
  const _bootstrapAsync = () => {
    AsyncStorage.getItem("userToken")
      .then(userToken => {
        console.log("this is AuthData", userToken);
        props.navigation.navigate(userToken ? "App" : "Auth");
      })
      .catch(err => {
        console.log("this is error of authData", err);
      });

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    // this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  const getSettingsData = () => {
    let api = "api/settings/storesetting/5e3e424885004b46db4ec673";
    let method = "GET";
    let data = "";
    ApiServer.GetData(api, data, method)
      .then(result => {
        if (result.status === 200) {
          // _bootstrapAsync();
          let mergeData = { ...storeSettings.data, ...result.data[0] };
          console.log("this is merge dAta", mergeData);
          storeSettingsDispatch({ type: "SETDATA", payload: mergeData });
          props.navigation.navigate("HomeDraw");
          console.log("storeSettings result: ", result, storeSettings);
        } else if (result.status === 404) {
          console.log("Status 404:");
        } else {
          console.log("Status Other");
        }
      })
      .catch(err => {
        console.log("storeSettings Error: ", err);
      });
  };
  // Render any loading content that you like here

  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.secondaryColor
      }}
    >
      {/* <Loading /> */}
      <StatusBar barStyle="default" />
    </View>
  );
};
export default AuthLoadingScreen;
