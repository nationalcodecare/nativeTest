import React from 'react';
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';

const Card = ({ image, title, text, isCard = true }) => {
  const styles = StyleSheet.create({
    container: {
      width: 248,
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: '#fff',
      borderRadius: 20,
      elevation: 17,
      maxHeight: 350,
      minHeight: 350,
      paddingVertical: isCard ? 0 : 30,
    },
    cardTitle: {
      fontSize: 25,
      maxWidth: 200,
      textAlign: 'center',
      marginTop: 30,
      color: '#4E5B76',
      fontFamily: 'Roboto-Bold',
    },
    cardText: {
      fontSize: 14,
      maxWidth: 165,
      color: '#A0A9B8',
      textAlign: 'center',
      fontFamily: 'Roboto-Regular',
    },
    cardImage: {
      width: '100%',
      position: 'absolute',
      top: '0%',
      transform: [{ translateY: -90 }],
    },
    cardButton: {
      backgroundColor: '#303371',
      paddingHorizontal: 37,
      paddingVertical: 10,
      borderRadius: 19,
    },
    cartButtonText: {
      color: 'white',
      fontSize: 14,
      fontFamily: 'Roboto-Regular',
    },
    newCardButton: {
      position: 'absolute',
      top: 15,
      left: 0,
      transform: [{ translateX: 248 / 2 - 30 }],
    },
    addNewCardButton: {
      width: 120,
      height: 120,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardText}>{text}</Text>
      <Pressable style={isCard ? styles.cardButton : styles.newCardButton}>
        <Text style={isCard ? styles.cartButtonText : styles.addNewCardButton}>
          {isCard ? 'View' : <Image source={require('../assets/addIcon.png')} />}
        </Text>
      </Pressable>
      {isCard && <Image style={styles.cardImage} source={image} />}
    </View>
  );
};

export default Card;
