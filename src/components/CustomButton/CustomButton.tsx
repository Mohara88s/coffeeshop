import { TouchableOpacity, Text } from 'react-native';
import { CustomButtonProps } from './CustomButton.types.ts';
import { styles } from './CustomButton.styles.ts';

export const CustomButton = ({
  title,
  onPress,
  style,
  icon,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style]}
      activeOpacity={0.6}
    >
      {icon && icon}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
