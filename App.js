import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RegistrationScreen from "./Screens/RegistrationScreen.jsx";
import LoginScreen from "./Screens/LoginScreen.jsx";
import HomeScreen from "./Screens/HomeScreen.jsx";

const MainStack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        {/* initialRouteName="Registration"> */}
        {/* <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} /> */}
        <MainStack.Screen name="Home" component={HomeScreen} options={Option} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Option = {
  headerTitle: "Публікації",
  headerTitleAlign: "center",
  headerStyle: {
    backgroundColor: "#FFF",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  headerTitleStyle: {
    fontWeight: "bold",
    color: "#212121",
    fontSize: 17,
  },

  headerRight: () => <Button title="click" onPress={() => alert("Log out!")} />,
};

// <View style={styles.container}>
//   {/* <MainBackground> */}
//   {/* <LoginScreen /> */}
//   {/* <RegistrationScreen /> */}
//   {/* </MainBackground> */}
//   <StatusBar style="auto" />
// </View>;
