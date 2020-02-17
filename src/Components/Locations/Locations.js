import React, { Fragment, useState, useEffect, useContext } from "react";
import { Text, StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import Loading from "../../utils/Loading";
import colors from "../../utils/Colors";
import LocationCard from "../Cards/LocationCard";
import fontSize from "../../utils/FontSize";
import CarouselSlider from "../CarouselSlider/CarouselSlider";
import { withNavigation } from "react-navigation";
import NavigationBar from "../NavigationBar/NavigationBar";
import GooglePlaces from "../InputFields/GooglePlaces/GooglePlaces";
import { ApiServer } from "../../server/ApiService";
import { LocationsContext } from "../../Contexts/LocationsContext";
import { MainPageContext } from "../../Contexts/MainPageContext";
import { ProductsContext } from "../../Contexts/ProductsContext";
import { StoreSettingsContext } from "../../Contexts/StoreSettingsContext";
const Locations = props => {
  const [storeSettingStatus, setStoreSettingStatus] = useState("");
  const [locationStatus, setLocationStatus] = useState("");
  const [categoriesStatus, setCategoriesStatus] = useState("");
  const [productsStatus, setProductsStatus] = useState("");

  const [locationID, setLocationID] = useState(null);
  const [locationIndex, setLocationIndex] = useState(0);
  const { location, locationDispatch } = useContext(LocationsContext);
  const { categories, mainPagedispatch } = useContext(MainPageContext);
  const { products, productsDispatch } = useContext(ProductsContext);
  const { storeSettings, storeSettingsDispatch } = useContext(
    StoreSettingsContext
  );

  useEffect(() => {
    let api = "api/settings/storesetting/5e3e424885004b46db4ec673";
    let method = "GET";
    let data = "";
    ApiServer.GetData(api, data, method)
      .then(result => {
        if (result.status === 200) {
          setStoreSettingStatus(result.status);
          let mergeData = { ...storeSettings.data, ...result.data[0] };
          console.log("this is merge dAta", mergeData);
          storeSettingsDispatch({ type: "SETDATA", payload: mergeData });
          const restaurantID = mergeData.restaurantID;
          let api = `api/locations/alllocations/${restaurantID}`;
          let method = "GET";
          let data = "";
          ApiServer.GetData(api, data, method)
            .then(result => {
              if (result.status === 200) {
                setLocationStatus(result.status);
                console.log("location result: ", result);
                locationDispatch({ type: "SETDATA", payload: result.data });
              } else if (result.status === 404) {
                setLocationStatus(result.status);
                console.log("Status 404:");
              } else {
                console.log("Status Other");
              }
            })
            .catch(err => {
              console.log("location Error: ", err);
            });
          console.log("storeSettings result: ", result, storeSettings);
        } else if (result.status === 404) {
          setStoreSettingStatus(result.status);
          console.log("Status 404:");
        } else {
          console.log("Status Other");
        }
      })
      .catch(err => {
        console.log("storeSettings Error: ", err);
      });
  }, []);
  const locationHandler = (id, locationIndex) => {
    mainPagedispatch({ type: "LOADING" });
    props.navigation.navigate("MainPage");
    let api = "api/locations/locationcategories/" + id;
    let data = "";
    let method = "GET";
    ApiServer.GetData(api, data, method)
      .then(result => {
        if (result.status === 200) {
          setCategoriesStatus(result.status);
          console.log("Status 200: ", result.status);
          console.log("MainPage Result: ", result);
          mainPagedispatch({ type: "SETDATA", payload: result.data });
        } else if (result.status === 404) {
          setCategoriesStatus(result.status);
          console.log("Status 404 :", result.status);
        } else {
          console.log("Status other :", result.status);
        }
      })
      .catch(err => {
        console.log("MainPage Error: ", err);
      });
    setLocationID(id);
    setLocationIndex(locationIndex);
    getProductsHandler(id);
  };

  // ................getProducts from Server ................
  const getProductsHandler = id => {
    let api = "api/locations/locationproducts/" + id;
    let data = "";
    let method = "GET";
    ApiServer.GetData(api, data, method)
      .then(result => {
        if (result.status === 200) {
          setProductsStatus(result.status);
          console.log("Status 200: ", result.status);
          console.log("Products Result: ", result);
          productsDispatch({ type: "SETDATA", payload: result.data });
        } else if (result.status === 404) {
          setProductsStatus(result.status);
          console.log("Status 404 :", result.status);
        } else {
          console.log("Status other :", result.status);
        }
      })
      .catch(err => {
        console.log("Products Error: ", err);
      });
  };

  const { textStyle } = styles;
  // console.log("status...", storeSettings);
  // console.log("storeSettingStatus...", storeSettingStatus);
  // console.log("locationStatus...", locationStatus);
  // console.log("categoriesStatus...", categoriesStatus);
  // console.log("productsStatus...", productsStatus);
  return (
    <Fragment>
      {storeSettings.state === "LOADING" ? (
        <Loading />
      ) : storeSettingStatus === 404 ? (
        <Text>Check Your Network Connection</Text>
      ) : (
        <Fragment>
          <CarouselSlider />
          <SafeAreaView
            style={{ flex: 1, backgroundColor: colors.secondaryColor }}
          >
            <View>
              <Text style={[fontSize.cardFontSize, textStyle]}>
                Choose Location
              </Text>
            </View>
            {/* <GooglePlaces SearchYourLocation={this.locationHandler} /> */}
            <ScrollView
              style={{
                backgroundColor: colors.secondaryColor
              }}
              contentContainerStyle={{ flexGrow: 1 }}
            >
              {location.state === "LOADING" ? (
                <Loading />
              ) : locationStatus === 404 ? (
                <Text>Check Your Network Connection</Text>
              ) : (
                location.data.map((location, index) => (
                  <LocationCard
                    key={location._id}
                    locationName={location.locationName}
                    address={location.address}
                    iconDisplay={index === locationIndex ? true : false}
                    onPress={() => locationHandler(location._id, index)}
                  />
                ))
              )}
            </ScrollView>
          </SafeAreaView>
          <NavigationBar />
        </Fragment>
      )}
    </Fragment>
  );
};

export default withNavigation(Locations);
const styles = StyleSheet.create({
  textStyle: {
    color: colors.primaryColor,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor
  }
});
