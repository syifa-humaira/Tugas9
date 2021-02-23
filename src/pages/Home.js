import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SearchBar from '../components/Home/SearchBar';
import Card from '../components/Home/Card';
import {SafeAreaView} from 'react-native-safe-area-context';

const data = ['T-Shirt'];

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
      />
      <View style={styles.listcardTop}>
        <Text style={styles.titleCatalogue}>Product</Text>
        <View style={styles.listcard}>
          {data.map((e) => {
            return (
              <Card onPress={() => navigation.navigate('Item')} title={e} />
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 150,
  },
  titleCatalogue: {
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 16,
  },
  titlecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
