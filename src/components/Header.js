import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Avatar from './Avatar';

const Header = ({ userName, products, imageUrl }) => {
  return (
    <View style={styles.wrapper}>
      <Avatar imageUrl={imageUrl} />
      <Text style={styles.userName}>{userName}</Text>
      <Text style={styles.userTitle}>{`You have ${products.length - 1} Products`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 30,
    maxHeight: 128,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
  },
  userTitle: {
    backgroundColor: 'white',
    paddingHorizontal: 21,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
});

export default Header;
