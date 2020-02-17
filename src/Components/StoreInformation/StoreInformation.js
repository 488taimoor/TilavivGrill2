import React, { Fragment, useContext } from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import { withNavigation, ScrollView } from "react-navigation";
import CarouselSlider from "../CarouselSlider/CarouselSlider";
import GMap from "../GMap/GMap";
import NavigationBar from "../NavigationBar/NavigationBar";
import FontSize from "../../utils/FontSize";
import { StoreSettingsContext } from "../../Contexts/StoreSettingsContext";
const StoreInformation = () => {
  const { storeSettings, storeSettingsDispatch } = useContext(
    StoreSettingsContext
  );
  const storeHours = storeSettings.data.storeHours;
  return (
    <Fragment>
      <CarouselSlider />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <GMap />
          <View style={{ backgroundColor: "#fff" }}>
            <View style={{ paddingVertical: 5, flexDirection: "row" }}>
              <Text style={{ flex: 1, textAlign: "center" }}>Phone:</Text>
              <Text style={{ flex: 1 }}>80145-21354</Text>
            </View>
            <View style={{ paddingVertical: 5, flexDirection: "row" }}>
              <Text style={{ flex: 1, textAlign: "center" }}>Address:</Text>
              <Text style={{ flex: 1 }}>80145-21354</Text>
            </View>
            {storeHours === ""
              ? null
              : storeHours.map(res => (
                  // console.log("res....", res)
                  <View
                    style={{ paddingVertical: 5, flexDirection: "row" }}
                    key={res.day}
                  >
                    <Text style={{ flex: 1, textAlign: "center" }}>
                      {res.day}
                    </Text>
                    <Text style={{ flex: 1 }}>
                      {res.openTime}-{res.closeTime}
                    </Text>
                  </View>
                ))}

            <Text style={[FontSize.mediumFontSize, { textAlign: "center" }]}>
              www.telavivgrill.com
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
      <NavigationBar />
    </Fragment>
  );
};

// export default StoreInformation;
export default withNavigation(StoreInformation);

const styles = StyleSheet.create({});
