import { TouchableOpacity } from 'react-native';
import { BackButtonProps } from './BackButton.types.ts';
import Icon from 'react-native-vector-icons/Octicons';

import { styles } from './BackButton.styles.ts';

export const BackButton = ({ onPress, style, iconName }: BackButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style]}
      activeOpacity={0.6}
    >
      <Icon
        name={iconName ? iconName : 'chevron-left'}
        size={20}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};
