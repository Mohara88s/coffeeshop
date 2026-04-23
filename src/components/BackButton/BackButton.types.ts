import { ViewStyle } from 'react-native';

export interface BackButtonProps {
  onPress: () => void;
  iconName?: string;
  style?: ViewStyle;
}
