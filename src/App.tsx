import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import { Content } from './components/Content';
import { Header } from './components/Header';
import {HeaderImage} from './components/HeaderImage';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <HeaderImage />
      <ScrollView>
        <Content/>
      </ScrollView>
      <Header/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
