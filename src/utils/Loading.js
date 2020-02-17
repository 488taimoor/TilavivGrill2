import React, { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

export default Loading = () => {
  
  return (
    <View style={styles.containerStyle}>
      <View>
        <ActivityIndicator size={25} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
