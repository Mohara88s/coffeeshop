import { ViewStyle } from 'react-native';

export interface CheckboxOptionProps {
  title: string;
  selected: boolean;
  onPress: () => void;
  style?: ViewStyle;
}
