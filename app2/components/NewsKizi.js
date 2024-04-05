import { StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const NewsKizi = ({imageuri, title, subtext}) =>{
    return (
      <View style={styles.box}>
        <View style={styles.moziBox}>
          <Text style={styles.mainText}>{title}</Text>
          <Text style={styles.subText}>{subtext}</Text>
        </View>
        <View style={styles.imageBox}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: imageuri}}
          />
        </View>
      </View>
    );
}

export default NewsKizi;

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: '100%',
    borderColor: 'lightblue',
    borderWidth: 1,
    flexDirection: "row"
  },

  moziBox: { 
    flex: 1,
    backgroundColor: "wheat",
    padding: 16,
    justifyContent: "space-between",
  },

  imageBox: {
    width: 100,
    backgroundColor: "lightyellow",
  },

  mainText: {
    fontSize: 16,
  },

  subText: {
    fontSize: 8,
    color: "red",
  },
});
