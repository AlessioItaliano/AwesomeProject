import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

import imageBG from "../../images/Photo BG.png";

const BgScreen = ({ children }) => (
  <View style={styles.mainContainer}>
    <ImageBackground source={imageBG} style={styles.image}>
      <View style={styles.overlayContainer}>
        <View style={styles.overlayContent}>{children}</View>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlayContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "white",
  },
  overlayContent: {
    paddingTop: 32,
    paddingBottom: 78,
    paddingLeft: 16,
    paddingRight: 16,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
    width: "100%",
  },
});

export default BgScreen;
