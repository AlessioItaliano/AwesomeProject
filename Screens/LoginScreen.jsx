import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import BigButton from "./Buttons/BigBtn";

const LoginScreen = () => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Увійти</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Адреса електронної пошти"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          secureTextEntry={!showPassword}
          onChangeText={onChangePassword}
          value={password}
        />
        <TouchableOpacity
          onPress={toggleShowPassword}
          style={styles.showPasswordButton}
        >
          <Text style={styles.showPasswordButtonText}>Показати</Text>
        </TouchableOpacity>
      </View>

      <BigButton btnName="Увійти" />

      <Text style={styles.textLittle}>Немає акаунту? Зареєструватися</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  h1: {
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    letterSpacing: 0.3,
    marginBottom: 33,
  },
  textLittle: {
    color: "#1B4371",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  passwordContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  showPasswordButton: {
    position: "absolute",
    right: 16,
    top: 8,
    padding: 8,
  },
  showPasswordButtonText: {
    color: "#1B4371",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default LoginScreen;
