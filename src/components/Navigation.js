import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import NavButton from './NavButton';

const Navigation = () => {
  return (
    <View style={styles.container}>
      <NavButton image={require('../assets/wear.png')} buttonText={'Wearables'} />
      <NavButton image={require('../assets/profile.png')} buttonText={'Profile'} />
      <NavButton image={require('../assets/helpp.png')} buttonText={'Help'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 100,
    width: '100%',
    paddingBottom: 0,
  },
});
export default Navigation;
