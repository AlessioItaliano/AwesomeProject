import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import BigButton from "../Buttons/BigButton";
import EnterDownButton from "../Buttons/EnterDownButton";

const LogIn = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onLogIn = () => {
    Alert.alert("Credentials", `${email} +  ${password}`);
  };

  const NavigateTo = () => navigation.navigate("Registration");

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Увійти</Text>

      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Адреса електронної пошти"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          secureTextEntry={!showPassword}
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity
          onPress={toggleShowPassword}
          style={styles.showPasswordButton}
        >
          <Text style={styles.showPasswordButtonText}>Показати</Text>
        </TouchableOpacity>
      </View>

      <BigButton btnName="Увійти" onPress={onLogIn} />

      <View style={styles.textButtonContainer}>
        <Text style={styles.textEnter}>Немає акаунту?</Text>
        <EnterDownButton title="Зареєструватися" onPress={NavigateTo} />
      </View>

      <Button title="Home" onPress={() => navigation.navigate("Home")} />
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
    letterSpacing: 0.3,
    marginBottom: 33,
  },
  textButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    gap: 4,
  },
  textEnter: {
    color: "#1B4371",
    textAlign: "center",
    fontSize: 16,
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

export default LogIn;
