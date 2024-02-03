import React from "react";
import { Text, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

// import UserProfile from "./UserProfile/UserProfile";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#FFF",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
export default MapScreen;
