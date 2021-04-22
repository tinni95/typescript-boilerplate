import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
} from "react-native";
import PostCard from "../components/PostCard";
import { GET_POSTS } from "../constants/api";
import colors from "../constants/Colors";

function NewsScreen({ navigation }: { navigation: any }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPostFromBackEnd();
  }, []);

  const fetchPostFromBackEnd = async () => {
    //prima della chiamata
    //dobbiamo iniziare il loading
    setLoading(true);
    const posts = await axios.get(GET_POSTS);
    setPosts(posts.data);
    console.log(posts.data);
    //dopo la chiamata
    //dobbiamo terminare il loading
    setLoading(false);
  };

  const navigateToDetail = (post: Post) => {
    navigation.navigate("NewsDetail", { post: post });
  };

  if (loading == true) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={"large"} color={colors.RED} />
      </View>
    );
  }
  return (
    <ScrollView contentContainerStyle={{ backgroundColor: "#fbfbfb" }}>
      <Text style={styles.news}>News</Text>
      {posts.map((post: Post) => {
        return (
          <PostCard
            key={post.titolo}
            post={post}
            onPress={() => navigateToDetail(post)}
          />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  news: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 50,
    marginBottom: 30,
  },
});

export default NewsScreen;
