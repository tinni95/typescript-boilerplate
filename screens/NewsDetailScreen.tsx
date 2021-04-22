import React from "react";

import { View, Text, Image, StyleSheet } from "react-native";

import { LargezzaDevice } from "../constants/Layout";

function NewsDetailScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const post: Post = route.params.post;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: post.image }} />
      <Text style={styles.titolo}>{post.titolo} </Text>
      <View style={styles.boxtesto}>
        <Text style={styles.testo}>
          {post.descrizione && post.descrizione.length > 10
            ? post.descrizione.slice(0, 10)
            : post.descrizione}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 25,
    marginBottom: 20,
  },
  titolo: {
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  // LarghezzaDevice > 780 && LarghezzaDevice < 1200 ?
  boxtesto: {
    width: LargezzaDevice * 0.6,
  },

  testo: {},
});

export default NewsDetailScreen;
