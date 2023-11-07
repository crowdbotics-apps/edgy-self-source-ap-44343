import React from 'react';
import { SafeAreaView, Text, Image, Button, StyleSheet } from 'react-native';

const MovieDetailsScreen = () => {
  const movie = {
    title: 'Movie Title',
    keywords: ['Keyword1', 'Keyword2', 'Keyword3'],
    actors: ['Actor1', 'Actor2', 'Actor3'],
    review: 'This is a great movie. Highly recommended!',
    purchaseLink: 'https://www.example.com'
  };
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.subTitle}>Keywords</Text>
      <Text style={styles.text}>{movie.keywords.join(', ')}</Text>
      <Text style={styles.subTitle}>Actors</Text>
      <Text style={styles.text}>{movie.actors.join(', ')}</Text>
      <Text style={styles.subTitle}>Review</Text>
      <Text style={styles.text}>{movie.review}</Text>
      <Button title="Purchase" onPress={() => Linking.openURL(movie.purchaseLink)} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10
  },
  text: {
    fontSize: 16
  }
});
export default MovieDetailsScreen;