import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { styles } from './SuccessfulOrderScreen.styles.ts';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constants/routes';
import { CustomButton } from '../../components/index.ts';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const SuccessfulOrderScreen = () => {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const navigation = useNavigation<any>();

  const handleGoHome = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: ROUTES.MainTabs }],
    });
  };

  return (
    <View style={[styles.container, { marginBottom: insets.bottom }]}>
      <Text style={[styles.сongratulations, { color: colors.text }]}>
        Congratulations on your purchase!
      </Text>
      <Text style={[styles.text, { color: colors.text }]}>
        Our courier will deliver the order within 30 minutes from the moment of
        payment.
      </Text>
      <CustomButton
        style={styles.goHomeBtn}
        title="GO HOME"
        onPress={handleGoHome}
      />
    </View>
  );
};
