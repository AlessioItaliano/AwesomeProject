import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// import SvgUri from "react-native-svg-uri";

// import AddAvatar from "../images/addPhoto.svg";
// import RemoveAvatar from "../images/removePhoto.svg";

import BigButton from "../Buttons/BigButton";
import EnterDownButton from "../Buttons/EnterDownButton";

const Registration = () => {
  const navigation = useNavigation();

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSingUp = () => {
    Alert.alert("Credentials", `${login} + ${email} +  ${password}`);
  };

  const NavigateTo = () => navigation.navigate("Login");

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        {/* <SvgUri
          width={25}
          height={25}
          source={AddAvatar}
          style={styles.avatarIcon}
        /> */}
      </View>
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

      <BigButton btnName="Зареєстуватися" onPress={onSingUp} />
      <View style={styles.textButtonContainer}>
        <Text style={styles.textEnter}>Вже є акаунт?</Text>
        <EnterDownButton title="Увійти" onPress={NavigateTo} />
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
  avatar: {
    position: "absolute",
    top: -90,
    left: "center",
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  avatarIcon: { position: "absolute", bottom: 20, right: -12 },
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

export default Registration;
