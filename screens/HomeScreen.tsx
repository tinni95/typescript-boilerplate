import React from "react";
import { View, Text, Button } from "react-native";

function HomeScreen({ navigation }: { navigation: any }) {
  const navigateToSecond = () => {
    navigation.navigate("Second");
  };

  const navigateToNews = () => {
    navigation.navigate("News");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title={"Go to Second Screen"} onPress={navigateToSecond} />
      <Button title={"Go to News"} onPress={navigateToNews} />
    </View>
  );
}

export default HomeScreen;
