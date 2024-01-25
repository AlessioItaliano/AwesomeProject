import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RegistrationScreen from "./Screens/RegistrationScreen.jsx";
import LoginScreen from "./Screens/LoginScreen.jsx";
import HomeScreen from "./Screens/HomeScreen.jsx";
// import MainBackground from "./Screens/MainBackground/MainBackground.jsx";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="Home" component={HomeScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
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

// <View style={styles.container}>
//   {/* <MainBackground> */}
//   {/* <LoginScreen /> */}
//   {/* <RegistrationScreen /> */}
//   {/* </MainBackground> */}
//   <StatusBar style="auto" />
// </View>;
