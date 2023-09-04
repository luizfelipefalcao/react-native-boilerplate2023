import React from 'react';
import {
  SafeAreaView, StyleSheet, Text, View,
} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{ backgroundColor: '#eaeaea' }}>
      <View style={styles.container}>
        <Text style={styles.text}>React Native</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eaeaea',
  },
  text: {
    fontSize: 30,
  },
});

export default App;
