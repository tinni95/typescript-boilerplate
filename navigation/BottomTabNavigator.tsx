/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import SecondScreen from "../screens/SecondScreen";
import HomeStack from "./HomeStack";
import NewsStack from "./NewsStack";

const BottomTab = createBottomTabNavigator<any>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="TabOne">
      <BottomTab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
        name="Home"
        component={HomeStack}
      />
      <BottomTab.Screen
        options={{
          tabBarLabel: "News",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="newspaper-o" size={size} color={color} />
          ),
        }}
        name="News"
        component={NewsStack}
      />
      <BottomTab.Screen
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" size={size} color={color} />
          ),
        }}
        name="Second"
        component={SecondScreen}
      />
    </BottomTab.Navigator>
  );
}
