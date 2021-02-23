import React from 'react';
import {StyleSheet} from 'react-native';
import HeaderBar from '../components/Header/HeaderBar';
import {SafeAreaView} from 'react-native-safe-area-context';

const Cart = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar goBack={() => navigation.goBack()} />

    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
});
