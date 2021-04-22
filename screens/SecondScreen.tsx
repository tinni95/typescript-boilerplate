import React from "react";

import { View, Text, Button } from "react-native";

function SecondScreen({ navigation }: { navigation: any }) {
  const navigateToNews = () => {
    navigation.navigate("News");
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Second Screen</Text>
      <Button title={"Go to News"} onPress={navigateToNews} />
    </View>
  );
}

export default SecondScreen;
