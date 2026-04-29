import React from 'react';
import { Platform } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainTabs } from './MainTabs';
import { ProductDetailsScreen } from '../screens/ProductDetailsScreen/ProductDetailsScreen.tsx';
import { BucketScreen } from '../screens/BucketScreen/BucketScreen.tsx';
import { RootStackParamList } from './types.ts';
import { ROUTES } from '../constants/routes';
import { BackButton } from '../components/BackButton/BackButton.tsx';
import { useTheme } from '../context/themeContext/useTheme.ts';

const MyLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
    text: '#1f2024',
  },
};

const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#121212',
    text: '#FFFFFF',
  },
};

const RootStack = createStackNavigator<RootStackParamList>();

const renderHeaderLeft = (navigation: any) => {
  if (Platform.OS === 'ios') return undefined;

  return <BackButton onPress={() => navigation.goBack()} />;
};

export const AppNavigator = () => {
  const { theme } = useTheme();
  return (
    <NavigationContainer theme={theme === 'dark' ? MyDarkTheme : MyLightTheme}>
      <RootStack.Navigator
        initialRouteName={ROUTES.MainTabs}
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen name={ROUTES.MainTabs} component={MainTabs} />

        <RootStack.Screen
          name={ROUTES.ProductDetailsScreen}
          component={ProductDetailsScreen}
        />

        <RootStack.Screen
          name={ROUTES.BucketScreen}
          component={BucketScreen}
          options={({ navigation }) => ({
            title: 'Bucket',
            headerShown: true,
            headerTitleAlign: 'center',
            headerLeft: () => renderHeaderLeft(navigation),
          })}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
