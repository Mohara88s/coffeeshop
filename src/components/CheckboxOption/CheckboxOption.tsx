import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { CheckboxOptionProps } from './CheckboxOption.types.ts';
import Icon from 'react-native-vector-icons/Octicons';
import { styles } from './CheckboxOption.styles.ts';

export const CheckboxOption = ({
  title,
  selected,
  onPress,
}: CheckboxOptionProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={[styles.box, selected && styles.boxSelected]}>
        {selected && <Icon name="check" size={10} color="#fff" />}
      </View>
      <Text style={[styles.text, selected && styles.textSelected]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
