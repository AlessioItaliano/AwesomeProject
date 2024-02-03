import "react-native-gesture-handler";
import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ToolBarIcon from "./images/Icons/toolBar.js";
import AddPostIcon from "./images/Icons/addPostIcon.js";
import UserIcon from "./images/Icons/user.js";
import LogOut from "./images/Icons/logOut.js";

import RegistrationScreen from "./Screens/RegistrationScreen.jsx";
import LoginScreen from "./Screens/LoginScreen.jsx";

import ToolBar from "./Screens/HomeScreen.jsx";
import AddPost from "./Screens/CreatePostsScreen.jsx";
import Profile from "./Screens/ProfileScreen.jsx";
// import Profile from "./Screens/MapScreen.jsx";

const MainStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function Home({ navigation, route }) {
  const [currentTab, setCurrentTab] = useState("ToolBar");

  const getHeaderTitle = (currentTab) => {
    switch (currentTab) {
      case "ToolBar":
        return "Публікації";
      case "AddPost":
        return "Створити публікацію";
      case "Profile":
        return "Профіль";
      default:
        return "Публікації";
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: getHeaderTitle(currentTab),
    });
  }, [navigation, route, currentTab]);

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 83,
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconComponent;

          if (route.name === "ToolBar") {
            iconComponent = (
              <ToolBarIcon size={size} color={focused ? "red" : color} />
            );
          } else if (route.name === "AddPost") {
            iconComponent = <AddPostIcon size={size} color={color} />;
          } else if (route.name === "Profile") {
            iconComponent = (
              <UserIcon size={size} color={focused ? "red" : color} />
            );
          }
          return iconComponent;
        },
      })}
    >
      <Tabs.Screen
        name="ToolBar"
        component={ToolBar}
        options={{ tabBarShowLabel: false, headerShown: false }}
        listeners={{
          tabPress: () => setCurrentTab("ToolBar"),
        }}
      />
      <Tabs.Screen
        name="AddPost"
        component={AddPost}
        options={{ tabBarShowLabel: false, headerShown: false }}
        listeners={{
          tabPress: () => setCurrentTab("AddPost"),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{ tabBarShowLabel: false, headerShown: false }}
        listeners={{
          tabPress: () => setCurrentTab("Profile"),
        }}
      />
    </Tabs.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="Home" component={Home} options={Option} />
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

  headerRight: () => (
    <TouchableOpacity
      onPress={() => alert("Log out!")}
      style={{ paddingRight: 16 }}
    >
      <LogOut />
    </TouchableOpacity>
  ),
};
