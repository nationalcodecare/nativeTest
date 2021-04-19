import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Avatar = ({ imageUrl }) => {
  return <Image style={styles.image} source={imageUrl} />;
};

const styles = StyleSheet.create({
  image: {
    height: 56,
    width: 56,
    borderRadius: 50,
  },
});

export default Avatar;
