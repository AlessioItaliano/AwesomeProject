import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
// import LoginScreen from "./Screens/LoginScreen.jsx";
import RegistrationScreen from "./Screens/RegistrationScreen.jsx";
import BgScreen from "./Screens/BgScreen/BgScreen.jsx";

export default function App() {
  return (
    <View style={styles.container}>
      <BgScreen>
        {/* <LoginScreen /> */}
        <RegistrationScreen />
      </BgScreen>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
