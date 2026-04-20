import { TouchableOpacity, Text } from 'react-native';
import { OptionButtonProps } from './OptionButton.types.ts';
import { styles } from './OptionButton.styles.ts';

export const OptionButton = ({
  title,
  onPress,
  style,
  icon,
  selected,
}: OptionButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, selected && styles.selectedContainer, style]}
      activeOpacity={0.6}
    >
      {icon && icon}
      <Text style={[styles.text, selected && styles.selectedText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
