import { TouchableOpacity, Text } from 'react-native';
import { CustomButtonProps } from './CustomButton.types.ts';
import { styles } from './CustomButton.styles.ts';

export const CustomButton = ({
  title,
  onPress,
  style,
  icon,
  disabled,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style, disabled && styles.disabledContainer]}
      activeOpacity={0.6}
      disabled={disabled}
    >
      {icon && icon}
      <Text style={[styles.text, disabled && styles.disabledText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
