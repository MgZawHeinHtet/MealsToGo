import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View ,StatusBar} from "react-native";

const isAndroid = Platform.OS === 'android';
export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text>Search</Text>
        </View>
        <View style={styles.list}>
          <Text>Menu</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style='auto'/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop : isAndroid ? StatusBar.currentHeight : ''
  },
  search: {
    padding: 20,
    backgroundColor: "green",
  },
  list: {
    flex: 1,
    padding: 20,
    backgroundColor: "blue",
  },
});
