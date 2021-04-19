import React, { useState, useEffect } from 'react';
import { Dimensions, ImageBackground, StyleSheet, View, StatusBar } from 'react-native';

import { Pagination } from 'react-native-snap-carousel';
import Header from './src/components/Header';
import Navigation from './src/components/Navigation';
import * as Font from 'expo-font';
import CarouselComponent from './src/components/CarouselComponent';

export default function App() {
  const { width, height } = Dimensions.get('window');
  const [activeIndex, setActiveIndex] = useState(0);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const customFonts = {
    'Roboto-Regular': require('./src/assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./src/assets/fonts/Roboto/Roboto-Bold.ttf'),
  };

  const loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  };

  useEffect(() => {
    try {
      loadFontsAsync();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [products, setProducts] = useState([
    {
      image: require('./src/assets/rock1.png'),
      cardTitle: 'Moonstone Keychain',
      cardText: 'Choosing the Best Gemstone for Your Necklace and Jewelry',
    },
    {
      image: require('./src/assets/rock3.png'),
      cardTitle: 'Sapphire Keychain',
      cardText: 'Choosing the Best Gemstone for Your Necklace and Jewelry',
    },
  ]);

  const addLastCard = () => {
    setProducts([
      ...products,
      {
        image: null,
        isCard: false,
        cardTitle: 'Add a Wearable',
        cardText:
          "Don't See One You Like? Choosing the Best Gemstone for Your Necklace and Jewelry",
      },
    ]);
  };

  useEffect(() => {
    if (products.find(el => el.isCard === false)) {
      return;
    } else {
      addLastCard();
    }
  }, [products]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    image: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    header: {
      flex: 1,
      maxHeight: 150,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    pagination: {
      margin: -30,
    },
  });

  return (
    fontsLoaded && (
      <View style={styles.container}>
        <StatusBar hidden />
        <ImageBackground source={require('./src/assets/GroupG.png')} style={styles.image}>
          <View style={styles.header}>
            <Header
              imageUrl={require('./src/assets/pp.png')}
              userName={'Lottie Curtis'}
              products={products}
            />
          </View>
          <CarouselComponent width={width} products={products} setActiveIndex={setActiveIndex} />
          <View style={styles.pagination}>
            <Pagination
              activeDotIndex={activeIndex}
              dotsLength={products.length}
              dotStyle={{
                width: 8,
                height: 8,
                borderRadius: 5,
                marginHorizontal: 2,
                backgroundColor: '#424A93',
              }}
              inactiveDotScale={1}
            />
          </View>
          <Navigation />
        </ImageBackground>
      </View>
    )
  );
}
