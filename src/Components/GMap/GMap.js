import React, { Component, useState } from "react";
import { Text, StyleSheet, View } from "react-native";
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import MapView, { Marker } from "react-native-maps"; // remove PROVIDER_GOOGLE import if not using Google Maps

export default GMap = () => {
  const [region, setRegion] = useState({
    latitude: 31.776685,
    longitude: 35.234491,
    latitudeDelta: 0.04,
    longitudeDelta: 0.05
  });

  const onRegionChange = region => {
    setRegion({ region });
  };
  return (
    <View style={{height: 200}}>
      <View style={styles.container}>
        <MapView
          //  provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={region}
          // onRegionChange={onRegionChange}
        >
          <Marker
            coordinate={{
              latitude: 31.776685,
              longitude: 35.234491
            }}
            centerOffset={{ x: -18, y: -60 }}
            anchor={{ x: 0.69, y: 1 }}
          />
        </MapView>
      </View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     justifyContent: "flex-end",
//     alignItems: "center"
//   },
//   map: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0
//   }
// });
const styles = StyleSheet.create({
  container: {
    // flex:1,
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    // flex:1,
    ...StyleSheet.absoluteFillObject
  }
});
