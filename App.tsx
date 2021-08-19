import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
// import { NativeRouter, Route, Link } from "react-router-native";

import Home from './src/Home/Home'
const {height} = Dimensions.get('screen');

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Home/>
        <Text>Hello React Native Web!!!</Text>
      </View>
    </View>
  );   
};

const styles = StyleSheet.create({
  container: {
    height,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;