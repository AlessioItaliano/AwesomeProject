import React from "react";
import { Text, StyleSheet, View } from "react-native";

import UserProfile from "./UserProfile/UserProfile";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <UserProfile />
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
});
export default MapScreen;
