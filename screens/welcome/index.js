import { useSelector } from "react-redux";
import { rest_auth_login_create } from "../../store/edgyselfsourceapAPI/tokens.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { SafeAreaView, TextInput, Button, StyleSheet } from "react-native";

const SearchScreen = () => {
  const {
    entities: UserDetails
  } = useSelector(state => state.UserDetails);
  const {
    entities: console
  } = useSelector(state => state.console);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(rest_auth_login_create());
  }, []);
  const [movieName, setMovieName] = useState("");

  const handleSearch = () => {
    alert("Searching for movie: ", movieName);
    console.log("Searching for movie: ", movieName);
  };

  const handleFAQ = () => {
    alert("handleFAQ: ", movieName);
    console.log("handleFAQ: ", movieName);
  };

  return <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} onChangeText={setMovieName} value={movieName} placeholder={"Enter movie name: " + UserDetails.email} data={UserDetails} />
      <Button title="Search" onPress={handleSearch} />
      <Button title="FAQ" onPress={handleFAQ} />
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