import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SecondScreen from "../screens/SecondScreen";
import NewsScreen from "../screens/NewsScreen";

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{
          headerTitle: "Benvenuto",
          headerShown: true,
          headerTitleStyle: { textAlign: "left" },
        }}
        component={HomeScreen}
      />
      <Stack.Screen name="Second" component={SecondScreen} />
      <Stack.Screen name="News" component={NewsScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;
