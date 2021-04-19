import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Card from './Card';

const CarouselComponent = ({ width, products, setActiveIndex }) => {
  const renderItems = ({ item, index }) => {
    return (
      <View
        style={{
          flex: 1,
          marginTop: 85,
        }}
      >
        <Card image={item.image} title={item.cardTitle} text={item.cardText} isCard={item.isCard} />
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View>
        <Carousel
          layout={'default'}
          inactiveSlideOpacity={1}
          inactiveSlideScale={0.85}
          ref={ref => (carousel = ref)}
          data={products}
          sliderWidth={width}
          itemWidth={248}
          renderItem={renderItems}
          onSnapToItem={index => setActiveIndex(index)}
        />
      </View>
    </SafeAreaView>
  );
};

export default CarouselComponent;
