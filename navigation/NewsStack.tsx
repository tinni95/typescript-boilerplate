import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NewsScreen from "../screens/NewsScreen";
import NewsDetailScreen from "../screens/NewsDetailScreen";

const Stack = createStackNavigator();

function NewsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="News"
        options={{
          headerTitle: "Lista News",
          headerShown: true,
          headerTitleStyle: { textAlign: "left" },
        }}
        component={NewsScreen}
      />
      <Stack.Screen name="NewsDetail" component={NewsDetailScreen} />
    </Stack.Navigator>
  );
}

export default NewsStack;
