import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/home";
import LinksScreen from "../screens/chat";
import SettingsScreen from "../screens/review";
import MyScreen from '../screens/my'

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "홈",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? "home"
          : "home"
      }
    />
  )
};

HomeStack.path = "";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: "후기",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "pencil" : "pencil"}
    />
  )
};

SettingsStack.path = "";

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: "채팅",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "chat" : "chat"}
    />
  )
};

LinksStack.path = "";

const MyStack = createStackNavigator(
  {
    Links: MyScreen
  },
  config
);

MyStack.navigationOptions = {
  tabBarLabel: "My",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "user" : "user"}
    />
  )
};

MyStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  SettingsStack,
  LinksStack,
  MyStack
});

tabNavigator.path = "";

export default tabNavigator;
