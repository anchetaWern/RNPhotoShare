import React from "react";
import { createStackNavigator } from "react-navigation";

import HomeScreen from "./src/screens/HomeScreen";
import ShareScreen from "./src/screens/ShareScreen";
import ViewScreen from "./src/screens/ViewScreen";

console.ignoredYellowBox = ["Setting a timer"];

export default createStackNavigator(
  {
    Home: HomeScreen,
    Share: ShareScreen,
    View: ViewScreen
  },
  {
    initialRouteName: "Home"
  }
);
