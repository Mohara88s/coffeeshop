import React, { useEffect, useRef, useState } from 'react';
import { View, Image, Dimensions, FlatList } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolateColor,
  SharedValue,
} from 'react-native-reanimated';
import { styles } from './Hero.styles';

const { width } = Dimensions.get('window');

const images = [
  'https://www.diegocoquillat.com/wp-content/uploads/2021/12/Hosteleria-Burnout-.jpg',
  'https://coffeebusiness.com/wp-content/uploads/2019/08/14tenents-pt2.jpg',
  'https://images.stockcake.com/public/8/6/d/86d4659b-fb86-4bf5-abd2-ec6b7ed145f2/cozy-coffee-shop-stockcake.jpg',
];

const Hero = () => {
  const scrollX = useSharedValue(0);
  const flatListRef = useRef<FlatList>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = activeIdx === images.length - 1 ? 0 : activeIdx + 1;

      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });

      setActiveIdx(nextIndex);
    }, 4000);
    return () => clearTimeout(timer);
  }, [activeIdx]); // Таймер перезапуститься кожного разу, коли зміниться слайд

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollX.value = event.contentOffset.x;
    },
    onMomentumEnd: event => {
      // Якщо користувач гортає вручну, оновлюємо стан, щоб таймер знав де ми
      const newIndex = Math.round(event.contentOffset.x / width);
      if (activeIdx !== newIndex) {
        setActiveIdx(newIndex);
      }
    },
  });

  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        data={images}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        decelerationRate="normal"
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={[styles.image, { width }]} />
        )}
      />

      <View style={styles.pagination}>
        {images.map((_, index) => (
          <Dash key={index} index={index} scrollX={scrollX} />
        ))}
      </View>
    </View>
  );
};

const Dash = ({
  index,
  scrollX,
}: {
  index: number;
  scrollX: SharedValue<number>;
}) => {
  const animatedDashStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
    ];

    const backgroundColor = interpolateColor(scrollX.value, inputRange, [
      '#1f2024',
      '#006ffd',
      '#1f2024',
    ]);

    return {
      backgroundColor,
    };
  });

  return <Animated.View style={[styles.dot, animatedDashStyle]} />;
};

export default Hero;
