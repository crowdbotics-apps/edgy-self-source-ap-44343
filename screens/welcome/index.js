import React, { useState } from "react";
import { SafeAreaView, TextInput, Button, StyleSheet } from "react-native";

const SearchScreen = () => {
  const [movieName, setMovieName] = useState("");

  const handleSearch = () => {
    console.log("Searching for movie: ", movieName);
  };

  return <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} onChangeText={setMovieName} value={movieName} placeholder="Enter movie name" />
      <Button title="Search" onPress={handleSearch} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8
  }
});
export default SearchScreen;