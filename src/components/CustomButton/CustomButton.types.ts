import { ViewStyle } from 'react-native';

export interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  icon?: React.ReactNode;
  disabled?: boolean;
}
