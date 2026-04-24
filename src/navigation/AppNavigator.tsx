import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainTabs } from './MainTabs';
import { ProductDetailsScreen } from '../screens/ProductDetailsScreen/ProductDetailsScreen.tsx';
import { BucketScreen } from '../screens/BucketScreen/BucketScreen.tsx';
import { RootStackParamList } from './types.ts';
import { ROUTES } from '../constants/routes';
import { BackButton } from '../components/BackButton/BackButton.tsx';

const RootStack = createStackNavigator<RootStackParamList>();

const renderHeaderLeft = (navigation: any) => {
  if (Platform.OS === 'ios') return undefined;

  return <BackButton onPress={() => navigation.goBack()} />;
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
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
