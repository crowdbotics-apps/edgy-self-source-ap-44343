import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');
  const [movies, setMovies] = useState([{
    id: '1',
    title: 'Movie 1',
    timeAdded: '2022-01-01'
  }, {
    id: '2',
    title: 'Movie 2',
    timeAdded: '2022-01-02'
  }, {
    id: '3',
    title: 'Movie 3',
    timeAdded: '2022-01-03'
  } // Add more movies as needed
  ]);

  const sortMovies = order => {
    const sortedMovies = [...movies].sort((a, b) => {
      if (order === 'desc') {
        return new Date(b.timeAdded) - new Date(a.timeAdded);
      } else {
        return new Date(a.timeAdded) - new Date(b.timeAdded);
      }
    });
    setMovies(sortedMovies);
    setSortOrder(order);
  };

  const searchMovies = text => {
    setSearchText(text); // Implement search logic here
  };

  return <SafeAreaView style={_styles.qLJeUKLt}>
      <View style={_styles.CMCeIfgv}>
        <TextInput style={_styles.jzMLiPtw} onChangeText={text => searchMovies(text)} value={searchText} placeholder="Search movies..." />
        <View style={_styles.CWBffPfJ}>
          <TouchableOpacity onPress={() => sortMovies('asc')}>
            <Text style={{
            color: sortOrder === 'asc' ? 'blue' : 'black'
          }}>Oldest First</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => sortMovies('desc')}>
            <Text style={{
            color: sortOrder === 'desc' ? 'blue' : 'black'
          }}>Newest First</Text>
          </TouchableOpacity>
        </View>
        <FlatList data={movies} keyExtractor={item => item.id} renderItem={({
        item
      }) => <View style={_styles.nVpyBjmy}>
              <Image style={_styles.pyVrBNIW} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
              <View>
                <Text style={_styles.zbNqCLCw}>{item.title}</Text>
                <Text style={_styles.PdLyCOOP}>{item.timeAdded}</Text>
              </View>
            </View>} />
      </View>
    </SafeAreaView>;
};

export default SearchScreen;

const _styles = StyleSheet.create({
  qLJeUKLt: {
    flex: 1,
    backgroundColor: "#fff"
  },
  CMCeIfgv: {
    padding: 20
  },
  jzMLiPtw: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20
  },
  CWBffPfJ: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  nVpyBjmy: {
    flexDirection: "row",
    marginBottom: 20
  },
  pyVrBNIW: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  zbNqCLCw: {
    fontSize: 18
  },
  PdLyCOOP: {
    color: "gray"
  }
});