import { ViewStyle } from 'react-native';

export interface OptionButtonProps {
  title: string;
  onPress: () => void;
  selected: boolean;
  style?: ViewStyle;
  icon?: React.ReactNode;
}
