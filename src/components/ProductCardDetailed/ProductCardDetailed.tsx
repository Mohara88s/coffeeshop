import React, { useState } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { ProductCardDetailedProps } from './ProductCardDetailed.types.ts';
import { CustomButton } from '../CustomButton/CustomButton.tsx';
import { OptionButton } from '../OptionButton/OptionButton.tsx';
import { CheckboxOption } from '../CheckboxOption/CheckboxOption.tsx';
import Icon from 'react-native-vector-icons/Octicons';
import { styles } from './ProductCardDetailed.styles.ts';

export const ProductCardDetailed = ({
  id,
  title,
  price,
  imageUrl,
  info,
  sizes,
  options,
}: ProductCardDetailedProps) => {
  const [selectedSize, setSelectedSize] = useState<string>(sizes[0]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(options);

  const toggleOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.cardImage}
        resizeMode="cover"
      />
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity onPress={() => {}} activeOpacity={0.8}>
            <Icon name="heart" size={20} color="#2f3036" />
          </TouchableOpacity>
        </View>
        <Text style={styles.price}>€ {price.toFixed(2)}</Text>
        <Text style={styles.info}>{info}</Text>

        <Text style={styles.sizesTitle}>Size</Text>
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
          icon={<Icon name="plus" size={12} color="white" />}
        />
      </View>
    </View>
  );
};
