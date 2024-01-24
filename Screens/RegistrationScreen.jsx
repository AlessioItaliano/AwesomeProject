import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

import SvgUri from "react-native-svg-uri";

// import AddAvatar from "../images/addPhoto.svg";
import AddAvatar from "../images/addPhoto2.svg";

import BigButton from "./Buttons/BigBtn";

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <SvgUri width={25} height={25} source={AddAvatar} style={styles.avatar} />
      <Text style={styles.h1}>Реєстрація</Text>

      <TextInput
        style={styles.input}
        onChangeText={setLogin}
        value={login}
        placeholder="Логін"
      />
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
          placeholder="Пароль"
        />
        <TouchableOpacity
          onPress={toggleShowPassword}
          style={styles.showPasswordButton}
        >
          <Text style={styles.showPasswordButtonText}>Показати</Text>
        </TouchableOpacity>
      </View>

      <BigButton btnName="Зареєстуватися" />

      <Text style={styles.textLittle}>Вже є акаунт? Увійти</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    // position: "absolute",
    // top: -90,
    // left: "center",
    width: 25,
    height: 25,
    borderRadius: 16,
    // backgroundColor: "#F6F6F6",
  },
  h1: {
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: 0.3,
    marginTop: 62,
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

export default RegistrationScreen;
