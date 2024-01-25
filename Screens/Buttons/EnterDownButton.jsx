import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const EnterDownButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "transparent", // Прозорий фон
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },
  text: {
    color: "#1B4371", // Колір тексту
    fontSize: 16, // Розмір шрифту
    fontStyle: "normal",
    fontWeight: "400",
    textDecorationLine: "underline", // Підкреслення
  },
});

export default EnterDownButton;
