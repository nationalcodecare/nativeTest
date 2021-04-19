import React from 'react';

import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const NavButton = ({ image, buttonText }) => {
  return (
    <Pressable style={styles.navButton}>
      <Image style={styles.buttonImage} source={image} />
      <Text style={styles.navButtonText}>{buttonText}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  navButton: {
    flex: 1,
    alignItems: 'center',
  },
  buttonImage: {
    width: 24,
    height: 24,
    marginBottom: 1,
  },
  navButtonText: {
    fontSize: 12,
  },
});

export default NavButton;
