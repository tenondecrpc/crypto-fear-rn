import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FearImage = () => {
  const styles = StyleSheet.create({
    image: {
      width: windowWidth,
      height: windowHeight,
      resizeMode: 'contain',
    },
  });
  return (
    <View style={styles.image}>
      <Image
        source={{uri: 'https://alternative.me/crypto/fear-and-greed-index.png'}}
        style={styles.image}
      />
    </View>
  );
};

export default FearImage;
