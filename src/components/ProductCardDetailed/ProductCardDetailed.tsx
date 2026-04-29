import React, { useState } from 'react';
import { ScrollView, Image, Text, View, TouchableOpacity } from 'react-native';
import { ProductCardDetailedProps } from './ProductCardDetailed.types.ts';
import { CustomButton } from '../CustomButton/CustomButton.tsx';
import { OptionButton } from '../OptionButton/OptionButton.tsx';
import { CheckboxOption } from '../CheckboxOption/CheckboxOption.tsx';
import Icon from 'react-native-vector-icons/Octicons';
import { useTheme } from '@react-navigation/native';
import { styles } from './ProductCardDetailed.styles.ts';

export const ProductCardDetailed = ({
  title,
  price,
  image,
  description,
  sizes,
  options,
}: ProductCardDetailedProps) => {
  const [selectedSize, setSelectedSize] = useState<string>(sizes[0]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(options);

  const { colors } = useTheme();

  const toggleOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      bounces={false}
    >
      <Image
        source={{ uri: image }}
        style={styles.cardImage}
        resizeMode="cover"
      />
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
          <TouchableOpacity onPress={() => {}} activeOpacity={0.8}>
            <Icon name="heart" size={20} color="#2f3036" />
          </TouchableOpacity>
        </View>
        <Text style={[styles.price, { color: colors.text }]}>
          € {price.toFixed(2)}
        </Text>
        <Text style={[styles.info, { color: colors.text }]}>{description}</Text>

        <Text style={[styles.sizesTitle, { color: colors.text }]}>Size</Text>
        <View style={styles.sizes}>
          {sizes.map(size => (
            <OptionButton
              key={size}
              title={size}
              selected={selectedSize === size}
              onPress={() => setSelectedSize(size)}
            />
          ))}
        </View>

        <View style={styles.options}>
          {options.map(option => (
            <CheckboxOption
              key={option}
              title={option}
              selected={selectedOptions.includes(option)}
              onPress={() => toggleOption(option)}
            />
          ))}
        </View>

        <CustomButton
          title="Add to order"
          onPress={() => {}}
          style={styles.addToOrderButton}
          icon={<Icon name="plus" size={12} color="white" />}
        />
      </View>
    </ScrollView>
  );
};
