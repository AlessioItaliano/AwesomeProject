import React from "react";
import { Text, StyleSheet, View } from "react-native";

const CreatePostScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CreatePostScreen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    textAlign: "center",
  },
});

export default CreatePostScreen;
