import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.moziBox}>
          <Text style={styles.Text}>
            オイラはトラってんだ！てやんでいっ！！
          </Text>
          <Text style={styles.subText}>オイラの名はバディ！</Text>
        </View>
        <View style={styles.imageBox}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri: "https://picsum.photos/200/300", 
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  box: {
    height: 100,
    width: '100%',
    borderColor: 'lightblue',
    borderWidth: 1,
    flexDirection: "row"
  },

  moziBox: { 
    flex: 1,
    backgroundColor: "steelblue",
    padding: 16,
    justifyContent: "space-between",
  },

  imageBox: {
    width: 100,
    backgroundColor: "powderblue",
  },

  Text: {
    fontsize:16,
  },

  subText: {
    fontsize: 8,
    color: "red",
  },
});
