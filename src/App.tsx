import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {HeaderImage} from './components/HeaderImage';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderImage />
      <Text>Teste</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
